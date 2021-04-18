function sortirovka(){
    let mass = [66, 34, 4, 420, 11, 6, 1, 20, 333];
	alert("Массив: " + "[" + mass + "]"); 
    alert("Отсортированный массив: " + "[" + sort(mass) + "]");
}

function sort(mass){
    let k;
    for(let i = 0; i < mass.length - 1; i++){
        for(let j = mass.length; j > i ; j--){
            if(mass[j - 1] > mass[j]){
                k = mass[j - 1];
                mass[j - 1] = mass[j];
                mass[j] = k;
            }
        }
    }
    return mass;
}