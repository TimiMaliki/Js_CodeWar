//  testing

// let five = 5;

let Books = [
    {name:'way of a superior man' , Year: "1891"},
    {name:'Law of attraction' , Year: "1792"  , favourites: 'favourite'} ,
    {name:'warrior within' , Year: "1893"},
    {name:'12 rules of life' , Year: "1794"},
    {name:'Atomic Habits' , Year: "1895" , favourites: 'favourite'},
    {name:'Power Of the mind' , Year: "1895"},
    {name:'Power Of the God' , Year: "1895"},

]

let scores = [10,20,30,40,50,60,70,80,90,100]


//  console.log(Books.length);

// for
// for(let i = 0 ; i < Books.length ; i++){
//    document.write(i)
  
// }





// for each

Books.forEach(function(myBook){
//   console.log(myBook.name);
})
 // for each end









//filter


// const passExams = scores.filter(function(pass){
//   if(pass > 10){
//   return true
//   }
//   else{
//     return false
//   }
// })

//nice and  clean way of writing it in esx6
const passExams = scores.filter(pass => pass > 20);

// console.log(passExams);   

//the books favourite filter

// const myFavs = Books.filter(function(fav){
//   if( fav.favourites === "favourite"){
//    return true
//   }
// })

const myFavs = Books.filter(fav => fav.favourites === 'favourite')

// console.log(myFavs);

//get the years from 17ties

const seventies = Books.filter(sevens => (sevens.Year < 1800))

console.log(seventies);