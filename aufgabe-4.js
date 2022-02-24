// 4. AEIOU: Vokale. Erstelle eine Funktion, die eine Zeichenkette als Parameter nimmt und die Anzahl der Vokale (z.B. im Englischen "a, e, i, o, u") in der Zeichenkette zählt.

// z.B. findVowels("this is a string") ➞ 4

function getNumberOfVowels(string) {
    const array = string.split("");
    const vowels = "aeiou";
    let returnable = 0;

    array.forEach((element) => {
        if (vowels.indexOf(element.toLowerCase()) > -1) {
            returnable++;
        }
    });

    return returnable;
}

console.log(getNumberOfVowels("this is a string"));
