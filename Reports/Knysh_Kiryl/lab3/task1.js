function task1(){

    var start = prompt("Введите начало: "); var startNumber = Number(start);
        if(isNaN(start)){ alert("Неверные данные"); throw "Error"; }
    
    var end = prompt("Введите конец: "); var endNumber = Number(end);
        if(isNaN(end)){ alert("Неверные данные"); throw "Error"; }
    
    var step = prompt("Введите шаг: "); var stepNumber = Number(step);
        if(isNaN(step)){ alert("Неверные данные"); throw "Error"; }
    
    while(1){
    
    function range(start, end, step) {
        if (step == null) step = 1;
        var range = [];
        if (step > 0) {
            for (let i = start; i <= end; i += step)
                range.push(i);
        }  
        else {
            for (let i = start; i >= end; i += step)
            range.push(i);
        }
        return range;
    }
    alert("range(" + startNumber + "," + endNumber + "," + stepNumber + ")= " + "[" + range(startNumber, endNumber, stepNumber) + "]");
    return; }
} 