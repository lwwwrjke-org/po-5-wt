function task3() {
    let rows = Number(prompt("Введите кол-во строк"));
    let columns = Number(prompt("Введите кол-во столбцов"));
    let i, j, str1, str2, str3;
    let matr1 = CreateMatrix(rows, columns);
    str1 = MatrixForPrint(matr1, rows);
    let matr2 = CreateMatrix(rows, columns);
    str2 = MatrixForPrint(matr2, rows);
    let sum = SumMatrix(matr1, matr2, rows, columns);
    str3 = MatrixForPrint(sum, rows);
    alert(str1+"\n"+"+"+"\n"+str2+"\n"+"="+"\n"+str3);
}

function CreateMatrix(rows, columns) {
    let matr=new Array(rows);
    let i,j;
    for(i=0; i<matr.length; i++) {
        matr[i]=new Array(columns);
    }
    for(i=0; i<rows; i++) {
        for(j=0; j<columns; j++) {
            matr[i][j]=Math.round(0-0.5+Math.random()*(100-0+1));
        }
    }
    return matr;
}

function SumMatrix(matr1, matr2, rows, columns) {
    let sumMatr=new Array(rows);
    let i, j;
    for(i=0; i<sumMatr.length; i++) {
        sumMatr[i]=new Array(columns);
    }
    for(i=0; i<rows; i++)
    {
        for(j=0; j<columns; j++) {
            sumMatr[i][j]=matr1[i][j]+matr2[i][j];
        }
    }
    return sumMatr;
}

function MatrixForPrint(matr, rows) {
    let str = "[";
    for(i=0; i<rows; i++) {
        str += "["+matr[i]+"]";
        if(i!=rows-1) {
            str+="\n";
        }
    }
    str+="]";
    return str;
}

