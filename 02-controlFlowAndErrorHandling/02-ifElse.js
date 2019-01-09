// If Else Statements

let money = false

if (money) {
    console.log('Starbucks')
} else {
    console.log('Make coffee')
}

let weather = 175

if (weather < 70) {
    console.log('wear a jacket')
} else {
    console.log('No jacket necessary')
}

let myName = 'Michael'

if (myName) {
    console.log('Hello, my name is', myName)
    console.log('Hello, my name is ' + myName)
    console.log(`Hello, my name is ${myName}.`)
} else {
    console.log('Hello, what is your name?')
}

let myName = 'harRy'

let myNameChanged = myName.charAt(3).toLowerCase()
let myNameChanged2 = myName.charAt(0).toUpperCase()

console.log(myNameChanged2)

if (myName === 'Harry') {
    console.log(myName)
} else {
    myName = 'Harry'
console.log(myName)
}

// Capitalizing first letter in a Word
let myName = 'harRy'
let str = 'harRy'

let newStr = `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
console.log(newStr)

let str = 'MicHael'

if(str[0] === str[0].toUpperCase()) {
let firstLetter = str[0] + str.slice(1).toLowerCase()
console.log(firstLetter)
} else {
    let otherLetters = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase
    console.log(otherLetters)
}

//Else If Statements

let weather = 40

if (weather > 70) {
    console.log('Wear a t-shirt')
} else if (weather <=70 && weather > 50) {
    console.log('Wear a light jacket')
} else {
    console.log('Stay inside')
}

let age = 30
if(age <= 17) {
    console.log('Sorry, you\'re too young to do anything.') 
} else if (age = 18) {
    console.log('Yay! You can vote!')
} else if (age =21) {
    console.log('Yay! You can drink!')
}else {

}

let age = 130
let young = 'Sorry, you\'r too young to do anything'
let vote = 'Yay! You can vote!'
let drink = 'Yay! You can drink!'
let rent = 'Yay! you can rent a car!'

if (age > 0 && age < 120) {
if (age >= 25) {
    console.log(rent, drink, vote)
} else if (age >=21) {
    console.log(drink, vote)
} else if (age>= 18) {
    console.log(vote)
} else {
    console.log(young)
}
} else {
    console.log('pick a real age')
}