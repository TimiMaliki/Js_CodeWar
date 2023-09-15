// const contentEl = document.querySelector('.content')
// const inputEl = document.querySelector('.input')
// const btn = document.querySelector('.submit')





// btn.addEventListener('click', (e) =>{
//         e.preventDefault()
//         let value =   inputEl.value
//        //  inputEl.value.split("").reverse().join('')

//         inputEl.value = ""

//       const domDiv = document.createElement('div')
//       domDiv.classList.add('x')

//       const makeNewContent = document.createElement('div')
//       makeNewContent.innerHTML = value
         
//       domDiv.appendChild(makeNewContent)

//      contentEl.appendChild(domDiv)
            
// })


const contentEl = document.querySelector('.content');
const inputEl = document.querySelector('.input');
const btn = document.querySelector('.submit');

// Check if there's data in localStorage and populate it if available
if (localStorage.getItem('savedData')) {
  const savedData = JSON.parse(localStorage.getItem('savedData'));
  savedData.forEach(value => {
    appendValueToContent(value);
  });
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  let value = inputEl.value;
  inputEl.value = '';

  // Save the value to localStorage
  saveValueToLocalStorage(value);

  appendValueToContent(value);
});

function appendValueToContent(value) {
  const domDiv = document.createElement('div');
  domDiv.classList.add('x');

  const makeNewContent = document.createElement('div');
  makeNewContent.innerHTML = value;

  domDiv.appendChild(makeNewContent);
  contentEl.appendChild(domDiv);
}

function saveValueToLocalStorage(value) {
  let savedData = [];

  // Check if there's existing data in localStorage
  if (localStorage.getItem('savedData')) {
    savedData = JSON.parse(localStorage.getItem('savedData'));
  }

  // Add the new value to the array
  savedData.push(value);

  // Store the updated array in localStorage
  localStorage.setItem('savedData', JSON.stringify(savedData));
}
