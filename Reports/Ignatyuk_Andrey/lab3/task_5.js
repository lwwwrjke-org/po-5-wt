function task_5() {
  var input = [1, [2], [3, [4]]];

  for (let i = 0; i < input.length; ++i) {
    input = input.reduce(function(first, second) {
      return first.concat(second);
    }, []);
  }

  alert('The result will be: [' + input + ']');

  return;
}
