function five()
{
    function flattern(array)
    {
        var res=[];
        for (var i = 0; i < array.length; i++)
        if (!Array.isArray(array[i]))
        {
            res.push(array[i]);
        }
        else
        {
            res =  res.concat(flattern(array[i]));
        }
        return res;
    }
    let arr = [4, [2, [3, 6, [7, 5]], [6]]];
    alert('Исходный массив\n[4, [2, [3, 6, [7, 5]], [6]]]');
    alert("Конечный массив\n[ " + flattern(arr) + ' ]');
}