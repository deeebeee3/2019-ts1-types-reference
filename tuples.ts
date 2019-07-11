const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

//creating the idea of a tuple we can use in application - creating a brand new type
//type alias
type Drink = [string, boolean, number];

//with tuples - order is important - tuple represents an item / thing
const pepsi: [string, boolean, number] = ['brown', true, 40];

pepsi[0] = 40;

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//what does carSpecs represent? not clear when using tuples
const carSpecs: [number, number] = [400, 3354];

//use an object to model something instead of tuple
const carStats = {
  horsepower: 400,
  weight: 3354
};
