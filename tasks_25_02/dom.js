//-----------links-----------//

const links = document.querySelectorAll('a');

for (let link of links) {

  link.addEventListener('mouseover', (event) => {
    link.setAttribute('tittle', link.textContent)
  }, { once: true });

  link.addEventListener('mouseover', (event) => {
    link.textContent += ` (${link.getAttribute('href')})`;
  }, { once: true });
}

//----------delegation for links-----------//

/* const links2 = document.querySelector('.links');
links2.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'A') {
    event.target.setAttribute('tittle', event.target.textContent);
  }
}, { once: true })

links2.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'A') {
    console.log(event.target);
    event.target.textContent += ` (${event.target.getAttribute('href')})`;
  }
}); */

//--------------inputs---------------//

const inputs = document.querySelectorAll('input');
const pForInputs = document.getElementById('test');

for (let input of inputs) {
  input.addEventListener('blur', (event) => {
    pForInputs.textContent = input.value;             //value length
    if (input.value.length === input.dataset.length){
      input.style.borderColor = 'green';              //border
    } else {
      input.style.borderColor = 'red';                //border
    }
  });

  input.addEventListener('focus', (event) => {
    alert(input.value);
  }, { once: true })
}

//---------------paragraph with sqrt-----------------//


const pWithNumbers = document.querySelectorAll('.pow');

for (let p of pWithNumbers) {
  p.addEventListener('click', (event) => {
    p.textContent += ` pow 2 = ${Number(p.textContent) ** 2}`;
  }, { once: true });
}

const divColor = document.querySelectorAll('.div-color');


