// // {
// //   const num = [1, 11, 2, 22, 3, 33, 4, 44];

// //   const filterarr = (arr) => {
// //     return arr.filter((item) => item < 15);
// //   };

// //   console.log(filterarr(num));
// // }

// // //pure function

// // function myFunction(a, b) {
// //   let c = 10;
// //   return a + b;
// // }

// // console.log(myFunction(1, 2));

// // //impure functions

// // let values = { a: 1 };

// // function impureFunc(items) {
// //   let b = 2;
// //   items.a = items.a + b + 2;
// //   return items.a;
// // }

// // let c = impureFunc(values);

// // console.log(c);

// // //mutuable data

// // {
// //   let arr = [1, 2, 3];
// //   arr.push(4, 5, 6);
// //   console.log(arr);
// // }

// // //regular

// // function hello() {
// //   console.log("Hello World");
// // }

// // hello();

// // function add(num1, num2) {
// //   let total = num1 + num2;
// //   return total;
// //   console.log(total);
// // }

// // add(1 + 1);

// // //recursive

// // function add1(a) {
// //   console.log(a);
// //   a++;
// //   if (a == 5) {
// //     add1(a);
// //   }
// // }

// // add1(4);

// // //anonmyous

// // let show = function () {
// //   console.log("anonmyous");
// // };
// // show();

// // (function () {
// //   console.log("anonmyous1");
// // })();

// // //arrow

// // let show1 = function () {
// //   console.log("arrow function");
// // };
// // show1();

// // let add2 = (a, b) => a + b;
// // console.log(add2(2, 3));

// //IIFE
function project() {
  console.log("a");
}

(function project() {
  console.log("b");
})();

project();

// //closure

// function say() {
//   let message = "hi";
//   function there() {
//     console.log(message);
//   }
//   there();
// }
// say();

// //higher -order

// let fun = function (num) {
//   return num * num;
// };

// let fun2 = function () {
//   return 2 * 2;
// };

// console.log(fun(fun2()));

// //call back function

// function say3(name, callback) {
//   console.log("hi" + " " + name);
//   callback();
// }
// function callme() {
//   console.log("I'm doing good");
// }
// say3("vikram", callme);

// //currying

// // function curry(f) {
// //   return function (a) {
// //     return function (b) {
// //       return function (c) {
// //         return function (d) {
// //           return f + a + b + c;
// //         };
// //       };
// //     };
// //   };
// // }

// let f1 = curry(1);
// let f2 = f1(2);
// let f3 = f2(3);
// let f4 = f3(4);

// let f5 = curry(1)(2)(3)(4);
// console.log(f5);
// console.log(f4);
