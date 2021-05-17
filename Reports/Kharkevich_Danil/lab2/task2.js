function task2(){
    let floorQt = Number(prompt("Введите количество этажей (1-25)."));
    check(floorQt, 1, 25);

    let entranceQt = Number(prompt("Введите количество подъездов (1-10)."));
    check(entranceQt, 1, 10);

    let flatQt = Number(prompt("Введите количество квартир на лестничной площадке (1-20)."));
    check(flatQt, 1, 20);

    let flatNum = Number(prompt("Введите номер квартиры."));
    check(flatNum, 1, 5000);

    let flatsInEntrance = floorQt * flatQt;

    for(let i = 0; i < entranceQt + 1; i++){
        if(i * flatsInEntrance > flatNum){
            alert("Номер подьезда: " + i);
            return;
        }
        else if(i === 10){
            alert("Такой квартиры не существет! ");
        }
    }
}   

function check(num, min, max){
    if(Number.isNaN(num)){
        throw("Введено не число!");
    }
    else if(num < min || num > max){
        throw("Число не входит в диапазон!")
    }
} 