function st2() 
{
    let et, pad, kv, kvp, help;
    et = prompt("Введите количество этажей");
    if (!parseInt(et)) {
        alert("Вы ввели не число");
        fail;
    }
    if (et < 1) {
        alert("Некорректные данные");
        fail;

    } else if (et > 25) {
        alert("Некорректные данные");
        fail;

    }
    pad = prompt("Введите количество подъездов");
    if (!parseInt(pad)) {
        alert("Вы ввели не число");
        fail;
    }
    if (pad < 1) {
        alert("Некорректные данные");
        fail;
    } else if (pad > 10) {
        alert("Некорректные данные");
        fail;

    }
    kvp = prompt("Введите количество квартир на лестничной площадке");
    if (!parseInt(kvp)) {
        alert("Вы ввели не число");
        fail;

    }
    if (kvp < 1) {
        alert("Некорректные данные");
        fail;

    } else if (kvp > 20) {
        alert("Некорректные данные");
        fail;

    }
    kv = prompt("Введите номер квартиры");
    if (!parseInt(kv)) {
        alert("Вы ввели не число");
        fail;

    }
    help = et * pad * kvp;
    if (kv < 1) {
        alert("Некорректные данные");
        fail;

    } else if (kv > help) {
        alert("Некорректные данные");
        fail;

    }
    for (let i = 1; i <= pad; i++) {
        if ((i - 1) * kvp * et <= kv && i * kvp * et >= kv) {
            alert(`Квартира под номером ${kv} находится в подъезде ${i}`);
            break;
        }
    }
}