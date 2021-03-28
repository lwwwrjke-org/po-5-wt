function domtask(){
 let FloorNum = Number(prompt("Введите количество этажей (1-25)"));
    validate(FloorNum, 1, 25);

    let EntranceNum = Number(prompt("Введите количество подъездов (1-10)"));
    validate(EntranceNum, 1, 10);

    let FlatNum = Number(prompt("Введите количество квартир на " +
        "лестничной площадке (1-20)"));
    validate(FlatNum, 1, 20);

    let flatNum = Number(prompt("Введите номер квартиры"));
    validate(flatNum, 1, Number.MaxValue);

    let flatsPerEntrance = FloorNum * FlatNum;

    for (let i = 1; i < EntranceNum; i++) {
        if (flatNum - flatsPerEntrance > 0) {
            flatNum -= flatsPerEntrance;
        }
        else {
            alert(i);
            return;
        }
    }

    if (flatNum > flatsPerEntrance) {
        alert("Квартиры с таким номером не существует");
    }
    else {
        alert(EntranceNum);
    }
}

function validate(number, min, max) {
    if (Number.isNaN(number)) {
        throw "Введено не число";
    }
    else if (number < min || number > max) {
        throw "Введенное число вне допустимого диапазона";
    }
}