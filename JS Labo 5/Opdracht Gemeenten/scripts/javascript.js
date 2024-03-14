const setup = () => {
    let opties = document.querySelector("select");
    let gemeente = "";
    let toevoegenStoppen = false;
    let lijstGemeenten = [];

    while(!toevoegenStoppen){
        let opgegeven = window.prompt().toLowerCase();
        if(opgegeven !== "stop"){
            lijstGemeenten.push(opgegeven);
        } else {
            toevoegenStoppen = true;
            lijstGemeenten.sort();
            for (let i = 0; i < lijstGemeenten.length; i++) {
                gemeente = hoofdletters(lijstGemeenten[i]);
                opties.innerHTML += `<option value="${gemeente}">${gemeente}</option>`;
            }
        }
    }
}

const hoofdletters = (a) => {
    let resultaat = a.charAt(0).toUpperCase() + a.slice(1);
    for(let i = 0; i < resultaat.length; i++){
        if(resultaat[i] === " " || resultaat[i] === "-"){
            resultaat = resultaat.slice(0, i+1) + resultaat[i+1].toUpperCase() + resultaat.slice(i+2);
        }
    }
    return resultaat;
}
window.addEventListener("load", setup);