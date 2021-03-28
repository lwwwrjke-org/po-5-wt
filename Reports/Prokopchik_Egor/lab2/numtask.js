function numtask(){
let a = Number(prompt("Введите первое число: "));
  
  if (Number.isNaN(a)) {
      alert("Введено не число!");
      return;
  }

  let b = Number(prompt("Введите второе число:"));
  
  if (Number.isNaN(b)) {
      alert("Введено не число!");
      return;
  }

  if (a === b) {
      alert("Числа равны.");
  }

  if (a < b) {
      alert("Первое число меньше.");
  }

  if (a > b) {
      alert("Второе число меньше.");
  }
}