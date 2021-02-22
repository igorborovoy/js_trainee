function createCounter() {
  let count = 0;
  return {
    increment() {count++; return count},
    decrement() {count--; return count},
    clear() {count = 0; return count},
  };
}

function incCounter() {
  output.value = counter.increment();
}

function decCounter() {
  output.value = counter.decrement();
}

function clearCounter(){
  output.value = counter.clear();
}

const counter = createCounter();
const incButton = document.querySelector('#inc-button');
const decButton = document.querySelector('#dec-button');
const clearButton = document.querySelector('#clr-button');
const output = document.querySelector("#count-input");

incButton.addEventListener('click', incCounter);
decButton.addEventListener('click', decCounter);
clearButton.addEventListener('click', clearCounter);