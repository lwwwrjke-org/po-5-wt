function task_6() {
    alert(Triple([1, 2, 1, 3, 1, 3, 1, 4]));
    alert(Triple("mama ramu"));
}

function Triple(mass){
    let result = [];
    let doing = [];

    if (!(mass instanceof Array)) {
        mass = mass.split('');
    }

    for (let value of mass) {
        doing[value] = (doing[value] || 0) + 1;
    }

    for(let i in mass) {
      if ( doing[ mass[i] ] < 3 ) {
        result.push(mass[i]);
      }
    }
    return('Изначальный массив: ['+ mass +']'+'\nновый массив: ['+ result +']');
}