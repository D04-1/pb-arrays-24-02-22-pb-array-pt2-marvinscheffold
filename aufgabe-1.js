// 1. The Greater Numbers. Erstellen Sie eine Funktion, die zwei Argumente akzeptiert: das erste Argument ist ein Array und das zweite Argument ist eine Zahl. Die Funktion soll die Elemente des Arrays zurückgeben, die größer als das zweite Argument sind.

function findNumbersGreaterThan(array, zahl) {
    const gefiltertesArray = array.filter((element) => {
        if (element > zahl) return true;
        return false;
    });
    return gefiltertesArray;
}

console.log(findNumbersGreaterThan([3, 4, 5], 4));
console.log(findNumbersGreaterThan([10, 20, 30], 12));
console.log(findNumbersGreaterThan([0, 10, 3], 4));
