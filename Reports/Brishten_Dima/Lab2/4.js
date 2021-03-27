function four(){
var num_month = prompt("Введите номер месяца");
var digit = prompt("Введите число месяца " + num_month);
var mas = [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ];
var num_day_of_months = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var sum = 0, s = 4;

if (num_month == 1)
    Day(sum);
else
{
    for (let i = 0; i < num_month-1; i++)
        sum += num_day_of_months[i];
    Day(sum);
}

function Day(Sum)
{
    if (Sum > 0)
        for (let j = 4, k = 0; ; j++, k++) 
            {
                if (j > 6)
                    j = 0;   

                if (k == Sum)
                {
                    s = j;
                    break;
                }          
            }
    for (let i = 0, j = s; i < num_day_of_months[num_month-1]; i++, j++)
    {
        if (j > 6)
            j = 0;

        if (i == digit - 1)
        {
            alert("Ваш день недели: " + mas[j]);
            break;
        }
    }
}
}