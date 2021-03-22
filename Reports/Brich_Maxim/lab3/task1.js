function task_1() {
    var first = Number(prompt("Введите начало массива"));
	if (!valid(first)) return;
    var last = Number(prompt("Введите конец массива "));
	if (!valid(last)) return;
    var step = Number(prompt("Введите шаг"));
	if (!valid(step)) return;
	
    if( (first > last && step >= 0)||(first < last && step <= 0)) {
        alert("Не верные входные данные!!!");
        return;
    }
    alert ("[" + range(first, last, step) + "]");
}

function range (first, last, step) {
    var mass = [];
    if(step < 0) for(var i = first; i >= last; i = i + step)  mass.push(i);   
    else for(var i = first; i < last + 1; i = i + step) mass.push(i);   
    return mass;
}

function valid(num){
	if(Number.isNaN(num)|| !Number.isInteger(num)) {
		alert("Не верные входные данные!!!");
		return false;
	}
	return true;
}