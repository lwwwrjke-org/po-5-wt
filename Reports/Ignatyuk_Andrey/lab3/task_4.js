function task_4() {
  var map = new Map();

  var input = [[1, 2, 2, 3], [101, 2, 1, 10], [2, 1]];

  for (let i = 0; i < input.length; ++i) {
    for (let j = 0; j < input[i].length; ++j) {
      map.set(input[i][j], 0);
    }
  }

  var array = [];

  for (let key of map.keys()) {
    array.push(key);
  }

  var input_str = '';

  for (let i = 0; i < input.length; ++i) {
    input_str += '[' + input[i] + ']';

    if (i != input.length - 1) {
      input_str += '\n';
    }
  }

  alert(
      'For input:\n[' + input_str + ']\n\nThe result will be: [' + array + ']');

  return;
}
