//function myAge(name ,age){
    let displayName;
//
 //   displayName = name + " " + "is " + "" + "about to be " +  age +" "+ "old";
  //  console.log(displayName)
//}
//myAge("timi" ,27)

function sumUp( first,last){
    let full;
    full = first + last;
    return full;
}

 function secondFunction(){
    let see;
    see = sumUp('timi','maliki')
    console.log(secondFunction);
 }
 
/*function hypotenuse(a,b){
      function square(x)
      {
        return x*x; }
      Math.sqrt(square(a) + square(b));

};

function secondFunction(){
 let doTimi;
 doTimi = hypotenuse(2,2);
console.log(doTimi)
}
*/


var func = new Function("x", "y", "return x*y;");
function secondFunction(){
let result;
result = func(10,20);
 document.write(result)

}




   