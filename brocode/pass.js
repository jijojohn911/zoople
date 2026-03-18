const passwordBox = document.getElementById("password");
let length = 12;
let lowerChar = "abcdefghijklmnopqrstuvwxyz"
let upperChar = "QWERTYUIOPASDFGHJKLZXCVBNM"
let number = "0123456789";
let symbols = "!@#$%^&*()_+=-><";
let allChar = lowerChar + upperChar + number + symbols;
function createPassword() {
    let password = "";
    password += lowerChar[Math.floor(Math.random() * lowerChar.length)];
    password += upperChar[Math.floor(Math.random() * upperChar.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    for(let i=password.length;i<length;i++){
       password+=allChar[Math.floor(Math.random()*allChar.length)]
    }
    passwordBox.value=password
}


