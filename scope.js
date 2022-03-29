// scope of a variable
// availability of variable in ur program

//block scope
//global scope

//local

let num;
let num3;

let num2 = 8;

//hoisitng - moves the declaration to the top  , only var gets hoisted
//var
{
  console.log(num); //
  let num = 9;
}
let num = 9;
console.log(num); //8
