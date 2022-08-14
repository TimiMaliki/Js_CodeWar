//this section is for objects

let user = {
   //this is the property
    name: 'Timi',  
    // while Timi is the value of the property
    age:23,
    job:"student",
    location:'Nigeria',
    email:'malikitimi@gmail.com',
    blogs:['why marvel movies are so good and coke is sugary'],
    //Methods
    login:function(){
        console.log('the user logged in');
    },
    logout:function(){
        //console.log('the user just logged out')
    },
    logBlogs:function(){
              console.log(this.blogs)
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



