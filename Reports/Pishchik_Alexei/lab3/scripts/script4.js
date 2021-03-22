function Union(...arrays){
    var mass = [], res = {};

    var i;
    ({ i, mass } = newFunction_2(arrays, mass));

    var i;
    ({ i, i } = newFunction(i, mass, res));

    return newFunction_1(res);
}

function newFunction_2(arrays, mass) {
    for (var i = 0; i < arrays.length; i++) {
        mass = mass.concat(arrays[i]);
    }
    return { i, mass };
}

function newFunction_1(res) {
    return Object.keys(res);
}

function newFunction(i, mass, res) {
    for (var i = 0; i < mass.length; i++) {
        var id = mass[i];
        res[id] = true;
    }
    return { i, i };
}

function task_4(){
    alert("[" + Union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]) + "]");
}