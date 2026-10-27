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
const eventSelect = document.querySelector("#event");

const errorList = document.querySelector("#errorlist");