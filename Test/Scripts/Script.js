const setup = () => {
    window.addEventListener("click", controleerKeuze);
    window.addEventListener("input", zoekLetter);
}

const controleerKeuze =() =>{
    let keuze = document.getElementById("Keuze").options;
    let afbeelding = document.getElementById("img");
    let tekst = document.getElementById("note");
    if(keuze.selectedIndex ===  0){
        afbeelding.classList.remove("with-egg");
        afbeelding.classList.add("hidden");
        tekst.textContent = "";
    } else if (keuze.selectedIndex === 1){
        afbeelding.classList.remove("hidden");
        afbeelding.classList.add("with-egg");
        tekst.textContent = "Hierboven, een kip met een ei";
    } else {
        afbeelding.classList.remove("hidden");
        afbeelding.classList.remove("with-egg");
        tekst.textContent = "Hierboven, een kip zonder een ei"
    }
};

const zoekLetter = () => {
    let aanwezigeTekst = document.getElementById("note").value.toLowerCase();
    let character = document.getElementById("Letter").value.toLowerCase();
    let aantal = 0;
    let stopZoektocht = false;
    let startWaarde = 0;

    while(!stopZoektocht) {
        if (aanwezigeTekst.indexOf(character,startWaarde) !== -1){
            aantal++;
            startWaarde = aanwezigeTekst.indexOf(character,startWaarde) + 1;
        } else {
            stopZoektocht = true;
        }
    }
    aanwezigeTekst.textContent += `\nLetter "${character}" komt ${aantal} keer voor in bovenstaande zin.`

}

window.addEventListener("load", setup);