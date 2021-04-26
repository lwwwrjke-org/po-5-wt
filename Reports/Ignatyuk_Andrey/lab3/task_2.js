function task_2() {
  var size = Number(prompt('Enter the size of the array: '));

  if (Number.isNaN(size)) {
    alert('This is not a number!');
    return;
  }

  if (size < 1) {
    alert('Invalid size!');
    return;
  }

  var collection = [], sorted = [];

  for (var i = 0; i < size; ++i) {
    var value = Number(prompt('Enter a #' + Number(i + 1) + ' value: '));
    collection.push(value);
    sorted.push(value);
  }

  for (let i = 0; i < size - 1; ++i) {
    for (let j = i + 1; j < size; ++j) {
      if (sorted[i] > sorted[j]) {
        let temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }

  alert(
      'collection: [' + collection + ']\n' +
      'sorted: [' + sorted + ']');

  return;
}
