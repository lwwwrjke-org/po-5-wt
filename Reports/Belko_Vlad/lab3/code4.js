function union(...arrays){
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

function task4(){
    alert("Массивы: " + " [45, 1, 6, 1], [62, 1, 23, 115, 115], [1, 12, 115]");
    alert("Результат: " + "[" + union( [45, 1, 6, 1], [62, 1, 23, 115, 115], [1, 12, 115]) + "]");
} 