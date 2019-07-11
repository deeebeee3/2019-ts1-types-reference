const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [['a'], ['b'], ['c']];

const carsByMake2: string[][] = [];

//Help with inference when extracting values
const ford = carMakers[0];

const myCar = carMakers.pop();

//Prevent incompatible values
carMakers.push(100);

//Help with map - autocomplete of methods and values available to string
carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

//Flexible types
const importantDates: (Date | string)[] = [];

importantDates.push('2030-10-10');
importantDates.push(new Date());

importantDates.push(332);
