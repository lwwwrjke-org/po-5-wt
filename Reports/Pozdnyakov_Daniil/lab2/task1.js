function task1()
{
        let FirstNum = Number(prompt("Введите первое число: "));
        if(Number.isNaN(FirstNum)){
            alert("Это не число!");
            return;
        }

        let SecondNum = Number(prompt("Введите второе число: "));
        if(Number.isNaN(SecondNum)){
            alert("Это не число!");
            return;
        }

        if(FirstNum === SecondNum){
            alert("Числа равны!");
        }

        if(FirstNum < SecondNum){
            alert("Первое число меньше!");
        }

        if(FirstNum > SecondNum){
            alert("Второе число меньше!");
        }
}