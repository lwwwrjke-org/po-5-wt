function task4(){
	let DaysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	
    let month = Number(prompt("Введите номер месяца (от 1 до 12)") - 1);
	if (!valid(month,0,11)) return;
	
    let day = Number(prompt("Введите число месяца (от 1 до 31)"));
	if (!valid(day,1,31)) return;
    let year = 2016;
	
	
    let date = new Date(year, month, day);
    if (date.getFullYear() == year && date.getMonth() == (month) && date.getDate() == day) 
		alert(day+"."+(month+1)+"."+year+" было(а) "+DaysOfWeek[date.getDay()]);
    else alert("В этом месяце нет такого дня!");
}
function valid(num, min,max){
	if(Number.isNaN(num)||num < min || num > max|| !Number.isInteger(num)) {
		alert("Не верные входные данные!!!");
		return false;
	}
	return true;
}