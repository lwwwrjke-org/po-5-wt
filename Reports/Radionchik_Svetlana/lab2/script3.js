function NumException(message) {
    this.message = message;
    this.name = 'My Exception';
}

function fib(n) {
    let firsFibNum = 1;
    let secFibNum = 1;
    for (let i = 3; i <= n; i++) {
        let follFibNum = firsFibNum + secFibNum;
        firsFibNum = secFibNum;
        secFibNum = follFibNum;
    }
    return secFibNum;
}

function task3() {
    try {
        let iNum = prompt('Введите параметр i');
        if (!parseInt(iNum, 10)) {
            throw new NumException('Параметр должен быть числом');
        }
        let FibNum = fib(iNum);
        alert(FibNum);
    } catch (err) {
        alert(err.message);
        task3();
    }
}
