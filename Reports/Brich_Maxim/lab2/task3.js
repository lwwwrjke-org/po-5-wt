function task3(){
    let num_i = Number(prompt("Введите номер элемента числа Фибоначчи(целые числа от нуля)"));
	if(Number.isNaN(num_i) || num_i < 0 || !Number.isInteger(num_i)) {
		error();
		return;
	}
	alert("под номером "+ num_i+" находится число "+Search_num(num_i));
}
function Search_num(num_i){
	if (num_i == 0|| num_i == 1) {return 1}
	return Search_num(num_i-2) +Search_num(num_i-1);
}
function error(){
	alert("Не верные входные данные!!!");
}