function one(){
    let firstNum = Number(prompt("Введите первое число диапазона"));
    if (Number.isNaN(firstNum)) 
    {
        alert("Не число!");
        return;
    }

    let lastNum = Number(prompt("Введите последнее число из диапазона"));
    if (Number.isNaN(lastNum)) 
    {
        alert("Не число!");
        return;
    }

    let step = Number(prompt("Введите шаг"));
    if (Number.isNaN(step)) 
    {
        alert("Не число!");
        return;
    }

    try 
    {
        alert(range(firstNum, lastNum, step));
    }
    catch (ex) 
    {
        alert(ex);
    }
}

function range(firstNum, lastNum, step = 1)
{
    if ((firstNum < lastNum && step <= 0) || (firstNum > lastNum && step >= 0)) 
    {
        throw "Invalid boundaries or step";
    }

    let arrRange = [];

    if (step > 0)
    {
        for (let i = firstNum; i <= lastNum; i += step) 
        {
            arrRange.push(i);
        }
    }
    else
    {
        for (let i = firstNum; i >= lastNum; i += step) 
        {
            arrRange.push(i);
        }
    }

    return arrRange;
}