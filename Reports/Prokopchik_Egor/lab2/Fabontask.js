function Fabontask() {
 let x = Number(prompt("Введите число x."));

    if (Number.isNaN(x)) {
        alert ("Введено не число");
        return;
    }
    else if (x <= 0) {
        alert ("Число должно быть больше нуля!");
        return;
    }

    if (x === 1) {
        alert(0);
        return;
    }

    alert(fibonacci(x - 1));
}

function fibonacci(n) {
    return (n <= 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
}