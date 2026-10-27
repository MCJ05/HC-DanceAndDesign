"use strict"

// FÅR MOBIL MENYN ATT ÖPPNA OCH STÄNGAS
function myFunction() {
    var x = document.getElementById("myLinks");

    if(x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// HÄMTADE ELEMENT FÅRN DOM
const form = document.querySelector("#contactform");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const eventSelect = document.querySelector("#eventform");

const errorList = document.querySelector("#errorlist");

form.addEventListener("click", function(event) {
    event.preventDefault();

    const user = {
        fullname: fullnameInput.value.trim(),
        email: emailInput.value.trim(),
        event: eventSelect.value
    };
    console.log(user);

    if(!validateForm(user.fullname, user.email, user.event)) {
        displayErrors();
        return;
    }


});

let errors = [];

function validateForm(fullname, email, event) {
    let validate = true;

    console.log(validate);

    // TÖM REDAN UTSKRIVNA FELMEDDELANDEN
    errors = [];
    errorList.innerHTML = "";

    // VALIDERA NAMN-INPUT
    if(fullname === "") {
        error.push("Skriv in ditt fullständiga namn");
        validate = false;
    }

    // VALIDERA EMAIL-INPUT
    if(email === "") {
        errors.push("Ange din e-postadress");
        validate = false;
    }

    // VALIDER VAL AV ÄRENDE
    if(event === "") {
        errors.push("Välj ett ärende");
        validate = false;
    }

    console.log(fullname);
    console.log(email);
    console.log(event);

    // RETUNERA RESULTATET AV VALIDERINGEN
    return validate;

}