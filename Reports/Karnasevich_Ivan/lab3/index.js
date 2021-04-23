const rangeTest = () => {
    const start = parseInt(prompt('enter the start of a range'))
    const end = parseInt(prompt('enter the end of a range'))
    const step = parseInt(prompt('enter the step of a range'))
    console.log('Result range:', range(start, end, step))
}

const range = (start, end, step = 1) => {
    const isBetween = (x, a, b) => {
        if (a >= b)
            return x <= a && x >= b
        return x >= a && x <= b
    }
    const arr = []
    if (step === 0)
        return arr

    for (let i = start; isBetween(i, start, end); i += step)
        arr.push(i)
    return arr
}

const quickSortTest = () => {
    const arr = [5, 1, 23, 4, 6, 100, 22, 1, 5, 123]
    console.log('Before sort:', arr)
    console.log('After sort:', quickSort(arr))
}

const quickSort = (arr, comp = (a, b) => a - b) => {
    const partition = (left, right) => {
        let l = left
        let r = right
        const mid = (l + r) >>> 1
        const pivot = arr[mid];
        while (l <= r) {
            while (comp(arr[l], pivot) < 0)
                l++
            while (comp(arr[r], pivot) > 0)
                r--
            if (l <= r) {
                [arr[l], arr[r]] = [arr[r], arr[l]]
                l++
                r--
            }
        }
        if (left < r)
            partition(left, r)
        if (right > l)
            partition(l, right)
    }
    partition(0, arr.length - 1)
    return arr
}

const createMatrixTest = () => {
    const height = parseInt(prompt('enter the height of a matrix'))
    const width = parseInt(prompt('enter the width of a matrix'))
    const matrix1 = createMatrix(height, width)
    const matrix2 = createMatrix(height, width)
    const matrixSum = sumMatrix(matrix1, matrix2)
    console.log('Matrix 1:', matrix1)
    console.log('Matrix 2:', matrix2)
    console.log('MatrixSum:', matrixSum)
}

const createMatrix = (height, width) => {
    const matrix = []
    for (let i = 0; i < height; ++i) {
        const row = []
        for (let j = 0; j < width; ++j) {
            const num = Math.floor(Math.random() * 101)
            row.push(num)
        }
        matrix.push(row)
    }
    return matrix
}

const sumMatrix = (a, b) => {
    const matrix = []
    for (let i = 0; i < a.length; ++i) {
        const row = []
        for (let j = 0; j < a[0].length; ++j) {
            const num = a[i][j] + b[i][j]
            row.push(num)
        }
        matrix.push(row)
    }
    return matrix
}

const unionTest = () => {
    const before = [[1, 2, 3], [2, 3, 4, 5, 6], [1, 2, 6, 7, 9]]
    const after = union(...before)
    console.log('Before union:', before)
    console.log('After union:', after)
}

const union = (...arrays) => {
    let dictionary = []
    const key = {};

    for (let i = 0; i < arrays.length; i++) {
        dictionary = dictionary.concat(arrays[i]);
    }

    for (let i = 0; i < dictionary.length; i++) {
        let item = dictionary[i];
        key[item] = true;
    }
    return Object.keys(key);
}

const flattenTest = () => {
    const before =  [1, [2], [3, 4]]
    const after = flatten(before)
    console.log('Before flatten:', before)
    console.log('After flatten:', after)
}

const flatten = (arr) => {
    return arr.reduce((newArr, x) => newArr.concat(x), [])
}

const deleteTripleTest = () => {
    const before = [1, 2, 1, 3, 1, 3, 1, 4]
    const after = deleteTriple(before)
    console.log('Before deleting triples:', before)
    console.log('After deleting triples:', after)
}

const deleteTriple = (arr) => {
    const keys = {}
    for (const i of arr) {
        if (keys[i])
            keys[i] += 1;
        else
            keys[i] = 1
    }
    const result = []
    for (const k of Object.keys(keys)) {
        if (keys[k] < 3)
            result.push(k)
    }
    return result
}