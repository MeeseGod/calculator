let holdingValue = '0';
let passingInput = '';
let operatorState = 'Default';
document.getElementById("heldValue").innerHTML = holdingValue;

function checkInput(e){
    passingInput  += e.value;
    document.getElementById("passingValue").innerHTML = passingInput ;
}

function clearScreen(){
    holdingValue = '0'; 
    passingInput  = '';
    operatorState = 'Default'
    document.getElementById("passingValue").innerHTML = passingInput;
    document.getElementById("heldValue").innerHTML = holdingValue;
}

function add(){
    if(operatorState != 'Default' && passingInput != ''){
        equal()
        operatorState = 'Adding';
        passingInput = '';
        document.getElementById("passingValue").innerHTML = passingInput;
    }
    else if(passingInput != ''){
        operatorState = 'Adding';
        holdingValue = passingInput;
        if(holdingValue > 1000000000){
            holdingValue = parseInt(holdingValue)
            holdingValue = holdingValue.toExponential(3);
        }
        // Checks to see if holdingValue has floating point, then fixes it to 2 decimal points
        if(holdingValue.includes('.') && !holdingValue.includes('e')){
            holdingValue = parseFloat(holdingValue).toFixed(2);
            holdingValue = holdingValue.toString();
        }
        document.getElementById("heldValue").innerHTML = holdingValue;
        passingInput = ''; 
        document.getElementById("passingValue").innerHTML = passingInput;
    }
    else if(passingInput === '' && holdingValue != '0'){
        operatorState = 'Adding';
    }
}

function subtract(){
    if(operatorState != 'Default' && passingInput != ''){
        equal()
        operatorState = 'Subtract';
        passingInput = '';
        document.getElementById("passingValue").innerHTML = passingInput;
    }
    else if(passingInput != ''){
        operatorState = 'Subtract';
        holdingValue = passingInput;
        if(holdingValue > 1000000000){
            holdingValue = parseInt(holdingValue)
            holdingValue = holdingValue.toExponential(3);
        }
        // Checks to see if holdingValue has floating point, then fixes it to 2 decimal points
        if(holdingValue.includes('.') && !holdingValue.includes('e')){
            holdingValue = parseFloat(holdingValue).toFixed(2);
            holdingValue = holdingValue.toString();
        }
        document.getElementById("heldValue").innerHTML = holdingValue;
        passingInput = '';
        document.getElementById("passingValue").innerHTML = passingInput;
    }
    else if(passingInput === '' && holdingValue != '0'){
        operatorState = 'Subtract';
    }
}

function multiply(){
    if(operatorState != 'Default' && passingInput != ''){
        equal()
        operatorState = 'Multiply';
        passingInput = '';
        document.getElementById("passingValue").innerHTML = passingInput;
    }
    else if(passingInput != ''){
        operatorState = 'Multiply';
        holdingValue = passingInput;
        if(holdingValue > 1000000000){
            holdingValue = parseInt(holdingValue)
            holdingValue = holdingValue.toExponential(3);
        }
        // Checks to see if holdingValue has floating point, then fixes it to 2 decimal points
        if(holdingValue.includes('.') && !holdingValue.includes('e')){
            holdingValue = parseFloat(holdingValue).toFixed(2);
            holdingValue = holdingValue.toString();
        }
        document.getElementById("heldValue").innerHTML = holdingValue;
        passingInput = '';
        document.getElementById("passingValue").innerHTML = passingInput;
    }
    else if(passingInput === '' && holdingValue != '0'){
        operatorState = 'Multiply';
    }
}

function divide(){
    if(operatorState != 'Default' && passingInput != ''){
        equal()
        operatorState = 'Divide';
        passingInput = '';
        document.getElementById("passingValue").innerHTML = passingInput;
    }
    else if(passingInput != ''){
        operatorState = 'Divide';
        holdingValue = passingInput;
            if(holdingValue > 1000000000){
                holdingValue = parseInt(holdingValue)
                holdingValue = holdingValue.toExponential(3);
            }
            // Checks to see if holdingValue has floating point, then fixes it to 2 decimal points
            if(holdingValue.includes('.') && !holdingValue.includes('e')){
                holdingValue = parseFloat(holdingValue).toFixed(2);
                holdingValue = holdingValue.toString();
            }
        document.getElementById("heldValue").innerHTML = holdingValue;
        passingInput = '';
        document.getElementById("passingValue").innerHTML = passingInput;
        
    }
    else if(passingInput === '' && holdingValue != '0'){
        operatorState = 'Divide';
    }
}

function removeLastNumber(){
    passingInput = passingInput.slice(0, -1);
    document.getElementById("passingValue").innerHTML = passingInput;
}

function addDecimalPoint(){
    if(!passingInput.includes('.') && passingInput != ''){
        passingInput = passingInput + '.';
        document.getElementById("passingValue").innerHTML = passingInput;
    }
}

// Called to resolve the meeting of the passing value and the held value whenever any operator is chosen
function equal(){
if(passingInput != ''){    
    if(operatorState === 'Adding'){
        let x = 0;
            if(passingInput.includes('.') || holdingValue.includes('.')){
                x = parseFloat(passingInput) + parseFloat(holdingValue);
                x = x.toFixed(2);
            }
            else{
                x = parseInt(passingInput) + parseInt(holdingValue);
            }
        holdingValue = x.toString();
        document.getElementById("heldValue").innerHTML = holdingValue;
    }
    else if(operatorState === 'Subtract'){
        let x = 0;
            if(passingInput.includes('.') || holdingValue.includes('.')){
                x = parseFloat(holdingValue) - parseFloat(passingInput);
            }
            else{
                x = parseInt(holdingValue) - parseInt(passingInput);
            }
        holdingValue = x.toString();
        document.getElementById("heldValue").innerHTML = holdingValue;
    }
    else if(operatorState === 'Multiply'){
        let x = 0;
            if(passingInput.includes('.') || holdingValue.includes('.')){
                x = parseFloat(holdingValue) * parseFloat(passingInput);
            }
            else{
                x = parseInt(holdingValue) * parseInt(passingInput);
            }
        holdingValue = x.toString();
        document.getElementById("heldValue").innerHTML = holdingValue;
    }
    else if(operatorState === 'Divide'){
        if (passingInput === '0'){
            clearScreen();
            alert("Dividing by 0? That's a terrible thing to do - Clearing input");
        }
        else{
            let x = 0;
                if(passingInput.includes('.') || holdingValue.includes('.')){
                    x = parseFloat(holdingValue) / parseFloat(passingInput);
                }
                else{
                    x = parseInt(holdingValue) / parseInt(passingInput);
                }
            holdingValue = x.toString();
            document.getElementById("heldValue").innerHTML = holdingValue;
        }
    }
    else if(operatorState === 'Default'){
        holdingValue = passingInput;
        passingInput = '';
            // Checks to see if holdingValue has floating point, then fixes it to 2 decimal points
            if(holdingValue.includes('.')){
                holdingValue = parseFloat(holdingValue).toFixed(2);
                holdingValue = holdingValue.toString();
            }
        document.getElementById("heldValue").innerHTML = holdingValue;
        document.getElementById("passingValue").innerHTML = passingInput;
    }
    // converts holding value to scientific e notation if value is above 1000000000
    if(holdingValue > 1000000000){
        holdingValue = parseInt(holdingValue)
        holdingValue = holdingValue.toExponential(3);
        document.getElementById("heldValue").innerHTML = holdingValue;
    }
}
    operatorState = 'Default';
    passingInput = '';
    document.getElementById("passingValue").innerHTML = passingInput;
}

console.log("Made by MeeseGod for The Odin Project 🦌 (https://github.com/MeeseGod)")