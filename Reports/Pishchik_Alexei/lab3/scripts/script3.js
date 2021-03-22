function main() {
    let num_1 = prompt("Введите число строк");
    if (isNaN(num_1)) {
        alert("Не число");
        ExtensionScriptApis;
    }
    if(num_1 <=0) {
        alert("Не верное число");
        ExtensionScriptApis;
    }
    let num_2 = prompt("Введите число столбцов");
    if (isNaN(num_2)) {
        alert("Не число");
        ExtensionScriptApis;
    }
    if(num_2 <=0) {
        alert("Не верное число");
        ExtensionScriptApis;
    }
    num1 = Number.parseInt(num_1);
    num2 = Number.parseInt(num_2);
    var mass = [], mass2 = [];
    mass = createMatrix(num1, num2);
    mass2 = createMatrix(num1, num2);
    alert("Матрица 1:  " + mass);
    alert("Матрица 2:  " + mass2);
    alert(`Сумма матрицы 1 равна = ${sumMatrix(mass)}`);
    alert(`Сумма матрицы 2 равна = ${sumMatrix(mass2)}`);
    s1 = Number.parseInt(sumMatrix(mass));
    s2 = Number.parseInt(sumMatrix(mass2));
    sum = s1 + s2;
    alert("Сумма матриц равна = " + sum);
}

function createMatrix(n, m) {
    var matrix= [], i, j;

    for(i = 0; i < m; i++){
        var row = [];
        for(j = 0; j < n; j++){
            var value = Math.floor(Math.random()*100);
            row.push(value);
        }
        matrix.push(row);
    }
    return matrix;
}

function sumMatrix(arr) {
    var sum = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}