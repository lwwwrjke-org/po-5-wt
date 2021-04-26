function task_6() {
  var input = [1, 2, 1, 3, 1, 3, 1, 4], count = [], print = [];

  if (!(input instanceof Array)) {
    input = input.split('');
  }

  for (let i of input) {
    count[i] = (count[i] || 0) + 1;
  }

  var result = new Map();

  for (let i in input) {
    if (count[input[i]] < 3) {
      result.set(input[i]);
    }
  }

  for (let key of result.keys()) {
    print.push(key);
  }

  alert('The result for [' + input + '] will be: [' + print + ']');

  return;
}
