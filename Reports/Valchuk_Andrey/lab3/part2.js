function part2()
{
    let arr = [3, 5, 1]; 
    
    let arrCopy = arr.slice();

    sort(arr);

    alert(`Исходный массив: ${arrCopy}\nРезультат: ${arr}`);
}

function sort(arr, comparer = (x, y) => x - y)
{
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < ( arr.length - i - 1 ); j++)
        {
            if(comparer(arr[j], arr[j + 1]) > 0)
            {       
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
            }
        }
    }
}