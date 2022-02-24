// 2. Finde das längste Wort. Erstellen Sie eine Funktion, um das längste Wort in einer gegebenen Zeichenkette zu finden.
// z.B. longestWord("Dies ist ein Webentwicklungskurs") ➞ "Webentwicklungskurs"

function getLongestWordInString(stringToSearch) {
    const words = stringToSearch.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(getLongestWordInString("Dies ist ein Webentwicklungskurs"));
console.log(getLongestWordInString("Hallo du da"));
console.log(
    getLongestWordInString("Das ist ein Test und ein langes Wooooort.")
);
