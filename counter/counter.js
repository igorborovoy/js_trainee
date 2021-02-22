function Counter() {
    let count = 0;
    return function (clear) {
        if (clear == true) count = 0;
        else count++;
        return count;
    }
}

function showCounter() {
    output.value = counter();
}

function clearCounter() {
    output.value = counter(true);
}


const counter = Counter();
const button = document.querySelector('#count-button');
const output = document.querySelector("#count-input");
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener('click', clearCounter);
button.addEventListener('click', showCounter);