 const contentEl = document.querySelector('.content')
 const inputEl = document.querySelector('.input')
 const btn = document.querySelector('.submit')



 

 btn.addEventListener('click', (e) =>{
         e.preventDefault()
         let value =   inputEl.value
        //  inputEl.value.split("").reverse().join('')

         inputEl.value = ""

       const domDiv = document.createElement('div')
       domDiv.classList.add('x')

       const makeNewContent = document.createElement('div')
       makeNewContent.innerHTML = value
          
       domDiv.appendChild(makeNewContent)

      contentEl.appendChild(domDiv)
             
 })
