function four()
{
    function union(arr, arr2)
    {
        return Array.from(new Set([...arr, ...arr2]));
    }
    var a = [1, 3, 5, 2, 2, 3];
    var b = [5, 2, 2, 5, 3, 0];
    alert("Первый массив\n[ " + a + ' ]\nВторой массив\n[ ' + b + " ]\nВывод объединённых массивов \n [ " + union(a, b) + ' ]');
}