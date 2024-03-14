const setup = () => {
    let tekst = document.getElementById("trigram").innerHTML;
    let i = 0;
    while(i < tekst.length){
        console.log(tekst.slice(i,i+3));
        i += 3;
    }
}
window.addEventListener("load", setup);