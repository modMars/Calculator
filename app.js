/*Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
add
subtract
multiply
divide*/

function operate(num1,num2,op){

}
function ClearDisplay(){
    display.textContent = '';
}

function DeleteDisplay(){
    display.textContent = display.textContent.slice(0,-1);
}

var input = "";
var operator = "";
const num = document.querySelectorAll('[data-num]');
const op = document.querySelectorAll('[data-op]');
const display = document.querySelector('.display');
const clear = document.getElementById('clear');
const del = document.getElementById('delete')

num.forEach(e => {
    e.addEventListener('click', (e) => {
        input = (e.target.textContent);
        console.log(input)
        if(display.textContent.length < 11)
        display.append(input);
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
            if(display.textContent.length < 11)
            display.append(operator);
            else
            return
        }
        else 
        return;
    })
})

clear.addEventListener('click',ClearDisplay);
del.addEventListener('click',DeleteDisplay)