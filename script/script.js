const buttons = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const currentDisplayElement = document.querySelector('.currentDisplay');
const previousDisplayElement = document.querySelector('.previousDisplay');
const decimal =  document.querySelector('.decimal');
const backspace = document.querySelector('.back');

let currentNumber = "";
let operator = "";
let previousNumber = "";

//Event Listener
buttons.forEach(button => button.addEventListener('click',(e) => {
    buttonValve(e.target.textContent);
}));
operators.forEach(operator => operator.addEventListener('click',(e) =>{
    operatorSelect(e.target.textContent)
}));
clearButton.addEventListener('click',resetValues)
equal.addEventListener('click',() => {
    if(currentNumber != "" && previousNumber != "")
    {
        calulationOperator();
    }
});
decimal.addEventListener('click',addDecimal);
backspace.addEventListener('click',removeValue)


//All Function

function calulationOperator()
{
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    switch(operator)
    {
        case "+":
            previousNumber = previousNumber + currentNumber;
            break
        case "-":
            previousNumber = previousNumber - currentNumber;
            break;
        case "*":
            previousNumber = previousNumber * currentNumber;
            break;
        case "/":
            if(currentNumber<=0)
            {
                previousNumber = 'Error';
                updatePreviousDisplay('');
                updatecurrentDisplay(previousNumber);
                operator = '';
                return;
            }
            previousNumber = previousNumber / currentNumber;
            break;
        case "%":
            previousNumber = previousNumber % currentNumber;
            break;
        default:
            console.log("No operator Selected");
            break;
    }
    previousNumber = roundNumber(previousNumber);
    previousNumber = previousNumber.toString();
    displayResult();

}

function roundNumber(number)
{
    return Math.round(number * 1000000)/1000000;
}


function displayResult()
{


    if(previousNumber.length<=11)
    {
        currentDisplayElement.textContent = previousNumber;
    }
    else
    {
        currentDisplayElement.textContent = previousNumber.slice(0,11) + '...';
    }
    previousDisplayElement.textContent = '';
    operator = '';
    currentNumber = '';
}



function buttonValve(number)
{
    if(previousNumber != "" && currentNumber != "" && operator === "")
    {
        previousNumber = '';
        currentDisplayElement.textContent = currentNumber;
    }
    if(currentNumber.length<=11)
    {      
        currentNumber += number;
        updatecurrentDisplay(currentNumber);
    }
   
}

function operatorSelect(selector)
{
    if(previousNumber === "")
    {
        previousNumber = currentNumber;
        previousNumber = currentNumber;
        operatorCheck(selector);
    }
    else if(currentNumber === "")
    {
        operatorCheck(selector);
    }
    else
    {
        calulationOperator();
        operator = selector;
        currentDisplayElement.textContent = '0';
        previousDisplayElement.textContent = previousNumber + " " + operator;
    }
}

function operatorCheck(text)
{
    operator = text;
    updatePreviousDisplay(previousNumber +' ' +operator);
    currentNumber= '';
    updatecurrentDisplay('');
}

function resetValues() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updatePreviousDisplay('');
    updatecurrentDisplay('0');
    
}

function updatecurrentDisplay(value) {
    currentDisplayElement.textContent = value;
}

function updatePreviousDisplay(value)
{
    previousDisplayElement.textContent = value;
}

function addDecimal()
{
    if(!currentNumber.includes('.'))
    {
        currentNumber += '.';
        currentDisplayElement.textContent = currentNumber;
    }
}

function removeValue()
{
    if(currentNumber!='')
    {
        currentNumber = currentNumber.slice(0,-1);
        currentDisplayElement.textContent = currentNumber;
        if(currentNumber === '')
        {
            currentDisplayElement.textContent = '0';
        }

    }
    if(currentNumber === '' && previousNumber!=0 && operator ==='')
    {
        previousNumber = previousNumber.slice(0,-1);
        currentDisplayElement.textContent = previousNumber;

    }
}



