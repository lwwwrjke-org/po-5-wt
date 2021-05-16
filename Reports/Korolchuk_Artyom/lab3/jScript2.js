function task2()
{
	let sorted = bubbleSort([2, 3, 1], function(a, b) {if (a < b) return 1; else return 0;} );
	alert(sorted);
}

function bubbleSort(arr, func = function(a, b) {if (a > b) return 1; else return 0;} )
{
    for (var i = 0, endI = arr.length - 1; i < (arr.length - 1); i++)
    {
        var wasSwap = false;

        for (var j = 0, endJ = endI - i; j < endJ; j++)
        {
            if (func(arr[j], arr[j + 1]))
            {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                wasSwap = true;
            }
        }

        if (!wasSwap) break;
    }

    return arr;
}