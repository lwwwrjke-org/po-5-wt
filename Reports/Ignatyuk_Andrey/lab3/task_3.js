function task_3() {
  var rows = Number(prompt('Enter the number of rows: '));

  if (Number.isNaN(rows)) {
    alert('This is not a number!');
    return;
  }

  if (rows < 1) {
    alert('Invalid input!');
    return;
  }

  var columns = Number(prompt('Enter the number of columns: '));

  if (Number.isNaN(columns)) {
    alert('This is not a number!');
    return;
  }

  if (columns < 1) {
    alert('Invalid input!');
    return;
  }

  var first = [], second = [];

  for (let i = 0; i < rows; ++i) {
    first[i] = [];
    second[i] = [];

    for (let j = 0; j < columns; ++j) {
      first[i][j] = Math.floor(Math.random() * 100);
      second[i][j] = Math.floor(Math.random() * 100);
    }
  }

  var sum = [];

  for (let i = 0; i < rows; ++i) {
    sum[i] = [];

    for (let j = 0; j < columns; ++j) {
      sum[i][j] = first[i][j] + second[i][j];
    }
  }

  var first_output = '', second_output = '', sum_output = '';

  for (i = 0; i < rows; ++i) {
    sum_output += '[' + sum[i] + ']';
    first_output += '[' + first[i] + ']';
    second_output += '[' + second[i] + ']';

    if (i != rows - 1) {
      first_output += '\n';
      second_output += '\n';
      sum_output += '\n';
    }
  }

  alert(
      'First matrix:\n[ ' + first_output + ' ]\n\nSecond matrix:\n[ ' +
      second_output + ' ]\n\nSum matrix:\n[ ' + sum_output + ' ]\n\n');

  return;
}
