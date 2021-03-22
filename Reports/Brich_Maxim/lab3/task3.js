function task_3() {
    var mass = [], mass2 = [], sum_mass = [];
    let row = Number(prompt("Введите число строк: "));
	if (!valid(row)) return;
    let col = Number(prompt("Введите число столбцов: "));
	if (!valid(col)) return;
    mass1 = add_mass(row, col);
    mass2 = add_mass(row, col);
    alert("Первая матрица:\n" + show_matr(mass1));
    alert("Вторая матрица:\n" + show_matr(mass2));
    sum_mass = sumMatrix(mass1,mass2);
    alert("Сумма матриц:\n"+ show_matr(sum_mass));
}

function add_mass(row, col) {
    var matr= [];
	
    for(var i = 0; i < col; i++){
        var rows = [];
        for(var j = 0; j < row; j++){
            var num = Math.floor(Math.random()*100);
            rows.push(num);
        }
        matr.push(rows);
    }
    return matr;
}

function sumMatrix(mass1,mass2) {
    var matrix = mass1;
    for(let i = 0; i < mass1.length; i++) {
        for(let j = 0; j < mass1[i].length; j++) {
            matrix[i][j] += mass2[i][j];
        }
    }
    return matrix;
}

function show_matr(matr) {
    let matrix_show = "";
    for(var i = 0; i<matr.length; i++) {
        matrix_show += matr[i];
        if(i != matr.length - 1) matrix_show += "\n";
    }
    return matrix_show;
}

function valid(num){
	if(Number.isNaN(num)|| !Number.isInteger(num)|| num <= 0) {
		alert("Не верные входные данные!!!");
		return false;
	}
	return true;
}