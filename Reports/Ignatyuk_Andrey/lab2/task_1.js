function task_1() {
  let first = Number(prompt("Введите первое число: "));
  
  if (Number.isNaN(first)) {
      alert("Введено не число!");
      return;
  }

  let second = Number(prompt("Введите второе число:"));
  
  if (Number.isNaN(second)) {
      alert("Введено не число!");
      return;
  }

  if (first === second) {
      alert("Числа равны.");
  }

  if (first < second) {
      alert("Первое число меньше.");
  }

  if (first > second) {
      alert("Второе число меньше.");
  }
}
