function mainSort(){
    let array = [5, 7, 3, 9, 2, 5, 1, 2];
    alert("Массив: " + "[" + sort(array) + "]");
}

function sort(arr){
    let temp;

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = arr.length; j > i ; j--){
            if(arr[j - 1] > arr[j]){
                temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}