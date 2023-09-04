  const oneWord = function(str){
      return str.replace(/ /g, '').toLowerCase();  
}

const upperFirstWord = (str) =>{
    const [first, ...others] = str.split(' ');
    return[first.toUpperCase(), ...others].join(' ');
};

//Higher-Order function
const transform = (str,fn)=>{
           console.log(`original str: ${str}`);
           console.log(fn(str))
           console.log(fn.name)
}
transform('i am the best', upperFirstWord)


//returning other functions