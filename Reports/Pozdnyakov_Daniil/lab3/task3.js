let k = 1;

function CreateM()
{
    let m = Number(prompt("Введите количество строк: "));
    let n = Number(prompt("Введите количество столбцов: "));
   
    sumMatrix(createMatrix(n, m),createMatrix(n, m));
    document.write("<p>*Чтобы продолить обновите страницу!</p>");
}
 
function createMatrix(n, m)
{
    let matrix= [], i, j;

    for(i = 0; i < m; i++)
	{
        let row = [];
        for(j = 0; j < n; j++)
		{
            let value = Math.floor(Math.random()*100);
            row.push(value);
        }
        matrix.push(row);
    } 

    document.write("<h2>Матрица " + k + ": </h2>"); 
    for(i = 0; i < m; i++) 
	{
        for(j = 0; j < n; j++) 
		{
			if (j === matrix.length - 1)
				document.write(matrix[i][j] + ", ");
			else
				document.write(matrix[i][j] + ", ");
        }
        document.write("<br>");
    }
    k++;
    return matrix;
}

function sumMatrix(A, B)
{
    let m = A.length,
        n = A[0].length,
        sum = [],
        i, j;

    for (i = 0; i < m; i++) 
	{
        sum[i] = [];
        for (j = 0; j < n; j++) 
		{
			sum[i][j] = A[i][j]+B[i][j];
        }  
    }

    document.write("<h2>Cумма матриц: </h2>");
    for(i = 0; i < m; i++) 
	{
        for(j = 0; j < n; j++) 
		{
			if (j === sum.length - 1)
				document.write(sum[i][j] + ", ");
			else
				document.write(sum[i][j] + ", ");
        }
        document.write("<br>");
    }
    return sum;
}