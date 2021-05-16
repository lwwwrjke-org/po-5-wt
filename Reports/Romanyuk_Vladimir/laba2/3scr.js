function sum (i) {
    if(i == 0 || i == 1) return i;
    return  sum(i-2) + sum(i-1);
}

function task_3 () {
    let i = prompt("Введите исходное число ");
    if(isNaN(i)) {
        alert("Данные не число");
        Error;
    }
    else {
        i = Number.parseInt(i);
        if(i < 0) {
            alert("Неверное число");
            ExtensionScriptApis;
        }
    }
    alert ("Результат: " + sum(i));
}