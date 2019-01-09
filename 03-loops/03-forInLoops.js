var student = { name: "Harry", awesome: true, degree: "JavaScript", week: 1 };

for (item in student) {
    //console.log(item);
    console.log(student[item])
}

var pieArry = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot'];

for (var tom of pieArry) {
    console.log(tom);
}

var str = "mike"

for (var i = 0; i <= str.toUpperCase; i++) {
    console.log(str.charAt)
}

var studentName = 'harRy';
var capName;

for (let n in studentName) {
    if(n == 0) {
      capName = studentName[n].toUpperCase();
    } else {
        capName +=studentName[n].toLowerCase
    }
}
console.log(capName);

var studentName = 'hArRy';
var capName;
for (let n in studentName) {
  // console.log(studentName[n])
  if (n == 3) {
    capName = studentName[n].toUpperCase();
  } else {
    capName += studentName[n].toLowerCase();
  }
} 
console.log(capName);



    for( var i = palindrom.length; i > 0; i-- )
    {
        if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
        {
            document.write('the word is palindrome.');
        }else{
            document.write('the word is not palindrome!');
        }
    }

checkPalindrom('hello');

