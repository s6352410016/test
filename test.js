function alienToInteger(alienNumeral) {
    const alienNumerals = {
        'A': 1,
        'B': 5,
        'Z': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'R': 1000
    };

    let result = 0;

    for (let i = 0; i < alienNumeral.length; i++) {
        let currentNumeral = alienNumerals[alienNumeral[i]];
        let nextNumeral = alienNumerals[alienNumeral[i + 1]];
        
        if (nextNumeral > currentNumeral) {
            result += nextNumeral - currentNumeral;
            i++; //skip the next numeral
        } else {
            result += currentNumeral;
        }
    }

    return result;
}

console.log(alienToInteger("AA"));       // output 2
console.log(alienToInteger("ZAA"));      // output 12
console.log(alienToInteger("ZZBAA"));    // output 27
console.log(alienToInteger("AB"));       // output 4
console.log(alienToInteger("AZ"));       // output 9
console.log(alienToInteger("AAA"));      // output 3
console.log(alienToInteger("LBAAA"));    // output 58
console.log(alienToInteger("RCRZCAB"));  // output 1994