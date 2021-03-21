function task4() {
    alert(union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]));
}

function union(...arrays) {
    var dictionary = [],
    key = {};
    
    for (var i = 0; i < arrays.length; i++) {
        dictionary = dictionary.concat(arrays[i]);
    }
    //Создаём словарь, в словаре есть ключи и значения (не мб повторений)
    for (let i = 0; i < dictionary.length; i++) {
        let item = dictionary[i];
        key[item] = true;
    }
    return Object.keys(key);
}
    
