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

