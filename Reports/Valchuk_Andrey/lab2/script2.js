function getEntranceNumber() {
    let numOfFloors = Number(prompt("Введите количество этажей"));
    validate(numOfFloors, 1, 25);

    let numOfEntrances = Number(prompt("Введите количество подъездов"));
    validate(numOfEntrances, 1, 10);

    let numOfFlats = Number(prompt("Введите количество квартир на " +
        "лестничной площадке"));
    validate(numOfFlats, 1, 20);

    let flatNum = Number(prompt("Введите номер квартиры"));
    validate(flatNum, 1, Number.MAX_VALUE);

    let flatsPerEntrance = numOfFloors * numOfFlats;

    for (let i = 1; i < numOfEntrances; i++) {
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
        alert(numOfEntrances);
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