function task6() {
    alert(triple_kill([1, 2, 1, 3, 1, 3, 1, 4]));
    alert(triple_kill("mama ramu"));
	alert(triple_kill([4, 4, 4, 7, 7, 8, 8, 6, 8]));
}

function triple_kill(mass){
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
    return('Исходный массив: ['+ mass +']'+'\nРезультат: ['+ result +']');
} 