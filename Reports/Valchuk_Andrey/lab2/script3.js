function getFibNumber() {
    let index = Number(prompt("Введите номер числа в последовательности Фибоначчи"));
    
    try {
        validateIndex(index);
        
        if (index === 1) {
            alert(0);
            return;
        }

        alert(fibonacci(index - 1));
    }
    catch (e) {
        alert(e);
    }
}

function fibonacci(n) {
    return (n <= 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function validateIndex(index) {
    if (Number.isNaN(index)) {
        throw "Введено не число";
    }
    else if (index <= 0) {
        throw "Число не может быть меньшим либо равным 0";
    }
}