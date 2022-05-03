

// expreciones

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

var capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

var dividers = ["-",",","%","#","!","^","_","+","=","?","~","*","{","}","[","]",";","?","|","<",">","@"];

var dividersSecond = ["-",",","%","#","!","^","_","+","=","?","~","*","{","}","[","]",";","?","|","<",">"];

var arraysNumbers = ["1","2","3","4","5","6","7","8","9","0"];

//
var nameVerify;

var lastNameVerify;

var dniVerify;

var dateVerify;

var telVerify;

var addressVerify;

var locationVerify;

var codeVerify;

var emailVerify;

var passwordVerify;

var passwordRepetVerify;
//

function validateName() {
    var name = document.getElementById('name').value;

    var letterCounter = 0;

    var numberCounter = 0;

    var dividersCounter = 0;

    var contadorspace = 0;
    
    for (let i = 0; i < name.length; i++) {
       if(letters.includes(name[i])) {
        letterCounter++;
       }else if(capitalLetters.includes(name[i])) {
        letterCounter++;
       }else if(arraysNumbers.includes(name[i])) {
        numberCounter++;
       }else if(dividers.includes(name[i])) {
           dividersCounter++;
       }else if(space.includes(name[i])) {
           contadorspace++;
       }
    }

    if(name.indexOf(" ") > 0 || dividersCounter >= 1) {
        document.getElementById('name').classList.add('input-namered-activo');
        document.querySelector('.name-red-second').style.display = "flex";
        document.querySelector('.name-green').style.display = "none";
        document.querySelector('.name-red').style.display = "none";
    }else if (name.length > 3 && letterCounter > 0 && numberCounter <= 0) {
        document.getElementById('name').classList.add('input-name-activo');
        document.querySelector('.name-green').style.display = "flex";
        document.getElementById('name').classList.remove('input-namered-activo');
        document.querySelector('.name-red').style.display = "none";
        document.querySelector('.name-red-second').style.display = "none";
        nameVerify = true;
        document.getElementById('name-datum').innerHTML=name;
    }else {
        document.getElementById('name').classList.add('input-namered-activo');
        document.querySelector('.name-red').style.display = "flex";
        document.getElementById('name').classList.remove('input-name-activo');
        document.querySelector('.name-green').style.display = "none";
        document.querySelector('.name-red-second').style.display = "none";
        nameVerify = false;
    }
}

function validateLastName() {
    var lastName = document.getElementById('lastName').value;
    
    var letterCounter2 = 0;

    var numberCounter2 = 0;

    var dividersCounter2 = 0;

    for (let i = 0; i < lastName.length; i++) {
        if(letters.includes(lastName[i])) {
            letterCounter2++;
           }else if(capitalLetters.includes(lastName[i])) {
            letterCounter2++;
           }else if(arraysNumbers.includes(lastName[i])) {
            numberCounter2++;
           }else if (dividers.includes(lastName[i])) {
            dividersCounter2++;
           }
    }

    if(lastName.length > 3 && letterCounter2 > 0 && numberCounter2 <= 0 && dividersCounter2 <= 0 && lastName.indexOf(" ") > 1) {
        document.getElementById('lastName').classList.add('input-lastname-green');
        document.querySelector('.lastname-green').style.display = "flex";
        document.getElementById('lastName').classList.remove('input-lastname-red');
        document.querySelector('.lastname-red').style.display = "none";
        lastNameVerify = true;
        document.getElementById('lastname-datum').innerHTML=lastName;
    }else {
        document.getElementById('lastName').classList.add('input-lastname-red');
        document.querySelector('.lastname-red').style.display = "flex";
        document.getElementById('lastName').classList.remove('input-lastname-green');
        document.querySelector('.lastname-green').style.display = "none";
        lastNameVerify = false;
    }
}

function validateDni() {
    var dni = document.getElementById('dni').value;
    
    var letterCounter3 = 0;

    var numberCounter3 = 0;

    var dividersCounter3 = 0;

    for (let i = 0; i < dni.length; i++) {
        if(letters.includes(dni[i])) {
            letterCounter3++;
           }else if(capitalLetters.includes(dni[i])) {
            letterCounter3++;
           }else if(arraysNumbers.includes(dni[i])) {
            numberCounter3++;
           }else if (dividers.includes(dni[i])) {
            dividersCounter3++;
           }
    }

    if (dni.length >= 7 && numberCounter3 > 0 && letterCounter3 < 1 && dividersCounter3 < 1) {
        document.getElementById('dni').classList.add("input-dni-green");
        document.querySelector(".dni-green").style.display = "flex";
        document.getElementById('dni').classList.remove("input-dni-red");
        document.querySelector(".dni-red").style.display = "none";
        dniVerify = true;
        document.getElementById('dni-datum').innerHTML=dni;
    }else {
        document.getElementById('dni').classList.add("input-dni-red");
        document.querySelector(".dni-red").style.display = "flex";
        document.getElementById('dni').classList.remove("input-dni-green");
        document.querySelector(".dni-green").style.display = "none";
        dniVerify = false;
    }
}

function validateDate() {
    var date = document.getElementById('date').value;
    
    var letterCounter4 = 0;

    var dividersCounter4 = 0;

    var dateYear = date.substring(0,3);

    for (let i = 0; i < date.length; i++) {
        if(letters.includes(date[i])) {
            letterCounter4++;
           }else if(capitalLetters.includes(date[i])) {
            letterCounter4++;
           }else {
               dividers.includes(date[i]);
               dividersCounter4++;
           }
    }

    if ( dateYear < "1930") {
        document.getElementById('date').classList.add("input-date-red");
        document.querySelector(".date-red").style.display = "flex";
        document.getElementById('date').classList.remove("input-date-green");
        document.querySelector(".date-green").style.display = "none";
        dateVerify = true;
        document.getElementById('date-datum').innerHTML=date;
    }else{
        document.getElementById('date').classList.add("input-date-green");
        document.querySelector(".date-green").style.display = "flex";
        document.getElementById('date').classList.remove("input-date-red");
        document.querySelector(".date-red").style.display = "none";
        dateVerify = true;
    }
}

function validateTel() {
    var tel = document.getElementById('tel').value;

    var letterCounter5 = 0;

    var numberCounter5 = 0;

    var dividersCounter5 = 0;

    for (var i = 0; i < tel.length; i++) {
        if(letters.includes(tel[i])) {
            letterCounter5++;
           }else if (capitalLetters.includes(tel[i])) {
            letterCounter5++;
           } else if(dividers.includes(tel[i])) {
            dividersCounter5++;
           }else if(arraysNumbers.includes(tel[i])) {
            numberCounter5++;
           }
    }

    if (tel.length >= 10 && numberCounter5 > 0 && letterCounter5 < 1 && dividersCounter5 < 1) {
        document.getElementById('tel').classList.add("input-tel-green");
        document.querySelector(".tel-green").style.display = "flex";
        document.getElementById('tel').classList.remove("input-tel-red");
        document.querySelector(".tel-red").style.display = "none";
        telVerify = true;
        document.getElementById('tel-datum').innerHTML=tel;
    }else {
        document.getElementById('tel').classList.add("input-tel-red");
        document.querySelector(".tel-red").style.display = "flex";
        document.getElementById('tel').classList.remove("input-tel-green");
        document.querySelector(".tel-green").style.display = "none";
        telVerify = false;
    }
}

function validateAddress() {
    var address = document.getElementById('address').value;

    var space = " ";

    var letterCounter6 = 0;

    var numberCounter6 = 0;

    var contadorSpace = 0;
    
    for (let i = 0; i < address.length; i++) {
       if(letters.includes(address[i])) {
        letterCounter6++;
       }else if(capitalLetters.includes(address[i])) {
        letterCounter6++;
       }else if(arraysNumbers.includes(address[i])) {
        numberCounter6++;
       }else if (space.includes(address[i])) {
        contadorSpace++;
       }
    }

    if (address.length > 5 && address.indexOf(" ") > 1 && numberCounter6 > 1 && contadorSpace < 2) {
        document.getElementById('address').classList.add("input-address-green");
        document.querySelector(".address-green").style.display = "flex";
        document.getElementById('address').classList.remove("input-address-red");
        document.querySelector(".address-red").style.display = "none";
        addressVerify = true;
        document.getElementById('address-datum').innerHTML=address;
    }else {
        document.getElementById('address').classList.add("input-address-red");
        document.querySelector(".address-red").style.display = "flex";
        document.getElementById('address').classList.remove("input-address-green");
        document.querySelector(".address-green").style.display = "none";
        addressVerify = false;
    }
}

function validateLocation() {
    var location = document.getElementById('location').value;
    
    var letterCounter7 = 0;

    var numberCounter7 = 0;

    var dividersCounter7 = 0;
    
    for (let i = 0; i < location.length; i++) {
       if(letters.includes(location[i])) {
        letterCounter7++;
       }else if(capitalLetters.includes(location[i])) {
        letterCounter7++;
       }else if(arraysNumbers.includes(location[i])) {
        numberCounter7++;
       }else if(dividers.includes(location[i])) {
        dividersCounter7++;
       }
    }

    if (location.length > 3 && letterCounter7 > 0 && numberCounter7 <= 0 && dividersCounter7 < 1) {
        document.getElementById('location').classList.add("input-location-green");
        document.querySelector(".location-green").style.display = "flex";
        document.getElementById('location').classList.remove("input-location-red");
        document.querySelector(".location-red").style.display = "none";
        locationVerify = true;
        document.getElementById('location-datum').innerHTML=location;
    }else {
        document.getElementById('location').classList.add("input-location-red");
        document.querySelector(".location-red").style.display = "flex";
        document.getElementById('location').classList.remove("input-location-green");
        document.querySelector(".location-green").style.display = "none";
        locationVerify = false;
    }
}

function validatePostalCode() {
    var postalCode = document.getElementById('code').value;

    var numberCounter8 = 0;

    var letterCounter8 = 0;

    var dividersCounter8 = 0;
    
    for (let i = 0; i < postalCode.length; i++) {
        if(arraysNumbers.includes(postalCode[i])) {
        numberCounter8++;
        }else if(dividers.includes(postalCode[i])) {
        dividersCounter8++;
       }else if (letters.includes(postalCode[i])) {
        letterCounter8++;
       }else if (capitalLetters.includes(postalCode[i])){
        letterCounter8++;
       }
    }

    if (numberCounter8 >= 4 && numberCounter8 <= 5 && dividersCounter8 <= 0 && letterCounter8 < 1) {
        document.getElementById('code').classList.add("input-code-green");
        document.querySelector(".code-green").style.display = "flex";
        document.getElementById('code').classList.remove("input-code-red");
        document.querySelector(".code-red").style.display = "none";
        codeVerify = true;
        document.getElementById('code-datum').innerHTML=postalCode;
    }else {
        document.getElementById('code').classList.add("input-code-red");
        document.querySelector(".code-red").style.display = "flex";
        document.getElementById('code').classList.remove("input-code-green");
        document.querySelector(".code-green").style.display = "none";
        codeVerify = false;
    }
}

function validateEmail() {
    var email = document.getElementById('mail').value;
    
    var letterCounter9 = 0;

    var numberCounter9 = 0;

    var dividersCounter9 = 0;
    
    for (let i = 0; i < email.length; i++) {
       if(letters.includes(email[i])) {
        letterCounter9++;
       }else if(capitalLetters.includes(email[i])) {
        letterCounter9++;
       }else if(arraysNumbers.includes(email[i])) {
        numberCounter9++;
       }else if(dividersSecond.includes(email[i])) {
        dividersCounter9++;
       }
    }

    if (email.indexOf("@gmail.com") > 1 && letterCounter9 > 4 && numberCounter9 >= 0 && dividersCounter9 < 1) {
        document.getElementById('mail').classList.add("input-mail-green");
        document.querySelector(".mail-green").style.display = "flex";
        document.getElementById('mail').classList.remove("input-mail-red");
        document.querySelector(".mail-red").style.display = "none";
        emailVerify = true;
        document.getElementById('mail-datum').innerHTML=email;
    }else {
        document.getElementById('mail').classList.add("input-mail-red");
        document.querySelector(".mail-red").style.display = "flex";
        document.getElementById('mail').classList.remove("input-mail-green");
        document.querySelector(".mail-green").style.display = "none";
        emailVerify = false;
    }
}

function validatePassword() {
    var password = document.getElementById('password').value;

    var contadorLetras10 = 0;

    var contadorNumero10 = 0;

    var contadorDividers10 = 0;

    for (let i = 0; i < password.length; i++) {
      if (letters.includes(password[i].toLowerCase())) {
          contadorLetras10++;
      }else if (capitalLetters.includes(password[i].toUpperCase())){
          contadorLetras10++;
      }else if(dividers.includes(password[i])) {
          contadorDividers10++;
      }else {
          Number.isInteger(password[i]);
          contadorNumero10++;
      }
    }

    if(password.length >= 8 && contadorLetras10 > 0 && contadorNumero10 > 0 && contadorDividers10 <= 0){
        document.getElementById('password').classList.add("input-password-green");
        document.querySelector('.password-green').style.display = "flex";
        document.getElementById('password').classList.remove("input-password-red");
        document.querySelector('.password-red').style.display = "none";
        passwordVerify = true;
        document.getElementById('password-datum').innerHTML=password;
    }else {
        document.getElementById('password').classList.add("input-password-red");
        document.querySelector('.password-red').style.display = "flex";
        document.getElementById('password').classList.remove("input-password-green");
        document.querySelector('.password-green').style.display = "none";
        passwordVerify = false;
    }
}

function validateRepetPassword() {
    var repetPassword = document.getElementById('repet').value;
    
    var password = document.getElementById('password').value;

    var contadorLetras11 = 0;

    var contadorNumero11 = 0;

    var contadorDividers11 = 0;

    for (let i = 0; i < password.length; i++) {
      if (letters.includes(password[i].toLowerCase())) {
          contadorLetras11++;
      }else if (capitalLetters.includes(password[i].toUpperCase())){
          contadorLetras11++;
      }else if(dividers.includes(password[i])) {
          contadorDividers11++;
      }else {
          Number.isInteger(password[i]);
          contadorNumero11++;
      }
    }

    if(repetPassword == password && repetPassword.length >= 8 && contadorLetras11 > 0 && contadorNumero11 > 0 && contadorDividers11 <= 0){
        document.getElementById('repet').classList.add("input-repet-green");
        document.querySelector('.repet-green').style.display = "flex";
        document.getElementById('repet').classList.remove("input-repet-red");
        document.querySelector('.repet-red').style.display = "none";
        repetPasswordVerify = true;
        document.getElementById('repet-datum').innerHTML=repetPassword;
    }else {
        document.getElementById('repet').classList.add("input-repet-red");
        document.querySelector('.repet-red').style.display = "flex";
        document.getElementById('repet').classList.remove("input-repet-green");
        document.querySelector('.repet-green').style.display = "none";
        repetPasswordVerify = false;
    }
}


function validationSignUp() {
    
    var name = document.getElementById('name').value;
    validateName();
    console.log(name);

    var lastName = document.getElementById('lastName').value;
    validateLastName();
    console.log(lastName);

    var dni = document.getElementById('dni').value;
    validateDni();
    console.log(dni);

    var date = document.getElementById('date').value;
    validateDate();
    console.log(date);

    var tel = document.getElementById('tel').value;
    validateTel();
    console.log(tel);

    var address = document.getElementById('address').value;
    validateAddress();
    console.log(address);

    var location = document.getElementById('location').value;
    validateLocation();
    console.log(location);

    var postalCode = document.getElementById('code').value;
    validatePostalCode();
    console.log(postalCode);

    var email = document.getElementById('mail').value;
    validateEmail();
    console.log(email);

    var password = document.getElementById('password').value;
    validatePassword();
    console.log(password);

    var repetPassword = document.getElementById('repet').value;
    validateRepetPassword();
    console.log(repetPassword);
}


window.onload = function () {
    document.querySelector('.form-signup').addEventListener('submit', function (event) {
    event.preventDefault();

    validationSignUp();

    if (nameVerify && lastNameVerify && dniVerify && dateVerify && telVerify && addressVerify && locationVerify && codeVerify && emailVerify && passwordVerify && repetPasswordVerify == true) {
        document.querySelector(".emergent").style.display = "flex";
        document.getElementById('form-sign').reset();
    }
    })

    //exit-emergente
    var buttonExit = document.getElementById("exit-emer");

    buttonExit.addEventListener("click", function () {
        document.querySelector(".emergent").style.display = "none";
    })

    // var-input
    var nameEvent = document.getElementById('name');
    var lastNameEvent = document.getElementById('lastName');
    var dniEvent = document.getElementById('dni');
    var dateEvent = document.getElementById('date');
    var telEvent = document.getElementById('tel');
    var addressEvent = document.getElementById('address');
    var locationEvent = document.getElementById('location');
    var codeEvent = document.getElementById('code');
    var mailEvent = document.getElementById('mail');
    var passwordEvent = document.getElementById('password');
    var repetPasswordEvent = document.getElementById('repet');
    // blur
    nameEvent.addEventListener('blur', validateName);
    lastNameEvent.addEventListener('blur', validateLastName);
    dniEvent.addEventListener('blur', validateDni);
    dateEvent.addEventListener('blur', validateDate);
    telEvent.addEventListener('blur', validateTel);
    addressEvent.addEventListener('blur', validateAddress);
    locationEvent.addEventListener('blur', validateLocation);
    codeEvent.addEventListener('blur', validatePostalCode);
    mailEvent.addEventListener('blur', validateEmail);
    passwordEvent.addEventListener('blur', validatePassword);
    repetPasswordEvent.addEventListener('blur', validateRepetPassword);

    //focus
    nameEvent.addEventListener('focus', function () {
        document.querySelector('.name-red').style.display = "none";
        document.querySelector('.name-green').style.display = "none";
    });
    lastNameEvent.addEventListener('focus', function () {
        document.querySelector('.lastname-red').style.display = "none";
        document.querySelector('.lastname-green').style.display = "none";
    })
    dniEvent.addEventListener('focus', function () {
        document.querySelector(".dni-green").style.display = "none";
        document.querySelector(".dni-red").style.display = "none";
    });
    dateEvent.addEventListener('focus', function () {
        document.querySelector(".date-red").style.display = "none";
        document.querySelector(".date-green").style.display = "none";
    });
    telEvent.addEventListener('focus', function () {
        document.querySelector(".tel-red").style.display = "none";
        document.querySelector(".tel-green").style.display = "none";
    });
    addressEvent.addEventListener('focus', function () {
        document.querySelector(".address-green").style.display = "none";
        document.querySelector(".address-red").style.display = "none";
    });
    locationEvent.addEventListener('focus', function () {
        document.querySelector(".location-green").style.display = "none";
        document.querySelector(".location-red").style.display = "none";
    });
    codeEvent.addEventListener('focus', function () {
        document.querySelector(".code-green").style.display = "none";
        document.querySelector(".code-red").style.display = "none";
    });
    mailEvent.addEventListener('focus', function () {
        document.querySelector(".mail-green").style.display = "none";
        document.querySelector(".mail-red").style.display = "none";
    });
    passwordEvent.addEventListener('focus', function () {
        document.querySelector('.password-red').style.display = "none";
        document.querySelector('.password-green').style.display = "none";
    });
    repetPasswordEvent.addEventListener('focus', function () {
        document.querySelector('.repet-green').style.display = "none";
        document.querySelector('.repet-red').style.display = "none";
    });

}