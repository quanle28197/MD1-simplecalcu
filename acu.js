let screen = document.getElementById("screen");
function clickNumber(value) {
    screen.value += value;
}
function calculator() {
    let result = eval(screen.value);
    screen.value = result;
}
function clearScreen() {
    screen.value = "";
}