const text = document.getElementById('getText');
const output = document.querySelector('.output')
const emails = document.querySelector('.getEmail')
const users = document.getElementById('getUsers')
const post = document.getElementById('getPost')
const addpost = document.getElementById('addPost')



text.addEventListener('click', ()=>{
    fetch('sample.text')
    .then((res)=>{
       return res.text()
    })
    .then((data)=>{
        output.innerHTML = data
    })
    .catch((err)=>{
        console.log(`this is the err mess ${err}`)
    })

})


emails.addEventListener("click" , ()=>{
    fetch('https://mylist-cb686-default-rtdb.firebaseio.com')
    .then((res) =>{
       return res.json()
    })
    .then((data)=>{
        let out = "<h2>users</h2>"
       data.forEach(items => {
        out += `
            <li>ID:${items.firstName}</li>
        `
       });
       output.innerHTML = out
    })
})


users.addEventListener("click" , ()=>{
    fetch('https://mylist-cb686-default-rtdb.firebaseio.com')

    .then((res) =>{
       return res.json()
    })
    .then((data)=>{
        let out = "<h2>usersItems</h2>"
       data.forEach(user => {
        out += `
          
            <li>ID:${user.lastName}</li>
        `
       });
       output.innerHTML = out
    })
})

post.addEventListener("click" , ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) =>{
       return res.json()
    })
    .then((data)=>{
        let out = "<h2>Post</h2>"
       data.forEach(post => {
        out += `
            <div>ID:${post.userId}</div>
            <div>ID:${post.title}</div>
            <div>ID:${post.it}</div>
            <div>ID:${post.body}</div>
        `
       });
       output.innerHTML = out
    })

})

addpost.addEventListener('submit' , (e)=>{
    e.preventDefault()
    let title =document.querySelector('.title').value
    let body = document.querySelector('.body').value
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method:"POST",
    headers:{
        'Accept':'application/json, text/plain, */*',
         'Content-type':"application/json"
    },
    body:JSON.stringify({
        title:title,
        body:body
    })
  })
    .then((res) =>{
       return res.json()
    })
   .then((data)=>{
         console.log(data)
   })

})










