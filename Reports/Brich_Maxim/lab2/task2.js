function task2(){
    let floor = Number(prompt("Кол. этажей (от 1 до 25)"));
	if(Number.isNaN(floor) || floor < 1 || floor > 25) {
		error();
		return;
	}
	
    let entrance = Number(prompt("Кол. подъездов (от 1 до 10)"));
	if(Number.isNaN(entrance) || entrance < 1 || entrance > 10) {
		error();
		return;
	}
	
    let flat = Number(prompt("Кол. квартир на этаже (от 1 до 20)"));
	if(Number.isNaN(flat) || flat < 1 || flat > 20) {
		error();
		return;
	}
	let full_flat = flat * entrance * floor;
    let num_flat = Number(prompt("Номер квартиры(от 1 до "+full_flat+")"));
	if(Number.isNaN(num_flat) || num_flat < 1 || num_flat > full_flat) {
		error();
		return;
	}
	
	alert(num_flat+" находится в "+ Math.ceil(num_flat/flat/floor)+" подъезде!");
}
function error(){
	alert("Не верные входные данные!!!");
}