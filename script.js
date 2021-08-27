let calcContainer = document.createElement("div");
calcContainer.setAttribute("id", "calcContainer");
document.body.append(calcContainer);


// Functions
function add(x,y){
    return (x + y);
};

function subtract(x,y){
    return (x - y);
};

function multiply(x,y){
    return (x * y);
};

function divide(x,y){
    return (x / y);
};

function operate(z, x, y){
    if(z == "+"){
        add(x, y);
    }
    else if(z == "-"){
        subtract(x, y);
    }
    else if(z == "*"){
        multiply(x, y);
    }
    else if(z == "/"){
        divide(x,y);
    }
}


console.log("Made by MeeseGod for The Odin Project 🦌")