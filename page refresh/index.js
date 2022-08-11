// this is section is about page refresh and redirection

// function AutoRefresh( t ){
  //  setTimeout("location.reload(true);",t);
//};
//AutoRefresh(5000);
//

function Redirect(){
   window.location="http://netNaija.com";
   
};
document.write('this doc will link you in the next 10sec')

setTimeout(Redirect(),10000);

//function Redirect() {
  //  window.location="http://www.tutorialspoint.com";
  //  };
   // document.write ("You will be redirected to our main page in 10seconds!");
    
   // setTimeout(Redirect(), 10000);
    