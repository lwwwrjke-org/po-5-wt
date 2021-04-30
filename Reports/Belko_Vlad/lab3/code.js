
function places()
{
	let Mass2 = [];
	let Mass = rand();
	alert(Mass);
	let first = +prompt("Введите номер первого элемента массива: ");
	let last = +prompt("Введите номер последнего элемента массива: ");
	if (first < last)
	{
		first--;
		last--;
		let step = +prompt("Укажите шаг: ");
		if (step > 0)
		{
			for (let i = first; i <= last; i += step)
			{
				Mass2[i] = Mass[i];
			}
			alert(Mass2);
		}

		if (step < 0)
		{
			alert(first);
		}
	}

	else if (first > last)
	{
		let step = +prompt("Укажите шаг: ");
		if (step < 0)
		{
			Mass = Mass.reverse();
			first = Mass.length - first;
			last = Mass.length - last;
			for (let i = first; i <= last; i -= step)
			{
				Mass2[i] = Mass[i];
			}
			alert(Mass2);
		}
		
		else if (step > 0)
		{
			alert(first);
		}
	}
	else alert("Ошибка");
}

function rand()
{
	let leng = prompt("Укажите длину массива: ");
	let max = prompt("УКажите максимальное значение элемента массива: ")
	let mass = new Array();
	for (let i = 0; i < leng; i++)
	{
		mass[i] = Math.floor(Math.random() * max);
	}
	return mass;
}

