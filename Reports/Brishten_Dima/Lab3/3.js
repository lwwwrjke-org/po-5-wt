function three()
{
   var mas = [];
   function createMatrix(row, col)
   {
        var cols = col;
        var table = new Array(row);
        for (let i = 0; i < row; i++)
            table[i] = new Array(col)
        for(var row = 0, str = ''; row < table.length; row++)
        { 
            for(var col = 0; col < cols; col++) 
            {
                table[row][col] = Math.floor(Math.random() * 100);
                str += table[row][col];
                str += ' ';
                mas.push(table[row][col]);
            }
            str += '\n';
        }
        return str;
    }
    function sum(rows, cols)
    {
        var str = '';
        var num; 
        var start = rows*cols;
        for (let i = 0, j = start, n = 1; i < start, j < start*2; i++, j++, n++)
        {
            num = mas[i] + mas[j];
            str += num;
            str += ' ';
            if (n == cols)
            {
                str += '\n';
                n = 0;
            }
        }  
        alert("Матрица суммы матриц \n" + str);
    }
    var rows, cols;
    function input()
    {
        rows = prompt("Введите количество строк в матрице");
        cols = prompt("Введите количество столбцов в матрице");
        if (isNaN(rows) || isNaN(cols)) 
        {
            alert("Не число");
            return false;
        }
        rows = parseInt(rows, 10);
        cols = parseInt(cols, 10);
        if (rows < 1 || cols < 1)
        {
            alert("Неверный диапазон");
            return false;
        }
        return true;
    }
    if (input())
    { 
        alert('Матрица(1)\n' + createMatrix(rows, cols));
        alert('Матрица(2)\n' + createMatrix(rows, cols));
        sum(rows, cols);
    }
    else
        return 0;
}