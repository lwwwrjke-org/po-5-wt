function NumException(message)
{
    this.message=message;
    this.name = "My Exception";
}

function fib(n) 
{
    let a=1;
    let b=1;
    for(let i=3; i<=n; i++)
    {
        let c=a+b;
        a=b;
        b=c;
    }
    return b;
}

function task3()
{
    try
    {
        let i_num = prompt("Введите параметр i");
        if (!parseInt(i_num))
            throw new NumException("Параметр должен быть числом")
        let FibNum=fib(i_num);
        alert(FibNum);
    }
    catch (e)
    {
        alert(e.message);
        task3();
    }
}