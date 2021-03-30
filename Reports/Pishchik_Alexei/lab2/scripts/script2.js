function task_2 () {
    let etaz = prompt("Введите количество этажей(1-25)");
    if(isNaN(etaz)) {
        alert("Данные не число");
        Error;
    }
    else {
        etaz = Number.parseInt(etaz);
        if(etaz < 1 || etaz > 25) {
            alert("Неверное число");
            Error;
        }
    }
    let kvart = prompt("Введите количество квартир на этаже(1-20)");
    if(isNaN(kvart)) {
        alert("Данные не число");
        Error;
    }
    else {
        kvart = Number.parseInt(kvart);
        if(etaz < 1 || kvart > 20) {
            alert("Неверное число");
            Error;
        }
    }
    let pod = prompt("Введите количество подъездов(1-10)");
    if(isNaN(pod)) {
        alert("Данные не число");
        Error;
    }
    else {
        pod = Number.parseInt(pod);
        if(etaz < 1 || pod > 10) {
            alert("Неверное число");
            Error;
        }
    }
    let max_kvart = pod * kvart * etaz;
    let num_kvart = prompt(" Введите номер квартиры (Максимум " + max_kvart + ")");
    if(isNaN(num_kvart)) {
        alert("Данные не число");
        Error;
        
    }
    else {
        num_kvart = Number.parseInt(num_kvart);
        if(num_kvart < 1 || num_kvart > max_kvart) {
            alert("Неверное число");
            Error;
        }
    }
    alert("Квартира " + num_kvart + " находится в " + Math.ceil(num_kvart / kvart / etaz) + " подъезде");
    }