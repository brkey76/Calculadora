let value = document.getElementById("value");
let value1 = 0;
let value2 = 0;

function one() {
    if (value.textContent === "0") {
        value.textContent = 1;
    }
    else {
        value.textContent += "1";
    }
}
function two() {
    if (value.textContent === "0") {
        value.textContent = 2;
    }
    else {
        value.textContent += "2";
    }
}
function three() {
    if (value.textContent === "0") {
        value.textContent = 3;
    }
    else {
        value.textContent += "3";
    }
}
function four() {
    if (value.textContent === "0") {
        value.textContent = 4;
    }
    else {
        value.textContent += "4";
    }
}
function five() {
    if (value.textContent === "0") {
        value.textContent = 5;
    }
    else {
        value.textContent += "5";
    }
}
function six() {
    if (value.textContent === "0") {
        value.textContent = 6;
    }
    else {
        value.textContent += "6";
    }
}
function seven() {
    if (value.textContent === "0") {
        value.textContent = 7;
    }
    else {
        value.textContent += "7";
    }
}
function eight() {
    if (value.textContent === "0") {
        value.textContent = 8;
    }
    else {
        value.textContent += "8";
    }
}
function nine() {
    if (value.textContent === "0") {
        value.textContent = 9;
    }
    else {
        value.textContent += "9";
    }
}
function zero() {
    if (value.textContent === "0") {
        value.textContent = 0;
    }
    else {
        value.textContent += "0";
    }
}
function decimal() {
    value.textContent += ".";
}
function plus() {
    if (value1 === 0) {
        value1 = value.textContent + "+";
        value.textContent = 0;
    }
}
function minus() {
    if (value1 === 0) {
        value1 = value.textContent + "-";
        value.textContent = 0;
    }
}
function multiply() {
    if (value1 === 0) {
        value1 = value.textContent + "*";
        value.textContent = 0;
    }
}
function divide() {
    if (value1 === 0) {
        value1 = value.textContent + "/";
        value.textContent = 0;
    }
}
function apagar() {
    value.textContent = 0;
    value1 = 0;
    value2 = 0;
}
function submit() {
    if (value2 === 0) {
        value2 = value.textContent;
    }
    Math.round(eval(value1 + value2));
    value.textContent = eval(value1 + value2);
    document.getElementById("value").textContent = eval(value1 + value2);
    value1 = 0;
    value2 = 0;
}