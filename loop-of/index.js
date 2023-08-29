
    //  const list = [1,2,3,4,5,6,6,7]

    //  for (const num of list){
    //     console.log(num)
    //  }

     const arr = [2,5,6]

     for (const [i,el] of arr.entries()){
        //  console.log(`${item[0] + 1}: yams and  ${arr[1] + 1}goats `)
        console.log(`${i}:yams  ${el}`)
    }


    //looping objects

 const myObj= {
    thursday:'thur',
    friday:'fri',
    saturday:'sat'
 }

 const days = Object.keys(myObj)

 console.log(days.length)

const values = Object.values(myObj)

console.log(values)

 for( const mj of Object.keys(myObj)) console.log(mj)