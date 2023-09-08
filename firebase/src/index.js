import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8vPPuayzoZ9mFL7VUGgaBtzd6PxBaSBk",
  authDomain: "personal-todo-project.firebaseapp.com",
  projectId: "personal-todo-project",
  storageBucket: "personal-todo-project.appspot.com",
  messagingSenderId: "472975031744",
  appId: "1:472975031744:web:043e9a3ae3403bfb281c25",
  measurementId: "G-2N0F4E6JZF",
};

//init firebase app
initializeApp(firebaseConfig);

// init service
const db = getFirestore();

//collection ref
const colRef = collection(db, "Todos");

//get collection data
 
  onSnapshot(colRef ,(items) =>{
    let todo = [];

    items.docs.forEach((item) => {
      todo.push({ ...item.data(), id: item.id });
    });

    console.log(todo);
  })
//adding documents
const addBookForm = document.querySelector(".add");
const titleInput = document.querySelector(".title");
const authorInput = document.querySelector(".author");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: titleInput.value,
    author: authorInput.value,
  }).then(() => {
    addBookForm.reset();
  });
});

//deleting documents
const deleteBookForm = document.querySelector(".delete");
const textForm = document.querySelector(".text");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "Todos", textForm.value);

  deleteDoc(docRef).then(() => {
    deleteBookForm.reset();
  });
});
