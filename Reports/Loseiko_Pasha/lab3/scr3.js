function matrix() {
    let str = prompt("Введите число строк");
    if (isNaN(str)) {
        alert("Ошибка! Введите число!");
        fail;
    }
    if(str <=0) {
        alert("Неверное число");
        fail;
    }
    let stl = prompt("Введите число столбцов");
    if (isNaN(stl)) {
        alert("Ошибка! Введите число!");
        fail;
    }
    if(stl <=0) {
        alert("Неверное число");
        fail;
    }
    sr = Number.parseInt(str);
    sl = Number.parseInt(stl);
    var mass = [], mass2 = [], mass3 = [];
    mass = CreateMatrix(sr, sl);
    mass2 = CreateMatrix(sr, sl);
    alert("Матрица 1: \n" + Print(mass,str));
    alert("Матрица 2: \n" + Print(mass2,str));
    mass3 = SumMatrix(mass,mass2);
    alert("Сумма матриц: \n"+ Print(mass3,str));
}

function CreateMatrix(a, b) {
    var matrix= [], i, j;

    for(i = 0; i < b; i++){
        var helpM = [];
        for(j = 0; j < a; j++){
            var values = Math.floor(Math.random()*100);
            helpM.push(values);
        }
        matrix.push(helpM);
    }
    return matrix;
}

function Print(n, m) {
    let print = "";
    for(i=0; i<m; i++) {
        print += n[i];
        if(i!=m-1) {
            print+="\n";
        }
    }
    return print;
}

function SumMatrix(mass,mass2) {
    var sum= mass;
    for(let i = 0; i < mass.length; i++) {
        for(let j = 0; j < mass[i].length; j++) {
            sum[i][j] += mass2[i][j];
        }
    }
    return sum;
}

