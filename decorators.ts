class Boat {

  @testDecorator
  color: string = 'red'; //property

  get formattedColor(): string { //accessor
    return `This boats color is ${this.color}`;
  }

  @logError('Oops boat was sunk in ocean')
  pilot(): void { //method
    throw new Error();
    console.log('swish');
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
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

//get at a function and wrap it with some additional functionality...