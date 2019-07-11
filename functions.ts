const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

//never reaches the end of function (but code should not be written this way)
const throwError = (message: string): never => {
  throw new Error(message);
};

//better way of doing the above
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const throwError3 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

//---------------------------------------------

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

//ES2015 destructuring
const logWeatherES2015 = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

//ES2015 destructuring with typescript
const logWeatherDestructured = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeatherDestructured(todaysWeather);
