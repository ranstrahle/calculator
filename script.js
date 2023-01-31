 function attachEventToNumber() {
        const numbers = document.querySelectorAll(".number")
        numbers.forEach(number => {
            number.addEventListener("click", (e) => {changeNumber(number)})
        })
    }
    
attachEventToNumber();

function changeNumber(number) {
    const displayBottom = document.querySelector(".display-bottom");
    if(displayBottom.innerHTML == "0") {
        displayBottom.innerHTML = number.innerHTML;
    } else {
        displayBottom.innerHTML += number.innerHTML;
    }
}

function attachPlusEvent() {
    document.querySelector(".addition").addEventListener("click", (e) => add());
}

attachPlusEvent();

function add() {
    const displayTop = document.querySelector(".display-top");
    const displayBottom = document.querySelector(".display-bottom");
    let displayTopValue = displayTop.innerHTML.replace(/\W/g, "");
    if (displayTop.innerHTML !== "empty") {
        displayBottom.innerHTML = +displayBottom.innerHTML + +displayTopValue;
        displayTop.innerHTML = displayBottom.innerHTML + " +";
    } else 
       displayTop.innerHTML = displayBottom.innerHTML + " +";
    }
function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x * y;
}

function square(x,y) {
    return x ** y;
}

//change value of variable according 





//const addButton = document.querySelector(".addition");
//addButton.addEventListener("click", ())