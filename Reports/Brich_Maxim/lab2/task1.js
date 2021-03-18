function task1(){
    while (true){
        let x1 = Number(prompt("Введите число #1"));
        if (Number.isNaN(x1)){
            alert("Первый ввод - не число");
            return;
        }

        let x2 = Number(prompt("Введите число #2"));
        if (Number.isNaN(x2)){
            alert("Второй ввод - не число");
            return;
        }

        if (x1 == x2){
            alert("Числа равны");
        } else if (x1 < x2){
            alert("Первое число меньше");
        } else if (x1 > x2){
            alert("Второе число меньше");
        };
    }
}  