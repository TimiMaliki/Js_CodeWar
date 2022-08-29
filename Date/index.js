 /**
  * This section is for Date
  * you can add parameters to the Date()
  * e.g (2022, 9(which is September), 3,43,43,23)
  */

 let date1 = new Date();
 /***
  * toDateString  help shows the date 
  * while toTime String return the value to a string
  * 
  * toUTCString shows the time in gmt or of the browser */ 
 console.log(date1.toDateString());

 //Date Methodd ---getDate method

 /**
  * THE getDaate method gets the date of the month
  */
let date2 = new Date("9/28/2022");
console.log(date2.getDate());

//The Day method ---getDay() method
/**
 * the getDay methods gets the day of the week
 */
let myDay = date2.getDay();
 console.log(myDay);



