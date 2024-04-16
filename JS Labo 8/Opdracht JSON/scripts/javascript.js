const setup = () => {
    eersteDeel();
    tweedeDeel();
}

const eersteDeel = () => {
    let student1 = {
        voornaam: "Eddy",
        achternaam: "Van Reckevellen",
        geboortedatum: new Date(1998, 11, 25),
        studierichting: "Marketing"
    };
    let tekst = JSON.stringify(student1);
    console.log(tekst);
}

const tweedeDeel = () => {
    let student2 = JSON.parse('{"voornaam":"Eddy","achternaam":"Van Reckevellen","geboortedatum":"1998-12-24T23:00:00.000Z", "studierichting":"Marketing"}');
    console.log(student2.voornaam);
}
window.addEventListener("load", setup);