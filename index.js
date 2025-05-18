const numbers = document.querySelectorAll(".calc__key--number");
const clear = document.querySelector(".calc__key--clear");
const backspace = document.querySelector(".calc__key--delete");
const prefix = document.querySelector(".calc__key--prefix");
const decimal = document.querySelector(".calc__key--decimal");
const operators = document.querySelectorAll(".calc__key--operator");
const display = document.querySelector(".calc__display");
const equal = document.querySelector(".calc__key--equal");
let result = 0;

function displayContent() {
    // show numbers on display
    numbers.forEach((key) => {
        key.addEventListener("click", () => {
            display.textContent += key.innerHTML;
            console.log(key);
        })
    })
    //clear key
    clear.addEventListener("click", () => {
        clearDisplay();
    })
    // delete key
    backspace.addEventListener("click", () => {
        deleteContent();
    })
    // show operator keys
    operators.forEach((key) => {
        key.addEventListener("click", () => {
            // get last character
            const last = display.textContent.slice(-1);
            // if display is not  clear and last character is not an operator
            if (display.textContent !== "" && key.textContent !== last ) {
                display.textContent += key.innerHTML;
            }

        })
    })
}

function clearDisplay() {
    display.textContent = "";
}

function deleteContent() {
    display.textContent = display.textContent.slice(0, -1);

}

displayContent();