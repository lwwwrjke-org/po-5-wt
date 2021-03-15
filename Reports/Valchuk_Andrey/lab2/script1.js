function compare() {
    while (true) {
        let num1 = Number(prompt("Введите первое число"));
        if (Number.isNaN(num1)) {
            alert("Первый ввод - не число.");
            return;
        }

        let num2 = Number(prompt("Введите второе число"));
        if (Number.isNaN(num2)) {
            alert("Второй ввод - не число.");
            return;
        }

        if (num1 === num2) {
            alert("Числа равны.");
        }
        else if (num1 < num2) {
            alert("Первое число меньше.");
        }
        else {
            alert("Второе число меньше.");
        }
    }
}