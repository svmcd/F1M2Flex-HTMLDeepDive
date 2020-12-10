
let fotonummer, fotobreedte, aantalfotos, fotoslider;

function setupFotoslider(){
    //alert("lol")

    fotonummer = 0;
    fotobreedte = 300;

    fotoslider = document.getElementById('fotoslider');
    let volgendeKnop = document.getElementById('volgende');
    let vorigeKnop = document.getElementById('vorige');

    aantalfotos = fotoslider.children.length;
    console.log(aantalfotos)

    volgendeKnop.addEventListener("click", volgendeFoto);
    vorigeKnop.addEventListener("click", vorigeFoto);
}

function volgendeFoto(){
    fotonummer += 1;

    if (fotonummer === aantalfotos) {
        fotonummer = 0;
    }

    let afstandNaarLinks = -1 * (fotonummer * fotobreedte)

    fotoslider.style.left = afstandNaarLinks + "px";
}

function vorigeFoto(){
    fotonummer += 1;

    if (fotonummer === aantalfotos) {
        fotonummer = 0;
    }

    let afstandNaarRechts = -1 * (fotonummer * fotobreedte)

    fotoslider.style.right = afstandNaarRechts - "px";
}

window.addEventListener('DOMContentLoaded', setupFotoslider)