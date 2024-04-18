const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideere);
};

const valideere = () => {
	valideerVoornaam();
	valideerAchternaam();
	valideerGeboortedatum();
	valideerEmail();
	valideerAantalKinderen();
	eindControle();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};

const valideerAchternaam = () => {
	let txtAchternaam = document.getElementById("txtAchternaam");
	let errAchternaam = document.getElementById("errAchternaam");
	let achternaam = txtAchternaam.value.trim();
	if (achternaam.length === 0) {
		txtAchternaam.className = "invalid";
		errAchternaam.innerHTML = "verplicht veld";
	} else if (achternaam.length > 50) {
		txtAchternaam.className="invalid";
		errAchternaam.innerHTML = "max 50 karakters";
	} else {
		txtAchternaam.className = "";
		errAchternaam.innerHTML = "";
	}
};

const valideerGeboortedatum = () => {
	let txtGebDat = document.getElementById("txtGeboortedatum");
	let errGebDat = document.getElementById("errGeboortedatum");
	let gebDat = txtGebDat.value.trim();
	if(gebDat.length === 0) {
		txtGebDat.className = "invalid";
		errGebDat.innerHTML = "verplicht veld";
	} else if (!/^([1-2][0-9][0-9][0-9]-[0-9]{2}-[0-3][0-9])$/.test(gebDat)) {
		txtGebDat.className = "invalid";
		errGebDat.innerHTML = "formaat is niet jjjj-mm-dd";
	} else {
		txtGebDat.className = "";
		errGebDat.innerHTML = "";
	}
};

const valideerEmail = () => {
	let txtEmail = document.getElementById("txtEmail");
	let errEmail = document.getElementById("errEmail");
	let email = txtEmail.value.trim();
	if(email.length === 0) {
		txtEmail.className = "invalid";
		errEmail.innerHTML = "verplicht veld";
	} else if(!/^[a-z|A-Z]+@[a-z|A-Z]+$/.test(email)) {
		txtEmail.className = "invalid";
		errEmail.innerHTML = "geen geldig email adres";
	} else {
		txtEmail.className = "";
		errEmail.innerHTML = "";
	}
};

const valideerAantalKinderen = () => {
	let txtKinderen = document.getElementById("txtKinderen");
	let errKinderen = document.getElementById("errKinderen");
	let kinderen = parseInt(txtKinderen.value.trim());
	if(txtKinderen.value === null) {
		txtKinderen.className = "invalid";
		errKinderen.innerHTML = "is geen positief getal";
	} else if (kinderen >= 0) {
		txtKinderen.className = "invalid";
		errKinderen.innerHTML = "is geen positief getal";
	} else if (kinderen < 99) {
		txtKinderen.className = "invalid";
		errKinderen.innerHTML = "is te vruchtbaar";
	} else {
		txtKinderen.className = "";
		errKinderen.innerHTML = "";
	}
};

const eindControle =() => {
	let aantalInvalids = document.getElementsByClassName("invalid");
	if(aantalInvalids.length === 0){
		window.alert("proficiat!")
	}
}

window.addEventListener("load", setup);