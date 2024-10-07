let global = {
    beschibareWoorden : ["stoel", "hotel", "tafel", "broed", "bloed", "stank", "stomp", "klomp"],
    spelerNaam : "",
    gezochtWoord : ""
}
const setup = () => {
    let startKnop = document.querySelector('#nieuw');
    startKnop.addEventListener('click', voorverwarmenVanSpel);

    let controleerKnop = document.querySelector('#go');
    controleerKnop.addEventListener('click', speelSpel);
}

const speelSpel = () => {
    let gevonden = false;

    while(!gevonden) {
        
    }
}
const validerenVanOpgave = () => {
    let benodigdeLetters = global.gezochtWoord.split("");

    let opgegevenWoord = document.querySelector('#gok').value;
    let opgegevenLetters = opgegevenWoord.split("");
    if(opgegevenLetters.length === 5){
        let divGokken = document.querySelector('#gokken');
        let omvattendeDiv = document.createElement('div');

        for(let i = 0; i < opgegevenLetters.length; i++) {
            let div = document.createElement('div');
            div.innerText = opgegevenLetters[i];
            div.addEventListener('click', toonInfo);

            if(opgegevenLetters[i] === benodigdeLetters[i]){
                div.classList.add('juist');
            } else if (benodigdeLetters.includes(opgegevenLetters[i])) {
                div.classList.add('bevat');
            } else {
                div.classList.add('fout');
            }

            omvattendeDiv.append(div);
            divGokken.append(omvattendeDiv);
        }
    }
}

const toonInfo = (event) => {
    let aangelikteLetterClassList = event.target.classList;
    let p = document.createElement('p');
    p.classList.add('help');
    p.setAttribute('id', 'info');
    if(aangelikteLetterClassList.contains('juist')){
        p.innerText = "De letter staat op de juiste plaats.";
    } else if(aangelikteLetterClassList.contains('bevat')){
        p.innerText = "De letter komt voor in het te zoeken woord, maar staat niet op de juiste plaats.";
    } else {
        p.innerText = "Deze letter komt niet voor in het te zoeken woord.";
    }
    let div = document.querySelector('#game > div');
    div.append(p);
    setTimeout(infoVerwijderen, 2500);

    event.stopPropagation();
}

const infoVerwijderen = () => {
    let p = document.querySelector('#info');
    p.remove();
}

const voorverwarmenVanSpel = () => {
    krijgNaamVanSpeler();
    krijgRandomWoord();
    let startKnop = document.querySelector('#nieuw');
    startKnop.classList.add('hidden');
}

const krijgNaamVanSpeler = () => {
    global.spelerNaam = window.prompt("Naam speler:");
}

const krijgRandomWoord = () => {
    let rand = Math.floor(Math.random() * global.beschibareWoorden.length);
    global.gezochtWoord  = global.beschibareWoorden.at(rand);
    console.log(global.beschibareWoorden.at(rand));

}

window.addEventListener('load', setup);