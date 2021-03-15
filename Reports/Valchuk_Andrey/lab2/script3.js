function getFibNumber() {
    let index = Number(prompt());
    
    if (Number.isNaN(index)) {
        throw "Введено не число";
    }
    else if (index <= 0) {
        throw "Число не может быть меньшим либо равным 0";
    }

    if (index === 1) {
        alert(0);
        return;
    }

    alert(fibonacci(index - 1));
}

function fibonacci(n) {
    return (n <= 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
}