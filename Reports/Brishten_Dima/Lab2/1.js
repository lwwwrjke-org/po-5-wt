function one(){
while (true) 
{
    var num1 = prompt("Введите первое число");
    var num2 = prompt("Введите второе число");
    num1 = Number(num1);
    num2 = Number(num2);
    if (isNaN(num1))
    {
        alert("Первый ввод не число");
        break;
    }
    if (isNaN(num2))
    {
        alert("Второй ввод не число");
        break;
    }
    if (parseInt(num1, 10) && parseInt(num2, 10))
    {
    if (num1 == num2)
        alert("Числа равны");
    if (num1 > num2)
        alert("Второе число меньше");
    if (num2 > num1)
        alert("Первое число меньше") 
    }
}
}