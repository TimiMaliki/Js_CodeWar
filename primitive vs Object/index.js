
//primitive types
let lastName = "Williams"
let oldLastName = lastName;

lastName = "Davis"

console.log(lastName , oldLastName)

//reference type

const jessica = {
    firstName:'jessica',
    lastName:'william',
    age: 27
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Maliki';
console.log('before marriage' , jessica)
console.log('after marriage' , jessica)