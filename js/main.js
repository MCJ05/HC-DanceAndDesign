"use strict"

// FÅR MOBIL MENYN ATT ÖPPNA OCH STÄNGAS
function myFunction() {
    const x = document.getElementById("myLinks");

    if(getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// HÄMTADE ELEMENT FÅRN DOM
const form = document.querySelector("#contactform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const eventSelect = document.querySelector("#subjekt");
const messageInput = document.querySelector("#message");

const errorList = document.querySelector("#errorlist");

// LADDA HISTORIKEN
let historyList = JSON.parse (
    localStorage.getItem("history") || "[]"
);

let errors = [];

//RENSNINGSKNAPP
clearButton.addEventListener("click", clearForm);

// HÄMTA FORMULÄRET
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const user = {
        fullname: fullnameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value,
        event: eventSelect.value,
        message: messageInput.value
    };
    //console.log(user);

    if(!validateForm(
        user.fullname, 
        user.email, 
        user.phone, 
        user.event, 
        user.message
    )) {
        displayErrors();
        return;
    }

    // HISTORIK
    historyList.push(user);
    saveHistory();

    // RENSA FORMULÄRET
    clearForm();
});

function validateForm(fullname, email, phone, event, message) {
    // TÖM REDAN UTSKRIVNA FELMEDDELANDEN
    errors = [];
    errorList.innerHTML = "";

    // VALIDERA NAMN-INPUT
    if(fullname === "") {
        errors.push("Skriv in ditt fullständiga namn");
    }

    // VALIDERA EMAIL-INPUT
    if(email === "") {
        errors.push("Ange din e-postadress");
    }

    // VALIDERAT TELEFON-INPUT
    if(phone === "") {
        errors.push("Skriv in ditt telefonnummer");
    }

    // VALIDER VAL AV ÄRENDE
    if(event === "") {
        errors.push("Välj ett ärende");
    }

    // VALIDERAT TEXTRUTAN
    if(message === "") {
        errors.push("Skriv vad ditt ärende angår");
    }

    console.log(fullname);
    console.log(email);
    console.log(phone);
    console.log(event);
    console.log(message);

    // RETUNERA RESULTATET AV VALIDERINGEN
    return errors.length === 0;
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

// SPARAR HISTORIK I LOCALSTORAGE
function saveHistory() {
    localStorage.setItem("history", JSON.stringify(historyList));
}

function clearForm() {
    form.reset();
    errorList.innerHTML = "";
    errors = [];
}

