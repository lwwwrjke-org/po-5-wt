var UNKNOWN_ERROR = -1;

function NoneFlatException(message)
{
    this.message=message;
    this.name = "My Exception";
}

function CheckNumException(message)
{
    this.message=message;
    this.name = "My Exception";
}

function NumOutOfRangeException(message)
{
    this.message=message;
    this.name = "My Exception";
}

function task2(flr, flt, prch, flt_nm) 
{
    if(parseInt(flr)&&parseInt(flt)&&parseInt(prch)&&parseInt(flt_nm))
    {
        let flat_in_porch = flr*flt;
        let flat_in_house=flat_in_porch*prch;
        if(flt_nm<flat_in_house)
        {
            for (let i=1; i<=prch; )
            {
                if (flt_nm>(i*flat_in_porch))
                {
                    i++;
                }
                else
                {
                    return i;
                }
            }
        }
        else
            throw new NoneFlatException ("Такой квартиры нет в доме");
    }
    else
        throw new CheckNumException ("Введите число");
}

function check_task2()
{
    try
    {
        let floor = prompt("Введите количество этажей 1-25");
        let porch = prompt("Введите количество подъездов в доме 1-10");
        let flat = prompt("Введите количество квартир на лестничной площадке 1-20");
        let flat_num = prompt("Введите номер квартиры");
        if(floor>25||floor<1||porch<1||porch>10||flat<1||flat>20)
            throw new NumOutOfRangeException("Вы вышли за пределы допустимых значений");
        let my_porch = task2(floor, flat, porch, flat_num);
        alert(my_porch);
    }
    catch (e)
    {
        if (e instanceof NoneFlatException)
        {
            alert(e.message);
            check_task2();
        }
        else if (e instanceof CheckNumException)
        {
            alert(e.message);
            check_task2();
        }
        else if(e instanceof NumOutOfRangeException)
        {
            alert(e.message);
            check_task2();
        }
        else
            return UNKNOWN_ERROR;
        
    }
}