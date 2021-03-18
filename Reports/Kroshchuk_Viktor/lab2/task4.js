function task4(){
    let month = Number(prompt("Введите месяц."));
    check(month, 1, 12);

    let day = Number(prompt("Введите день."));
    check(day, 1, 31);

 if(month === 2 && day > 29){
		alert("Неверное число!");
		return;
	}

	if((month === 4 || month === 6 || month === 9 || month === 11) && day > 30){
		alert("Неверное число!");
		return;
	}

    let year = Number(prompt("Введите год."));
    check(year, 1, 10000);

    let weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    let date = new Date(year, month - 1, day);

    switch (date.getDay()) {
        case 0:
          alert('Воскресенье');
          break;
        case 1:
          alert('Понедельник');
          break;    
        case 2:
          alert('Вторник');
          break;
        case 3:
          alert('Среда');
          break;
        case 4:
          alert('Четверг');
          break;
        case 5:
          alert('Пятница');
          break;
        case 6:
          alert('Суббота');
          break;
        default:
          alert('Неверная дата');
      }
}

function check(num, min, max){
    if(Number.isNaN(num)){
        alert("Введено не число!");
    }
    else if(num < min || num > max){
        alert("Число не входит в диапазон!")
    }
}