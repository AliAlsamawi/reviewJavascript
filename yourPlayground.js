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

function sum(a, b){
return a + b
}

// function calculateFoodTotal(food, tip) {
//   tipPercentage = tip / 100
//   tipAmoutn = food * tipPercentage;
//   total = sum(food, tipAmoutn)
//   return total;
// }
// console.log(calculateFoodTotal(300, 20));

//ES6 m

function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100
  const tipAmount = food * tipPercentage;
  const total = sum(food, tipAmount)
  return total;
}
console.log(calculateFoodTotal(300, 20));

const sumOfArrow = (a, b) => a + b
console.log(sumOfArrow(10,10));