/**
 * This is Math section
 */

//Math Object

/***
 * @param(Number) PI
 * The  Math.PI
 */
const PI = Math.PI;
console.log(PI);
 let toDecimalPlace = PI.toFixed(2)
  console.log(toDecimalPlace)

  //Math method

  /***
 * @param(Number) min
 * The  Math.min
 * this gets the smallest or lowest value
 */
 
  let min = Math.min(0.5 , 1 ,2);
  console.log(min)

   /***
 * @param(Number) max
 * The  Math.max
 * this get the largest value
 */
    let max = Math.max(0.5 , 1 ,2);
    console.log(max)


      /***
 * @param(Number) power
 * The  Math.pow
 * this method raise the value power
 */
 let power = Math.pow(2,3)
 console.log(power)

  
      /***
 * @param(Number) random
 * The  Math.random
 * this method generates random numbers
 */
 let random = Math.random().toFixed(1) * 10
 console.log(random)

      /***
 * @param(Number) floor
 * The  Math.floor
 * this method get the integer  in the decimal
 */
 let floor = Math.floor(5.898)
 console.log(floor)

  
      /***
 * @param(Number) floor
 * The  Math.round
 * this method rounds up to the nearest whole number
 */
 let round = Math.round(5.898)
 console.log(round)

 /**
  * ### TASKS ###
  * 1 use the correct Math function to generate three random numbers, between 1-10.
  * Store each of these in variables named: num1, num2,num3. console log the variable
  *  
  * 2 find the largest of the three numbers by using the relevant Math method, store the value in a variable called max and console log max
  * to show the largest number
  */

 let num1 = Math.random().toFixed(1)  * 10;
 let num2 = Math.random().toFixed(1)  * 10;
 let num3 = Math.random().toFixed(1)  * 10;

let largest = Math.max(num1 ,num2 ,num3 );

console.log(largest)

/**
 * 
 * More Math Method
 * 
 */


     /***
 * @param(Number) ceil
 * The  Math.ceil
 * this method rounds up to the nearest whole number
 * eqaully behaves like math.round
 */
      let ceil = Math.ceil(5.898)
      console.log(ceil)


     /***
 * @param(Number) sqrt
 * The  Math.sqrt
 * this method gets the square root
 */
      let sqrt = Math.sqrt(49)
      console.log(sqrt)



     /***
 * @param(Number) abs
 * The  Math.abs
 * this method gets the absolute value of a number
 */
      let absolute = Math.abs(49)
      console.log(absolute)



     /***
 * @param(Number) sine
 * The  Math.sin
 * this method gets the absolute value of a number
 */
      let sine = Math.sin(30)
      console.log(sine)

      //This is an Euler's constant and the base of natural logarithms, approximately 2.718.

      let Euler = Math.E;
      console.log(Euler)

    /***
 * @param(Number) logTwo
 * The  Math.LN2
 * natural logarithm of 2
 */

    let logTwo = Math.LN2;
    console.log(logTwo)



    /***
 * @param(Number) logTen
 * The  Math.LN10
 * natural logarithm of 10
 */

    let logTen = Math.LN10;
    console.log(logTen)

   /***
 * @param(Number) logTwoE
 * The  Math.Log2E
 * It returns the base 2 logarithm of E which is approximately 1.442.
 */

   let logTwoE = Math.LOG2E;

   console.log(logTwoE);


      /***
 * @param(Number) logTenE
 * The  Math.Log210E
 * It returns the base 10 logarithm of E which is approximately 0.434.
 */
   
      let logTenE = Math.LOG10E

      //Math.sqrt1_2

      let squareroot1 = Math.SQRT1_2;
      console.log(squareroot1)

      //Math.sqrt2

      let squareroot2 = Math.SQRT2;

      console.log(squareroot2);

      /**
       * the acos
       * @param (number) acos
       */

      let acos1= Math.acos(1);
      console.log(acos1);
      let acosNegative1 = Math.acos(-1);
      console.log(acosNegative1);
      let acosZero = Math.acos(0);
      console.log(acosZero);


      // the acsine

      let asin = Math.asin(-1);

      console.log(asin);


    // the actan

    let atan1 = Math.atan(30)
    let atan2 = Math.atan(1)
    let atan3 = Math.atan(-1)
    let atan4 = Math.atan(0.5)

    console.log(atan1,atan2,atan3,atan4)




  