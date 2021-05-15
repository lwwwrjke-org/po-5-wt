function main4() {
    try {
        let day = validateNum(
            requestNum("Enter the number of the day",
                new NumberFormatException("String is not a number")
            ), 1, 32)

        let month = validateNum(
            requestNum("Enter the number of the month",
                new NumberFormatException("String is not a number")
            ), 1, 13)
        let monthIdx = month - 1;

        let daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let date = new Date(2016, monthIdx, day)

        if (date.getFullYear() === 2016 && date.getMonth() === monthIdx && date.getDate() === day)
            alert(daysInWeek[date.getDay() - 1])
        else alert('No such day')
    } catch (e) {
        if (e instanceof NumberFormatException)
            alert(e.message)
        else throw e;
    }
}
