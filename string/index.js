// this is the string section

 var str = new String( "This is string" );
console.log(str.length);

//Sting Methods

//the toUpperCase method Capitalize the string
console.log(str.toUpperCase());
//the toLowerCase method makes the letter in lower case
console.log(str.toLowerCase());
//the charAt method  get the character of the string
console.log(str.charAt(2))
//the indexOf method  get the index of the string
console.log(str.indexOf("n"))

//the lastindexOf method  get the index of the string
console.log(str.lastIndexOf("g"))
//the substring method can contain two parameters
console.log(str.substring(0,9))
console.log(str.substring(str.indexOf('r') , str.length))
//the endsWith method return if the string at the end is true or false
console.log(str.endsWith('string'))
let ring = "yea"
//the includes method return if the string at the end is true or false
console.log(str.includes('ring'))
//concat
console.log(str + " " + ring)

