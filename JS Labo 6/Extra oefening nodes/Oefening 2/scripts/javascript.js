const setup = () => {
    let div = document.querySelector('div');
    let liElementen = div.querySelectorAll('li');
    for(let i = 0; i < liElementen.length; i++) {
        liElementen[i].classList.add("listitem");
    }
    let img = document.createElement("img");
    img.setAttribute('src','Images/WardCornelis.formated.jpg');
    img.setAttribute('alt','Afbeelding van Ward');
    div.append(img);
}
window.addEventListener("load", setup);