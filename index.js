//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
//Q1
function filterIT(x) {
  return x >= 25;
}
const greaterThan25 = numbers.filter(filterIT);
console.log(greaterThan25);

//const accptable = budgets.filter(filterIT).map(sqIT);

//Q2

function DivBy5(x) {
  return !(x % 5); //return true if divisible by 5
}

const divisibleBy5 = numbers.filter(DivBy5);
console.log(divisibleBy5);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
//part 2 Q3

function sqIT(x) {
  return x * x;
}

const sqared = numbers.map(sqIT);
console.log(sqared);

//part 2 Q4
console.log("Q4");
function MultyBy2(x) {
  return x * 2;
}

const multiplied_by2 = numbers.map(MultyBy2);
console.log(multiplied_by2);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.



******************************************************************/
console.log("Q5");

// let budgets = [10, 100, 1, 100000];

function filterITGreaterthan20(x) {
  return x > 20;
}

const appov20 = numbers.filter(filterITGreaterthan20).map(sqIT);
console.log(appov20);

console.log("Q6");
//Filter the numbers that are divisible by 5 and then multiply each of them by 3.

function MultyBy3(x) {
  return x * 3;
}
const divBy5_multyBy3 = numbers.filter(DivBy5).map(MultyBy3);
console.log(divBy5_multyBy3);
