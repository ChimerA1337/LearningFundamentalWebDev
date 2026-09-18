console.log(`trolling`);
//window.alert(`alert123`);

document.getElementById("pGreen").textContent = `loremnt`;

let age = 24;
let price = 10.99;
let isAdult = true;
let name = "gdsdsadsa"

console.log(`age: ${age} price: ${price}`);
console.log(`age is a variable of the type: ${typeof age}`);
console.log(`price is a variable of the type: ${typeof price}`);
console.log(`your name is ${name}`);
console.log(`is ${name} an adult?: ${isAdult}`);

document.getElementById("JSp1").textContent = `Your name is ${name} and you are ${age} years old.`;
document.getElementById("JSp2").textContent = `it is ${isAdult} that ${name} is an adult`;

// Easy way of user input (apparently doesnt work in sandbox environment):
// let username = window.prompt("What is your name?");
// document.getElementById("JSp3").textContent = `Your name is ${username}.`;

// Professional way of user input:
let username;
document.getElementById("usernameSubmit").onclick = function() {
    username = document.getElementById("usernameInput").value;
    document.getElementById("JSp3").textContent = `Your name is ${username}.`;
}

let testNum;
document.getElementById("numberSubmit").onclick = function() {
    testNum = document.getElementById("numberInput").value;
    testNum = Number(testNum) + 13;
    document.getElementById("JSp4").textContent = `Your number +13 is ${testNum}.`;
}

// Counter Program
const decreaseButton = document.getElementById("decreaseCounter");
const increaseButton = document.getElementById("increaseCounter");
const resetButton = document.getElementById("resetCounter");
const counterLabel = document.getElementById("counterLabel");
let count = 0;

decreaseButton.onclick = function() {
    count--;
    counterLabel.textContent = count;
}
increaseButton.onclick = function() {
    count++;
    counterLabel.textContent = count;
}
resetButton.onclick = function() {
    count = 0;
    counterLabel.textContent = count;
}

// Random number generation

const randomButton = document.getElementById("generateRandomNumber");
const randomNumber = document.getElementById("randomNumberLabel");
let randomNum = 0;

randomButton.onclick = function() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    randomNumber.textContent = randomNum;
}

// Checkboxes, radio and ifs

const fortnite = document.getElementById("fortnite");
const marques = document.getElementById("marquesbrownlee");
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const checkboxesSubmit = document.getElementById("submitCheckboxes");
const checkboxResult = document.getElementById("checkboxResult");
const radioResult = document.getElementById("radioResult");

let checkboxParagraph = "You checked: ";
let radioParagraph = "You checked: ";

checkboxesSubmit.onclick = function() {
    if(fortnite.checked) {
        checkboxParagraph += " fortnite";
        if(marques.checked) checkboxParagraph += ", Marques Brownlee";
    }
    else if(marques.checked) checkboxParagraph += " Marques Brownlee";
    else checkboxParagraph += " nothing.";
    checkboxResult.textContent = checkboxParagraph;
    checkboxParagraph = "You checked: ";

    if(A.checked) radioParagraph += "A";
    else if(B.checked) radioParagraph += "B";
    else if(C.checked) radioParagraph += "C";
    else radioParagraph += "nothing."
    radioResult.textContent = radioParagraph;
    radioParagraph = "You checked: ";
}

// Number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum) + 1);
const guessSubmit = document.getElementById("guessSubmit");

let attempts = 0;
let guess;
let running = true;

document.getElementById("guessingGameParagraph").textContent = `Enter a guess, a number between ${minNum} and ${maxNum}.`;

guessSubmit.onclick = function() {
    attempts++;
    guess = document.getElementById("guessNum").value;
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert("Please enter a valid number.");
    }

    if(guess == answer) {
        document.getElementById("guessingGameResult").textContent = "Correct!";
    }
    else if(guess > answer) {
            document.getElementById("guessingGameResult").textContent = "Incorrect :(\ntry a lower number.";
        }
    else if(guess < answer) {
        document.getElementById("guessingGameResult").textContent = "Incorrect :(\ntry a higher number.";
    }
    document.getElementById("attemptsCounter").textContent = `Attempts: ${attempts}`;
}

// Temperature conversion program

const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");

function convert() {
    let input = Number(document.getElementById("tempConvInput").value);
    if(toFahrenheit.checked) {
        input *= 9;
        input /= 5;
        input += 32;
        document.getElementById("tempConvResult").textContent = `The temperature in fahrenheit is: ${input.toFixed(2)}`;
    }
    else if(toCelsius.checked) {
        input -= 32;
        input *= 5;
        input /= 9;
        document.getElementById("tempConvResult").textContent = `The temperature in celsius is: ${input.toFixed(2)}`;
    }
    else {
        document.getElementById("tempConvResult").textContent = "Please pick an option to convert from and to.";
    }
}

// Dice roller program

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6 + 1);
        console.log(value);
        values.push(value);
        images.push(`<img src="diceImages/${value}.webp" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}