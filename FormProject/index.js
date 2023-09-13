 const contentEl = document.querySelector('.content')
 const inputEl = document.querySelector('.input')
 const btn = document.querySelector('.submit')



//    let firstname = 'Timi'

 

//    const str = firstname.split("").reverse().join('')

//    console.log(str)

 

 

 btn.addEventListener('click', (e) =>{
         e.preventDefault()
         let value = inputEl.value.split("").reverse().join('')


         inputEl.value = ""

localStorage.setItem('' , setter)


         


      
         const domDiv = document.createElement('div')
         domDiv.classList.add('x')

         const makeNewContent = document.createElement('div')
         makeNewContent.innerHTML = value
            
         domDiv.appendChild(makeNewContent)

        contentEl.appendChild(domDiv)     
 })
