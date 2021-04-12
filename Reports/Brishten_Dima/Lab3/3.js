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
    var rows, cols;
    function input()
    {
        rows = prompt("Введите количество строк в матрице");
        cols = prompt("Введите количество столбцов в матрице");
        if (isNaN(rows) || isNaN(cols)) 
        {
            alert("Ошибка");
            return;
        }
    }
   input();
   var num1 = rows, num2 = cols;
   alert('Матрица(1)\n' + createMatrix(rows, cols));
   input();
   var num3 = rows, num4 = cols;
   alert('Матрица(2)\n' + createMatrix(rows, cols));
   if ((num1 != num3 || num2 != num4) || (num1 != num2 || num3 != num4))
   {
       alert("Матрицы с разной размерностью нельзя складывать");
       return;
   }
   else 
   {
        var str = '';
        var num; 
        var start = num1*num2;
        for (let i = 0, j = start, n = 1; i < start, j < start*2; i++, j++, n++)
        {
            num = mas[i] + mas[j];
            str += num;
            str += ' ';
            if (n == num1)
            {
                str += '\n';
                n = 0;
            }
        }  
        alert("Матрица суммы матриц \n" + str);
   }
}