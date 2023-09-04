
 const btn = document.getElementById('btn')
const boxEl = document.querySelector('.box')

 btn.addEventListener('click' , ()=>{
   let color = "#";
   color += Math.random().toString(16).slice(2,8);
   boxEl.style.backgroundColor  = color;
   boxEl.style.borderRadius = "50px 50px"
 }) 