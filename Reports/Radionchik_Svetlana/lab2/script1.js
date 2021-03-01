function task1() 
{
    while(true)
    {
        let num1=prompt('Введите первое число', );
        let num2=prompt('Введите второе число', );
        if (parseInt(num1))
        {
            if (parseInt(num2))
            {
                if(num1==num2)
                    alert("Числа равны");
                if(num1>num2)
                    alert("Второе число меньше");
                if(num2>num1)
                    alert("Первое число меньше");
            }
            else
            {
                alert ("Второй ввод - не число");
                return false;
            }
        }
        else
        {
            alert ('Первый ввод - не число');
            return false;
        }       
    }
}