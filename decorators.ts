@classDecorator
class Boat {

  /*   we can't get access to PROPERTIES with a decorator because 
    1) the decorator is executed before we create an instance
    2) properties are only initialized when instance of class created in the constructor function
    3) the only argument we get to our decorator is the prototype - in the target param */
  @testDecorator
  color: string = 'red'; //property


  @testDecorator
  get formattedColor(): string { //accessor
    return `This boats color is ${this.color}`;
  }


  @logError('Oops boat was sunk in ocean')
  pilot(): void { //method
    throw new Error();
    console.log('swish');
  }

  @logError('Oops boat was sunk in ocean')
  captain(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}


function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
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