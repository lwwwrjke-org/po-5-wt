function task_5(){
    var result = newFunction();
    alert(result);
}

function newFunction() {
    return flatten([55, [24], [123, [78]]]);
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