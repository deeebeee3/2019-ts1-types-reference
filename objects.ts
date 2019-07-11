const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  //ES2015 syntax for defining a method inside an object
  setAge(newAge: number): void {
    this.age = newAge;
  },
  //Old syntax
  setAge2: function(newAge: number): void {
    this.age = newAge;
  }
};

const age1 = profile.age;

//examples of destructing
const { age }: { age: number } = profile;

//const { age, name }: { age: number; name: string } = profile;

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
