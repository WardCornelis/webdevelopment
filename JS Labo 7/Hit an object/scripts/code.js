let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1000,
    score: 0,
    start: false,
    timeoutId: 0
};

const setup = () => {
    let afbeelding = document.querySelector('#Target');
    let startBtn = document.querySelector('#StartBtn');
    afbeelding.addEventListener('click', toonInfo);
    startBtn.addEventListener('click', speelSpel);
};

//Uitleg van het spel voor het starten
const toonInfo = () => {
    if(global.start === false) {
        window.alert('Klik op alle afbeeldingen, die geen bom zijn. Doe je dit toch, verlies je!');
    }
};

//Functie om een spel te spelen
const speelSpel = () => {
    global.start = true;

    let startBtn = document.querySelector('#StartBtn');
    startBtn.remove();

    let afbeelding = document.querySelector('#Target');
    afbeelding.addEventListener('click', valideerKlik);

    global.timeoutId = setInterval(intervalFuncties, global.MOVE_DELAY);
};

//Valideren van de aangeklikte afbeelding
const valideerKlik = () => {
    let tekst = document.querySelector('#AantalHits');

    let afbeelding = document.querySelector('#Target');
    let src = afbeelding.getAttribute('src');
    let afbeeldingNummer = parseInt(src.slice(global.IMAGE_PATH_PREFIX.length, -(global.IMAGE_PATH_SUFFIX.length)));

    if(afbeeldingNummer === 0){
        clearInterval(global.timeoutId);
        global.timeoutId = 0;
        window.alert('!GAME OVER!\nHerstarten kan door op f5 te drukken');
    } else {
        global.score += 1;
        tekst.innerText = `Aantal hits ${global.score}`;
        movePicture();
    }
}

//Combineren de functies die door een interval geactiveerd worden
const intervalFuncties = () => {
    logTekst();
    movePicture();
}

//Log de huidige score van de speler
const logTekst = () => {
    console.log(`Uw heeft momenteel een score van ${global.score}!`);
}

//Verplaats de afbeelding binnen het speelveld
const movePicture = () => {
    randomAfbeelding();
    let sprite = document.querySelector('#Target');
    let speelveld= document.querySelector('#PlayField');
    let maxLeft= speelveld.clientWidth - sprite.offsetWidth;
    let maxHeight= speelveld.clientHeight - sprite.offsetHeight;

    let left= Math.floor(Math.random()*maxLeft);
    let top= Math.floor(Math.random()*maxHeight);
    sprite.style.left = left+"px";
    sprite.style.top = top+"px";
};

//Selecteer een afbeelding uit de lijst
const randomAfbeelding = () => {
    let rand = Math.floor(Math.random() * 5);
    let afbeelding = global.IMAGE_PATH_PREFIX + rand + global.IMAGE_PATH_SUFFIX;
    let sprite = document.querySelector('#Target');
    sprite.setAttribute('src', afbeelding);
};

window.addEventListener("load", setup);


