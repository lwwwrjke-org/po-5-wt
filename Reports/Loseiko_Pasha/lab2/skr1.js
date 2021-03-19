function st1() {
    while (true) {
        let a, b;
        alert("Введите два числа")
        a = prompt("Введите число а");
        b = prompt("Введите число b");
        if (!parseInt(a)) {
            alert("Первый ввод-не число");
            break;
        }
        if (!parseInt(b)) {
            alert("Второй ввод-не число");
            break;
        }
        if (a == b) {
            alert("Числа равны")
            break;
        } else if (a > b) {
            alert("Второе число меньше");
            break;
        } else {
            alert("Первое число меньше");
            break;
        }
    }
}

