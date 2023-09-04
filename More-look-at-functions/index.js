

// const bookings = []

// const booking = (flightnum,numPassengers =1,price=200) =>{
//    //Es5
//     // numPassengers= numPassengers || 1;
//     // price = price || 200
    
//     const booking = {
//             flightnum,
//             numPassengers,
//             price,
//         }

//         console.log(booking)
//         bookings.push(booking)
// }

// booking('a12e32')

// // const myArr = [1,2,3,4]

// // myArr.push(5)

// // console.log(myArr)

 const flight = "LH342"
 const jonas ={
    name:"Timi",
    passport:2923023902939
 }

 const checkIn = function(flightNum,passenger){
   flightNum = 'LH999';
   passenger.name = 'MR. ' + passenger.name

   if (passenger.passport === 2923023902939){
     alert('you can go!')
   }else{
    alert('you cant go')
   }
 }

 checkIn(flight,jonas)
 console.log(flight)
 console.log(jonas)