function Triple(){
    alert(Func([1, 2, 1, 3, 1, 3, 1, 4]));
    alert(Func("mama ramu"));
}

function Func(arr){
    let res = [];
    let repeats = [];

    if (!(arr instanceof Array)) {
      arr = arr.split('');
    }

    for (let value of arr) {
      repeats[value] = (repeats[value] || 0) + 1;
    }

    for(let i in arr) {
      if ( repeats[ arr[i] ] < 3 ) {
        res.push(arr[i]);
      }
    }

    return('Изначальный массив: ['+ arr +']'+'\nновый массив: ['+ res +']');
}