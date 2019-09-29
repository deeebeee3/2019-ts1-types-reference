class Boat {

  //property
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError
  //accessor
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

//method
function logError(target: any, key: string, descriptor: PropertyDescriptor): void {
  const method = descriptor.value;

  descriptor.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Oops, Boat was sunk');
    }
  }
}


new Boat().pilot();


//get at a function and wrap it with some additional functionality...