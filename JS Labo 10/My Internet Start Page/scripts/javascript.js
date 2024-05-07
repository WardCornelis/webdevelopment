let arrays = {
    commandoMap : new Map([
        ['/f', 'https://www.facebook.com/search/top/?q='],
        ['/g', 'https://www.google.be/search?q='],
        ['/y', 'https://www.youtube.com/results?search_query='],
        ['/i', 'https://www.instagram.com/explore/tags/']
    ])
};
const setup = () => {
    let zoekKnop = document.querySelector('#btnZoek');
    zoekKnop.addEventListener('click', zoekSite);
}

const zoekSite = () => {
    let inputElement = document.querySelector('#zoekOpdracht');
    let input = inputElement.value.trim();
    input = input.replace(/\s{2,}/g, ' ');
    let inputArray = input.split(' ');

    if(arrays.commandoMap.has(inputArray[0])){
        let commando = inputArray[0];
        let URL = arrays.commandoMap.get(commando);
        if(commando === '/g') {
            for (let i = 1; i < inputArray.length; i++) {
                URL += inputArray[i] + "+";
            }
            URL = URL.slice(0,URL.length - 1);
        }
        if(commando === '/i') {
            for (let i = 1; i < )
        }
        window.open(URL, "_blank");
    }
}

window.addEventListener("load", setup);