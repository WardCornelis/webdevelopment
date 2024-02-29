const setup = () => {
    let btnBereken = document.getElementById("btnBereken");

    btnBereken.addEventListener("click", bereken);
}

const bereken = () => {
    let prijsLijst = document.getElementsByClassName('prijs');
    let btwLijst = document.getElementsByClassName('btw');
    let aantalLijst = document.getElementsByName('aantallen');
    let uitkomstLijst = document.getElementsByClassName('uitkomst');
    let resultaat = document.getElementById('resultaat');

    let totaalSom = 0;
    let prijs = 0;
    let aantal = 0;
    let btw = 0;
    let uitkomst = 0;

    for(let i = 0; i < prijsLijst.length; i++){
        prijs = parseFloat(prijsLijst[i].textContent);
        aantal = parseFloat(aantalLijst[i].value);
        btw = (parseFloat(btwLijst[i].textContent)/100) + 1;
        uitkomst = prijs * aantal * btw;
        totaalSom += uitkomst;
        uitkomstLijst[i].textContent = uitkomst.toFixed(2) + "Eur";
    }

    resultaat.textContent = totaalSom.toFixed(2) + "Eur";
}

window.addEventListener("load", setup);