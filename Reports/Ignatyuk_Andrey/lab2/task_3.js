function task_3(){
    let number = Number(prompt("Введите порядковый номер из ряда чисел Фибоначчи:"));

    if (Number.isNaN(number)) {
        alert ("Введено не число!");
    }
    else if (number < 1) {
        alert ("Введено неверное число!");
    }

    if (number === 1) {
        alert(0);
        return;
    }

    alert("Число: " + fibonacci(number - 1));
}

function fibonacci(n) {
    return (n < 2) ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
