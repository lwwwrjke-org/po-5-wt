function fibonacci(n)
{
	if (n == 1 || n == 2)
		return 1;
	else
		return (fibonacci(n-1) + fibonacci(n-2));
}

function task3()
{
	let index = prompt("Enter index of Fibonacci number {1, ...}");

	if (isNaN(index))
	{
		alert("Invalid data");
		return;
	}
	if (index < 1 || !Number.isInteger(index))
	{
		alert("Invalid data");
		return;
	}

	let number = fibonacci(index);

	alert("Fibonacci number under the index " + index + " is " + number);
}