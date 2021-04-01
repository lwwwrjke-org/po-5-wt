function one(){
function range(begin, end)
{
    if (isNaN(begin) || isNaN(end))
    {
        return alert("Нечисловое значение");
    }
    begin = parseInt(begin, 10);
    end = parseInt(end, 10);
    var mas = []; 
    var shag = prompt("Введите шаг");
    shag = parseInt(shag, 10);

    if (begin <= end)
    {
        while (begin <= end)
        {
            mas.push(begin);
            begin = begin + shag;
        }
    }
   
    else
    {
        while(begin >= end)
        {
            mas.push(begin);
            begin = begin - shag;
        }
    }
    return mas;
}
alert("Сейчас Вы введёте диапазон чисел, если первое число меньше второго, то шаг будет положителен, иначе - отрицателен");
var beg = prompt("Введите начальное число");
var en = prompt("Введите конечное число");
alert(range(beg,en));
}