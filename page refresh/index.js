// this is section is about page refresh and redirection

function AutoRefresh( t ){
    setTimeout("location.reload(true);",t);
};
AutoRefresh(5000);

function newDirect(){
    window.location="http://www.tutorialspoint.com";
}

    