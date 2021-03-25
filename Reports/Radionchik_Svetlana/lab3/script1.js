function task1() {
    let StrtOfRng = Number(prompt("Введите начало массива"));
    let EndOfRng = Number(prompt("Введите конец массива"));
    let Step = Number(prompt("Введите шаг для построение массива или будет рассматриваться шаг по умолчанию (нулевой шаг воспринимается как шаг по умолчанию)"));
    if (Step == 0 && StrtOfRng-EndOfRng < 0) {
        alert("["+range(StrtOfRng, EndOfRng)+"]");
    }
    else if (Step == 0 && StrtOfRng-EndOfRng > 0) {
        alert("["+range(StrtOfRng, EndOfRng, -1)+"]");
    }
    else if (Step < 0 && StrtOfRng-EndOfRng < 0) {
        alert("Данные введены неправильно. Строим массив с шагом по умолчанию для данного диапазона.");
        alert("["+range(StrtOfRng, EndOfRng)+"]");
    }
    else if (Step > 0 && StrtOfRng-EndOfRng > 0) {
        alert("Данные введены неправильно. Строим массив с шагом по умолчанию для данного диапазона.");
        alert("["+range(StrtOfRng, EndOfRng, -1)+"]");
    }
    else {
        alert("["+range(StrtOfRng, EndOfRng, Step)+"]");
    }
}

function range(StrtOfRng, EndOfRng, Step = 1) {
    let i = StrtOfRng;
    let RngArr = new Array();
    if (Step < 0) {
        StrtOfRng=EndOfRng;
        EndOfRng=i;
    }
    for( ;i >= StrtOfRng && i <= EndOfRng; i += Step) {
        RngArr.push(i);
    }
    return RngArr;
}