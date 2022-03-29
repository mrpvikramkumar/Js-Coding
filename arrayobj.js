let users = [
  {
    name: "Vikram",
    id: 9,
    address: {
      city: "Hyd",
      country: "India",
    },
  },
  {
    name: "Rinky",
    id: 13,
    address: {
      city: "Chennai",
      country: "India",
    },
  },
  {
    name: "Sindhu",
    id: 12,
    address: {
      city: "Hyd",
      country: "India",
    },
  },
];

let res = users.map((obj) => {
  let add = Object.assign({}, obj.address);
  delete obj.address;
  return Object.assign(obj, add);
});

console.log(res);
