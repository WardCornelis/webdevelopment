const setup = () => {
    restoreLocalValues();
    changeColor();
    let inputsSection = document.querySelector('#Inputs');
    inputsSection.addEventListener('change', changeColor);
    inputsSection.addEventListener('input', changeColor);

    let saveBtn = document.querySelector('#Savebtn');
    saveBtn.addEventListener('click', addToSaved);

    let savedSection = document.querySelector('#Saved');
    savedSection.addEventListener('click', setToColor);
}

const removeSaved = (event) => {
    let savedSection = document.querySelector('#Saved');
    savedSection.removeChild(event.target.parentElement);
    event.stopPropagation();
}

const setToColor = (event) => {
    let computedStyle = window.getComputedStyle(event.target).backgroundColor.toString();
    let redSlider = document.querySelector('#RedSlider');
    let greenSlider = document.querySelector('#GreenSlider');
    let blueSlider = document.querySelector('#BlueSlider');

    let nakedValues = computedStyle.slice(4,-1);
    let comma = nakedValues.indexOf(',');
    let red = nakedValues.slice(0,comma).trim();
    nakedValues = nakedValues.slice(comma + 1);
    comma = nakedValues.indexOf(',');
    let green = nakedValues.slice(0,comma).trim();
    let blue = nakedValues.slice(comma + 1).trim();

    redSlider.value = red;
    greenSlider.value = green;
    blueSlider.value = blue;

    changeColor();
}

const addToSaved = () =>{
        let savedSection = document.querySelector('#Saved');

        let red = document.querySelector('#RedSlider').value;
        let green = document.querySelector('#GreenSlider').value;
        let blue = document.querySelector('#BlueSlider').value;

        let div = document.createElement('div');
        let input = document.createElement('input');
        let label = document.createElement('label');
        div.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        div.classList.add('savedColors');
        label.setAttribute('for', 'Deletebtn');
        input.setAttribute('id', 'Deletebtn');
        input.setAttribute('type', 'button');
        input.setAttribute('value', 'X');
        input.setAttribute('name', 'Delete');
        input.addEventListener('click', removeSaved);
        div.append(label);
        div.append(input);
        savedSection.append(div);
}

const changeColor = () => {
    let sliderRestore = {};
    let red = document.querySelector('#RedSlider').value;
    let redTxt = document.querySelector('.Red');
    redTxt.textContent = red;
    sliderRestore.rood = red;

    let green = document.querySelector('#GreenSlider').value;
    let greenTxt = document.querySelector('.Green');
    greenTxt.textContent = green;
    sliderRestore.groen = green

    let blue = document.querySelector('#BlueSlider').value;
    let blueTxt = document.querySelector('.Blue');
    blueTxt.textContent = blue;
    sliderRestore.blauw = blue;

    let sliderRestoreJSON = JSON.stringify(sliderRestore);
    localStorage.setItem('Color.Picker.sliderRestore', sliderRestoreJSON);


    let swatch = document.querySelector('#Swatch');
    swatch.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

const restoreLocalValues = () => {
    if(localStorage.getItem('Color.Picker.sliderRestore')!==null){
        let localStorageJSON = localStorage.getItem('Color.Picker.sliderRestore');
        let localStorageObject = JSON.parse(localStorageJSON);
        document.querySelector('#RedSlider').value = localStorageObject.rood;
        document.querySelector('#BlueSlider').value = localStorageObject.blauw;
        document.querySelector('#GreenSlider').value = localStorageObject.groen;
    }
}

window.addEventListener("load", setup);