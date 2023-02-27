// alert("hi");


// console.log(545454);

// console.log("lalalala");

// console.log(5+2);

// console.log(5*2);

// console.log(5/2);

// const a = 5;
// const b = 2;
// const myName = "nico";

// console.log(a+b);

// console.log(a*b);

// console.log(a/b);

// console.log("hello " + myName);

//// 2.3 const and let
// const a = 5;
// const b = 2;
// let myName = "nico";

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello " + myName);

// myName= "nicolas";

// console.log("your new name is " + myName);

//// // 2.4 booleans
// const amIFat = true;
// const amIThin = false;
// const value = null;
// let something;

// console.log(something);

////2.5 Arrays
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const daysOfWeek = [mon , tue , wed , thu , fri , sat , sun];

// const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];

// console.log(daysOfWeek);
// console.log(daysOfWeek);

// const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"];


// //get item from array
// console.log(daysOfWeek[5]);

// //add one more day to the array
// daysOfWeek.push("sun")
// console.log(daysOfWeek);

////2.6 Objects
// //방법 1
// const playerName = "nico";
// const playerPoints = "121212";
// const playerHansome = false;
// const playerFat = "little bit";

// //방법2
// const player = ["nico", 1212, false, "little bit"];

// //방법3
const player = {
    name: "nico",
    points: 10,
    fat: true
};

console.log(player);
console.log(player.name);

player.fat = false;
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);