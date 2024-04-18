let personen = [];

const setup = () => {
    let btnBewaar = document.getElementById('btnBewaar');
    btnBewaar.addEventListener('click', bewaarBewerktePersoon);

    let btnNieuw = document.getElementById('btnNieuw');
    btnNieuw.addEventListener('click', bewerkNieuwePersoon);

    let lstPersonen = document.getElementById('lstPersonen');
    lstPersonen.addEventListener('change', plaatsOpgeslagenPersoonTerug);
};

const plaatsOpgeslagenPersoonTerug = () => {
    let opgeslagenPersonen = document.querySelector('#lstPersonen');
    let indexPersoon = opgeslagenPersonen.options[opgeslagenPersonen.selectedIndex].value;

    let persoonObject = personen[indexPersoon];

    document.getElementById("txtVoornaam").value = persoonObject.voornaam;
    document.getElementById("txtFamilienaam").value = persoonObject.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoonObject.geboortedatum;
    document.getElementById("txtEmail").value = persoonObject.email;
    document.getElementById("txtAantalKinderen").value = persoonObject.aantalkinderen;

}

const bewaarBewerktePersoon = (event) => {
    console.log("Klik op de knop bewaar");

    valideer();

    let invalidArray = document.querySelectorAll('.invalid');

    let opgeslagenPersonen = document.querySelector('#lstPersonen');
    let indexPersoon = opgeslagenPersonen.selectedIndex;

    if(invalidArray.length === 0) {
        let persoon = {
            voornaam: document.getElementById("txtVoornaam").value.trim(),
            familienaam: document.getElementById("txtFamilienaam").value.trim(),
            geboortedatum: document.getElementById("txtGeboorteDatum").value.trim(),
            email: document.getElementById("txtEmail").value.trim(),
            aantalkinderen: document.getElementById("txtAantalKinderen").value.trim()
        };

        if(indexPersoon === -1) {
            let persoonnummer = (personen.length).toString();
            personen.push(persoon);

            let option = document.createElement('option');
            option.setAttribute('value', persoonnummer);
            option.innerText = persoon.voornaam + " " + persoon.familienaam;
            opgeslagenPersonen.append(option);
        } else {
            personen[indexPersoon] = persoon;
            let geselecteerdeOptie = document.querySelector(`option[value='${indexPersoon}']`);
            geselecteerdeOptie.innerText = persoon.voornaam + " " + persoon.familienaam;
        }
    }
};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    let inputLines = document.querySelectorAll('.line');

    for (let i= 0; i < inputLines.length; i++) {
        let inputNode = inputLines[i].children[1];
        inputNode.value = '';
    }

    let opgeslagenPersonen = document.querySelector('#lstPersonen');

    opgeslagenPersonen.selectedIndex = -1;
};

window.addEventListener("load", setup);