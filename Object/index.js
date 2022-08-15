//this section is for objects

let user = {
   //this is the property
    name: 'Timi',  
    // while Timi is the value of the property
    age:23,
    job:"student",
    location:'Nigeria',
    email:'malikitimi@gmail.com',
    blogs:[
        {title:'10 facts about Fat', likes:30,},
    {title:'20 ways to be rich', likes:60},
    ],
    //Methods
    login:function(){
        console.log('the user logged in');
    },
    logout:function(){
        //console.log('the user just logged out')
    },
    logBlogs(){
          //    console.log(this.blogs)
          console.log('this nigga has written the follow:');
          this.blogs.forEach(blogs => {
            console.log(blogs.title, blogs.likes)
          })
    }
}   
//user.login();
//user.logout();
user.logBlogs();

// console.log(user);
//typeof "string"
//console.log(typeof user['name']);

 // bracket notation user['name'] = 'Maliki';
//console.log(user['name']);
 // i assigned a new name here! user.name ='Maliki'
 //console.log(user.name);
// const nigga = 'black';
 //user['nigga']
// undefined console.log(user[nigga]);


//Maths object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);





