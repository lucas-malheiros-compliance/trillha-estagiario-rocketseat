// import { sum, multiply } from "./calc.js"
// console.log(`4 + 6 =  ${sum(4, 6)}`);
// console.log(`4 x 6 =  ${multiply(4, 6)}`);
/*

// import * as calc from "./calc.js"
import nomeDefault, { multiply } from "./calc.js"

// console.log(`4 + 6 =  ${calc.sum(4, 6)}`);
console.log(`4 + 6 =  ${nomeDefault(4, 6)}`);
console.log(`4 x 6 =  ${multiply(4, 6)}`);
*/
/*
import { sumTwoNumbers, multiplyTwoNumbers } from "./calc.js"

console.log(`4 + 6 =  ${sumTwoNumbers(4, 6)}`);
console.log(`4 x 6 =  ${multiplyTwoNumbers(4, 6)}`);
*/
/*
import { sum as s, multiply as m } from "./calc.js"

console.log(`4 + 6 =  ${s(4, 6)}`);
console.log(`4 x 6 =  ${m(4, 6)}`);
*/
import { Calc } from "./calc.js"

let calc = new Calc()
console.log(`4 + 6 =  ${calc.sum(4, 6)}`);
console.log(`4 x 6 =  ${calc.multiply(4, 6)}`);
console.log(calc.name);
