
let task_1 = function()
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
			alert(`число ${one} равно числy ${two}`);
		}
		else if(one < two)
		{
			alert(`число ${one} меньше числа ${two}`);
		}
		else 
		{
			alert(`число ${one} больше числа ${two}`);
		}
	}
}

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

let task_3 = function()
{
	let Fibonacci = prompt("Введите порядковый номер числа Фибоначчи: ");
	function fib(Fibonacci) 
	{
  		return Fibonacci <= 1 ? Fibonacci : fib(Fibonacci - 1) + fib(Fibonacci - 2);
	}
	alert(fib(Fibonacci));
}

let task_4 = function()
{
	function getWeekDay(date) 
	{
		let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	    return days[date.getDay()];
    }
    let months = +prompt("Введите номер месяца: ");
    months--;
    let day = +prompt("Введите число месяца: ");
	let date = new Date(2016, months, day); 
	alert( getWeekDay(date) ); 
}

let final = function()
{
	let ask = prompt("Какое задание проверяем? ", "1, 2, 3 или 4...");
	switch(ask)
	{
		case '1':
			task_1();
			break;
		case '2':
			task_2();
			break;
		case '3':
			task_3();
			break;
		case '4':
			task_4();
			break;
		default:
			alert("Неверный ввод");
			break;
	} 
}

final();
let bye = true;
while(bye)
{
	let Exit = confirm("На этом всё?")
	if(Exit) 
	{
		alert("Пока."); 
		bye = false;
	}
	else final();
}	
