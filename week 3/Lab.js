function isEven(number){
    if (number % 2 == 0){
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


function countUpto(n){
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

countUpto(4);


function factorial(n){
    let result = 1;

    for (let i = n; i > 0; i++){
        result = result * i;
    }
    console.log(result);
}

factorial(3);



function invert(num){
    
    let numInvert = num.toString().split('').reverse().join('');
    
  return parseInt(numInvert);
}


console.log(invert(54321));