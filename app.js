/*Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
add
subtract
multiply
divide*/

function operate(num1,op,num2){
    console.log('operate')
}
function ClearDisplay(){
    display.textContent = '';
}

function DeleteDisplay(){
    display.textContent = display.textContent.slice(0,-1);
}

function findOperator(){
    
}

var input = "";
var operator = "";
const num = document.querySelectorAll('[data-num]');
const op = document.querySelectorAll('[data-op]');
const display = document.querySelector('.display');
const clear = document.getElementById('clear');
const del = document.getElementById('delete')
const equal = document.getElementById('equal');

num.forEach(e => {
    e.addEventListener('click', (e) => {
        input = (e.target.textContent);
        if(display.textContent.length < 11)
        {
            display.append(input);
            console.log(display.textContent)
        }
        else
        return
    });
});

op.forEach(e => {
    e.addEventListener('click',(e) =>{
        operator = (e.target.textContent);
        console.log(display.textContent);
    if(display.textContent != '')
        {
            if(display.textContent.match(/([\*-\/])/g) == null)
            {
                if(display.textContent.length < 11)
                display.append(operator);
                else
                return
            }
        }
        else 
        return;
    })
})

clear.addEventListener('click',ClearDisplay);
del.addEventListener('click',DeleteDisplay)
equal.addEventListener('click', (e) => {
    var str = display.textContent
    var array = str.split(/([\*-\/])/g)
    console.log(array.length)
    if(array.length == 3)
    operate(array[0],array[1],array[2])
    else //Todo flashing syntax error message.
    {
        display.
    }
})