 let operatorRan = false;
 
 function attachEventToNumber() {
        const numbers = document.querySelectorAll(".number")
        numbers.forEach(number => {
            number.addEventListener("click", (e) => {changeNumber(number)})
        })
    }
    
attachEventToNumber();

function attachPlusEvent() {
    document.querySelector(".addition").addEventListener("click", (e) => add());
}

attachPlusEvent();

function attachClearEntryEvent() {
    document.querySelector(".clear-entry").addEventListener("click", (e) => {
        document.querySelector(".display-bottom").innerHTML = "0";
    });
}

attachClearEntryEvent();

function attachClearEvent() {
document.querySelector(".clear").addEventListener("click", (e) => {
    document.querySelector(".display-bottom").innerHTML = "0";
    document.querySelector(".display-top").innerHTML = "empty";
});
}

attachClearEvent();

function attachDeleteEvent() {
    document.querySelector(".delete").addEventListener("click", (e) => {
        let displayBottom = document.querySelector(".display-bottom");
        if(displayBottom.innerHTML.length == 1){
            displayBottom.innerHTML = "0";
        } else {
            displayBottom.innerHTML = displayBottom.innerHTML.slice(0, -1);
        }
    });
    }

attachDeleteEvent();

function operatorHasBeenRun() {
    let operatorRan = true;
}

function changeNumber(number) {
    const displayBottom = document.querySelector(".display-bottom");
    if(displayBottom.innerHTML == "0" || operatorRan == true) {
        displayBottom.innerHTML = number.innerHTML;
        operatorRan = false;
    } else {
        displayBottom.innerHTML += number.innerHTML;
    }
}

function add() {
    operatorRan = true;
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