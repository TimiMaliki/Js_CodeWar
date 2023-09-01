const recordSet = new Set(["Book", "goceries", "junks", "books", "Book"]);


console.log(recordSet.size);
console.log(recordSet.has('Book'))
console.log(recordSet.has("tv"))
console.log(recordSet.add("tv"))
console.log(recordSet.delete('books'))
console.log(recordSet)


// console.log(new Set('Timi'))

for(const record of recordSet) console.log(record)


const staff = ['waiter','chef','waiter','banker','foodie'
,'techGuy']

const staffUniue = [...new Set(staff)]

console.log(staffUniue)

const staffSize = new Set(['waiter','chef','waiter','banker','foodie'
,'techGuy']).size

console.log(staffSize)