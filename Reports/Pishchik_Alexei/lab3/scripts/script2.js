function task_2(){
    let mass = [11, 787, 1, 89, 3, 67, 12, 90];
    alert("Массив: " + "[" + sort(mass) + "]");
}

function sort(mass){
    let time;

    for(let i = 0; i < mass.length - 1; i++){
        for(let j = mass.length; j > i ; j--){
            if(mass[j - 1] > mass[j]){
                time = mass[j - 1];
                mass[j - 1] = mass[j];
                mass[j] = time;
            }
        }
    }
    return mass;
}