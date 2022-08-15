//this section is for Numbers
let val = new Number(2);
console.log( typeof val)
// MAX_Value this is the largest possible number object javascript can work
let max = Number.MAX_VALUE;
console.log( max)
console.log( typeof max)
//console.log("max of the number :"+ val)

// Min_Value this is the smallest possible number object javascript can work
let min = Number.MIN_VALUE;
console.log(min)
console.log( typeof min)

// NaN ---Not a Number
 let notANumber = Number.NaN;
 console.log(notANumber);
 console.log( typeof notANumber);

 let dayOfMonth = 50;

 if( dayOfMonth < 1 || dayOfMonth > 31){
              dayOfMonth = Number.NaN
 }
 console.log("dayOfMonth must be between 1 and 31 :" + dayOfMonth)

  // Negative_infinity is a speacial numeric value which is less than a number

  let negInfinity = Number.NEGATIVE_INFINITY;
  console.log(negInfinity);