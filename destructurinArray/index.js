"use strict";

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function(starterIndex , mainIndex){
//        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   }
// }

// const arr = [2,3,4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// // console.log(a,b,c)

// const [x,y,z] = arr;

// console.log(x,y,z);

// let [main , ,secondary] = restaurant.categories
// console.log(main , secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

//  [main , secondary] = [secondary , main]

// const [starter ,mainCourse] = restaurant.order(2,0)

// console.log(starter,mainCourse)

// const nested = [2,3 ,[5,6]];

// // const [i,,j] = nested

// // console.log(i,j)

// const [i,,[j,k]] = nested

// console.log(i,j,k)

//desturing objects

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    mainIndex = 1,
    starterIndex = 1,
    time = `1:30`,
    address,
  }) {
    console.log(`order received! ${this.starterMenu[starterIndex]}
    , ${this.mainMenu[mainIndex]} will be delivered at ${address} ,exactly${time}... prompt`);
  },

  orderPasta: function(ing1,ing2,ing3){
   console.log(`here is your delicious pasta with ${ing1}
   ${ing2} and ${ing3}`)

  }

};

restaurant.orderDelivery({
  time: "22:00",
  address: "mile 50",
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, mainMenu } = restaurant;
// console.log(name, openingHours, mainMenu)

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName,tags,hours)

const { menu = [], starterMenu: starters = [] } = restaurant;

//Mutating variables

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 34 };

({ a, b } = obj);


// console.log(a, b);
//nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//spread operator

// const arr = [7, 8, 9];
// const badArr = [4, 5, 6, arr[0], arr[1], arr[2]];

// console.log(badArr);

// const betterArr = [4, 5, 6, ...arr];

// console.log(...betterArr);

// const newArr = [...restaurant.mainMenu, "ice-cream"];
// console.log(newArr);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays

// const menuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menuCopy);

// //iterates: arrays, strings, maps,sets, Not objects

// const str = 'Jonas';
// const letters = [...str, '' , 's.'];
// console.log(letters);
// console.log(...str)
// console.log('jonas')

//real-world example
// const ingredients = [prompt(`let\'s make a pasta!
// ingredient 1?`),

// prompt(`let\'s make a pasta!
// ingredient 2?`),

// prompt(`let\'s make a pasta!
// ingredient 3?`)

// ]

// restaurant.orderPasta(...ingredients)

//objects

const newRestuarant = {foundedIn:1998,
...restaurant, founder:'Timi'}

console.log(newRestuarant)

//Rest Pattern

// 1) Destructuring

//SPREAD, because on Right side of =

const arrSpread = [1,2, ...[3,4]]


//Rest, because on the left side of =
const [f,g, ...others] = [1,2,3,4,5]

console.log( f,g ,others)

const [pizza, ,risotto , ...otherFood] = [...restaurant.mainMenu,
...restaurant.starterMenu]

const {sat , ...weekDays} = restaurant.openingHours
console.log(weekDays)

//2) function
//Rest packed
const add = function(...numbers){
   let sum = 0
   for(let i = 0 ; i<numbers.length ; i++)
   sum += numbers[i]

console.log(sum)
}
add(2,3);
add(5,4,32,4,3)
add(2,1,2,3,4,5,5)

//spread unpack
const x = [1,2,3,4,4,5]
add(...x)


//short circuit
//they can use any data type, return any data type
//short-circuiting
//the or operator in a short circuiting means that if the
// the first operant is true then its true

// console.log(`----OR---- circuit`)
// console.log(3 || `jonas` )
// console.log('' || `jonas` )
// console.log( true || 0 )
// console.log( undefined || null )
// console.log(undefined || 0 || '' || null || 'Hello' || 23 )

// restaurant.numGuess = 23

// const guestOne = restaurant.numGuess ? restaurant.numGuess : 12

// console.log(guestOne)

// const guessTwo  = restaurant.numGuess || 12
// console.log(guessTwo)

// console.log(`----OR---- circuit`)

// console.log(`----AND---- circuit`)

// //the And operand is the exact opposite of the OR operand
// //which means that the AND operand return if the first value is false

// console.log(0 && 'jonas')
// console.log(7 && 'jonas')
// console.log("hello" && 23 && null && 'jonas')

// //practical example

// if(restaurant.orderPasta){
//    console.log(restaurant.orderPasta(`mushroom ,cake m`))
// }
// else{
//     console.log(`im not afraid`)
// }

//  restaurant.orderPasta && restaurant.orderPasta(`mushroom ,cake and coke`)

 //Nullish : works with null and undefined ,(NOT 0 or '')

 const canYouGuess = 0
 const guess = canYouGuess ??  19

 console.log(guess)

 //Logical Assignment Operators

 const rest1 = {
    name:'plazo',
    numGuest:0,
    // numGuest:10,
 }

 const rest2 = {
    owner:'Timi',
    networth:"40billion"
 }

 //OR LOGICAL ASSIGNMENT OPERATOR
 
//  rest1.numGuest = rest1.numGuest || 20
//  rest2.numGuest = rest2.numGuest || 10

//  rest1.numGuest ||= 20;
//  rest2.numGuest ||= 10;

//Nullish assignment operators

//  rest1.numGuest ??= 20;
//  rest2.numGuest  ??= 10;

 // AND logical operator
//  rest1.owner =  rest1.owner && 'you!';
//  rest2.owner =  rest2.owner && 'you!';

rest1.owner  &&=  'you!';
rest2.owner  &&= 'you!';


 console.log(rest1 ,rest2)
