function st3() {
    let i = Number(prompt("Введите номер элемента числа Фибоначчи(целые числа от нуля)"));
    if(Number.isNaN(i) || i < 0 || !Number.isInteger(i)) {
        alert("Неверные входные данные!");
        fail;
    }
    alert("под номером "+ i+" находится число "+Fib(i));
}
function Fib(i){
    if (i == 0|| i == 1) {return 1}
    return Fib(i-2) +Fib(i-1);
}
