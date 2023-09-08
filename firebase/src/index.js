import {initializeApp} from 'firebase/app'
import {
    getFirestore,collection,getDocs
} from 'firebase/firestore'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8vPPuayzoZ9mFL7VUGgaBtzd6PxBaSBk",
    authDomain: "personal-todo-project.firebaseapp.com",
    projectId: "personal-todo-project",
    storageBucket: "personal-todo-project.appspot.com",
    messagingSenderId: "472975031744",
    appId: "1:472975031744:web:043e9a3ae3403bfb281c25",
    measurementId: "G-2N0F4E6JZF"
  };

  //init firebase app
  initializeApp(firebaseConfig)


// init service
 const db = getFirestore()

//collection ref
const colRef = collection(db,'Todos')

//get collection data 

getDocs(colRef)
.then((items)=>{
let todo = []

items.docs.forEach((item) =>{
   todo.push({...item.data(), id: item.id })
})

console.log(todo)

})

.catch((err) =>{
    console.log(err.message)
})