// this is the string section

 var str = new String( "This is string " );
console.log(str.length);

//Sting Methods

//the toUpperCase method Capitalize the string
console.log(str.toUpperCase());
//the toLowerCase method makes the letter in lower case
console.log(str.toLowerCase());
//the charAt method  get the character of the string
console.log(str.charAt(2))
//the charCodeAt
console.log(str.charCodeAt(1))
//the indexOf method  get the index of the string
console.log(str.indexOf("n"))
//the lastindexOf method  get the index of the string
console.log(str.lastIndexOf("g"))
//the substring method can contain two parameters
console.log(str.substring(0,9))
console.log(str.substring(str.indexOf('r') , str.length))
//the endsWith method return if the string at the end is true or false
console.log(str.endsWith('string'))
let ring = "yea "
//the includes method return if the string at the end is true or false
console.log(str.includes('ring'))
//concat to add string
console.log(str + " " + ring)   //OR
 console.log(str.concat(ring))
// match method
console.log(str.match(/ring/g))
// repeat literlly  repeats words
console.log(str.repeat(2))
//replace actually replace a word in a string
console.log(str.replace(/string/g, "A ring"))
//search ,this search for a string and position index
console.log(str.search('ing'))
//slice method 
console.log(str.slice(2,4))
//split method is actually going to split words into an array
console.log(str.split(""))
//startswith this method select this first word in a string and returns if its true/false
console.log(str.startsWith("This")) //("go") returned false
//substr
console.log(str.substr(2,4))
//trim method removes white space
console.log(str.trim())


