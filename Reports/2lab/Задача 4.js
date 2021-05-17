let Задача_4 = function()
{
	function getWeekDay(date) 
	{
		let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	    return days[date.getDay()];
    }
    let months = +prompt("Введите число месяца (2016 года)): ");
	months--;
    let day = +prompt("Введите число дня (" + months+" месяца):" );
	let date = new Date(2016, months, day); 
	alert( date + " был день - "+ getWeekDay(date) ); 
	let bye = true;
} 