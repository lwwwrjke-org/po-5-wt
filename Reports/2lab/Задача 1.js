let Задача_1 = function()
{
	let i = true;
	while(i)
	{
		let one = prompt("Введите первое число: ");

		if (!parseInt(one))
		{
			alert("Неверный ввод. Первый ввод - не число");
			break;
		}

		let two = prompt("Введите второе число: ");

		if (!parseInt(two))
		{
			alert("Неверный ввод. Второй ввод - не число");
			break;
		}

		if(one == two)
		{
			alert(`Значение (${one}) равно значению (${two})`);
			break;
		}
		else if(one > two)
		{
			alert(`Значение (${one}) меньше значения (${two})`);
			break;
		}
		else 
		{
			alert(`Значение (${one}) больше значения (${two})`);
			break;
		}
	}
}