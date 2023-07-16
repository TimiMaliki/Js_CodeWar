  const users =[
     
      { name: "Timi", age : 24 , occupation: "Front-End Developer" , height: "5'9", Year : 1999, rankscore:99, retirementYear:2035},
      { name: "John", age : 23 , occupation: "Back-End Developer" , height: "5'8", Year : 2000 , rankscore:90 , retirementYear:2035},
      { name: "Boyld", age : 22 , occupation: "Data Analysis" , height: "5'11" , Year : 2001 , rankscore:92 , retirementYear:2035},
      { name: "Miles", age : 21 , occupation: "FullStack Developer" , height: "5'7" ,Year : 2002 , rankscore:91 , retirementYear:2035},
      { name: "Don", age : 20 , occupation: "Cultist" , height: "6'0", Year : 2003 , rankscore:49 , retirementYear:2035},
      { name: "li", age : 17 , occupation: "student" , height: "5'6", Year : 2006 , rankscore:79 , retirementYear:2035}
  ]

const rankscoreTest= [10,20,30,40,50,60,70,80,90,100]





//Filter

// let filterFiles = users.filter(birthAge => (birthAge.age > 10))
// .filter(job => (job.occupation === "Back-End Developer"))
// // console.log(filterFiles);


const filterAge = users.filter(getAge => (getAge.retirementYear - getAge.Year > 30 ))

// console.log(filterAge);


//Map 


const mapUser = users.map(mapp => (`${mapp.name} , ${mapp.age} , ${mapp.occupation} , ${mapp.Year}`))

// console.log(mapUser);

//sort
 const sortUser = users.sort((a,b) => (a.Year < b.Year ? 1 : -1))

//  console.log(sortUser);


 //reduce

 const reduceUser = users.reduce((a,b) => a + b ,0)
 console.log(reduceUser);