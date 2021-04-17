function part6()
{
    let arr1 = [1, 2, 1, 3, 1, 3, 1, 4];
    let arr2 = "mama ramu";

    alert(`${arr1}: ${removeTriple(arr1)}\n${arr2}: ${removeTriple(arr2)}`);
}

function removeTriple(arr)
{
    let arrWithoutTriples = [];
    let elementsCounter = new Map();

    for (let el of arr)
    {
        if (!elementsCounter.has(el))
        {
            elementsCounter.set(el, 1);
        }
        else
        {
            elementsCounter.set(el, elementsCounter.get(el) + 1);
        }
    }

    for (let [key, value] of elementsCounter.entries())
    {
        if (value < 3)
        {
            arrWithoutTriples.push(key);
        }
    }

    return arrWithoutTriples;
}