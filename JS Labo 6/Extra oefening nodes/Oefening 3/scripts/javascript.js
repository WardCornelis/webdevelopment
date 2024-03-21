const setup = () => {
    window.addEventListener('click', maakPaan);
};

const maakPaan = () => {
    let div = document.querySelector('#myDIV');
    let p = document.createElement('p');
    p.innerText = "some text";
    div.append(p);
}

window.addEventListener("load", setup);