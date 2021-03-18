function task3(){
    let i = Number(prompt("Введите число i."));

    if (Number.isNaN(i)) {
        alert ("Введено не число");
        return;
    }
    else if (i <= 0) {
        alert ("Число должно быть больше нуля!");
        return;
    }

    if (i === 1) {
        alert(0);
        return;
    }

    alert(fibonacci(i - 1));
}

function fibonacci(n) {
    return (n <= 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
