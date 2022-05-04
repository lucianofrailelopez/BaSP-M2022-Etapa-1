
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

var capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

var dividers = ["-",",","%","#","!","^","_","+","=","?","~","*"];

var arraysNumbers = ["1","2","3","4","5","6","7","8","9","0"];

var space = " ";

var verificationEmail;

var verificationPass;

function verifyEmail() {
    var email = document.getElementById('mail').value;

    var contadorLetras1 = 0;

    var contadorNumero1 = 0;

    var contadorDividers = 0;

    var contadorspace = 0;

    var at = "@";

    var contadorAt = 0;

    for (let i = 0; i < email.length; i++) {
      if (letters.includes(email[i].toLowerCase())) {
          contadorLetras1++;
      }else if (capitalLetters.includes(email[i].toUpperCase())){
          contadorLetras1++;
      }else if(dividers.includes(email[i])){
          contadorDividers++;
      }else if (at.includes(email[i])) {
          contadorAt++;
      }else if(arraysNumbers.includes(email[i])){
        contadorNumero1++;
      }else if (space.includes(email[i])) {
          contadorspace++;
      }
    }

    if (contadorAt < 2 && contadorLetras1 > 3 && contadorNumero1 < 1 && contadorDividers < 1 && contadorspace < 1) {
        document.getElementById('mail').classList.add('input-mail-green');
        document.querySelector('.email-green').style.display = "flex";
        document.getElementById('mail').classList.remove('input-mail-red');
        document.querySelector('.email-red').style.display = "none";
        verificationEmail = true;
        document.getElementById('date-email').innerHTML=email;
    }else {
        document.getElementById('mail').classList.add('input-mail-red');
        document.querySelector('.email-red').style.display = "flex";
        document.getElementById('mail').classList.remove('input-mail-green');
        document.querySelector('.email-green').style.display = "none";
        verificationEmail = false;
        document.getElementById('date-email').innerHTML="Error";
    }
}

function verifyPassword() {
    var password = document.getElementById('password').value;

    var contadorLetras2 = 0;

    var contadorNumero2 = 0;

    var contadorDividers2 = 0;

    var counterSpace2 = 0;

    for (let i = 0; i < password.length; i++) {
      if (letters.includes(password[i].toLowerCase())) {
          contadorLetras2++;
      }else if (capitalLetters.includes(password[i])){
          contadorLetras2++;
      }else if(dividers.includes(password[i])) {
          contadorDividers2++;
      }else if (arraysNumbers.includes(password[i])) {
          contadorNumero2++;
      }else if (space.includes(password[i])) {
          counterSpace2++;
      }
    }

    if (contadorLetras2 > 3 && contadorNumero2 > 0 && contadorDividers2 < 1 && counterSpace2 < 1) {
        document.getElementById('password').classList.add('input-password-green');
        document.querySelector('.password-green').style.display= "flex";
        document.getElementById('password').classList.remove('input-password-red');
        document.querySelector('.password-red').style.display= "none";
        document.getElementById('date-password').innerHTML=password;
        verificationPass = true;
    }else {
        document.getElementById('password').classList.add('input-password-red');
        document.querySelector('.password-red').style.display= "flex";
        document.getElementById('password').classList.remove('input-password-green');
        document.querySelector('.password-green').style.display= "none";
        document.getElementById('date-password').innerHTML="Error";
        verificationPass = false;
    }
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

        const emailValue = document.getElementById('mail').value;
        const passwordValue = document.getElementById('password').value;
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
        url = url + '?email=' + emailValue + '&password=' + passwordValue;

        checkValidations();

        if(verificationEmail && verificationPass == true) {
            fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(res) {
                alert(res.msg);
            })
            document.querySelector('.form-login').reset();
            document.querySelector(".emergent").style.display = "flex";
        }else {
            fetch(url) 
            .then(function(res) {
                return res.json();
            })
            .then(function(res){
                alert(res.error.msg);
            })
            .catch(function(err){
                console.error(err);
                alert(response.statustext);
            })
            document.querySelector(".emergent").style.display = "flex";
        }
    })
    //blur and focus
        var mailEvent = document.getElementById('mail');
        mailEvent.addEventListener('blur', verifyEmail);
        mailEvent.addEventListener('focus', function () {
            document.querySelector('.email-green').style.display = "none";
            document.querySelector('.email-red').style.display = "none";
        });

        var passwordEvent = document.getElementById('password');
        passwordEvent.addEventListener('blur', verifyPassword);
        passwordEvent.addEventListener('focus', function () {
            document.querySelector('.password-red').style.display= "none";
            document.querySelector('.password-green').style.display= "none";
        });

        var buttonExit = document.getElementById("exit-emer");

        buttonExit.addEventListener("click", function () {
            document.querySelector(".emergent").style.display = "none";
        })
}