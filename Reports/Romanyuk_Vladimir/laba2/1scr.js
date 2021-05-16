function task_1 () {
    while (true){
        let num_1 = Number(prompt("Введите число #1"));
        if (Number.isNaN(num_1)){
            alert("Первый ввод - не число");
            return;
        }

        let num_2 = Number(prompt("Введите число #2"));
        if (Number.isNaN(num_2)){
            alert("Второй ввод - не число");
            return;
        }

        if (num_1 == num_2){
            alert("Числа равны");
        } else if (num_1 < num_2){
            alert("Первое число меньше");
        } else if (num_1 > num_2){
            alert("Второе число меньше");
        }
    }
}