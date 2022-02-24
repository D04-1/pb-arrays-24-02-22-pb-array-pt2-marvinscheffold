// 6. Cubed. Erstellen Sie eine Funktion, die eine Reihe von Zahlen aufnimmt und die Summe ihrer Kuben zurückgibt.

// Beispiele:

// sumOfCubes([1, 5, 9]) ➞ 855 // Da 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0



function getSumOfCubes(array) {
    let returnable = 0;
    array.forEach((element) => {
        returnable += element ** 3;
    });
    return returnable;
}

console.log(getSumOfCubes([1, 5, 9]));
console.log(getSumOfCubes([2]));
console.log(getSumOfCubes([]));
