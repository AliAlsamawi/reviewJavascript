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

// const letterCounter = () => {

//   return { result: phrase.length };
// };

// // const phrase = prompt('write your phrase')

// console.log(letterCounter(phrase));

// const sumArray = (numbers) => {
//   let result = 0;
//   for (const number of numbers) {
//     // console.log(number);
//     result = result + number;
//   }

//   return { result };
// };

// const nums = [1, 2, 3, 4];
// console.log(sumArray(nums));

// const max = (numbers) => {
//   let result = numbers[0];

//   for (const number of numbers) {
//     console.log(number);
//     if (number > result) {
//       result = number;
//     }
//   }

//   return { result };
// };
// console.log(max([1, 2, 3, 4, 5,3,4,5,4,2,3,9]));

// console.log(phrase);
//make a frequencey object {}
//loop through all the letter and check if already their
//if it exists then incremenet the value by +1
//otherwise set the value to one
// const userInput  = prompt('type something man, come on')

// const letterFrequency = (phrase) => {
//   let frequency = {};
//   for (letter of phrase) {
//     if (letter in frequency) {
//       frequency[letter] += 1
//     } else {
//       frequency[letter] = 1;
//     }
//   }
//   return frequency;
// };
// console.log(letterFrequency(userInput));

// const wordFrequency = (phrase) => {
//   let frequencey = {};
//   const words = phrase.split(" ");
//   return letterFrequency(words)
// };
// console.log(wordFrequency(userInput))

// console.log(letterFrequency("haha"));
// wordFrequency
// const wordFrequency = (phrase) => {
//   let frequencey = {};
//   words = phrase.split(" ");
//   for (let word of words) {
//     // console.log(word);
//     if (word in frequencey) {
//       frequencey[word] += 1;
//     } else {
//       frequencey[word] = 1
//     }
//   }
// for (word of phrase) {
// }

//   return frequencey;
// };

// console.log(wordFrequency("lol this is not fun lol"));
//map
// const doubleMap = (numbers)=>{
//   return numbers.map(number => number * 2)
// }
// console.log(doubleMap([1,2,3,4,5,6]))

// filter([1,2,3,4,5,6], 3)

// const filter = (numbers, greaterThan) => {
//   let result = []
//   for (let number of numbers){
//     if (number > greaterThan){
//       result.push(number)
//     }
//   }
//   return result
// };
// console.log(filter([1,2,3,4,5,6], 3));

// const nums = [1,2,3,4,5,6]

// console.log(nums.filter(num => num > 3 || num < 2))
// personName  = 'ali'
// yourPlayground.innerHTML= `<h1>${personName}</h1>`

// const sumArrayWithReduce = (numbers) => {};
// const nums = [1, 2, 3];
// const result = nums.reduce((prev, curr) => prev + curr);
// console.log(result);
// 1= rainy, -1 = sunny, 0 = overcast 
const weartherScore = (weather)=>{
  if(weather == 1){
    return 'rainy'
  }else if(weather == -1){
    return "sunny"
  }else{
    return 'overcast'
  }
}
console.log(weartherScore());
