function three()
{
var num = prompt("Введите порядок числа Фибоначчи");

function Fib(number)
{
    if (number == 1 || number == 2)
        return 1;
    
    return Fib(number-1) + Fib(number-2);
}

var number = Fib(num); 
alert("Число Фибоначчи: " + number);
}