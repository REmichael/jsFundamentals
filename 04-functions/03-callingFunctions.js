

function hi(){
    console.log('Hi');
    return 'Hey';
}

hi;
hi();
console.log(hi);
console.log(hi());

function list(){
    for(var x = 1; x <= 10; x++) {
        console.log(x);
    }
}

list();
console.log(list());

var pieArry = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot'];

for (var tom of pieArry) {
    console.log(tom);
}

let arr = ["This", "is", "really", "cool?"];

function id(){
    for (item of arr){
        console.log(tom);
    }
}

list();
console.log(list()); //not right//

let arr = ["This", "is", "really", "cool?"];

function ind() {
    for(item of arr) {
        console.log(item);
    }
}

ind();