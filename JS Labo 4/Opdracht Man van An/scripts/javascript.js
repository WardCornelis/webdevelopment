const setup = () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten".toLowerCase();
    let stopZoektochtEen = false;
    let startWaardeEen = 0;
    let aantalEen = 0;

    while(!stopZoektochtEen) {
        if (tekst.indexOf("an",startWaardeEen) !== -1){
            aantalEen++;
            startWaardeEen = tekst.indexOf("an",startWaardeEen) + 1;
        } else {
            stopZoektochtEen = true;
        }
    }

    let stopZoektochtTwee = false;
    let aantalTwee = 0;
    let startWaardeTwee = 1000;

    while(!stopZoektochtTwee) {
        if (tekst.lastIndexOf("an",startWaardeTwee) !== -1){
            aantalTwee++;
            startWaardeTwee = tekst.lastIndexOf("an",startWaardeTwee) -1;
        } else {
            stopZoektochtTwee = true;
        }
    }
    console.log(`An komt ${aantalEen} keer voor in de opgegeven tekst. Hierbij is gebruik gemaakt van indexOf.`);
    console.log(`An komt ${aantalTwee} keer voor in de opgegeven tekst. Hierbij is gebruik gemaakt van lastIndexOf.`);
}
window.addEventListener("load", setup);