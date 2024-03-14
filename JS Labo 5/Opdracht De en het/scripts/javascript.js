const setup = () => {
    let tekst = document.getElementById("gegeven").innerHTML.split(" ");
    let resultaat = "";

    for(let i = 0; i < tekst.length; i++){
        if(tekst[i] === "de"){
            tekst[i] = "het";
        } else if(tekst[i] === "De"){
            tekst[i] = "Het";
        }
    }
    for(let i2 = 0; i2 < tekst.length; i2++){
        resultaat += tekst[i2] + " ";
    }
    resultaat = resultaat.trim();
    console.log(resultaat);

}
window.addEventListener("load", setup);