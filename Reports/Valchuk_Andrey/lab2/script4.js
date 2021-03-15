function getDayOfWeek() {
    let month = Number(prompt());
    validate(month, 1, 12);

    let day = Number(prompt());
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

function validate(number, min, max) {
    if (Number.isNaN(number)) {
        throw "Введено не число";
    }
    else if (number < min || number > max) {
        throw "Введенное число вне допустимого диапазона";
    }
}