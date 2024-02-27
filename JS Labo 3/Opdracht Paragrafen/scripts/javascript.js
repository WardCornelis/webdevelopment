const setup = () => {
    let txtKleur = document.getElementsByClassName('belangrijk');
    for (let i = 0; i < txtKleur.length; i++){
        txtKleur[i].classList.add('opvallend');
    }
}
window.addEventListener("load", setup);