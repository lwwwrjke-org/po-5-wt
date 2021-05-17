function union(...matrixs)
{
    var mass = [], res = {};

    for (var i = 0; i < matrixs.length; i++) 
    {
        mass = mass.concat(matrixs[i]);
    }

    for (var i = 0; i < mass.length; i++) 
    {
        var id = mass[i];
        res[id] = true;
    }
    return Object.keys(res);
}

function unification()
{
    alert("Матрицы: " + " [78, 25, 52, 1], [112, 24, 25, 1], [1, 25]");
    alert("Результат: " + "[" + union( [78, 25, 52, 1], [112, 24, 25, 1], [1, 25]) + "]");
}