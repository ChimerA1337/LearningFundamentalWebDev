let passwordLength = 16;
let allowLowercase = true;
let allowUppercase = false;
let allowSymbols = false;
let allowNumbers = false;

const lowercaseCheck = document.getElementById("allowLowercase");
const uppercaseCheck = document.getElementById("allowUppercase");
const symbolsCheck = document.getElementById("allowSymbols");
const numbersCheck = document.getElementById("allowNumbers");
const generatePasswordButton = document.getElementById("generatePassword");
const passwordText = document.getElementById("password");
const passwordLengthInput = document.getElementById("length");
const copiedPopup = document.getElementById("popup");
copiedPopup.textContent = 'Copied password!';

let password = generatePassword(
    passwordLength, 
    allowLowercase, 
    allowUppercase, 
    allowSymbols, 
    allowNumbers);

lowercaseCheck.checked = true;
passwordText.innerHTML = `<i class="fa-solid fa-copy"></i> ${password} <i class="fa-solid fa-copy"></i>`;

generatePasswordButton.onclick = function() {
    if(lowercaseCheck.checked) allowLowercase = true;
    else allowLowercase = false;
    if(uppercaseCheck.checked) allowUppercase = true;
    else allowUppercase = false;
    if(symbolsCheck.checked) allowSymbols = true;
    else allowSymbols = false;
    if(numbersCheck.checked) allowNumbers = true;
    else allowNumbers = false;

    passwordLength = passwordLengthInput.value;
    passwordLength = Number(passwordLength);

    password = generatePassword(
    passwordLength, 
    allowLowercase, 
    allowUppercase, 
    allowSymbols, 
    allowNumbers);

    if(!allowLowercase && !allowUppercase && !allowSymbols && !allowNumbers)
        passwordText.textContent = "Please check atleast one box.";
    else passwordText.innerHTML = `<i class="fa-solid fa-copy"></i> ${password} <i class="fa-solid fa-copy"></i>`
}

void popup.offsetWidth;
passwordText.onclick = function() {
    navigator.clipboard.writeText(password);
    copiedPopup.classList.remove('show');
    void popup.offsetWidth;
    copiedPopup.classList.add('show');
}

function generatePassword(  
    length,
    allowLowercase,
    allowUppercase,
    allowSymbols,
    allowNumbers) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!#¤%&/()=?^.,-";
    const numbers = "0123456789";

    let allowedChars = "";
    let password = "";

    allowedChars += allowLowercase ? lowercaseChars : "";
    allowedChars += allowUppercase ? uppercaseChars : "";
    allowedChars += allowSymbols ? symbols : "";
    allowedChars += allowNumbers ? numbers : "";

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

console.log(`Generated Password: ${password}`);
