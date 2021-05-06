function flat(){
    var result = flatten([7, [12], [44, [7]]]);
    alert("Матрица: " + "[7, [12], [44, [7]]]");
    alert("Результат: " + result);
}

function flatten(matrixs) {
    const stack = [matrixs];
    const result = [];
    while (stack.length) {
      const nxt = stack.pop();
      if (Array.isArray(nxt)) stack.push(...nxt);
      else result.push(nxt);
    }
    return result.reverse();
}