function task_4 () {
    var day = prompt("Введите день (от 1 до 31)");
    if(isNaN(day)) {
        alert("Данные не число");
        Error;
    }
    else {
        day = Number.parseInt(day);
        if(day < 1 || day > 31) {
            alert("Неверное число");
            ExtensionScriptApis;
        }
    }
    var month = prompt("Введите месяц (от 1 до 12)");
    if(isNaN(month)) {
        alert("Данные не число");
        Error;
    }
    else {
        month = Number.parseInt(month);
        month--;
        if(month < 0 || month > 11) {
            alert("Неверное число");
            ExtensionScriptApis;
        }
    }
    var name_days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const year = 2016;

    let time = new Date(year, month, day);
    if (time.getMonth() === (month) && time.getDate() === day && time.getFullYear() === year) alert(`это было(а) ${name_days[time.getDay()]}`);
    else alert("В этом месяце нет такого дня!");
} 