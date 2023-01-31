


//change value of variable when number button is clicked
function attachEventToNumber() {
    const numbers = document.querySelectorAll(".number");
    numbers.forEach(number => {
        number.addEventListener("click", changeNumber(number))
    })
}

attachEventToNumber();

function changeNumber(number) {
    const displayBottom = document.querySelector(".display-bottom");
    displayBottom.innerHTML = number.innerHTML;
}


function add(x,y) {
    return x + y;
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