// 0 - 9 = 10 buttons
// Clear button
// Period button
// Backspace Button
// +, -, /, *

// BUTTONS FOR FUNCTIONS
// CLEAR
// SCREEN = DISPLAY
// EQUALS
// Your calculator should not evaluate more than a single pair of numbers at a time. 
//If you enter a number then an operator and another number that calculation should be displayed if your next input is an operator. 
// The result of the calculation should be used as the first number in your new calculation.
// You should round answers with long decimals so that they don’t overflow the screen.
// Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
// Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!
// Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. 
// Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. 
// It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
// EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.
// EXTRA CREDIT: Add keyboard support!
let holdingValue = '';
let passingInput = '';
let operatorState = 'Default'


function checkInput(e){
    passingInput  += e.value;
    console.log(passingInput );
    document.getElementById("passingValue").innerHTML = passingInput ;
}


function clearScreen(){
    holdingValue = ''; 
    passingInput  = '';
    document.getElementById("passingValue").innerHTML = passingInput ;
    document.getElementById("heldValue").innerHTML = holdingValue;
    operatorState = 'Default'
}

function test(){
    console.log("Test");
}

function decimal(){
    
}

function add(){
    if(passingInput != '' && holdingValue != ''){
        operatorState = 'Add';
        let x = parseInt(passingInput);
        let y = parseInt(holdingValue);
        let output = x + y;
        holdingValue =  output.toString()
        document.getElementById("heldValue").innerHTML = holdingValue;

        passingInput  = '';
        document.getElementById("passingValue").innerHTML = passingInput ;
    }
    else if(passingInput != '' && holdingValue === ''){
        operatorState = 'Add';
        let x = parseInt(passingInput);
        let y = 0;
        let output = x + y;
        holdingValue =  output.toString()
        document.getElementById("heldValue").innerHTML = holdingValue;

        passingInput  = '';
        document.getElementById("passingValue").innerHTML = passingInput ;
    }
}

function subtract(){
    
    if(passingInput != '' && holdingValue != ''){
        operatorState = 'Subtract';
        let x = parseInt(passingInput);
        let y = parseInt(holdingValue);
        let output = y - x;
        holdingValue =  output.toString()
        document.getElementById("heldValue").innerHTML = holdingValue;

        passingInput  = '';
        document.getElementById("passingValue").innerHTML = passingInput ;
    }
     else if(passingInput != '' && holdingValue === ''){
         operatorState = 'Subtract';
         let x = parseInt(passingInput);
         let y = 0;
         let output = x - y;
       holdingValue =  output.toString()
        document.getElementById("heldValue").innerHTML = holdingValue;

         passingInput  = '';
         document.getElementById("passingValue").innerHTML = passingInput ;
     }
}

function equal(){
    if(operatorState === 'Add'){
        add();
        operatorState = 'Default';
    }
    else if(operatorState === 'Subtract'){
        subtract();
        operatorState = 'Default';
    }
}

function operatorChange(){
    
}