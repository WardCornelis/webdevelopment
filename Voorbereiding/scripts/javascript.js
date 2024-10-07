global = {
    CORRECTE_PREFIXES : ["/g", "/y", "/i"],
    FULL_PREFIX : ["https://www.google.com/search?q=", "https://www.youtube.com/results?search_query=", "https://www.instagram.com/explore/tags/"],
    PREFIX : "",
    SITE_NAAM : "",
    ZOEKTERM : "",
    CORRECTE_ZOEKOPDRACHTEN : []
}

const setup = () => {
    cardsTerugzetten();
    let goKnop = document.getElementById("GoKnop");
    goKnop.addEventListener("click", paginaOpzoeken);
}

const paginaOpzoeken = (event) => {
    let nietDoorgaan = valideren();
    let idCurrentTarget = event.currentTarget.getAttribute('id');

    if(!nietDoorgaan && idCurrentTarget === 'GoKnop') {
        let Url = opbouwenString();
        window.open(Url);
        aanmakenVanCard(Url);
        let reedsOpgezocht = {};
        reedsOpgezocht.SITE_NAAM = global.SITE_NAAM;
        reedsOpgezocht.ZOEKTERM = global.ZOEKTERM;
        reedsOpgezocht.URL = Url;
        global.CORRECTE_ZOEKOPDRACHTEN.push(reedsOpgezocht);
        let zoekOpdrachtenJSON = JSON.stringify(global.CORRECTE_ZOEKOPDRACHTEN);
        localStorage.setItem('MyHomePage.ZoekOpdrachten', zoekOpdrachtenJSON);
    } else if(idCurrentTarget === 'historyGoKnop') {
        let dataUrl = event.currentTarget.dataset.url;
        console.log(dataUrl);
        window.open(dataUrl);
    }
    let inputVeld = document.querySelector('#InputVeld');
    inputVeld.value = "";
}

const cardsTerugzetten = () => {
    let zoekOpdrachtenJSON = localStorage.getItem('MyHomePage.ZoekOpdrachten');
    if(zoekOpdrachtenJSON !== null){
        let localStorageList = JSON.parse(zoekOpdrachtenJSON);
        console.log(localStorageList);
    }
}

const aanmakenVanCard = (a) => {
    let cardSectie = document.querySelector('#Cards');

    let div = document.createElement('div');
    let siteNaam = document.createElement('p');
    siteNaam.innerText = global.SITE_NAAM;
    let zoekterm = document.createElement('p');
    zoekterm.innerText = global.ZOEKTERM.trim();
    let goKnop = document.createElement('input');
    goKnop.addEventListener('click', paginaOpzoeken);
    goKnop.setAttribute('id', 'historyGoKnop');
    goKnop.setAttribute('value', 'GO!')
    goKnop.setAttribute('data-url', a);

    div.append(siteNaam);
    div.append(zoekterm);
    div.append(goKnop);
    cardSectie.append(div);
}

const opbouwenString = () => {
    let input = document.querySelector('#InputVeld').value.trim();
    let arrayVanWoorden = input.split(" ");

    let Url = global.PREFIX;

    for (let i = 1; i < arrayVanWoorden.length; i++) {
        Url += arrayVanWoorden[i] + "+";
        global.ZOEKTERM += arrayVanWoorden[i] + " ";
    }
    Url = Url.slice(0,-1);
    return Url;
}

const valideren = () => {
    let input = document.querySelector('#InputVeld').value.trim();
    let arrayVanWoorden = input.split(" ");
    let eersteString = arrayVanWoorden[0];

    let retourWaarde = false;

    global.PREFIX = "";
    global.SITE_NAAM = "";
    global.ZOEKTERM = "";
    if(eersteString === global.CORRECTE_PREFIXES[0]){
        global.PREFIX = global.FULL_PREFIX[0];
        global.SITE_NAAM = "Google";
    } else if (eersteString === global.CORRECTE_PREFIXES[1]){
        global.PREFIX = global.FULL_PREFIX[1];
        global.SITE_NAAM = "Youtube";
    } else if (eersteString === global.CORRECTE_PREFIXES[2]){
        global.PREFIX = global.FULL_PREFIX[2];
        global.SITE_NAAM = "Instagram";
    } else {
        window.alert("Onbestaande prefix");
        retourWaarde = true;
    }
    return retourWaarde;
}
window.addEventListener("load", setup);