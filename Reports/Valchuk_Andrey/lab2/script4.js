function getDayOfWeek() {
    let month = Number(prompt("Введите номер месяца"));
    validate(month, 1, 12);

    let day = Number(prompt("Введите число"));
    validate(day, 1, 31);

    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", 
                "Пятница", "Суббота"];

    let date = new Date(2016, month - 1, day);

    if (date.getFullYear() === 2016 && date.getMonth() === month - 1 && date.getDate() === day) {
        alert(days[date.getDay()]);
    }
    else {
        alert("Такого дня не было");
    }
}