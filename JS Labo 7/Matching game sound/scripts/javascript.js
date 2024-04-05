let global = {
    AANTAL_HORIZONTAAL : 4,
    AANTAL_VERTICAAL : 3,
    AANTAL_GELUIDEN : 6,
    GELUIDEN_VOOR_HIT: 2,
    IMAGE_PATH_PREFIX: "Images/",
    IMAGE_PATH_SUFFIX: ".png",
    SOUND_PATH_PREFIX: "Sounds/",
    SOUND_PATH_SUFFIX: ".mp3"
}

const setup = () => {
    maakSpeelveld();
}

const maakSpeelveld = () => {
    let array = arrayMaken();
    let speelveld = document.querySelector('#PlayField');
    for(let i = 0; i < (global.AANTAL_GELUIDEN * global.GELUIDEN_VOOR_HIT); i++) {
        let kaart = document.createElement('div');
        kaart.setAttribute('class','kaart');
        kaart.addEventListener('click', actiesBijKlikOpKaart);

        let geluid = document.createElement('div');
        geluid.setAttribute('class', 'geluid');
        let source = randomGeluid(array);
        let sound = document.createElement('audio');
        sound.setAttribute('src', source);
        sound.setAttribute('id', `geluid${i+1}`);

        let voorkant = document.createElement('div');
        voorkant.setAttribute('class', 'voorkant');
        let imgVoorkant = document.createElement('img');
        imgVoorkant.setAttribute('src', `${global.IMAGE_PATH_PREFIX}voorkant${global.IMAGE_PATH_SUFFIX}`);
        imgVoorkant.setAttribute('alt', 'voorkant');

        let achterkant = document.createElement('div');
        achterkant.setAttribute('class', 'achterkant');
        let imgAchterkant = document.createElement('img');
        imgAchterkant.setAttribute('src', `${global.IMAGE_PATH_PREFIX}achterkant${global.IMAGE_PATH_SUFFIX}`);
        imgAchterkant.setAttribute('alt', 'achterkant');

        geluid.append(sound);
        voorkant.append(imgVoorkant);
        achterkant.append(imgAchterkant);
        kaart.append(voorkant);
        kaart.append(geluid);
        kaart.append(achterkant);
        speelveld.append(kaart);
    }
}

const actiesBijKlikOpKaart = (event) => {
    speelGeluid(event);
    valideerGeluiden();
}

const valideerGeluiden = () => {

    let speelveld = document.querySelector('#PlayField');
    let body = document.querySelector('#Achtergrond');
    let omgedraaideKaarten = document.querySelectorAll('.zichtbareVoorkant');

    let isNietGelijk = false;
    let i = 1;
    let eersteGeluid = omgedraaideKaarten[0].parentElement.getElementsByClassName('geluid')[0].firstElementChild.getAttribute('src');

    if(omgedraaideKaarten.length === global.GELUIDEN_VOOR_HIT) {
        speelveld.style.pointerEvents = "none";
        while(!isNietGelijk && i < omgedraaideKaarten.length) {
            if(eersteGeluid === omgedraaideKaarten[i].parentElement.getElementsByClassName('geluid')[0].firstElementChild.getAttribute('src')){
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
            setTimeout(verwijderGeluid,5000, speelveld, body);
        }
    }
}

const verwijderGeluid = (a, b) => {
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
        omgedraaideKaarten[i].parentElement.lastElementChild.classList.add('achterkant');
        omgedraaideKaarten[i].parentElement.lastElementChild.classList.remove('achterkantOnzichtbaarMaken');
    }
    a.style.pointerEvents = "auto";
    b.classList.remove('fouteAchtergrond');
}

const speelGeluid = (event) => {
    let kaart = event.currentTarget;
    if(kaart.firstElementChild.className !== "zichtbareVoorkant"){
        kaart.getElementsByClassName('geluid')[0].firstElementChild.play();
    }
    kaart.firstElementChild.classList.remove('voorkant');
    kaart.firstElementChild.classList.add('zichtbareVoorkant');
    kaart.lastElementChild.classList.add('achterkantOnzichtbaarMaken');
    kaart.lastElementChild.classList.remove('achterkant');
}

const randomGeluid = (a) => {
    let rand = Math.floor(Math.random() * a.length);
    let geluid = global.SOUND_PATH_PREFIX + a[rand] + global.SOUND_PATH_SUFFIX;
    a.splice(rand,1);
    return geluid;
}

const arrayMaken = () => {
    let array = [];
    for(let i = 0; i < global.AANTAL_GELUIDEN; i++) {
        let geluid = "geluid" + (i+1);
        for(let n = 0; n < global.GELUIDEN_VOOR_HIT; n++) {
            array.push(geluid);
        }
    }
    return array;
}

window.addEventListener("load", setup);