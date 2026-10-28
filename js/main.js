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
const phoneInput = document.querySelector("#phone");
const eventSelect = document.querySelector("#subjekt");
const messageInput = document.querySelector("#message");

const errorList = document.querySelector("#errorlist");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const user = {
        fullname: fullnameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value,
        event: eventSelect.value,
        message: messageInput.value
    };
    console.log(user);

    if(!validateForm(user.fullname, user.email, user.phone, user.event)) {
        displayErrors();
        return;
    }

    // createEventForm();
    // HISTORIK
    saveHistory();

});

let errors = [];

function validateForm(fullname, email, phone, event) {
    let validate = true;

    console.log(validate);

    // TÖM REDAN UTSKRIVNA FELMEDDELANDEN
    errors = [];
    errorList.innerHTML = "";

    // VALIDERA NAMN-INPUT
    if(fullname === "") {
        errors.push("Skriv in ditt fullständiga namn");
        validate = false;
    }

    // VALIDERA EMAIL-INPUT
    if(email === "") {
        errors.push("Ange din e-postadress");
        validate = false;
    }

    // VALIDERAT TELEFON-INPUT
    if(phone === "") {
        errors.push("Skriv in ditt telefonnummer");
        validate = false;
    }

    // VALIDER VAL AV ÄRENDE
    if(event === "") {
        errors.push("Välj ett ärende");
        validate = false;
    }

    console.log(fullname);
    console.log(email);
    console.log(phone);
    console.log(event);

    // RETUNERA RESULTATET AV VALIDERINGEN
    return validate;

}

// VISAR FELMEDDELANDEN PÅ SIDAN
function displayErrors() {
    errorList.innerHTML = "";

    // SKRIVER UT AKTUELLA FELMEDDELANDEN TILL DOM
    for(let i = 0; i < errors.length; i++) {
        const liElement = document.createElement("li");
        liElement.textContent = errors[i];
        errorList.appendChild(liElement);
    }
}

let historyList = JSON.parse (
    localStorage.getItem("history") || "[]"
);
/*
function createEventForm (user) {

    history.push( {
        fullname: user.fullname,
        email: user.email,
        phone: uder.phone,
        event: user.event,
        message: user.message
    });
}
*/
// SPARAR HISTORIK I LOCALSTORAGE
function saveHistory() {
    localStorage.setItem("history", JSON.stringify(historyList));
}

