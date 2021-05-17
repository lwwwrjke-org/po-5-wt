function task3()
{
    let N = Number(prompt("Введите число N: "));
	
    if (Number.isNaN(N))
	{
        alert ("Введено не число");
        return;
    }
    else if (N <= 0)
	{
        alert ("Число должно быть больше нуля!");
        return;
    }

    if (N === 1)
	{
        alert(0);
        return;
    }

    alert(Fib(N - 1));
}

function Fib(n)
{
    return (n <= 1) ? n : Fib(n - 1) + Fib(n - 2);
}