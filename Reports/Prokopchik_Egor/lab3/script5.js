function task_5(){
    var result = flatten([55, [24], [123, [78]]]);
    alert("Изначальные данные : " + "[55, [24], [123, [78]]]");
    alert("Результат: " + result);
}

function flatten(array) {
    const stack = [array];
    const result = [];
    while (stack.length) {
      const nxt = stack.pop();
      if (Array.isArray(nxt)) stack.push(...nxt);
      else result.push(nxt);
    }
    return result.reverse();
}