// 5. Fehlende Zahl. Erstelle eine Funktion, die ein Array mit allen ganzen Zahlen zwischen 1 und 10 (außer einer) annimmt und die fehlende ganze Zahl zurückgibt.

// Beispiele:

// missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

function getMissingNumber(array) {
    const arrayComplete = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let returnable;

    arrayComplete.forEach((element) => {
        if (!array.includes(element)) returnable = element;
    });

    return returnable;
}

console.log(getMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]));

console.log(getMissingNumber([7, 2, 3, 6, 5, 9, 1, 4, 8]));

console.log(getMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));
