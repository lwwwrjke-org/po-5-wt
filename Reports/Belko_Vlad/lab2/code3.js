let task_3 = function()
{
	let Fibonacci = prompt("Введите порядковый номер числа Фибоначчи: ");
	function fib(Fibonacci) 
	{
  		return Fibonacci <= 1 ? Fibonacci : fib(Fibonacci - 1) + fib(Fibonacci - 2);
	}
	alert(fib(Fibonacci));
}