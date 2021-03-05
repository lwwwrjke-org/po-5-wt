import {NumberFormatException, requestNum, validateNum} from "./basic";

export function main4() {
    try {
        let day = validateNum(
            requestNum("Enter the number of the day",
                new NumberFormatException("String is not a number")
            ), 1, 32)

        let month = validateNum(
            requestNum("Enter the number of the month",
                new NumberFormatException("String is not a number")
            ), 1, 13)

        let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let date = new Date(2016, month - 1, day)
        alert(daysInWeek[date.getDay() - 1])


    } catch (e) {
        alert(e)
    }
}
