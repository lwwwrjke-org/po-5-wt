function task_2(){
	try {
		let floor_count = Number(prompt("Введите количество этажей:"));
		
		if(Number.isNaN(floor_count)){
			throw("Введено не число!");
		} else if(floor_count < 1 || floor_count > 25){
			throw("Число не входит в диапазон!")
		}

		let entrance_count = Number(prompt("Введите количество подъездов:"));
		
		if(Number.isNaN(entrance_count)){
			throw("Введено не число!");
		} else if(entrance_count < 1 || entrance_count > 10){
			throw("Число не входит в диапазон!")
		}

		let flat_count = Number(prompt("Введите количество квартир на лестничной площадке:"));
		
		if(Number.isNaN(flat_count)){
			throw("Введено не число!");
		} else if(flat_count < 1 || flat_count > 20){
			throw("Число не входит в диапазон!")
		}

		let flat_number = Number(prompt("Введите номер квартиры:"));
		
		if(Number.isNaN(flat_number)){
			throw("Введено не число!");
		} else if(flat_number < 1 || flat_number > floor_count * entrance_count * flat_count){
			throw("Число не входит в диапазон!")
		}

		let flatsAtTheEntrance = floor_count * flat_count;

		for(let i = 0; i < entrance_count + 1; i++){
			if(i * flatsAtTheEntrance > flat_number){
				alert("Номер подьезда: " + i);
			    return;
			}
			else if(i === 3){
				alert("Такой квартиры не существет.");
				return;
			}
		}
	}
	catch(error) {
		alert(error);
	    return;
	}
}
