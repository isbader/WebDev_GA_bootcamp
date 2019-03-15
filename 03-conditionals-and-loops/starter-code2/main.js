const readline = require('readline-sync');
{
/*
    Write your codes beneath this line
*/



/*
## Independent Practice (10 min)
When programming user interfaces, you will often need to display results based on a certain input. In this exercise, help the students design a program that will let users know what legal privileges U.S. citizens enjoy based on their age.
Write a program that outputs results based on users’ age. This exercise draws on if/else statements, Boolean logic, and comparison operators. See the conditions below:
- If you are under 16, you cannot do much outside of going to school
- If you are 16 or older, you can drive
- If you 18 or older, you can vote
- If you are 21 or older, you can smoke cigarettes
- If you are 25 or older, you can rent a car
- If you are 35 or older, you can run for president
- If you are 62 or older, you collect social security benefits
Have the program print out only the most recent thing that they've become eligible to do, i.e. if they are 46, only print "You can run for president." (This will at least force them to use `else if` instead of just `if`).
Students can work in pairs to complete the exercise. 
*/

var age = readline.question("What is your age?");
age = parseInt(age);

if(age < 16) {
    console.log("You can't do much outside of going to school");
}
else if(age >= 16) {
    console.log("You can drive");
}
else if(age >= 18) {
    console.log("You can vote");
}
else if(age >= 21) {
    console.log("You can Smoke cigarettes");
}
else if(age >= 25) {
    console.log("You Can rent a car");
}
else if(age >= 35) {
    console.log("You can run for president");
}
else if(age >= 62) {
    console.log("You can collect social security benifits");
}
else {
    console.log("Live large");
}

/*
switch (age) {
    case (age <= 16) :
    console.log("You can not do much outside of going to school");
    break;
    case (age <= 16) :
    console.log("You can drive");
    break;
    case (age <= 18) :
    console.log("you can vote");
    break; 
    case (age <= 21) :
    console.log("you can smoke cigarettes");
    break;
    case (age <= 25) :
    console.log("You can rent a car");
    break;
    case (age <= 35) :
    console.log("you can become president");
    break;
    case (age <= 62) :
    console.log("you can collect social security benifits");
    break;
    default :
    console.log("Not a valid number");
}
*/

/*
    Create a command line app that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.
    i.e values can be 1 - 15
*/

 var maxValue = readline.question("What is the max value?");
 maxValue = parseInt(maxValue);
for (let i = 1; i <= maxValue; i++){
if(i%3 == 0){
    console.log("fizz")
} else { 
    console.log(i)
}
}

/*
Ask the user for a new string and check if it's a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Examples of palindromes:
	- "A man, a plan, a canal, Panama!"
	- "Amor, Roma"
	- "race car"
	- "stack cats"
	- "step on no pets"
	- "taco cat"
	- "put it up"
	- "Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

var sentence = readline.question("Is the sentence a palindrome?");
console.log(sentence);
split_word = sentence.split("");
console.log(split_word);
reverse_split= split_word.reverse("");
console.log(reverse_split);
split_joined = reverse_split.join("");
console.log(split_joined);
if (sentence.toUpperCase() == split_joined.toUpperCase()) {
    console.log("The string is a palindrome");
} else { 
    console.log("The string is not a palindrome");
}

/*
Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the common beepboop loop.
// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "beep" should appear.
// - If the number is divisible by  **5**, the word "boop" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "beepboop" should be logged.
*/

var beepBoop = readline.question("Enter Max number?");
beepBoop = parseInt(beepBoop);
if (beepBoop%3 == 0 && beepBoop%5 == 0){
    console.log("beepBoop");
} 
else if(beepBoop%5 == 0){
    console.log("boop");
}
else if(beepBoop%3 == 0){
    console.log("beep");
}else {
    console.log("The number is not divisible by 3 or 5");
}

/* Extra work
**1: 99 Bottles of Coke**
- Write a script that prints the lyrics to "99 Bottles of Coke on the Wall" in the terminal. 
- Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of coke" and "1 bottle of coke").
*/

var lyrics = (" Bottles of coke on the Wall")
var lyrics1 = (" Bottle of coke on the wall")
for(let num_lyrics = 100; num_lyrics > 0; num_lyrics-- ){
    if(num_lyrics > 1){
    console.log(num_lyrics + lyrics);
    }
    else if(num_lyrics = 1){
        console.log(num_lyrics + lyrics1);
    }
}


/* EXTRA WORK
**2: Random Address Generator**
- Write a script that can generate random addresses
- As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
- Your script should randomly select one item from each of these arrays and then use them to construct a random address
- Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
- `node random-address.js`
- `=> 34578 Dolphin Street, Wonka NY, 44506`
*/
/*
var street = readline.question("Street?");
var phone_number = readline.question("Phone?");
var city_name = readline.question("City?");
var state_name = readline.question("State?");
var zip_code = readline.question("Zip Code?");
var id = Math.floor(Math.random()*1000);

//var id = Math.floor(Math.random() * 100);
var uni_address = [id,street,phone_number,city_name,state_name,zip_code];
console.log(uni_address);
console.log(uni_address.join());
*/
/*
var address
var street_num = [1,2,3,4,5]
var street_name = ["dull","hang","jump","falls","Johnson"]
var city_name = ["riyadh"]




}
*/
exports.longestWord = function(){
    let words = [ "mystery", "brother",
        "aviator", "crocodile",
        "pearl","orchard", "crackpot"
        ];

    let result =""; 
    for (var word of words){
    if (word.length > result.length){
      result = word
    }
}



    return result
}
