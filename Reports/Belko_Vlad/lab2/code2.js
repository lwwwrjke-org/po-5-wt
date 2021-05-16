let task_2 = function()
{
	function FindFloors()
	{
		let floors = prompt("Введите кол-во этажей в доме: ");
		if(floors < 1)
		{
			alert("Введено слишком маленькое число, диапазон ввода от 1 до 25");
			task_2();
		}
		else if(floors > 25)
		{
			alert("Введено слишком большое значение, диапазон ввода от 1 до 25");
			task_2();
		}
		else if(!parseInt(floors))
		{
			alert("Вводить нужно числа!");
			task_2();
		} else return floors;
	}

	function FindEntrances()
	{
		let entrances = prompt("Введите кол-во подъездов в доме: ");
		if(entrances < 1)
		{
			alert("Введено слишком маленькое число, диапазон ввода от 1 до 10");
			task_2();
		}
		else if(entrances > 25)
		{
			alert("Введено слишком большое значение, диапазон ввода от 1 до 10");
			task_2();
		}
		else if(!parseInt(entrances))
		{
			alert("Вводить нужно числа!");
			task_2();
		} else return entrances;
	}
		
	function FindFlats()
	{
		let flats = prompt("Введите кол-во квартир на одном этаже: ");
		if(flats < 1)
		{
			alert("Введено слишком маленькое число, диапазон ввода от 1 до 20");
			task_2();
		}
		else if(flats > 25)
		{
			alert("Введено слишком большое значение, диапазон ввода от 1 до 25");
			task_2();
		}
		else if(!parseInt(flats))
		{
			alert("Вводить нужно числа!");
			task_2();
		} else return flats;
	}
	let floors = FindFloors();
	let entrances = FindEntrances();
	let flats = FindFlats();

	alert("кол-во этажей в доме: " + floors + " кол-во подъездов в доме: " +  entrances + " кол-во квартир на одном этаже: " + flats);
	let MaxFlat = flats * entrances * floors;
	let YourFlat = prompt("Введите номер квартиры для определения подъезда в котором она находится: ");
	if(YourFlat > MaxFlat || YourFlat < 0)
	{
		alert("Такой квартиры не существует!");
	}
	else 
	{
		for(let i = 1; i <= entrances; i++)
		{
			if((i-1)*floors*flats <= YourFlat && YourFlat <= i*floors*flats)
			{
				alert(`Квартира с номером ${YourFlat} находится в подъезде № ${i}`);
				break;
			}
		}
	}
}