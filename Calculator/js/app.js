document.getElementById('calculate').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    let result = 0;
    let error = null;

    if (isNaN(number1) || isNaN(number2)) {
        error = 'Please enter valid numbers.';
    } else {
        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                if (number2 === 0) {
                    error = 'Division by zero is not allowed.';
                } else {
                    result = number1 / number2;
                }
                break;
            default:
                error = 'Invalid operation.';
        }
    }

    const resultElement = document.getElementById('result');
    if (error) {
        resultElement.classList.remove('alert-secondary');
        resultElement.classList.add('alert-danger');
        resultElement.textContent = error;
    } else {
        resultElement.classList.remove('alert-danger');
        resultElement.classList.add('alert-secondary');
        resultElement.textContent = `Result: ${result}`;
    }
    resultElement.style.display = '';
});
