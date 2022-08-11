/*function Message(){
   
    window.location='http://netflix.com'
}
document.write('follow for more movies');
setTimeout(Message(),10000);

function warn(){
    alert('tis site might be dangerus');
}
warn(Message());
document.write('movies')
*/
function getConfrimed(){
    let retVal = confirm('do you wish to continue')
    if(retVal =! true)// but if == click yes
    {
       document.write('click yes');
       return true;
    }
    else{
      document.write('ignore');
      return false;
    }
}
getConfrimed();




