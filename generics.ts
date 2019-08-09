class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<number>([1, 2, 3]);
new ArrayOfAnything<string>(['a', 'b', 'c']);

//type inference, hover over arr - ts will figure out that <T> must be string
const arr = new ArrayOfAnything(['a', 'b', 'c']);

//-----------Example of generics with functions-----------

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

//type inference, hover over printAnything - ts will figure out that <T> must be string
printAnything(['a', 'b', 'c']);

//-----------Generic constraints-----------

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

//generic constraint - limit the types we can pass in for <T>
//the type we pass in must have all the properties that Printable has - i.e. the print() method
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

//number is not assignable to type Printable - in other words number does not have print() method
printHousesOrCars([1, 2, 3, 4]);

//pass in an array with a house and a car - no errors here, because house and car have print() method on them
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);

printHousesOrCars<House | Car>([new House(), new Car()]);
