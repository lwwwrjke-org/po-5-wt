function two()
{
try 
{
    var floor = prompt("Введите число этажей (1-25)");
    var number_of_entrances = prompt("Введите количество подъездов (1-10)");
    var number_of_flats = prompt("Введите количество квартир на лестничной площадке (1-20)");
    var number_flat = prompt("Введите номер квартиры"); 
    if (parseInt(floor, 10) && parseInt(number_of_flats, 10) && parseInt(number_of_entrances, 10) && parseInt(number_flat, 10))
    {
    let flatInEntrance = floor * number_of_flats;
    let flatInHouse = flatInEntrance * number_of_entrances;
        if (number_flat < flatInHouse) 
        {
            for (let i = 1; i <= number_of_entrances;) 
            {
                if (number_flat > (i * flatInEntrance))
                { 
                    i++; 
                }
                else 
                {
                    alert("Номер подъезда: " + i);
                    break;
                }
            }
        }
        else {
            throw new SyntaxError('Нет такой квартиры!'); }
    }
    else {
        throw new SyntaxError('Ошибка!');
    }
}
catch(e)
{
    alert("Некорректный ввод данных");
}
}