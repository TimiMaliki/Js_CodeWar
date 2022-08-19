// this section is for boolean

let val = new Boolean(true);
// console.log(val);

 let bool = new Boolean("good boy");

// console.log("bool.constructor() is : " + bool.constructor);
 
 //the source method

 function bookClub(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
 };
 
    
    


let newBook = new bookClub("New Born" , "Maliki" , "200");

 console.log("newBook.toSource() is : "+ newBook.toSource())