function isEven(number){
    if (number % 2 === 0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

isEven(4);
isEven(7);




function calculate(num1, num2, operator){
    if (operator === '+'){
        console.log(num1 + num2);
    } else if (operator === '-'){
        console.log(num1 - num2);
    } else if (operator === '*'){
        console.log(num1 * num2);
    } else if (operator === '/'){
        if (num2 === 0){
            console.log("Cannot divide by 0");
        } else {
            console.log(num1 / num2);
        }
    } else {
        console.log("Error");
    }
}

calculate(10, 5, '+');
calculate(10, 0, 'm');