function task6() {
    alert(f([1, 2, 1, 3, 1, 3, 1, 4])); // a = [2, 3, 4]
    alert(f("mama ramu")); // b = [" ", "r", "u"]
}

function f(arr) {
    let elInArr = new Array();
    let newArr = new Array();
    let i;
    for(i=0; i<arr.length; i++) {
        elInArr[arr[i]]=elInArr[arr[i]] + 1 || 1;
    }
    for (var key in elInArr) {
        if(elInArr[key]<3) {
            
            newArr.push(key);
        }
    }
    return newArr;
}

