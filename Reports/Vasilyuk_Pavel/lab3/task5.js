function mainFlatten(){
    let res = Flatten([1, [2], [3, [4]]]);
     alert(res);
}

function Flatten(array) {
    const stack = [array];
    const res = [];
    
    while (stack.length) {
      const next = stack.pop();
      if (Array.isArray(next)) {
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    
    return res.reverse();
  }
