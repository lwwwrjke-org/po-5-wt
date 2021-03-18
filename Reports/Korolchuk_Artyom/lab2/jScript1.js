function task1()
{
	let value1, value2;
	while(true)
	{
		value1 = prompt("Enter value number one");
		if (isNaN(value1))
		{
			alert("First value is not a number!");
			return;
		}
		value2 = prompt("Enter value number two");
		if (isNaN(value2))
		{
			alert("Second value is not a number!");
			return;
		}
		if (Number(value1) == Number(value2))
			alert("Value " + value1 + " equals value " + value2);
		else if (Number(value1) > Number(value2))
			alert("Value " + value1 + " greater than value " + value2);
		else
			alert("Value " + value1 + " smaller than value " + value2);
	}
}