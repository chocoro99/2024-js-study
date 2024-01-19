// alert("hi~");

console.log(5343323);
console.log("leee");

console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

// const 상수
const a = 5;
const b = 2;
const myName = "nico";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

// let

const c = 5;
const d = 2;
const myName2 = "nico";

console.log(c + d);
console.log(c * d);
console.log(c / d);
console.log("hello" + myName2);

myName2 = "nicolas";
console.log("youre new name is" + myName2);

// Boolean
const amIFat = false;
console.log(amIFat);

// null, undefined
let blank = null;
let something;
console.log(something, blank);

// array
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek[5]);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

// object
// const playerName = "nico";
// const playerPoints = 1123324;
// const playerHandsome = false;
// const playerFat = "little bit";

// const player = ["nico", 1212, false, "little bit"];

const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
player.fat = false;
console.log(player);
player.lastName = "potato";
console.log(player);
