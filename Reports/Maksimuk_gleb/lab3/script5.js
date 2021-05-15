function task5() {
    alert(flatten([1, [2], [3, [4]]]));
}

function flatten(arr) {
    arr.reduce((newArr, item) => newArr.concat(item), []);//последовательная обработка каждого элемента массива, возврат нового массива
    return arr;
}

