function Convert(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let Cel = 35;
let Fah = Convert(Cel);
console.log(Fah + "°F");