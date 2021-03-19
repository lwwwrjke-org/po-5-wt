function st3() {
    function sum(i) {
        var s1 = i;
        var s = i - 2;
        var s3 = s1 - 1;
        var result = s3 + s;
        return result;
    }


    let i;
    i = prompt("Введите i")
    if (!parseInt(i)) {
        alert("Некорректный ввод");
        fail;
    }
    if (i < 1) {
        alert("Некорректный ввод");
        fail;
    }

    if (i == 1) alert("Результат: " + 0);
    else {
        alert(sum(i));
    }
}