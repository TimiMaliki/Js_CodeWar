 /**
  * This section is for Date
  * you can add parameters to the Date()
  * e.g (2022, 9(which is September), 3,23,23,23)
  */

 let date1 = new Date();

 let myBirthDay = new Date("11,5,1999");

console.log(myBirthDay.toDateString());
console.log(myBirthDay.getDay());
console.log(myBirthDay.getMonth());
console.log(myBirthDay.getFullYear());
console.log(myBirthDay.getTime());


 /***
  * toDateString  help shows the date 
  * while toTime String return the value to a string
  * 
  * toUTCString shows the time in gmt or of the browser */ 
 console.log(date1.toDateString());

 //Date Methodd ---getDate method

 /**
  * THE getDate method gets the date of the month
  */
let date2 = new Date("9/28/2022");
console.log(date2.getDate());


//The Day method ---getDay() method
/**
 * the getDay methods gets the day of the week
 */
let myDay = date2.getDay();
 console.log(myDay);

 //The full year method ---getFullYear() method
/**
 * the getFullYear methods gets the year
 * so you can set the year with the .setYear
 */
 date2.setYear(1999);

let myFullYear = date2.getFullYear();
console.log(myFullYear)

/** A program that get the millsecond of a time */

let start = new Date();
 doSomething();

let end = new Date();

let theDifference = end.getTime() - start.getTime();

console.log(theDifference);

function doSomething(){
   for( i = 0; i < 100000 ; i++){

   }
};


