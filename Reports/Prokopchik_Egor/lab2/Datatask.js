
function Datatask() {
let month = Number(prompt("Введите месяц:"));
	
    if(Number.isNaN(month)){
        alert("Введено не число!");
		return;
    }
    else if(month < 1 || month > 12){
        alert("Число не входит в диапазон!")
		return;
    }

    let day = Number(prompt("Введите день:"));
	
    if(Number.isNaN(day)){
        alert("Введено не число!");
		return;
    }
    else if(day < 1 || day > 31){
        alert("Число не входит в диапазон!")
		return;
    }

	if(month === 2 && day > 29){
		alert("Неверное число!");
		return;
	}
	
	if((month === 4 || month === 6 || month === 9 || month === 11) && day > 30){
		alert("Неверное число!");
		return;
	}

    let date = new Date(2016, month - 1, day);

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
          alert("Неверная дата!");
      }
}