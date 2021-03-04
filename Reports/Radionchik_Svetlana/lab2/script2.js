const UNKNOWN_ERROR = -1;

function NoneFlatException(message) {
    this.message = message;
    this.name = 'My Exception';
}

function CheckNumException(message) {
    this.message = message;
    this.name = 'My Exception';
}

function NumOutOfRangeException(message) {
    this.message = message;
    this.name = 'My Exception';
}

function task2(flr, flt, prch, fltNm) {
    if (parseInt(flr, 10) && parseInt(flt, 10) && parseInt(prch, 10) && parseInt(fltNm, 10)) {
        let flatInPorch = flr * flt;
        let flatInHouse = flatInPorch * prch;
        if (fltNm < flatInHouse) {
            for (let i = 1; i <= prch;) {
                if (fltNm > (i * flatInPorch)) {
                    i++;
                } else {
                    return i;
                }
            }
        } else {
            throw new NoneFlatException('Такой квартиры нет в доме');
        }
    } else {
        throw new CheckNumException('Введите число');
    }
}

function checkTask2() {
    const min = 1;
    const maxFloor = 25;
    const maxPorch = 10;
    const maxFlat = 20;
    try {
        let floor = prompt('Введите количество этажей 1-25');
        let porch = prompt('Введите количество подъездов в доме 1-10');
        let flat = prompt('Введите количество квартир на лестничной площадке 1-20');
        let flatNum = prompt('Введите номер квартиры');
        if (floor > maxFloor || floor < min || porch < min || porch > maxPorch || flat < min || flat > maxFlat) {
            throw new NumOutOfRangeException('Вы вышли за пределы допустимых значений');
        }
        let myPorch = task2(floor, flat, porch, flatNum);
        alert(myPorch);
    } catch (err) {
        if (err instanceof NoneFlatException) {
            alert(err.message);
            check_task2();
        } else if (err instanceof CheckNumException) {
            alert(err.message);
            check_task2();
        } else if (err instanceof NumOutOfRangeException) {
            alert(err.message);
            check_task2();
        } else {
            return UNKNOWN_ERROR;
        }
    }
}
