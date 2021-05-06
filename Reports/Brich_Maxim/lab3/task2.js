function task_2(){
    let mass = [12,56,356,12,23,345,54,3,9];
	sort(mass);
}

function sort(mass){
    var buff;
    for(var i = 0; i < mass.length - 1; i++){
        for(var j = mass.length; j > i ; j--){
            if(mass[j - 1] > mass[j]){
                buff = mass[j];
                mass[j] = mass[j - 1];
                mass[j - 1] = buff;
            }
        }
    }
    alert("Отсортированный массив - " + "[ " + mass + " ]");
}