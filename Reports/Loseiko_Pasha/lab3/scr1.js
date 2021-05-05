function massiv() {
    let start = prompt("Введите начало промежутка ");
    if (isNaN(start)) {
        alert("Ошибка! Введите число!");
        fail;
    }
    st = Number.parseInt(start);
    let end = prompt("Введите конец промежутка ");
    if (isNaN(end)) {
        alert("Ошибка! Введите число!");
        fail;
    }
    en = Number.parseInt(end);
    let step = prompt("Введите шаг");
    if (isNaN(step)) {
        alert("Ошибка! Введите число!");
        fail;
    }
    stp = Number.parseInt(step);
    if( (st < en && stp <= 0) || (st > en && stp >= 0)) {
        alert("Ошибка! Введённый диапазон задан неправильно! ");
        fail;
    }
    alert ("[" + range(st, en, stp) + "]");
}

function range (st, en, stp) {
    var mass = [];
    if(stp < 0) {
        for(var i = st; i >= en; i = i + stp) {
            mass.push(i);   
        }
    }
    else {
        for(var i = st; i < en + 1; i = i + stp) {
            mass.push(i);   
        }
    }
    return mass;
}