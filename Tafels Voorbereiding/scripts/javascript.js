const setup = () => {
    let goKnop = document.querySelector('#goKnop');
    goKnop.addEventListener('click', maakTafel);
}

const maakTafel = () => {
    let getalVeld = document.querySelector('#inputNummer');
    let getal = getalVeld.value;

    if (isNaN(getal) || getal <= 0) {
        window.alert("Geef een positief getal in aub");
    } else {
        let tafels = document.querySelector('#tafels');

        let omvattendeDiv = document.createElement('div');
        omvattendeDiv.setAttribute('class', 'omvattendeDiv');

        let tijdstip = new Date().toLocaleTimeString();

        let titelDiv = document.createElement('div');
        let titelParagraaf = document.createElement('p');
        titelParagraaf.innerText = `Tafel van ${getal} aangemaakt op: ${tijdstip}`;
        titelDiv.append(titelParagraaf);

        omvattendeDiv.append(titelDiv);

        for (let i = 0; i < 10; i++) {
            let celNummer = (i + 1).toString();
            let div = document.createElement('div');

            let waarde = (i + 1) * getal;

            let paragraaf = document.createElement('p');
            paragraaf.innerText = `${getal} x ${celNummer} = ${waarde}`;
            div.append(paragraaf);

            omvattendeDiv.append(div);
        }

        tafels.append(omvattendeDiv);
    }

    getalVeld.value = null;
}

window.addEventListener("load", setup);