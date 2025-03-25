function verifierReponse1(){
	let reponse1 = document.querySelector("input[name='answer1']:checked");
	let resultat1 = document.getElementById("resultat1");
	if(!reponse1){
		event.preventDefault();
		resultat1.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat1.style.color = "red";
		return;
	}else if(reponse1.value === "b"){
		resultat1.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat1.style.color = "green";
		return;
	}else{
		resultat1.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Do you like pizza? Note 0/1</strong>";
		resultat1.style.color = "red";
	}
}

function verifierReponse2(){
	let reponse2 = document.querySelector("input[name='answer2']:checked");
	let resultat2 = document.getElementById("resultat2");
	if(!reponse2){
		event.preventDefault();
		resultat2.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat2.style.color = "red";
		return;
	}else if(reponse2.value === "f"){
		resultat2.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat2.style.color = "green";
		return;
	}else{
		resultat2.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: He doesn't like apples. Note 0/1</strong>";
		resultat2.style.color = "red";
	}
}

function verifierReponse3(){
	let reponse3 = document.querySelector("input[name='answer3']:checked");
	let resultat3 = document.getElementById("resultat3");
	if(!reponse3){
		event.preventDefault();
		resultat3.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat3.style.color = "red";
		return;
	}else if(reponse3.value === "i"){
		resultat3.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat3.style.color = "green";
		return;
	}else{
		resultat3.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: I don't like coffee. Note 0/1</strong>";
		resultat3.style.color = "red";
	}
}

function verifierReponse4(){
	let reponse4 = document.querySelector("input[name='answer4']:checked");
	let resultat4 = document.getElementById("resultat4");
	if(!reponse4){
		event.preventDefault();
		resultat4.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat4.style.color = "red";
		return;
	}else if(reponse4.value === "n"){
		resultat4.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat4.style.color = "green";
		return;
	}else{
		resultat4.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Do you speak English? Note 0/1</strong>";
		resultat4.style.color = "red";
	}
}

function verifierReponse5(){
	let reponse5 = document.querySelector("input[name='answer5']:checked");
	let resultat5 = document.getElementById("resultat5");
	if(!reponse5){
		event.preventDefault();
		resultat5.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat5.style.color = "red";
		return;
	}else if(reponse5.value === "r"){
		resultat5.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat5.style.color = "green";
		return;
	}else{
		resultat5.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Don't you like football? Note 0/1</strong>";
		resultat5.style.color = "red";
	}
}

function verifierReponse6(){
	let reponse6 = document.querySelector("input[name='answer6']:checked");
	let resultat6 = document.getElementById("resultat6");
	if(!reponse6){
		event.preventDefault();
		resultat6.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat6.style.color = "red";
		return;
	}else if(reponse6.value === "v"){
		resultat6.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat6.style.color = "green";
		return;
	}else{
		resultat6.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: He doesn't play football. Note 0/1</strong>";
		resultat6.style.color = "red";
	}
}

function verifierReponse7(){
	let reponse7 = document.querySelector("input[name='answer7']:checked");
	let resultat7 = document.getElementById("resultat7");
	if(!reponse7){
		event.preventDefault();
		resultat7.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat7.style.color = "red";
		return;
	}else if(reponse7.value === "ab"){
		resultat7.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat7.style.color = "green";
		return;
	}else{
		resultat7.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Does she have a cat? Note 0/1</strong>";
		resultat7.style.color = "red";
	}
}

function verifierReponse8(){
	let reponse8 = document.querySelector("input[name='answer8']:checked");
	let resultat8 = document.getElementById("resultat8");
	if(!reponse8){
		event.preventDefault();
		resultat8.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat8.style.color = "red";
		return;
	}else if(reponse8.value === "af"){
		resultat8.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat8.style.color = "green";
		return;
	}else{
		resultat8.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Parce qu'il sert à construire les questions et les phrases négatives au présent simple. Note 0/1</strong>";
		resultat8.style.color = "red";
	}
}

function verifierReponse9(){
	let reponse9 = document.querySelector("input[name='answer9']:checked");
	let resultat9 = document.getElementById("resultat9");
	if(!reponse9){
		event.preventDefault();
		resultat9.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat9.style.color = "red";
		return;
	}else if(reponse9.value === "ak"){
		resultat9.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat9.style.color = "green";
		return;
	}else{
		resultat9.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Does he eat breakfast at 7 a.m.? Note 0/1</strong>";
		resultat9.style.color = "red";
	}
}

function verifierReponse10(){
	let reponse10 = document.querySelector("input[name='answer10']:checked");
	let resultat10 = document.getElementById("resultat10");
	if(!reponse10){
		event.preventDefault();
		resultat10.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat10.style.color = "red";
		return;
	}else if(reponse10.value === "am"){
		resultat10.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat10.style.color = "green";
		return;
	}else{
		resultat10.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: I don't like pizza. Note 0/1</strong>";
		resultat10.style.color = "red";
	}
}

function speak(text){
		let utterance = new SpeechSynthesisUtterance(text);
		utterance.lang = "en-GB";
		speechSynthesis.speak(utterance);
}

const bouh = [
	{bouh: "I don't", sound: "I don't"},
	{bouh: "You don't", sound: "You don't"},
	{bouh: "He doesn't", sound: "He doesn't"},
	{bouh: "She doesn't", sound: "She doesn't"},
	{bouh: "It doesn't", sound: "It doesn't"},
	{bouh: "We don't", sound: "We don't"},
	{bouh: "They don't", sound: "They don't"}
];

const bouhDiv = document.getElementById("bouh");

bouh.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.bouh;
	button.classList.add("bouh-button");
	button.onclick = () => speak(item.sound);
	bouhDiv.appendChild(button);
});

const bouh1 = [
	{bouh1: "Do I", sound: "Do I"},
	{bouh1: "Do you", sound: "Do you"},
	{bouh1: "Does he", sound: "Does he"},
	{bouh1: "Does she", sound: "Does she"},
	{bouh1: "Does it", sound: "Does it"},
	{bouh1: "Do we", sound: "Do we"},
	{bouh1: "Do they", sound: "Do they"}
];

const bouh1Div = document.getElementById("bouh1");

bouh1.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.bouh1;
	button.classList.add("bouh-button");
	button.onclick = () => speak(item.sound);
	bouh1Div.appendChild(button);
});

const bouh2 = [
	{bouh2: "Don't I", sound: "Don't I"},
	{bouh2: "Don't you", sound: "Don't you"},
	{bouh2: "Doesn't he", sound: "Doesn't he"},
	{bouh2: "Doesn't she", sound: "Doesn't she"},
	{bouh2: "Doesn't it", sound: "Doesn't it"},
	{bouh2: "Don't we", sound: "Don't we"},
	{bouh2: "Don't they", sound: "Don't they"}
];

const bouh2Div = document.getElementById("bouh2");

bouh2.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.bouh2;
	button.classList.add("bouh-button");
	button.onclick = () => speak(item.sound);
	bouh2Div.appendChild(button);
});

const bouh3 = [
	{bouh3: "Do you like pizza?", sound: "Do you like pizza?"},
	{bouh3: "Does she play tennis?", sound: "Does she play tennis?"},
	{bouh3: "Does he work on Saturdays?", sound: "Does he work on Saturdays?"}
];

const bouh3Div = document.getElementById("bouh3");

bouh3.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.bouh3;
	button.classList.add("bouh-button");
	button.onclick = () => speak(item.sound);
	bouh3Div.appendChild(button);
});

const bouh4 = [
	{bouh4: "I don't like vegetables.", sound: "I don't like vegetables."},
	{bouh4: "He doesn't understand.", sound: "He doesn't understand."},
	{bouh4: "She doesn't like red meat.", sound: "She doesn't like red meat."}
];

const bouh4Div = document.getElementById("bouh4");

bouh4.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.bouh4;
	button.classList.add("bouh-button");
	button.onclick = () => speak(item.sound);
	bouh4Div.appendChild(button);
});

function ouvrirPublicite(){
	window.open("https://pilote083.github.io/MonProfEnLigne/", "_blank");
}
function gestionClic(){
	setTimeout(ouvrirPublicite, 30000);
}
const elements = document.querySelectorAll("button, input");
elements.forEach(element => {
	element.addEventListener("click", gestionClic);
});