// 3. Umgekehrt. Erstellen Sie eine Funktion, um eine Zahl umzukehren.

// d.h. reverse(34532) ➞ 23543

function getReverseNumber(number) {
    const string = number.toString();
    const array = string.split("");
    let returnable = "";

    console.log(array);

    array.forEach((element) => {
        returnable = element + returnable;
    });

    return parseInt(returnable) * Math.sign(number);
}

console.log(getReverseNumber(-34532));

const namen = ["hans", "hallo", "baum"];

//console.log(namen.forEach((element) => {}));
