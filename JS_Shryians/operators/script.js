// ternary operator
// let score = 75;

// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "fail";

// console.log(grade);

// Q-1
function getGrade(score) {
    if (score >= 0 && score <= 32) {
        console.log("Fail");
    }
    else if (score >= 33 && score <= 59) {
        console.log("D");
    }
    else if (score >= 60 && score <= 69) {
        console.log("C");
    }
    else if (score >= 70 && score <= 79) {
        console.log("B");
    }
    else if (score >= 80 && score <= 90) {
        console.log("A");
    }
    else if (score >= 90 && score <= 100) {
        return 'A+'
    }
    else {
        console.log("NOT MATCH");
    }
}
console.log((getGrade(99)));