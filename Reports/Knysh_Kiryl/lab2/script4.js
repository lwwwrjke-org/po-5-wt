function task4() {
    let month = prompt('Введите номер месяца 1..12');
    let dateMonth = month - 1;
    let day = prompt('Введите число месяца 1..31');
    const year = 2016;
    let DaysOfWeek = ['Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'];
    let date = new Date(year, dateMonth, day);
    if (date.getFullYear() == year && date.getMonth() == (dateMonth) && date.getDate() == day) {
        alert(DaysOfWeek[date.getDay()]);
    } else {
        alert('Такого дня не существует');
    }
}