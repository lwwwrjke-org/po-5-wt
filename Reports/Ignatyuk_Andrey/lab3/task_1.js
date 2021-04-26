function task_1() {
  var begin = Number(prompt('Enter the start of the range: '));

  if (Number.isNaN(begin)) {
    alert('This is not a number!');
    return;
  }

  var end = Number(prompt('Enter the end of the range: '));

  if (Number.isNaN(end)) {
    alert('This is not a number!');
    return;
  }

  var step = Number(prompt('Enter the step of the range: '));

  if (Number.isNaN(step)) {
    alert('This is not a number!');
    return;
  }

  if (step == 0) {
    alert('Invalid step!');
    return;
  }

  var range = [];

  if (step > 0) {
    for (let i = begin; i <= end; i += step) {
      range.push(i);
    }
  } else {
    for (let i = begin; i >= end; i += step) {
      range.push(i);
    }
  }

  alert(
      'The result for a range [' + begin + '..' + end +
      '] with a step: ' + step + ' will be: ' +
      '[' + range + ']');

  return;
}
