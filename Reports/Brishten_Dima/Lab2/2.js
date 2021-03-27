function two()
{
try 
{
    var floor = prompt("Введите число этажей (1-25)");
    var number_of_entrances = prompt("Введите количество подъездов (1-10)");
    var number_of_flats = prompt("Введите количество квартир на лестничной площадке (1-20)");
    var number_flat = prompt("Введите номер квартиры"); 

    if (isNaN(floor) || isNaN(number_of_flats) || isNaN(number_of_entrances) || isNaN(number_flat))
        throw new SyntaxError("Данные некорректны");
    
    var entrance = number_flat /  (number_of_flats * floor - number_of_entrances);
    alert("Ваш подъезд: " + Math.round(entrance))
}
catch(e)
{
    alert("Некорректный ввод данных");
}
}