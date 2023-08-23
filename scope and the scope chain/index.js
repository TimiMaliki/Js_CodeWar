
function calAge(birthYear){
    const age = 2037-birthYear;
   

    function printAge(){
        const output = `${firstName} ,you are ${age} , born in ${birthYear}
        `
        console.log(output)

        if(birthYear >= 1981 && birthYear <= 1996){
        const str = `oh, and youre a  millenial,${firstName}
        `
        console.log(str);

        function add(a,b){
             const c = a+b
             console.log(c)
        }
        add(2,3)
        }
        else{
            console.log(`sorry , your not`);
        }
    }
 printAge()
    return age;
}

const firstName = "Timi"
calAge(1999)