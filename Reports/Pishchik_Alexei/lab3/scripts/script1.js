function task_1 () {
    let num_1 = prompt("Введите начало диапазона");
    if (isNaN(num_1)) {
        alert("Не число");
        ExtensionScriptApis;
    }
    if(num_1 <=0) {
        alert("Число не положительное");
        ExtensionScriptApis;
    }
    num1 = Number.parseInt(num_1);
    let num_2 = prompt("Введите конец диапазона ");
    if (isNaN(num_2)) {
        alert("Не число");
        ExtensionScriptApis;
    }
    if(num_2 <=0 || num_2 === num1) {
        alert("Число не положительное");
        ExtensionScriptApis;
    }
    num2 = Number.parseInt(num_2);
    let num_3 = prompt("Введите шаг");
    if (isNaN(num_3)) {
        alert("Не число");
        ExtensionScriptApis;
    }
    num3 = Number.parseInt(num_3);
    if(num1 < num2){
        if(num3 <= 0 || num3 > num2) {
            alert("Ошибка!");
            ExtensionScriptApis;
        }
    }
    if(num1 > num2){
        if(num3 >= 0 || Math.abs(num3) > num1) {
            alert("Ошибка!");
            ExtensionScriptApis;
        }
    }
    alert ("[" + range(num1, num2, num3) + "]");
}

function range (num1, num2, num3) {
    var mass = [];
    if(num3 < 0) {
        for(var i = num1; i >= num2; i = i + num3) {
            mass.push(i);   
        }
    }
    else {
        for(var i = num1; i < num2 + 1; i = i + num3) {
            mass.push(i);   
        }
    }
    return mass;
}