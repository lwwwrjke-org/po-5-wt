function zadanie4()
{
  let month = Number(prompt("Введите месяц."));
  check(month, 1, 12);

  let day = Number(prompt("Введите день."));
  check(day, 1, 31);

  let date = new Date(2016, month - 1, day);
  if (date.getFullYear() == 2016 && date.getMonth() == (month - 1) && date.getDate() == day)
  {
    switch (date.getDay()) 
    {
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
      else 
    {
        alert('Такого дня не существует');
    }
}

function check(num, min, max){
  if(Number.isNaN(num)){
      alert("Введено не число!");
      return;
  }
  else if(num < min || num > max){
      alert("Число не входит в диапазон!");
      return;
  }
} 