charAt()

function pet(animal) {
    console.log(`I have a ${animal} for a pet.`);
}

pet("cat");

function name(firstname, lastname) {
    console.log(`${firstname} ${lastname}`);
}

name("Michael", "Reardon");

function name(lastname, firstname) {
    let fullname = lastname + ", " + firstname;
   
    console.log(fullname);
}

name("Reardon",  "Michael")

function calcTax(bill) {
    let total = bill * 1.07;
    return total;
}

var dinner = 150;
var myTotal = calcTax(dinner);

console.log(myTotal);