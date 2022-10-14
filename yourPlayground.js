// console.log('hello world')

// youName = 'ali'
// console.log(youName)

//operators
//USER INPUT
//user input

//math methods
// Math.floor(rounds down)
// Math.ceil(round up)
// Math.random(random number)

// variable(var, let, const)

// let weather = prompt("what's the weather")
// if (weather == 'rain'){
//   console.log('get your umbrella ')
// } else {
//   console.log('get you sun glasses')
// }
//  functions
// function sayMyName(){
//   console.log('ali')
// }
// sayMyName('ali')

// function sayMyName2(name){
//   console.log(name)
// }
// sayMyName2('ali2')

//this function takes one argument and logs your name into the console

// function greeting(name){
//   greet = `hi ${name}, nice to meet you!`
//   console.log(greet)
// }
// greeting('ali a')

// function sum(a, b){
// return a + b
// }

// function calculateFoodTotal(food, tip) {
//   tipPercentage = tip / 100
//   tipAmoutn = food * tipPercentage;
//   total = sum(food, tipAmoutn)
//   return total;
// }
// console.log(calculateFoodTotal(300, 20));

//ES6 m

// function calculateFoodTotal(food, tip) {
//   const tipPercentage = tip / 100
//   const tipAmount = food * tipPercentage;
//   const total = sum(food, tipAmount)
//   return total;
// }
// console.log(calculateFoodTotal(300, 20));

// const sumOfArrow = (a, b) => a + b
// console.log(sumOfArrow(10,10));

// const groceries = ['banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires'];

// console.log(groceries);

// arrays
//.push
// groceries.push("cookie", "bluebarries");
//slice

// console.log(groceries.slice(1,4));

//indexOf
// console.log(groceries.indexOf('orange'));

//.length

// console.log(groceries.length);

// objects
// dot notation

// const person = {
//   name: "ali",
//   shirt: "black",
// };
// console.log(person["name"]);
// console.log(person["shirt"]);

// //assign object
// person.phone = "12344555";
// console.log(person);

// const person2 = {
//   name: "name",
//   shirt: "black",
// };

// console.log(person2);

// const  = (name, shirt) => {

// };

// const interoducerter = (name, shirt) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     assets: 100000,
//     liabilities: 50000,
//     netWorth: function () {
//       return this.assets - this.liabilities;
//     },
//   };

//   const intro = `hi, my name is ${person.name} and the color of my shirt is ${
//     person.shirt
//   } and my networth is ${person.netWorth()}`;
//   return intro;
// };

// console.log(interoducerter("ali", "white"));
// console.log(interoducerter('ali2', 'white'));

// let coolNames = ['banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires','banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires','banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires','banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires','banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires','banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires','banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires','banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires','banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires','banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires','banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires','banana', 'apple', 'orange', 'pear', 'cookie', 'bluebaires',]
// console.log(fruits);
// for (let i = 0; i < cool.length; i++) {
//   console.log(i,cool[i]);

// }
// for (const coolName of coolNames){
//   console.log(coolName);
// }

// let numbers = [1,2,3,4,5,6]

// const double = (numbers) => {
//   let results = []
//   for (number of numbers){
//     results.push(number * 2)
//   }
//     return results
// }
// console.log(double([1,2,3,4,5,6]))

// const letterCounter = () => {
//   let result = 0;
  
//   for (const index in phrase) {
//     console.log(Number(index) + 1);
//     result = Number(index) + 1;
//   }
//   return { result };
// };

// const phrase = prompt('write your phrase')

// console.log(letterCounter(phrase));

const letterCounter = () => {
  
  return { result: phrase.length };
};

const phrase = prompt('write your phrase')

console.log(letterCounter(phrase));