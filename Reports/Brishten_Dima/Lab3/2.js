function two() 
{
    var mass = [-8, 4, 6, 3, -15, 20];
    alert("Массив до сортировки:" + mass)
    function sort(a) {
            let len = a.length - 1;
            for(let i = 0; i < len; i++)
                for(var e = 0; e < len - i; e++)
                  if(a[e] > a[e + 1])
                    [a[e], a[e + 1]] = [a[e + 1], a[e]];
            return a;
    }
    alert("Массив после сортировки:" + sort(mass))
}