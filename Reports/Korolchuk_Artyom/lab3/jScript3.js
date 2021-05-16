function task3()
{
	let firstMat = createMatrix(5, 5);
	let secondMat = createMatrix(5, 5);

	let sumResult = sumMatrixes(firstMat, secondMat);

	alert("Check console");

	console.log(firstMat);
	console.log(secondMat);
	console.log(sumResult);
}

function createMatrix(rowsNum, colsNum)
{
	let matrix = [];

	if (rowsNum === 0 && colsNum === 0)
		return matrix;

	for (let i = 0; i < rowsNum; i++)
	{
		matrix[i] = [];

		for (let j = 0; j < colsNum; j++)
		{
			matrix[i][j] = getRandomInt(100);
		}
	}

	return matrix;
}

function sumMatrixes(matrix1, matrix2)
{
	let sumMatrix = [];

	if (matrix1.length === 0 && matrix2.length === 0)
		return sumMatrix;

	if (matrix1.length === 0 || matrix2.length === 0)
	{
		alert("invalid data");
		return;
	}

	if (matrix1.length != matrix2.length || matrix1[0].length != matrix2[0].length)
	{
		alert("Invalid data");
		return;
	}

	for (let i = 0; i < matrix1.length; i++)
	{
		sumMatrix[i] = [];

		for (let j = 0; j < matrix1[0].length; j++)
		{
			sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
		}
	}

	return sumMatrix;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}