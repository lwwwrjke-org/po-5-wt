import {NumberFormatException, requestNum, validateNum} from "./basic";

export function main3() {
    try {
        let num = validateNum(
            requestNum("Enter number of fibonacci number",
                new NumberFormatException("String is not a number")
            ), 0, 1000000)
        alert(fibonacci(num))
    } catch (e) {
        alert(e)
    }
}


function fibonacci(num) {
    if (num === 0)
        return 0;
    if (num === 1)
        return 1;
    return fibonacci(num - 2) + fibonacci(num - 1)
}