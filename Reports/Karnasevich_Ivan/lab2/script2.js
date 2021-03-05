import {NumberFormatException, requestNum, validateNum} from "./basic";

export function calculateEntranceNumber() {
    let errorMessage = 'String is not a number';
    try {
        let floorsCount = validateNum(requestNum(
            'Enter floor count',
            new NumberFormatException(errorMessage)
        ), 1, 26)

        let entranceCount = validateNum(requestNum(
            'Enter entrance count',
            new NumberFormatException(errorMessage)
        ), 1, 11)

        let flatPerEntranceFloor = validateNum(requestNum(
            'Enter flat per floor in one entrance',
            new NumberFormatException(errorMessage)
        ), 1, 21)

        let flatNumber = validateNum(requestNum(
            'Enter flat number',
            new NumberFormatException(errorMessage)
        ), 1, floorsCount * flatPerEntranceFloor * entranceCount)


        let flatPerEntrance = flatPerEntranceFloor * floorsCount;

        for (let i = 1; i < entranceCount + 1; ++i) {
            if (i * flatPerEntrance > flatNumber) {
                alert("Entrance number: " + i);
                return;
            }
        }

    } catch (e) {
        alert(e)
    }
}


