import 'reflect-metadata';

/* Notice how reflect-metadata is not assigned to any variable i.e. import something from 'reflect-medata'
When the package is imported it automatically adds a single variable to global scope.
That variable is... Reflect */

const plane = {
  color: 'red'
};

/* Attach metadata to plane object */
Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);

/* No metadata deisplayed... */
console.log(plane);

/* Get the metadata */
const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);

/* metadata for plane will be logged */
console.log(note);
console.log(height);

const car = {
  color: 'blue'
};

//add metadata to the cars color property
Reflect.defineMetadata('note', 'this car should be blue', car, 'color');
const carNote = Reflect.getMetadata('note', car, 'color');

console.log(carNote);


/* -----------metadata with CLasses------------- */

@printMetadata
class Train {
  color: string = 'red';

  @markFunction
  accelerate(): void {
    console.log('zoooom');
  }

  @markFunctionFactory('HI THERE')
  deccelerate(): void {
    console.log('duuuh');
  }
}

function markFunction(target: Train, key: string) {
  Reflect.defineMetadata('secret', '123', target, key)
}

function markFunctionFactory(secretInfo: string) {
  return function (target: Train, key: string) {
    Reflect.defineMetadata('secret2', secretInfo, target, key)
  }
}

const secret = Reflect.getMetadata('secret', Train.prototype, 'accelerate');
console.log(secret);

const secret2 = Reflect.getMetadata('secret2', Train.prototype, 'deccelerate');
console.log(secret2);


/* reference to constructor function of the Train class */
function printMetadata(target: typeof Train) {
  for (let key in target.prototype) {
    const secret2 = Reflect.getMetadata('secret2', target.prototype, key);
    if (secret2) {
      console.log(secret2);
    }
  }
}


