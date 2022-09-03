/*Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
add
subtract
multiply
divide*/

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
        displayResult.textContent = `${n1} \+ ${n2} \= ${result}`
        display.textContent = result;
        break;

        case '-':
        result = n1-n2
        ClearDisplay();
        if(isInt(result) == false)
        {
            result = result.toFixed(3);
        }
        displayResult.textContent = `${n1} \- ${n2} \= ${result}`
        display.textContent = result;
        break;

        case '/':
        result = n1/n2
        ClearDisplay();
        if(isInt(result) == false)
        {
            result = result.toFixed(3);
        }
        displayResult.textContent = `${n1} \/ ${n2} \= ${result}`
        display.textContent = result;
        break;

        case '*':
        result = n1*n2
        ClearDisplay();
        if(isInt(result) == false)
        {
            result = result.toFixed(3);
        }
        displayResult.textContent = `${n1} \* ${n2} \= ${result}`
        display.textContent = result;
        break;
    }
}
function ClearDisplay(){
    display.textContent = '';
    displayResult.textContent = '';
}

function DeleteDisplay(){
    display.textContent = display.textContent.slice(0,-1);
}

function operatorCallback(){
    let str = display.textContent
    let array = str.split(/([*+/-])/g)
    if(array.length == 3)
    operate(array[0],array[1],array[2])
    else //Todo flashing syntax error message.
    {
        alert("error");
    }
}

function addPoint(num1,op,num2){
    display.append('.');
}

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

var input = "";
var operator = "";
const num = document.querySelectorAll('[data-num]');
const op = document.querySelectorAll('[data-op]');
const display = document.querySelector('.displayTextbox');
const displayResult =  document.querySelector('.result');
const clear = document.getElementById('clear');
const del = document.getElementById('delete')
const equal = document.getElementById('equal');
const point = document.getElementById('point');

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
    if(display.textContent != '')
        {
            if(display.textContent.match(/([*+/-])/g) == null)
            {
                if(display.textContent.length < 38)
                display.append(operator);
                else
                return
            }
            else
            {
                operatorCallback();
                display.append(e.target.textContent);
            }
        }
        else 
        return;
    })
})

clear.addEventListener('click',ClearDisplay);
del.addEventListener('click',DeleteDisplay)
point.addEventListener('click', addPoint)
equal.addEventListener('click', operatorCallback)
