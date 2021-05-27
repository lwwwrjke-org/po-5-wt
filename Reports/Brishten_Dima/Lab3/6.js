function six()
{
    function func(_arr)
    {
      var arr = [];
        var del = [];
        if (!(_arr instanceof Array)) {
          _arr = _arr.split('');
        }
        for (var i of _arr) {
            del[i] = (del[i] || 0) + 1;
        }
        for (var j in _arr) {
            if (del[_arr[j]] < 3) {
                arr.push(_arr[j]);
            }
        }
      return arr;
    }
    alert("Исходный массив\n[ " + [3, 3, 3, 6, 7, 7, 7, 1] + ' ]\nКонечный массив\n[ ' + func([3, 3, 3, 6, 7, 7, 7, 1]) + ' ]');
    alert("Исходный массив\n[ " + "mama ramu" + ' ]\nКонечный массив\n[ ' + func("mama ramu") + ' ]');
}