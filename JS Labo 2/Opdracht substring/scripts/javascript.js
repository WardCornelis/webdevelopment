const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");

    btnSubstring.addEventListener("click", substring);
}
const substring = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;

    let txtOutput = document.getElementById("txtOutput");

    let eersteGetal = document.getElementById("eersteGetal");
    let g1 = parseInt(eersteGetal.value,10);

    let tweedeGetal = document.getElementById("tweedeGetal");
    let g2 = parseInt(tweedeGetal.value, 10);

    txtOutput.innerHTML = tekst.substring(g1, g2);

}


window.addEventListener("load", setup);