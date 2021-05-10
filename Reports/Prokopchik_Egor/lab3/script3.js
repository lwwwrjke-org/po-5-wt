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
    var mass = [], mass2 = [], mass3 = [];
    mass = createMatrix(num1, num2);
    mass2 = createMatrix(num1, num2);
    alert("Матрица 1: \n" + PRINT(mass,num_1));
    alert("Матрица 2: \n" + PRINT(mass2,num_1));
    mass3 = sumMatrix(mass,mass2);
    alert("Сумма матриц равна = \n"+ PRINT(mass3,num_1));
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

function sumMatrix(mass,mass2) {
    var matrix= mass;
    for(let i = 0; i < mass.length; i++) {
        for(let j = 0; j < mass[i].length; j++) {
            matrix[i][j] += mass2[i][j];
        }
    }
    return matrix;
}

function PRINT(matr, rows) {
    let str = "";
    for(i=0; i<rows; i++) {
        str += matr[i];
        if(i!=rows-1) {
            str+="\n";
        }
    }
    return str;
}