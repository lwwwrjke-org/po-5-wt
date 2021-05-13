function Union(...arrays){
    var mass = [], res = {};

    for (var i = 0; i < arrays.length; i++) {
        mass = mass.concat(arrays[i]);
    }

    for (var i = 0; i < mass.length; i++) {
        var id = mass[i];
        res[id] = true;
    }
    return Object.keys(res);
}

function task_4(){
    alert("Исходные данные: " + " [1, 2, 2, 3], [101, 2, 1, 10], [2, 1]");
    alert("Результат: " + "[" + Union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]) + "]");
} 