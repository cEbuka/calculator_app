const numbers = document.querySelectorAll(".calc__key--number");
const clear = document.querySelector(".calc__key--clear");
const backspace = document.querySelector(".calc__key--delete");
const prefix = document.querySelector(".calc__key--prefix");
const decimal = document.querySelector(".calc__key--decimal");
const operators = document.querySelectorAll(".calc__key--operator");
let display = document.querySelector(".calc__display");
const equal = document.querySelector(".calc__key--equal");

function displayContent() {

    // todo: check input limit
    // show numbers on display
    numbers.forEach((key) => {
        key.addEventListener("click", () => {
            display.value += key.textContent;
            console.log(display);
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
    //operator keys
    operators.forEach((key) => {
        key.addEventListener("click", () => {
            const symbols = [];
            const operator = key.textContent;
            // get last character
            const last = display.value.slice(-1);
            operators.forEach(op => symbols.push(op.textContent))

            if (symbols.includes(last)) {
                display.value = display.value.slice(0, -1) + operator;
            }
            else if (display.value === "") {
                display.value = "";
            }
            // if the last character is not an operator, append the operator
            else {
                display.value += operator;
            }

        })
    })


    prefix.addEventListener("click", () => {
        const value = display.value;

        if (value.includes("-")) return;
        else {
            display.value = "-" + display.value;
            return;
        }


    })

    // decimal key
    decimal.addEventListener("click", () => {
        const value = display.value;

        // if display is empty and is . pressed, show 0.
        if (value === "") {
            display.value += "0.";
            return;
        }
        // split the text into parts based on the operators
        const parts = value.split(/[\+\-\*\/\%]/);
        // the last part in the splits
        const currentNumber = parts[parts.length - 1];
        //    if the last number is empty, insert 0. if . is clicked
        if (currentNumber === '') {
            display.value += "0.";
            return;
        }
        // if the last part contains a ., do nothing
        if (currentNumber.includes(".")) return;
        // show the decimal point
        display.value += decimal.textContent;
    })


    // equals key
    equal.addEventListener("click", () => displayResults(display.value))

}

function clearDisplay() {
    display.value = "";
}

function deleteContent() {
    display.value = display.value.slice(0, -1);

}

function displayResults(contents) {

    try {
        const value = contents.trim();
        const result = math.evaluate(value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
        console.error("Invalid expression: ", error);
        return;
    }



}


displayContent();