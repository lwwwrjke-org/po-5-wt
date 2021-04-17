function part4()
{
    let firstArr = [1, 2, 2, 3];
    let secondArr = [101, 2 ,1, 10];
    let thirdArr = [2, 1];

    let resultArr = union(firstArr, secondArr, thirdArr);

    alert(`Первый массив:\n${firstArr}\nВторой массив:\n` +
        `${secondArr}\nТретий массив:\n${thirdArr}\n` +
        `Результат объединения:\n${resultArr}`);
}

function union()
{
    let resultArr = [];

    for (let argIndex = 0; argIndex < arguments.length; argIndex++)
    {
        for (let elIndex = 0; elIndex < arguments[argIndex].length; elIndex++)
        {
            if (!resultArr.includes(arguments[argIndex][elIndex]))
            {
                resultArr.push(arguments[argIndex][elIndex]);
            }
        }
    }

    return resultArr;
}