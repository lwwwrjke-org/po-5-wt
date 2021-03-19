function task_1 () {
while(true) {
    let num_1 = prompt("Введите первое число ");
    if (isNaN(num_1)) {
        alert("Первый ввод - не число");
        ExtensionScriptApis;
    }
    let num_2 = prompt("Введите второе число ");
    if (isNaN(num_2)) {
        alert("Первый ввод - не число");
        ExtensionScriptApis;
    }
    num1 = Number.parseInt(num_1);
    num2 = Number.parseInt(num_2);
    if (num1 == num2){
        alert("Числа равны");
    } else if (num1 > num2){
        alert("Второе число меньше");
    } else{
        alert("Первое число меньше");
    }
  }
}