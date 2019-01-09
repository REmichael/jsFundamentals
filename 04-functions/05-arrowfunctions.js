//FAT ARROW FUNCTIONS

function coffee() {
    console.log('Coffee is life!')
}

let coffee = () => {
    console.log("Coffee is cool");
}

coffee();

var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`)
}

cats(1, 35);


let fatArrows = (x) => console.log(x);

fatArrows('This is a function');

let namingMachine = (fname, lname) => (fname, lname);

console.log(namingMachine("Tom", "Hiddleston"));

let score = "Winner";

function uppperCase(big) {
    return big.toUpperCase();
}

function lowerCase(small) {
    return small.toLowerCase();
}

console.log( lowerCase( uppperCase(score)))