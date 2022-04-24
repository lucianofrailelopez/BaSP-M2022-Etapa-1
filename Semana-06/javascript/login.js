
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

var capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

var dividers = ["-",",","%","#","!","^","_","+","=","?","~","*"];

var verificationEmail;

var verificationPass;

function verifyEmail() {
    var email = document.getElementById('mail').value;

    var contadorLetras1 = 0;

    var contadorNumero1 = 0;

    var contadorDividers = 0;

    for (let i = 0; i < email.length; i++) {
      if (letters.includes(email[i].toLowerCase())) {
          contadorLetras1++;
      }else if (capitalLetters.includes(email[i].toUpperCase())){
          contadorLetras1++;
      }else if(dividers.includes(email[i])){
          contadorDividers++;
      }else {
          Number.isInteger(email[i]);
          contadorNumero1++;
      }
    }

    if(email.length > 3 && email.indexOf('@gmail.com') > 1 && contadorLetras1 > 0 && contadorDividers <= 0) {
        document.querySelector('.message-mailgreen').classList.add('message-mailgreen-activo');
        document.querySelector('.input-mail').classList.add('input-mailgreen-activo');
        document.querySelector('.input-mail').classList.remove('input-mailred-activo');
        document.querySelector('.message-mailred').classList.remove('message-mailred-activo');
        verificationEmail = true;
    }else {
        document.querySelector('.message-mailred').classList.add('message-mailred-activo');
        document.querySelector('.input-mail').classList.add('input-mailred-activo');
        document.querySelector('.input-mail').classList.remove('input-mailgreen-activo');
        document.querySelector('.message-mailgreen').classList.remove('message-mailgreen-activo');
        verificationEmail = false;
    }
}

function verifyPassword() {
    var password = document.getElementById('password').value;

    var contadorLetras2 = 0;

    var contadorNumero2 = 0;

    var contadorDividers2 = 0;

    for (let i = 0; i < password.length; i++) {
      if (letters.includes(password[i].toLowerCase())) {
          contadorLetras2++;
      }else if (capitalLetters.includes(password[i].toUpperCase())){
          contadorLetras2++;
      }else if(dividers.includes(password[i])) {
          contadorDividers2++;
      }else {
          Number.isInteger(password[i]);
          contadorNumero2++;
      }
    }
    if(password.length >= 8 && contadorLetras2 > 0 && contadorNumero2 > 0 && contadorDividers2 <= 0){
        document.querySelector('.input-password').classList.add('input-passwordgreen-activo');
        document.querySelector('.message-passgreen').classList.add('message-passgreen-activo');
        document.querySelector('.input-password').classList.remove('input-passwordred-activo');
        document.querySelector('.message-passred').classList.remove('message-passred-activo');
        verificationPass = true;
    }else {
        document.querySelector('.input-password').classList.add('input-passwordred-activo');
        document.querySelector('.message-passred').classList.add('message-passred-activo');
        document.querySelector('.input-password').classList.remove('input-passwordgreen-activo');
        document.querySelector('.message-passgreen').classList.remove('message-passgreen-activo');
        verificationPass = false;
    }
}

function checkEmail() {
    verifyEmail();
}

function checkPass() {
    verifyPassword();
}

function fixingup() {
    document.querySelector('.message-mailred').classList.remove('message-mailred-activo');
}

function fixingupPass() {
    document.querySelector('.message-passred').classList.remove('message-passred-activo');
}


function checkValidations() {
    
    var email = document.getElementById('mail').value;
    verifyEmail(email);
    console.log(email);

    var password = document.getElementById('password').value;
    verifyPassword(password);
    console.log(password);

}



window.onload = function () {
    document.querySelector('.form-login').addEventListener('submit', function (event) {
        event.preventDefault();

        if(verificationEmail && verificationPass == true) {
            document.querySelector('.message-correct').classList.add('message-correct-activo');
            document.querySelector('.message-incorrect').classList.remove('message-incorrect-activo');
            document.querySelector('.form-login').reset();
        }else {
            document.querySelector('.message-incorrect').classList.add('message-incorrect-activo');
            document.querySelector('.message-correct').classList.remove('message-correct-activo');
        }
    })
}