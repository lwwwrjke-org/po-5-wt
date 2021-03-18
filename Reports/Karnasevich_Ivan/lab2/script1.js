function main1() {
    let a = requestNum('Enter first number', 'First enter is not a number');
    if (!a) {
        return
    }
    let b = requestNum('Enter second number', 'Second enter is not a number');
    if (!b) {
        return;
    }
    if (a === b)
        alert('Equal')
    if (a < b)
        alert('First is less than second')
    if (a > b)
        alert('First is greater than second')
}

function requestNum(inputMessage, errorMessage) {
    let num = parseFloat(prompt(inputMessage))
    if (num) {
        return num;
    } else {
        alert(errorMessage)
        return false
    }
}