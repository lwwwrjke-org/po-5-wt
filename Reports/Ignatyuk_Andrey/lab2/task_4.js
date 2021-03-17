function task_4(){
    let month = Number(prompt("Введите месяц:"));
	
    if(Number.isNaN(month)){
        alert("Введено не число!");
    }
    else if(month < 1 || month > 12){
        alert("Число не входит в диапазон!")
    }

    let day = Number(prompt("Введите день:"));
	
    if(Number.isNaN(day)){
        alert("Введено не число!");
    }
    else if(day < 1 || day > 31){
        alert("Число не входит в диапазон!")
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
