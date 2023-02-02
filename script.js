 //test
 
 let operatorRan = false;
 let numberDisplay = document.querySelector(".display-numbers");
 let operatorDisplay = document.querySelector(".display-operator")
 let bottomDisplay = document.querySelector(".display-bottom");
 let numberDisplayText = numberDisplay.innerHTML;
 let operatorDisplayText = operatorDisplay.innerHTML; 
 let bottomDisplayText = bottomDisplay.innerHTML;
 
 
 //attach number event
 
 function attachEventToNumber() {
        document.querySelectorAll(".number").
        forEach(number => { number.
        addEventListener("click", (e) => {changeNumber(number)})
        })
    } 
    
attachEventToNumber();

//attach operator events

function attachPlusEvent() {
    document.querySelector(".addition").
    addEventListener("click", (e) => add());
}

attachPlusEvent();

function attachSubtractEvent() {
    document.querySelector(".subtraction").
    addEventListener("click", (e) => subtract());
}

attachSubtractEvent();

function attachMultiplicationEvent() {
    document.querySelector(".multiplication").
    addEventListener("click", (e) => multiply());
}

attachMultiplicationEvent();


function attachDivisionEvent() {
    document.querySelector(".division").
    addEventListener("click", (e) => division());
}

attachDivisionEvent();

//attach erasure events

function attachClearEntryEvent() {
    document.querySelector(".clear-entry").
    addEventListener("click", (e) => {
        bottomDisplay.innerHTML = "0";
    });
}

attachClearEntryEvent();

function attachClearEvent() {
document.querySelector(".clear").addEventListener("click", (e) => {
    bottomDisplay.innerHTML = "0";
    numberDisplay.innerHTML = "empty";
    operatorDisplay.innerHTML = "";
});
}

attachClearEvent();

function attachDeleteEvent() {
    document.querySelector(".delete").addEventListener("click", (e) => {
        if(bottomDisplay.innerHTML.length == 1){
            bottomDisplay.innerHTML = "0";
        } else {
            bottomDisplay.innerHTML = bottomDisplay.innerHTML.slice(0, -1);
        }
    });
}

attachDeleteEvent();

function changeNumber(number) {
    if(bottomDisplay.innerHTML == "0" || operatorRan == true) {
        bottomDisplay.innerHTML = number.innerHTML;
        operatorRan = false;
    } else {
        bottomDisplay.innerHTML += number.innerHTML;
    }
}

function add() {
    operatorRan = true;
    if (numberDisplay.innerHTML !== "empty") {
        bottomDisplay.innerHTML = +bottomDisplay.innerHTML + +numberDisplay.innerHTML;
    } 
      numberDisplay.innerHTML = bottomDisplay.innerHTML;
      operatorDisplay.innerHTML = "+";
    } 


function subtract(x,y) {
    operatorRan = true;
    if (numberDisplay.innerHTML !== "empty") {
        bottomDisplay.innerHTML = +numberDisplay.innerHTML - +bottomDisplay.innerHTML;
    } 
      numberDisplay.innerHTML = bottomDisplay.innerHTML;
      operatorDisplay.innerHTML = "-";
    } 

function multiply(x,y) {
    operatorRan = true;
    if (numberDisplay.innerHTML !== "empty") {
        bottomDisplay.innerHTML = +numberDisplay.innerHTML * +bottomDisplay.innerHTML;
    } 
      numberDisplay.innerHTML = bottomDisplay.innerHTML;
      operatorDisplay.innerHTML = "*";
    } 

    function division(x,y) {
        operatorRan = true;
        if (numberDisplay.innerHTML !== "empty") {
            bottomDisplay.innerHTML = +numberDisplay.innerHTML / +bottomDisplay.innerHTML;
        } 
          numberDisplay.innerHTML = bottomDisplay.innerHTML;
          operatorDisplay.innerHTML = "/";
        }        

//change value of variable according 





//const addButton = document.querySelector(".addition");
//addButton.addEventListener("click", ())