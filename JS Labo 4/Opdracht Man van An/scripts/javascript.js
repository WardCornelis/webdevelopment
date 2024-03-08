const setup = () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten".toLowerCase();
    let stopZoektocht = false;
    let startWaarde = 0;
    let aantal = 0;
    while(!stopZoektocht) {
        if (tekst.indexOf("an",startWaarde) !== -1){
            aantal++;
            startWaarde = tekst.indexOf("an",startWaarde) + 1;
        } else {
            stopZoektocht = true;
        }
    }
    console.log(aantal);
}
window.addEventListener("load", setup);