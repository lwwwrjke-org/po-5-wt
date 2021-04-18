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

const quickSort = (arr, comp) => {
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
}

const createMatrix = (height, width) => {
    const matrix = []
    for (let i = 0; i < height; ++i){
        const row = []
        for (let j = 0; j < width; ++j){
            const num = Math.floor(Math.random() * 101)
            row.push(num)
        }
        matrix.push(row)
    }
    return matrix
}

const sumMatrix = (a, b) => {
    const matrix = []
    for (let i = 0; i < a.length; ++i){
        const row = []
        for (let j = 0; j < a[0].length; ++j){
            const num = a[i][j] + b[i][j]
            row.push(num)
        }
        matrix.push(row)
    }
    return matrix
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

const flatten = (arr) => {
    return arr.reduce((newArr, x) => newArr.concat(x), [])
}

const deleteTriple = (arr) => {
    const keys = {}
    for (const i of arr){
        if (keys[i])
            keys[i] += 1;
        keys[i] = 1
    }
    const result = []
    for (const k in Object.keys(keys)) {
        if (keys[k] < 3)
            result.push(k)
    }
    return result
}