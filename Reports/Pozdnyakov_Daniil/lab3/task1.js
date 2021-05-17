function Range()
{
    let Start = Number(prompt("Введите начало диапазона: "));

    let End = Number(prompt("Введите конец диапазона: "));

    let Step = Number(prompt("Введите шаг (не обязательно): "));

    if(Step == "")
	{
        Func(Start, End);
        return;
    }
    else
	{
    Func(Start, End, Step);
    }
}

function Func(start, end, step = 1)
{
    let arr = [];
    
    if (step < 0 && start < end)
	{
        return alert("Начало не может быть меньше конца при отрицательном шаге");
        return;
    } 
    else if (step > 0 && start > end)
	{
        return alert("Начало не может быть больше конца при положительном шаге");
        return;
    }
  
    for (let i = start; step < 0 ? (i >= end) : (i <= end); i = i + step)
	{
        arr.push(i);
    }
      alert('Массив: [' + arr + ']');
}