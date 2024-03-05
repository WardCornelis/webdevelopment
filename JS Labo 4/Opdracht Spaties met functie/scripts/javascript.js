const setup = () => {
    let btnCut = document.getElementById("btnCut");
    btnCut.addEventListener("click", verknip);
}

const verknip = () => {
    let txtInput = document.getElementById("TxtInput");
    let text = txtInput.value.split("");
    let resultaat = "";

    for(let i = 0; i < text.length; i++){
        if(text[i].trim() !== "") {
            resultaat += text[i] + " ";
        }
    }
    console.log(resultaat);
}
window.addEventListener("load", setup);