let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,
    score: 0,
    start: false,
    timeoutId: 0
};

const setup = () => {
    let afbeelding = document.querySelector('#Target');
    let startBtn = document.querySelector('#StartBtn');
    afbeelding.addEventListener('click', toonInfo);
    startBtn.addEventListener('click', speelSpel);
};

const toonInfo = () => {
    if(global.start === false) {
        window.alert('Klik op alle afbeeldingen, die geen bom zijn. Doe je dit toch, verlies je!');
    }
};

const speelSpel = () => {
    global.start = true;
    let startBtn = document.querySelector('#StartBtn');
    startBtn.remove();
    let afbeelding = document.querySelector('#Target');
    afbeelding.addEventListener('click', valideerKlik);
    setInterval(movePicture, 1000);
};

const valideerKlik = (event) => {
    let afbeelding = document.querySelector('#Target');
    let actueleSrc = afbeelding.getAttribute('src');
    if(actueleSrc === "images/0.png") {
        clearInterval(global.timeoutId);
        if(window.confirm(`Het spel is over, u klikte op een BOM. U heeft een score behaald van ${global.score}! \nWilt u direct opnieuw spelen?`)){
            speelSpel();
        } else {
            location.reload();
        }
    } else {
        global.score += 1;
        movePicture();
    }
};

const movePicture = () => {
    randomAfbeelding();
    let sprite = document.querySelector('#Target');
    let speelveld= document.querySelector('#PlayField');
    let maxLeft= speelveld.clientWidth - sprite.offsetWidth;
    let maxHeight= speelveld.clientHeight - sprite.offsetHeight;

    let left= Math.floor(Math.random()*maxLeft);
    let top= Math.floor(Math.random()*maxHeight);
    sprite.style.left = left+"px";
    sprite.style.top = top+"px";
};

const randomAfbeelding = () => {
    let rand = Math.floor(Math.random() * 5);
    let afbeelding = global.IMAGE_PATH_PREFIX + rand + global.IMAGE_PATH_SUFFIX;
    let sprite = document.querySelector('#Target');
    sprite.setAttribute('src', afbeelding);
};


window.addEventListener("load", setup);


