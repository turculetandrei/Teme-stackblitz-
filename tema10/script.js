let buton = document.getElementById("butonStart");
let mesaj = document.getElementById("mesaj");
let rezultat = document.getElementById("rezultat");

let putemClick = false;
let timpStart = 0;
let asteptare;

function startTest() {
    mesaj.textContent = "Așteaptă culoarea verde...";
    document.body.style.backgroundColor = "gray";
    rezultat.textContent = "";
    buton.style.display = "none";

    let timpAleatoriu = Math.random() * 3000 + 2000;

    asteptare = setTimeout(function() {
        document.body.style.backgroundColor = "green";
        mesaj.textContent = "ACUM! Click!";
        timpStart = Date.now();
        putemClick = true;
    }, timpAleatoriu);
}

buton.onclick = startTest;
document.body.onkeydown = function(event) {
    if (event.code === "Space") {
        startTest();
    }
};

document.body.onclick = function() {
    if (putemClick) {
        let timpFinal = Date.now();
        let diferenta = timpFinal - timpStart;
        mesaj.textContent = "Bravo!";
        rezultat.textContent = "Ai reacționat în " + diferenta + " ms";
        putemClick = false;
        buton.style.display = "inline";
    } else if (mesaj.textContent === "Așteaptă culoarea verde...") {
        clearTimeout(asteptare);
        mesaj.textContent = "Prea devreme! Încearcă din nou.";
        document.body.style.backgroundColor = "red";
        buton.style.display = "inline";
    }
};

document.body.onkeydown = function(event) {
    if (event.code === "KeyR") {
        document.body.style.backgroundColor = "white";
        mesaj.textContent = "Testează viteza de reacție";
        buton.style.display = "inline";
    }
};
