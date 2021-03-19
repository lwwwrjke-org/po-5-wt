function sum (i) {
    var s1 = i;
    var s = i - 2;
    var s3 = s1  - 1;
    var result = s3 + s;
    return  result;
}

function task_3 () {
    let i = prompt("Введите исходное число ");
    if(isNaN(i)) {
        alert("Данные не число");
        Error;
    }
    else {
        i = Number.parseInt(i);
        if(i < 1) {
            alert("Неверное число");
            ExtensionScriptApis;
        }
    }
    if(i === 1) alert("Результат: " + 0);
    else {
        alert (sum(i));
    }
}