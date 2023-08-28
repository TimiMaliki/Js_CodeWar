'use strict';


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
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
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
    order: function(starterIndex , mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
   },

orderDelivery:function({mainIndex=1,starterIndex=1,time=`1:30`,address}){

    console.log(`order received! ${this.starterMenu[starterIndex]}
    , ${this.mainMenu[mainIndex]} will be delivered at ${address} ,exactly${time}... prompt`)
    

}


  };

  restaurant.orderDelivery({
    time:'22:00',
    address:'mile 50',
    mainIndex :2,
    starterIndex:2

  })


  const {name, openingHours, mainMenu} = restaurant
// console.log(name, openingHours, mainMenu)

const {name:restaurantName , openingHours:hours ,
categories:tags } = restaurant 

// console.log(restaurantName,tags,hours)

const {menu = [], starterMenu:starters =[]} = restaurant

//Mutating variables

let a = 111
let b = 999
 
const obj = { a:23, b:7 , c:34};

({a , b} = obj);

console.log(a,b);
//nested objects

const {fri:{open:o,close:c}} = openingHours 
console.log(o,c)


//spread operator

const arr = [7,8,9];
const badArr = [4,5,6,arr[0],arr[1],arr[2]]

console.log(badArr)

const betterArr = [4,5,6, ...arr]

console.log(...betterArr)