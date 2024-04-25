let savedSwatches = [];

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

    savedSwatches.length = 0;

    let savedDivSwatches = document.querySelectorAll('.savedColors');
    for(let i = 0; i < savedDivSwatches.length; i++){
        let swatchValues = {};
        let computedStyle = getComputedStyle(savedDivSwatches[i]).backgroundColor.toString();
        let swatchColors = colorsFromComputedStyle(computedStyle);
        swatchValues.rood= swatchColors[0];
        swatchValues.groen = swatchColors[1];
        swatchValues.blauw = swatchColors[2];

        savedSwatches.push(swatchValues);
    }

    let savedSwatchesJSON = JSON.stringify(savedSwatches);
    localStorage.setItem('Color.Picker.swatchRestore', savedSwatchesJSON);

    event.stopPropagation();
}

const colorsFromComputedStyle = (a) => {
    let nakedValues = a.slice(4,-1);
    let comma = nakedValues.indexOf(',');
    let red = nakedValues.slice(0,comma).trim();
    nakedValues = nakedValues.slice(comma + 1);
    comma = nakedValues.indexOf(',');
    let green = nakedValues.slice(0,comma).trim();
    let blue = nakedValues.slice(comma + 1).trim();
    return [red, green, blue];
}

const setToColor = (event) => {
    let computedStyle = window.getComputedStyle(event.target).backgroundColor.toString();
    let redSlider = document.querySelector('#RedSlider');
    let greenSlider = document.querySelector('#GreenSlider');
    let blueSlider = document.querySelector('#BlueSlider');

    let swatchColors = colorsFromComputedStyle(computedStyle);

    redSlider.value = swatchColors[0];
    greenSlider.value = swatchColors[1];
    blueSlider.value = swatchColors[2];

    changeColor();
}

const addToSaved = () =>{
        let swatchRestore = {};

        let red = document.querySelector('#RedSlider').value;
        swatchRestore.rood = red;
        let green = document.querySelector('#GreenSlider').value;
        swatchRestore.groen = green;
        let blue = document.querySelector('#BlueSlider').value;
        swatchRestore.blauw = blue;

        createSwatch(red, green, blue);

        savedSwatches.push(swatchRestore);
        let savedSwatchesJSON = JSON.stringify(savedSwatches);
        localStorage.setItem('Color.Picker.swatchRestore', savedSwatchesJSON);
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

const createSwatch = (a,b,c) => {
    let savedSection = document.querySelector('#Saved');

    let div = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');
    div.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
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

const restoreLocalValues = () => {
    if(localStorage.getItem('Color.Picker.sliderRestore')!==null){
        let localSliderStorageJSON = localStorage.getItem('Color.Picker.sliderRestore');
        let localSliderStorageObject = JSON.parse(localSliderStorageJSON);
        document.querySelector('#RedSlider').value = localSliderStorageObject.rood;
        document.querySelector('#BlueSlider').value = localSliderStorageObject.blauw;
        document.querySelector('#GreenSlider').value = localSliderStorageObject.groen;
    }
    if(localStorage.getItem('Color.Picker.swatchRestore')!==null){
        let localSwatchStorageJSON = localStorage.getItem('Color.Picker.swatchRestore');
        let localSwatchStorageList = JSON.parse(localSwatchStorageJSON);
        for(let i = 0; i < localSwatchStorageList.length; i++){
            let swatchObject = localSwatchStorageList[i];
            savedSwatches.push(swatchObject);

            let red = swatchObject.rood;
            let green = swatchObject.groen;
            let blue = swatchObject.blauw;

            createSwatch(red, green, blue);
        }
    }
}

window.addEventListener("load", setup);