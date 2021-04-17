function part3()
{
    alert("Создаем первую матрицу");
    let firstMatrix = createMatrixFromInput();

    alert("Создаем вторую матрицу");
    let secondMatrix = createMatrixFromInput();

    try
    {
        let resultMatrix = addMatrices(firstMatrix, secondMatrix);

        alert(`Первая матрица:\n${matrixToString(firstMatrix)}\n` +
            `Вторая матрица:\n${matrixToString(secondMatrix)}\n` +
            `Результат сложения:\n${matrixToString(resultMatrix)}`);
    }
    catch (ex)
    {
        alert(ex);
    }
}

function matrixToString(matrix)
{
    let matrixStr = String();

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++)
    {
        matrixStr += matrix[rowIndex].toString();

        if (rowIndex != matrix.length - 1)
        {
            matrixStr += "\n";
        }
    }

    return matrixStr;
}

function addMatrices(firstMatrix, secondMatrix)
{
    if (firstMatrix.length != secondMatrix.length)
    {
        throw "Invalid operation exception. Matrices should have the same size.";
    }

    let resultMatrix = [];

    for (let rowIndex = 0; rowIndex < firstMatrix.length; rowIndex++)
    {
        if (firstMatrix[rowIndex].length != secondMatrix[rowIndex].length)
        {
            throw "Invalid operation exception. Matrices should have the same size.";
        }

        let row = [];

        for (let colIndex = 0; colIndex < firstMatrix[rowIndex].length; colIndex++)
        {
            row.push(firstMatrix[rowIndex][colIndex] + secondMatrix[rowIndex][colIndex]);
        }

        resultMatrix.push(row);
    }

    return resultMatrix;
}

function createMatrixFromInput()
{
    let numOfRows = Number.parseInt(prompt("Введите количество рядов создаваемой матрицы"));
    if (Number.isNaN(numOfRows)) 
    {
        alert("Не число!");
        return;
    }

    let numOfCols = Number.parseInt(prompt("Введите количество столбцов создаваемой матрицы"));
    if (Number.isNaN(numOfCols)) 
    {
        alert("Не число!");
        return;
    }

    return generateMatrix(numOfRows, numOfCols);
}

function generateMatrix(numOfRows, numOfCols)
{
    let matrix = [];

    for (let rowIndex = 0; rowIndex < numOfRows; rowIndex++)
    {
        let row = [];

        for (let colIndex = 0; colIndex < numOfCols; colIndex++)
        {
            row.push(Math.floor(Math.random() * 101));
        }

        matrix.push(row);
    }

    return matrix;
}