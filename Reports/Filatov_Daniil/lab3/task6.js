function task_6() {
    alert(Triple([1, 2, 1, 3, 1, 3, 1, 4]));
    alert(Triple("mama ramu"));
}

function Triple(arr){
    let res = [], doing = [];

    if (!(arr instanceof Array)) {
        arr = arr.split('');
    }

    for (let value of arr) {
        doing[value] = (doing[value] || 0) + 1;
    }

    for(let i in arr) {
      if ( doing[ arr[i] ] < 3 ) {
        res.push(arr[i]);
      }
    }
    return("Пример:\n["+ arr +"]"+"\nРезультат: \n["+ res +"]");
} 