function task_6() {
    alert(Triple([1, 2, 1, 3, 1, 3, 1, 4]));
    alert(Triple("mama ramu"));
}

function Triple(mass){
    var result = [];
    var doing = [];

    mass = newFunction(mass);

    for (var value of arr) {
        doing[value] = (doing[value] || 0) + 1;
    }

    for (var i in arr) {
      if (doing[mass[i]] < 3) {
        result.push(mass[i]);
      }
    }

    return(`Изначальный массив: [${mass}]
Новый массив: [${result}]`);
} 

function newFunction(arr) {
    if (!(arr instanceof Array)) {
        arr = arr.split('');
    }
    return arr;
}