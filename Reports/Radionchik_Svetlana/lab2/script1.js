function NumComparis() {
    let condit = true;
    while (condit) {
        let num1 = prompt('Введите первое число');
        let num2 = prompt('Введите второе число');
        num1 = Number(num1);
        num2 = Number(num2);
        if (parseInt(num1, 10)) {
            if (parseInt(num2, 10)) {
                if (num1 == num2) {
                    alert('Числа равны');
                }
                if (num1 > num2) {
                    alert('Второе число меньше');
                }
                if (num2 > num1) {
                    alert('Первое число меньше');
                }
            } else {
                alert('Второй ввод - не число');
                condit = false;
            }
        } else {
            alert('Первый ввод - не число');
            condit = false;
        }
    }
}
