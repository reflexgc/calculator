// JavaScript source code

const display = document.getElementById("display");
let expression = "";
function appendToDisplay(input) {
    display.value += input;
    if (input === "x") {
        expression += "*";
    } else if (input === "÷") {
        expression += "/";
    }
    else if (input === "^") {
        expression += "**";
    }
    else {
        expression += input;
    }
}

function clearDisplay() {
    display.value = "";
    expression = "";
}
function deleteValue() {
    display.value = display.value.slice(0, -1);

    expression = expression.slice(0, -1);
}

function calculate() {
     try {
        const result = eval(expression);
        display.value = result;
        expression = result.toString(); // allow continuing calculation
    } catch (err) {
        display.value = "Error";
        expression = "";
    }

}

