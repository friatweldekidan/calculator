document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector('.display');
    let firstOperand = '';
    let operator = '';
    let secondOperand = '';
    let result = '';

    // Helper function to update display
    const updateDisplay = (value) => {
        display.textContent = value;
    };

    // Helper function to clear calculator
    const clearCalculator = () => {
        firstOperand = '';
        operator = '';
        secondOperand = '';
        result = '';
        updateDisplay('0');
    };

    // Event listeners for number buttons
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            if (operator === '') {
                firstOperand += button.textContent;
                updateDisplay(firstOperand);
            } else {
                secondOperand += button.textContent;
                updateDisplay(secondOperand);
            }
        });
    });

    // Event listener for decimal button
    document.querySelector('.decimal').addEventListener('click', () => {
        if (operator === '' && !firstOperand.includes('.')) {
            firstOperand += '.';
            updateDisplay(firstOperand);
        } else if (operator !== '' && !secondOperand.includes('.')) {
            secondOperand += '.';
            updateDisplay(secondOperand);
        }
    });

    // Event listener for operator buttons
    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            if (firstOperand !== '' && operator === '' && secondOperand === '') {
                operator = button.textContent;
                updateDisplay(operator);
            }
        });
    });

    // Event listener for equals button
    document.querySelector('.equals').addEventListener('click', () => {
        if (firstOperand !== '' && operator !== '' && secondOperand !== '') {
            result = operate(operator, parseFloat(firstOperand), parseFloat(secondOperand));
            updateDisplay(result);
            firstOperand = result.toString();
            operator = '';
            secondOperand = '';
        }
    });

    // Event listener for clear button
    document.querySelector('.clear').addEventListener('click', () => {
        clearCalculator();
    });

    // Function to perform operation
    const operate = (operator, num1, num2) => {
        switch(operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if (num2 === 0) {
                    updateDisplay("Error: Cannot divide by zero");
                    return '';
                } else {
                    return num1 / num2;
                }
            default:
                return '';
        }
    };
});
