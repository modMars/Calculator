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
            let words = ["STOP IT NOW", "That's just irresponsible", "HOW DARE YOU?", "Wooo infinity!", "I don't like you."]
            
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
//This function will delete the last character in the display
function DeleteDisplay(){
    display.textContent = display.textContent.slice(0,-1);
}
//This function is used as a callback function on the 'equal' event listener as well as the operators event listener
function operatorCallback(){
    point.classList.remove('disabled');
    let str = display.textContent
    let array = str.split(/([*+/-])/g)
    if(array[2] != "")
    {
        if(array.length === 3)
        operate(array[0],array[1],array[2])
    }
    else return
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


/**********************************MAIN****************************************/
//Variable Declaration
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
    let array = str.split(/([*+/-])/g)
    if(display.textContent != '')
        {
            if(display.textContent.match(/([*+/-])/g) == null)
            {
                if(display.textContent.length < 38)
                display.append(operator);
            }
            else if(display.textContent.match(/([*+/-])/g) != null)
            {
                operatorCallback();
                DeleteDisplay();
                display.append(operator)
                return;
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
