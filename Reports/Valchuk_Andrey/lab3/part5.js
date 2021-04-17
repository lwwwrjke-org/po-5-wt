function part5()
{
    let arr = [1, [2], [3, [4]]];

    arr = flatten(arr);
    
    console.log(arr);
}

function flatten(arr) 
{
    return arr.reduce((a, b) =>
    {
        return a.concat(Array.isArray(b) ? flatten(b) : b);
    }, []);
}