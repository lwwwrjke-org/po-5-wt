function zadanie1()
{
        let First = Number(prompt("Введите первое число."));
        if(Number.isNaN(First))
        {
            alert("первый ввод - не число!");
            return;
        }

        let Second = Number(prompt("Введите второе число."));
        if(Number.isNaN(Second))
        {
            alert("первый ввод - не число!");
            return;
        }

        if(First === Second)
        {
            alert("Числа равны!");
        }

        if(First < Second)
        {
            alert("Первое число меньше!");
        }

        if(First > Second)
        {
            alert("Второе число меньше  !");
        }
}