const buttons = document.querySelectorAll('.btn');
function buttonValue(e)
{
    const display = document.querySelector('.display');
    display.textContent = this.textContent;
    num = this.textContent;
    console.log(this.textContent);
}

buttons.forEach(button => button.addEventListener('click',buttonValue));
