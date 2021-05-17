function task2()
{
    let FloorNum = Number(prompt("Введите количество этажей (1-25): "));
    if(Number.isNaN(FloorNum))
	{
        throw("Введено не число!");
        return;
    }
    else if(FloorNum < 1 || FloorNum > 25)
	{
        throw("Число не входит в диапазон!");
        return;
    }


    let EntranceNum = Number(prompt("Введите количество подъездов (1-10): "));
    if(Number.isNaN(EntranceNum))
	{
        throw("Введено не число!");
        return;
    }
    else if(EntranceNum < 1 || EntranceNum > 10)
	{
        throw("Число не входит в диапазон!");
        return;
    }
	
	
    let FlatFloorNum = Number(prompt("Введите количество квартир на лестничной площадке (1-20): "));
	if(Number.isNaN(FlatFloorNum))
	{
        throw("Введено не число!");
        return;
    }
    else if(FlatFloorNum < 1 || FlatFloorNum > 20)
	{
        throw("Число не входит в диапазон!");
        return;
    }
	
	
    let FlatNum = Number(prompt("Введите номер квартиры: "));
	if(Number.isNaN(FlatNum))
	{
        throw("Введено не число!");
        return;
    }
    else if(FlatNum < 1 || FlatNum > FloorNum * EntranceNum * FlatFloorNum)
	{
        throw("Число не входит в диапазон!");
        return;
    }
	
    let flatsInEntrance = FloorNum * FlatFloorNum;

    for(let i = 0; i < EntranceNum + 1; i++)
	{
        if(i * flatsInEntrance > FlatNum)
		{
            alert("Номер подьезда: " + i);
            return;
        }
        else if(i === EntranceNum + 1)
		{
            alert("Такой квартиры не существет! ");
            return;
        }
    }
}