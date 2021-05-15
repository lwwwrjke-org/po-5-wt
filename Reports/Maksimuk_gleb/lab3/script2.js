function task2() {
    let arr = [99, 17, 83, 14, 34, 56, 27, 64];
    alert("["+arr+"]"+": "+sort(arr));
    alert("["+arr+"]"+": "+sort(arr, function(a,b){return (b<a)-(a<b)}));
}

function sort(array, sortFn) {
    var tempArr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== undefined) {
            tempArr.push(array[i]);
        }
    }
    // sort by default
    if (!sortFn) {
        sortFn = function(a,b) {
            return(a - b);
        }
    }
    tempArr.sort(sortFn);
    for (var i = 0; i < array.length; i++) {
        array[i] = tempArr[i];
    }
    return(array);
}

