function zadanie2()
{
    let etag = Number(prompt("Введите количество этажей."));
    check(etag, 1, 25);

    let podezd = Number(prompt("Введите количество подъездов."));
    check(podezd, 1, 10);

    let kvrtr = Number(prompt("Введите количество квартир на лестничной площадке."));
    check(kvrtr, 1, 20);

    let nmr = Number(prompt("Введите номер квартиры."));
    check(nmr, 1, 20);

    let kvrvpd = etag * kvrtr;

    for(let i = 0; i < podezd + 1; i++)
    {
        if(i * kvrvpd > nmr)
        {
            alert("Номер подьезда: " + i);
            return;
        }
        else if(i === 3)
        {
            alert("Такой квартиры не существет! ");
            return;
        }
    }
}   

function check(num, min, max)
{
    if(Number.isNaN(num))
    {
        throw("Введено не число!");
        return;
    }
    else if(num < min || num > max)
    {
        throw("Число не входит в диапазон!");
        return;
    }
} 