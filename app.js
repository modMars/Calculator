/*Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
add
subtract
multiply
divide*/

/**********************************FUNCTIONS***********************************/
//This function takes three values provided by the operatorCallback() function and processes them to get the desired result, finally it checks if the result has any decimal points in it with the isInt() function and appends either an int or a float to the display and display result.
function operate(num1,op,num2){
    n1 = Number(num1);
    n2 = Number(num2);

    switch(op)
    {
        case '+':
        result = n1+n2
        ClearDisplay();
        if(isInt(result) == false)
        {
            result = result.toFixed(3);
        }
        displayResult.textContent = `${n1} \+ ${n2} \=`
        display.textContent = result;
        break;

        case '-':
        result = n1-n2
        ClearDisplay();
        if(isInt(result) == false)
        {
            result = result.toFixed(3);
        }
        displayResult.textContent = `${n1} \- ${n2} \=`
        display.textContent = result;
        break;

        case '/':
        result = n1/n2
        ClearDisplay();
        if(n1 === 0 || n2 === 0)
        {
            let words = ["STOP IT NOW", "That's just irresponsible", "HOW DARE YOU?", "Wooo infinity!", "I don't like you.", "Infinity crashing is not a joke Jim!"]
            
            display.textContent = words[Math.floor(Math.random()*words.length)]
            setTimeout(() => {ClearDisplay()},2000)
            return;
        }
        if(isInt(result) == false)
        {
            result = result.toFixed(3);
        }
        displayResult.textContent = `${n1} \/ ${n2} \=`
        display.textContent = result;
        break;

        case '*':
        result = n1*n2
        ClearDisplay();
        if(isInt(result) == false)
        {
            result = result.toFixed(3);
        }
        displayResult.textContent = `${n1} \* ${n2} \=`
        display.textContent = result;
        break;
    }
}
//This function will clear the display and the result display
function ClearDisplay(){
    display.textContent = '';
    displayResult.textContent = '';
}

function ClearMain(){
    display.textContent = '';
}
//This function will delete the last character in the display
function DeleteDisplay(){
    display.textContent = display.textContent.slice(0,-1);
}
//This function is used as a callback function on the 'equal' event listener as well as the operators event listener
function operatorCallback(){
    wipe = true;
    point.classList.remove('disabled');
    array = Array.from(displayResult.textContent);
    let slic = array.slice(0, -1)
    let num1 = [];
    slic.forEach(element => {
        num1 += element;
    });
    num1 = Number(num1)
    console.log(num1,array[array.length-1],display.textContent)
    operate(num1, array[array.length-1], display.textContent);
    // operate(str, array[operator], display.textContent);

        // operate()
}
//This function appends a point to the display, if it finds a point in either of the sides of the operation it will disable the point button by adding a class name to it.
function addPoint(num1,op,num2){
    let array = display.textContent.split((/([*+/-])/g));
    console.log(array)
    if(array[2] === undefined)
    {
        if(array[0].includes('.'))
        {
            point.classList.add('disabled');
            return;
        }
        else
        display.append('.');
    }
    else if(array[2] != undefined)
    {
        if(array[2].includes('.'))
        {
            point.classList.add('disabled');
        }
        else
        display.append('.');
    }
}
//This function returns false if the parameter has decimal points
function isInt(num){
    if(num % 1 === 0)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

function buffer(){
    displayResult.textContent = display.textContent;
    ClearMain();
}
/**********************************MAIN****************************************/
//Variable Declaration
var input = "";
var operator = "";
var isPopulated = false;
var wipe;
const num = document.querySelectorAll('[data-num]');
const op = document.querySelectorAll('[data-op]');
const display = document.querySelector('.displayTextbox');
const displayResult =  document.querySelector('.result');
const clear = document.getElementById('clear');
const del = document.getElementById('delete')
const equal = document.getElementById('equal');
const point = document.getElementById('point');

//Event Listener Assignment.
num.forEach(e => {
    e.addEventListener('click', (e) => {
        input = (e.target.textContent);
        if(display.textContent.length < 38)
        {
            display.append(input);
        }
        else
        return
    });

});

op.forEach(e => {
    e.addEventListener('click',(e) =>{
    operator = (e.target.textContent);
    let str = display.textContent
    let strResult = displayResult.textContent;
    console.log(operator);

        if(str == "" && operator == "-")
        {
            display.append(operator);
        }
        if(str === '' || str === '.' || str ==='-')
        {
            return;
        }
        else if(wipe === false)
        {
            operatorCallback();
        }
        if(str != "" || strResult === "")
        {
            display.append(operator);
            buffer();
            wipe = false;
        }
    })
})

clear.addEventListener('click',ClearDisplay);
del.addEventListener('click',DeleteDisplay)
point.addEventListener('click', addPoint)
equal.addEventListener('click', operatorCallback)
