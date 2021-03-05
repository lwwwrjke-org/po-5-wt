export function NumberFormatException(message) {
    this.name = 'NumberFormatException'
    this.message = message
}

export function validateNum(num, lowLimit, highLimit) {
    if (num >= lowLimit && num < highLimit) {
        return num
    }
    throw new NumberFormatException("Number was out of bounds")
}

export function requestNum(message, exception) {
    let num = parseInt(prompt(message))
    if (!num) {
        throw exception
    }
    return num;
}