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
	let bye = true;
}