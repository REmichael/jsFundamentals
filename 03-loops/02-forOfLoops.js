/***********************
 * FOR OF LOOPS*
 * *************/

var student = { name: "Peter", awesome: true, degree: "JavaScript", week: 1 };
for (item of student) {
    console.log(item);
}

// Doesn't work because an object 

var pieArry = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot'];
for (pie of pieArry) {
    console.log(pie, 'pie is my favorite')
}

// FOR IN LOOPS FOR OBJECTS; FOR OF LOOPS FOR ARRYS//

