function task4() 
{
    let month=prompt("Введите номер месяца 1..12");
    let day = prompt("Введите число месяца 1..31");
    let DaysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
    let date = new Date(2016, month-1, day);
    alert(DaysOfWeek[date.getDay()-1]);
}