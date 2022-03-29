//Object -> its a data structure which stores data in form of key value pair

/*
int color , 
let color ="white",
let model = "bmw"
let fueltype = "petrol"
let start = 
 
*/

let Car = {
  color: "white",
  name: "bmw",
  fuelType: "petrol",
  start: () => console.log("started"),
};

console.log(Car);

// let user ={
//     name:"vikram",
//     id:9
// }
// let user2 ={
//     name:"rinky",
//     id:10
// }

function createUser(userName, userId) {
  let user = {
    name: userName,
    id: userId,
  };
  return user;
} //factory function

class createUser3 {
  constructor(userName, userId) {
    //{}
    this.name = userName;
    this.id = userId;
  }

  getName() {
    console.log(this.name);
  }
}

let user = {};

user.name = "vikram";

let user1 = new createUser3("vikram", 7);

let user2 = new createUser3("rinky", 17);
console.log(user1, user2);

//["name","id","city"]
//["vikram","9","hyd"]

let user3 = {
  name: "vikram",
  id: 9,
  city: "hyd",
};
// [ [name,"vikram"] ,[id,"9"], [city,"hyd"] ];
let resArr = [];
for (let i in user3) {
  resArr.push([i, user3[i]]);
}

console.log(resArr);

//Object.entries

let resArr2 = Object.entries(user3);
console.log(resArr2);

//[] ->  user3.name

//C struct (structure )

//[2,3,4,5]
//Dear Stupid

// let result =[];
// for(let i in user3){
//   result.push(i);
// }
// console.log(result);
//

///Object.keys()

let userKeys = Object.keys(user3);
let userKeys2 = Object.values(user3);
console.log(userKeys2);

let users = {
  name: "vikram",
  id: 9,
};

let users2 = Object.assign({ city: "hyd" }, users, {
  ph: "6578",
  city: "chennai",
});

console.log(users2);
