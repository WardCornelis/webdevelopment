const setup = () => {
    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk=true;
    let vandaag = new Date();
    const print = (message) => {
        console.log(message);
    }
    print(typeof leeftijd);
    print(typeof intrest);
    print(typeof isGevaarlijk);
    print(typeof vandaag);
}
window.addEventListener("load", setup);