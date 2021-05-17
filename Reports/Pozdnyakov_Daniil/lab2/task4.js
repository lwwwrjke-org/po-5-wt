function task4()
{
	let Month = Number(prompt("Введите месяц: "));
	if(Number.isNaN(Month))
	{
		alert("Введено не число!");
		return;
	}
	else if(Month < 1 || Month > 12)
	{
		alert("Число не входит в диапазон!");
		return;
	}

	
	let Day = Number(prompt("Введите день: "));
	if(Number.isNaN(Day))
	{
		alert("Введено не число!");
		return;
	}
	else if(Day < 1 || Day > 31)
	{
		alert("Число не входит в диапазон!");
		return;
	}
	
	
	let date = new Date(2016, Month - 1, Day);
	if (date.getFullYear() == 2016 && date.getMonth() == (Month - 1) && date.getDate() == Day)
	{
		switch (date.getDay())
		{
			case 0:
			  alert('Воскресенье');
			  break;
			case 1:
			  alert('Понедельник');
			  break;    
			case 2:
			  alert('Вторник');
			  break;
			case 3:
			  alert('Среда');
			  break;
			case 4:
			  alert('Четверг');
			  break;
			case 5:
			  alert('Пятница');
			  break;
			case 6:
			  alert('Суббота');
			  break;
			default:
			  alert('Неверная дата');
		}
	}
	else 
	{
		alert('Такого дня не существует');
    }
}