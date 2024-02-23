const setup = () => {
}

let lastNames = ['Deceuninck','Cornelis','Snoeck','Vermeulen','Deteur'];

console.log(lastNames.length); /** Lengte van de array loggen*/

console.log(lastNames[0], lastNames[2], lastNames[4]); /** Het eerste, derde en vijfde element loggen*/

VoegNaamToe();

console.log(lastNames.join()); /** Uitkomst array weergeven */

function VoegNaamToe() {
    console.log(lastNames.push(window.prompt("Welke naam wilt u toevoegen en geef deze op","Geef hier de naam op"))); /** Naam opvragen en toevoegen aan de array, resultaat weergeven */
}

window.addEventListener("load", setup);