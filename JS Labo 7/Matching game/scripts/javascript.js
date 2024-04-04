let global = {
    AANTAL_HORIZONTAAL : 4,
    AANTAL_VERTICAAL : 3,
    AANTAL_KAARTEN : 6,
    KAARTEN_VOOR_HIT: 2,
    IMAGE_PATH_PREFIX: "Images/",
    IMAGE_PATH_SUFFIX: ".png",
    GECOMBINEERDE_KAARTEN: 0
}


const setup = () => {
    maakSpeelveld();
}

const maakSpeelveld = () => {
    let array = arrayMaken();
    let speelveld = document.querySelector('#PlayField');
    for(let i = 0; i < (global.AANTAL_KAARTEN * global.KAARTEN_VOOR_HIT); i++) {
        let kaart = document.createElement('div');
        kaart.setAttribute('class','kaart');
        kaart.addEventListener('click', actiesBijKlikOpKaart);

        let voorkant = document.createElement('div');
        voorkant.setAttribute('class', 'voorkant');
        let source = randomAfbeelding(array);
        let imgVoorkant = document.createElement('img');
        imgVoorkant.setAttribute('src', source);
        imgVoorkant.setAttribute('alt', `kaart${i+1}`);


        let achterkant = document.createElement('div');
        achterkant.setAttribute('class', 'achterkant');
        let imgAchterkant = document.createElement('img');
        imgAchterkant.setAttribute('src', `${global.IMAGE_PATH_PREFIX}achterkant${global.IMAGE_PATH_SUFFIX}`);
        imgAchterkant.setAttribute('alt', 'achterkant');

        voorkant.append(imgVoorkant);
        achterkant.append(imgAchterkant);
        kaart.append(voorkant);
        kaart.append(achterkant);
        speelveld.append(kaart);
    }
}

const actiesBijKlikOpKaart = (event) => {
    toonAfbeelding(event);
    valideerKaarten();
}

const valideerKaarten = () => {
    let speelveld = document.querySelector('#PlayField');
    let body = document.querySelector('#Achtergrond');
    let omgedraaideKaarten = document.querySelectorAll('.zichtbareVoorkant');

    let isNietGelijk = false;
    let i = 1;
    let eersteKaart = omgedraaideKaarten[0].firstElementChild.getAttribute('src');

    if(omgedraaideKaarten.length === global.KAARTEN_VOOR_HIT) {
        speelveld.style.pointerEvents = "none";
        while(!isNietGelijk && i < omgedraaideKaarten.length) {
            if(eersteKaart === omgedraaideKaarten[i].firstElementChild.getAttribute('src')){
                i++;
            } else {
                isNietGelijk = true;
            }
        }
        if (isNietGelijk) {
            body.classList.add('fouteAchtergrond');
            setTimeout(draaiTerug, 5000, speelveld, body);
        } else {
            body.classList.add('goedeAchtergrond');
            setTimeout(verwijderKaarten,5000, speelveld, body);
        }
    }
}

const verwijderKaarten = (a, b) => {
    let omgedraaideKaarten = document.querySelectorAll('.zichtbareVoorkant');
    for(let i = 0; i < omgedraaideKaarten.length; i++) {
        let kaart = omgedraaideKaarten[i].parentElement;
        let siblingDiv = omgedraaideKaarten[i].nextElementSibling;
        omgedraaideKaarten[i].remove();
        siblingDiv.remove();
        kaart.classList.add('plaatsVervangend');
    }
    a.style.pointerEvents = "auto";
    b.classList.remove('goedeAchtergrond');
}

const draaiTerug = (a, b) => {
    let omgedraaideKaarten = document.querySelectorAll('.zichtbareVoorkant');
    for(let i = 0; i < omgedraaideKaarten.length; i++) {
        omgedraaideKaarten[i].classList.remove('zichtbareVoorkant');
        omgedraaideKaarten[i].classList.add('voorkant');
        omgedraaideKaarten[i].nextElementSibling.classList.add('achterkant');
        omgedraaideKaarten[i].nextElementSibling.classList.remove('achterkantOnzichtbaarMaken');
    }
    a.style.pointerEvents = "auto";
    b.classList.remove('fouteAchtergrond');
}

const toonAfbeelding = (event) => {
    let kaart = event.currentTarget;
    kaart.firstElementChild.classList.remove('voorkant');
    kaart.firstElementChild.classList.add('zichtbareVoorkant');
    kaart.lastElementChild.classList.add('achterkantOnzichtbaarMaken');
    kaart.lastElementChild.classList.remove('achterkant');
}

const randomAfbeelding = (a) => {
    let rand = Math.floor(Math.random() * a.length);
    let afbeelding = global.IMAGE_PATH_PREFIX + a[rand] + global.IMAGE_PATH_SUFFIX;
    a.splice(rand,1);
    return afbeelding;
}

const arrayMaken = () => {
    let array = [];
    for(let i = 0; i < global.AANTAL_KAARTEN; i++) {
        let afbeelding = "kaart" + (i+1);
        for(let n = 0; n < global.KAARTEN_VOOR_HIT; n++) {
            array.push(afbeelding);
        }
    }
    return array;
}

window.addEventListener("load", setup);