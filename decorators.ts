class Boat {

  //property
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops boat was sunk in ocean')
  //accessor
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor): void {
    const method = descriptor.value;

    descriptor.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    }
  }
}


new Boat().pilot();

//get at a function and wrap it with some additional functionality...