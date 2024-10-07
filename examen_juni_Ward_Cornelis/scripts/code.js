global = {
    VRAGEN : [
        {
            question: "Wie is de hoofdpersoon in Final Fantasy VII Remake?",
            answers: ["Cloud Strife", "Sephiroth", "Tifa Lockhart"],
            correct: "Cloud Strife",
            selected: ""
        },
        {
            question: "Welke wereld wordt verkend in Final Fantasy XV?",
            answers: ["Gaia", "Eos", "Spira", "Cocoon"],
            correct: "Eos",
            selected: ""
        },
        {
            question: "Wie is de antagonist in Final Fantasy VIII?",
            answers: ["Ultimecia", "Kefka", "Seymour", "Kuja", "Edea"],
            correct: "Ultimecia",
            selected: ""
        },
        {
            question: "Heeft hoofdrolspeler in Final Fantasy IX een staart?",
            answers: ["Ja", "Nee"],
            correct: "Ja",
            selected: ""
        },
        {
            question: "Hoe heet de stad waarin het verhaal van Final Fantasy VII Remake begint?",
            answers: ["Midgar", "Junon", "Nibelheim", "Wutai"],
            correct: "Midgar",
            selected: ""
        },
        {
            question: "Welke summon is prominent aanwezig in Final Fantasy XV?",
            answers: ["Ifrit", "Shiva", "Ramuh", "Titan"],
            correct: "Ifrit",
            selected: ""
        },
        {
            question: "Wat is de naam van het luchtschip in Final Fantasy VIII?",
            answers: ["Ragnarok", "Highwind", "Invincible", "Falcon"],
            correct: "Ragnarok",
            selected: ""
        },
        {
            question: "Welke rol vervult Cid Highwind in Final Fantasy VII?",
            answers: ["Luchtschipkapitein", "Wapensmid", "Koning"],
            correct: "Luchtschipkapitein",
            selected: ""
        },
        {
            question: "Wat is het kenmerkende aan Cactuar-wezens in de Final Fantasy-serie?",
            answers: ["Ze zijn altijd groen", "Ze gebruiken de aanval 1000 Needles", "Ze zijn planten"],
            correct: "Ze gebruiken de aanval 1000 Needles",
            selected: ""
        },
        {
            question: "Welk Final Fantasy-wezen zorgt, met zijn aanval genaamd Bad Breath, voor verschillende statuseffecten?",
            answers: ["Malboro", "Chocobo", "Behemoth", "Tonberry"],
            correct: "Malboro",
            selected: ""
        }
    ],
    HUIDIGE_VRAAG : -1,
    HIGHSCORES: []
}

const setup = () => {
    let startKnop = document.querySelector('#start');
    startKnop.addEventListener('click', startSpel);
}

const startSpel = () => {
    let startKnop = document.querySelector('#start');
    startKnop.classList.add('d-none');

    let quiz = document.querySelector('#quiz');
    quiz.classList.remove('d-none');

    let date = new Date();
    let cardFooter = document.querySelector('.card-footer > p');
    cardFooter.innerText += ` ${date.getDay()} ${date.getMonth()} om ${date.getHours()}:${date.getMinutes()}`;

    vragenRandomToevoegen();
    toonVraag();
}

const toonVraag = (event) => {
    let listItems = document.querySelectorAll('.list-group-item');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('active');
    }

    if(global.HUIDIGE_VRAAG === -1) {

        let titelBalk = document.querySelector('.card-header');
        titelBalk.innerText = listItems[0].firstElementChild.innerText;

        global.HUIDIGE_VRAAG = listItems[0].getAttribute('data-nummer');

        listItems[0].classList.add('active');

    } else {
        let titelBalk = document.querySelector('.card-header');
        titelBalk.innerText = event.currentTarget.firstElementChild.innerText;

        global.HUIDIGE_VRAAG = event.currentTarget.getAttribute('data-nummer');

        event.currentTarget.classList.add('active');
    }

    let vraag = document.querySelector('.card-title');
    vraag.innerText = global.VRAGEN[global.HUIDIGE_VRAAG].question;

    //antwoordenRandomToevoegen(global.HUIDIGE_VRAAG); => werkt niet correct
}

const controleer = () => {
    // hier zou ik het antwoord vergelijken met het juiste anwtoord uit de globale variabele
}

//antwoordenRandomToevoegen, zorgt ervoor dat de keuze balk niet meer werkt
const antwoordenRandomToevoegen = (a) => {
    let antwoordVak = document.querySelector('#answers');

    let antwoorden = global.VRAGEN[a].answers;
    let lengte = antwoorden.length;

    for (let i = lengte; i > 0; i--) {
        let rand = Math.floor(Math.random() * i);
        let antwoord = antwoorden[rand];

        antwoorden.splice(rand, 1);

        let li = document.createElement('li');
        li.addEventListener('click', controleer);
        li.setAttribute('class', 'list-group-item');

        let paragraaf = document.querySelector('p');
        paragraaf.innerText = antwoord;

        li.append(paragraaf);
        antwoordVak.append(li);
    }
}

const vragenRandomToevoegen = () => {
    let questions = document.querySelector('#questions');

    let vragen = [0,1,2,3,4,5,6,7,8,9];

    let vraagnummer = 1;
    for(let i = 10; i > 0; i--) {
        let rand = Math.floor(Math.random() * i);
        let dataNummer = vragen[rand].toString();

        vragen.splice(rand,1);

        let li = document.createElement('li');
        li.setAttribute('class', 'list-group-item')
        li.addEventListener('click', toonVraag);
        li.setAttribute('data-nummer', dataNummer);

        let paragraaf = document.createElement('p');
        paragraaf.innerText = `Vraag ${vraagnummer}`


        li.append(paragraaf);
        questions.append(li);

        vraagnummer++;
    }
}

window.addEventListener('load', setup);