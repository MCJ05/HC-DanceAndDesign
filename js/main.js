"use strict"

// FÅ MOBIL MENYN ATT ÖPPNAS OCH STÄNGAS
function myFunction() {
    const x = document.getElementById("myLinks");

    if(getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}