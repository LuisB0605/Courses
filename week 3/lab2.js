let students = [
    { name: "Luisa" , score: [65, 70, 83] },
    { name: "Ariel" , score: [70, 82, 86] },
    { name: "Vanesa" , score: [85, 98, 97] },
];

function calculateAverage(grades){
    let average = 0;
    for (let i = 0; i < grades.lenght; i++){
        averageGrade += grades[i]
    }
    averageGrade = (averageGrade / grades)
    return average/grades.lenght;
}


function getLetterGrae(grade){
    if(grade >= 90){
        return "A";
    } else if (grade < 90 && grade >= 70){
        return "B"
    } else if (grade)
}






//     let sum = 0;
//     for (let score of scores){
//         sum += score;
//     }
//     return sum / scores.length;
// }

// for (let student of students){
//     let average = calculateAverage(student.score);
//     console.log(`${student.name} has a average of ${average.toFixed(2)}`);
// }

// let highestAverage = 0;
// let topStudent = "";

// for (let student of students) {
//     let average = calculateAverage(student.score);
//     if (average > highestAverage) {
//         highestAverage = average;
//         topStudent = student.name;
//     }
// }

// console.log(`The highest scoring student is ${topStudent} with ${highestAverage.toFixed(2)}`);
