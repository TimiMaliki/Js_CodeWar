//this section is array
let myArray = new Array("mybook" , "go", "let", "of");

console.log(myArray)

// the length

console.log(myArray.length)

//concat method add two arrays

let myAlphabetArray = ["A" , "B", "C" , "D"];

let myNumericArrays = [1 ,2,3,4];

// the additon
let concat =  myAlphabetArray.concat(myNumericArrays);

console.log(concat)

//the join() method

 let joinFirstTwoArrays =  myAlphabetArray.join(myNumericArrays)

 console.log(joinFirstTwoArrays)

 //the pop method removes the last index in an array

 let removedArray = myNumericArrays.pop()

 console.log(removedArray)

 //the new myNumericArray value

 console.log(myNumericArrays);

 //the push method adds a valu to the end of the array

   let added = myNumericArrays.push(7)

// the added value

   console.log(myNumericArrays)

   // reverse method 

   let reversedArray = myNumericArrays.reverse()

// the reverse value

   console.log(reversedArray)

   //the shift method take awaay the first index in the array

   let shiftedArray = myNumericArrays.shift()

   // it removed the first index

   console.log(shiftedArray )

   //the return value

   console.log(myNumericArrays)

   //the slice method takes out some part of the array

   let sliced = myNumericArrays.slice(1,2)

   //sliced result

   console.log(sliced)

   // the unshift method does the exalt opposite of shift,which adds value at the first index

   let newaddedUnshift = myNumericArrays.unshift(7)

// value of the new value

   console.log( newaddedUnshift)

   // sort method arranges array according ina lexicographically

   let myFruitList = ["mango" , "apple" , "bananna" ,"orange" ,"berries", "cherries"]
//arranged list

    Orderly = myFruitList.sort()

// the result

    console.log(Orderly)

    //the splice method is removes an index and adds a new content

    let newList = myFruitList.splice(0, 2 , "pawpaw" ,"melon")

// some added fruits

    console.log(newList);

    //new value

    console.log(myFruitList)

    //toString method makes it look more like a sentence

   let toStringValue = myFruitList.toString()

//result

    console.log(toStringValue )






