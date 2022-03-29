// console.log(name);
// var name = "vikram";

// hello();

// function hello() {
//   console.log("Hey");
// }

// let a = 2;
// let b = 3;

// if (a < b) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let money = "kiran bro";

// switch ("emo") {
//   case "eestadu":
//     console.log("success");
//     break;
//   case "eevadu":
//     console.log("ayipayee");
//     break;
//   case "chepalem":
//     console.log("bhajana cheyali iga");
//     break;
//   default:
//     console.log("iga inthe");
// }

// let marks = 39;

// let result = marks >= 40 ? "passed with distinction" : "failed";

// if (result <= 39) {
//   console.log("prepare again");
// }
// console.log(`you ${result} `);

// let num = 0;
// let result1 = num >= 0 ? (num == 0 ? "zero" : "postive") : "negative";
// console.log(result1);

// let arr = [1, 2, 3, 4];

// for (let i = 0; i <= arr.length; i++) {
//   console.log(arr);
// }

// let i = 1,
//   n = 5;

// while (i <= n) {
//   console.log(i);
//   i += 1;
// }

// let j = 1;
// const s = 5;

// do {
//   console.log(j);
//   j++;
// } while (j <= n);

// console.log(this);

// function hello() {
//   console.log("Hello World");
// }

// hello();

// function add(num1, num2) {
//   let total = num1 + num2;
//   return total;
// }

// alert(add(10, 20));

// function getSum(num1, num2) {
//   var total1 = num1 + num2;
//   return total1;
// }

// alert(getSum(6, 20));

// function add1(a) {
//   console.log(a);
//   a++;
//   if (a == 5) {
//     add1(a);
//   }
// }

// add1(2);

// let reg = /[A-Z]/;
// let str = "hi there ,Fine";

// let index = str.search(reg);

// console.log(index);

// let title =
//   "               Dell Apple Lenovo Hp Asus   Toshibha                   eer   ";
// console.log(title.trimEnd());

// let str1 = "12345".padEnd(8, "12");
// console.log(str1);

// const str2 = "abc".padEnd(8, "def");
// console.log(str2);

let str = "JavaScript String split() avav ahvv qdjsdavkdvldv v vfdvzkVDSlv";
let substrings = str.split(" ");

console.log(substrings);

{
  const num = [1, 11, 2, 22, 3, 33, 4, 44];

  const filterarr = (arr) => {
    return arr.filter((item) => item < 15);
  };

  console.log(filterarr(num));
}

{
  const num1 = [1, 11, 2, 22, 3, 33, 4, 44];

  const filterarr1 = (arr) => {
    let insideArr1 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 10) {
        insideArr1.push(arr[i]);
      }
    }
    return insideArr1;
  };

  console.log(filterarr1(num1));
}

console.log(2 * 3);

function say() {
  let message = "hi";
  function there() {
    console.log(message);
  }
  there();
}
say();

function say1(name, callback) {
  console.log("hi" + " " + name);
  callback();
}
function callme() {
  console.log("good morning");
}
say1("vikram", callme);
