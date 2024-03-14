const setup = () => {
    window.addEventListener("submit", log)
}

const log = () => {
    let resultaat = "";

    //Controleren of persoon rookt
    if(document.getElementById("isRoker").checked === true){
        resultaat += "is een roker \n"  ;
    } else {
        resultaat += "is geen roker \n";
    }

    //Moedertaal achterhalen
    let moedertaal = document.getElementsByName("Moedertaal");
    let gevonden = false;
    for(let i = 0; i < moedertaal.length; i++){
        if(moedertaal[i].checked === true){
            resultaat += "moedertaal is " + moedertaal[i].id + "\n";
            gevonden = true;
        }
    }
    if(!gevonden){
        resultaat += "moedertaal is niet geselecteerd of staat niet in deze lijst\n"
    }

    //Favoriete land achterhalen !Nederland als standaard!
    let favoLand = document.getElementById("FavorieteBuurland").options;
    let index = favoLand.selectedIndex;
    resultaat += "favoriete buurland is " + favoLand[index].innerText + "\n";

    //Boodschappenlijst samenstellen
    let bestelling = document.getElementById("Bestelling").options;
    if(bestelling.selectedIndex === -1){
        resultaat += "boodschappenlijst is leeg";
    } else {
        resultaat += "bestelling bestaat uit ";
        for (let i2 = 0; i2 < bestelling.length; i2++) {
            if (bestelling[i2].selected === true) {
                resultaat += bestelling[i2].value + " ";
            }
        }
    }
    console.log(resultaat.trim());
}

window.addEventListener("load", setup);