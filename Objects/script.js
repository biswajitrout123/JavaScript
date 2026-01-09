// Write a program to create an object and print it.
// let person = {
//     name: "Biswajit",
//     age: "21",
//     city: "BBSR"
// }
// console.log(person);


// Write a program to access object properties using dot notation.
// let student = {
//     name: "Biswa",
//     age: "21",
//     city: "Dhenkanal"
// }
// console.log(student.name);
// console.log(student.age);
// console.log(student.city);


// Write a program to access object properties using bracket notation.
// let students = {
//     name: "rohit",
//     age: "24",
//     course: "ST"
// }
// console.log(students["name"]);
// console.log(students["age"]);
// console.log(students["course"]);



// Write a program to add a new property to an object.
// let student = {
//     name: "Hari",
//     age: "21",
//     no: "123",
// }
// student.address = "jatni";
// console.log(student);

// USING BRACKETS:
// student["address"] = "khordha";
// console.log(student);

 
// Write a program to delete a property from an object.
// let student = {
//     name: "krishna",
//     address: "Brundaban",
//     favouriteFood: "Makhan",
//     friend: "Gopal" 
// }
// delete student.friend;
// console.log(student);



// Write a program to iterate over object properties using for...in.
// let std = {
//     name: "Hello",
//     Use: "To Give Greet to People",
//     color: "Orange",
//     purpose: "Greet prople"
// }
// for(let key in std){
//     console.log(key + " : ") student[key];
// }


// Write a program to count the number of properties in an object.
// // Create an object
// let student = {
//     name: "Biswajit",
//     age: 21,
//     course: "JavaScript"
// };

// Iterate over object properties
// let student = {
//     name: "Biswajit",
//     age: 21,
//     course: "JavaScript"
// };

// for (let key in student) {
//     console.log(key + " : " + student[key]);
// }

// Write a program to check if a property exists in an object.
// let stdDetail = {
//     name: "Biswajit Rout",
//     age: "21",
//     num: "980"
// };
// console.log("name" in stdDetail);
// console.log("city" in stdDetail);



// Write a program to create an object with a method and call it.
let student = {
    name: "Biswajit",
    age: 21,
    
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

student.greet();


// Write a program to use this keyword inside an object method.


// Write a program to convert object keys into an array.

// Write a program to convert object values into an array.

// Write a program to merge two objects.

// Write a program to clone an object (shallow copy).

// Write a program to compare two objects for equality.