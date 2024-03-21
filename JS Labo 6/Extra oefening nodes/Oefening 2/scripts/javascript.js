const setup = () => {
    let section = document.querySelector('section:nth-child(2)');
    let liElementen = section.querySelectorAll('li');
    for(let i = 0; i < liElementen.length; i++) {
        liElementen[i].classList.add("listitem");
    }
    let img = document.createElement("img");
    img.setAttribute('src','Images/WardCornelis.formated.jpg');
    img.setAttribute('alt','Afbeelding van Ward');
    section.append(img);
}
window.addEventListener("load", setup);