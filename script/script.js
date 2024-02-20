const buttons = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const display = document.querySelector('.display');

let firstNumber = 0;
let operator = "";
let secondNUmber = 0;

function sum(num1,num2)
{
    return num1 + num2;
}

function subtract(num1,num2)
{

    return num1 - num2;
}

function multiply(num1,num2)
{
    return num1 * num2
}

function divide(num1,num2)
{
    return num1/num2;
}


function calulationOperator(operator,num1,num2)
{
    num1 = Number(num1);
    num2 = Number(num2);

    switch(operator)
    {
        case "+":
            display.textContent = sum(num1,num2);
            console.log(sum(num1,num2));
            break
        case "-":
            display.textContent = subtract(num1,num2);
            console.log(subtract(num1,num2));
            break;
        case "*":
            display.textContent = multiply(num1,num2);
            console.log(multiply(num1,num2));
            break;
        case "/":
            display.textContent = divide(num1,num2);
            console.log(divide(num1,num2));
            break;
        case "%":
            display.textContent = 'Method implemention In progress';
            break;
        default:
            console.log("No operator Selected");
            break;
    }
    firstNumber = "";
    secondNUmber = "";
    operator ="";
}



function buttonValve(e)
{
    if(!operator)
    {
        firstNumber += this.textContent;
        display.textContent = firstNumber;
        console.log(firstNumber);
    }
    else
    {   
        secondNUmber += this.textContent;
        display.textContent = secondNUmber;
        console.log(secondNUmber);
    }
   
}

function operatorSelect(e)
{
    operator = this.textContent;
    display.textContent = operator
    console.log(operator);
}

function resetValues() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.textContent = '';
    
}


buttons.forEach(button => button.addEventListener('click',buttonValve));
operators.forEach(operator => operator.addEventListener('click',operatorSelect));
clearButton.addEventListener('click',resetValues)
equal.addEventListener('click',function(){
    calulationOperator(operator,firstNumber,secondNUmber)

});

