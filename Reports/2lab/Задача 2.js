let Задача_2 = function()
{
	function Floor()
	{
		let floor = prompt("Введите кол-во этажей в доме: ");
		if(floor < 1)
		{
			alert("Введеное число слишком маленькое. Диапазон ввода от 1 до 100");
			Задача_2();
		}
		else if(floor > 100)
		{
			alert("Введеное число слишком большое. Диапазон ввода от 1 до 100");
			Задача_2();
		}
		else if(!parseInt(floor))
		{
			alert("Введённое значение не является числом!");
			Задача_2();
		} else return floor;
	}

	function Entrance()
	{
		let entrance = prompt("Введите кол-во подъездов в доме: ");
		if(entrance < 1)
		{
			alert("Введеное число слишком маленькое. Диапазон ввода от 1 до 62");
			Задача_2();
		}
		else if(entrance > 62)
		{
			alert("Введено число слишком большое. Диапазон ввода от 1 до 62");
			Задача_2();
		}
		else if(!parseInt(entrance))
		{
			alert("Введённое значение не является числом!");
			Задача_2();
		} else return entrance;
	}

	function Apartments()
	{
		let apartments = prompt("Введите кол-во квартир на одном этаже: ");
		if(apartments < 1)
		{
			alert("Введеное число слишком маленькое. Диапазон ввода от 1 до 8");
			Задача_2();
		}
		else if(apartments > 8)
		{
			alert("Введеное число слишком большое. Диапазон ввода от 1 до 8");
			Задача_2();
		}
		else if(!parseInt(apartments))
		{
			alert("Введённое значение не является числом!");
			Задача_2();
		} else return apartments;
	}

	let floor = Floor();
	let entrance = Entrance();
	let apartments = Apartments();
	let MaxApartment = floor * entrance * apartments;

	alert("Кол-во этажей в доме: (" + floor + ")  Кол-во подъездов в доме: (" +  entrance + ")  Кол-во квартир на одном этаже: (" + apartments + ")");
	
	let YourApartment = prompt("Введите номер квартиры для нахождения подъезда в котором она находится: ");
	if(YourApartment > MaxApartment || YourApartment < 0)
	{
		alert("Такой квартиры не существует!");
	}
	else 
	{
		for(let i = 1; i <= entrance; i++)
		{
			if((i-1)*floor*apartments <= YourApartment && YourApartment <= i*floor*apartments)
			{
				alert(`Квартира с номером ${YourApartment} находится в подъезде № ${i}`);
				break;
			}
		}
	}
}