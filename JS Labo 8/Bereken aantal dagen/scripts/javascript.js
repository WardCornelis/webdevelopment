const setup = () => {
    let geboortedatum = new Date(1999, 10, 19);
    let vandaag = new Date();
    let uitkomst = Math.floor((vandaag - geboortedatum)/(1000*60*60*24));
    console.log(uitkomst);
}

window.addEventListener("load", setup);