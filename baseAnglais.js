const alphabet = [
	{letter: "A", sound: "A"},
	{letter: "B", sound: "B"},
	{letter: "C", sound: "C"},
	{letter: "D", sound: "D"},
	{letter: "E", sound: "E"},
	{letter: "F", sound: "F"},
	{letter: "G", sound: "G"},
	{letter: "H", sound: "H"},
	{letter: "I", sound: "I"},
	{letter: "J", sound: "J"},
	{letter: "K", sound: "K"},
	{letter: "L", sound: "L"},
	{letter: "M", sound: "M"},
	{letter: "N", sound: "N"},
	{letter: "O", sound: "O"},
	{letter: "P", sound: "P"},
	{letter: "Q", sound: "Q"},
	{letter: "R", sound: "R"},
	{letter: "S", sound: "S"},
	{letter: "T", sound: "T"},
	{letter: "U", sound: "U"},
	{letter: "V", sound: "V"},
	{letter: "W", sound: "W"},
	{letter: "X", sound: "X"},
	{letter: "Y", sound: "Y"},
	{letter: "Z", sound: "Z"}
];

function speak(text){
		let utterance = new SpeechSynthesisUtterance(text);
		utterance.lang = "en-GB";
		speechSynthesis.speak(utterance);
}

	const alphabetDiv = document.getElementById("alphabet");
	
	alphabet.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.letter;
	button.classList.add("letter-button");
	button.onclick = () => speak(item.sound);
	alphabetDiv.appendChild(button);
});

const salutation = [
	{mot: "Hello", sound: "Hello"},
	{mot: "Good morning", sound: "Good morning"},
	{mot: "Good afternoon", sound: "Good afternoon"},
	{mot: "Good evening", sound: "Good evening"},
	{mot: "Goodbye", sound: "Goodbye"},
	{mot: "Please", sound: "Please"},
	{mot: "Thank you", sound: "Thank you"},
	{mot: "You're welcome", sound: "You're welcome"},
	{mot: "Excuse me", sound: "Excuse me"},
	{mot: "Sorry", sound: "Sorry"}
];

const salutationDiv = document.getElementById("salutation");

salutation.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.mot;
	button.classList.add("salutation-button");
	button.onclick = () => speak(item.sound);
	salutationDiv.appendChild(button);
});

const salutation1 = [
	{mota: "One", sound: "One"},
	{mota: "Two", sound: "Two"},
	{mota: "Three", sound: "Three"},
	{mota: "Four", sound: "Four"},
	{mota: "Five", sound: "Five"},
	{mota: "Six", sound: "Six"},
	{mota: "Seven", sound: "Seven"},
	{mota: "Eight", sound: "Eight"},
	{mota: "Nine", sound: "Nine"},
	{mota: "Ten", sound: "Ten"}
];

const motaDiv = document.getElementById("mota");

salutation1.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.mota;
	button.classList.add("salutation-button");
	button.onclick = () => speak(item.sound);
	motaDiv.appendChild(button);
});

const salutation2 = [
	{motb: "Monday", sound: "Monday"},
	{motb: "Tuesday", sound: "Tuesday"},
	{motb: "Wednesday", sound: "Wednesday"},
	{motb: "Thursday", sound: "Thursday"},
	{motb: "Friday", sound: "Friday"},
	{motb: "Saturday", sound: "Saturday"},
	{motb: "Sunday", sound: "Sunday"}
];

const motbDiv = document.getElementById("motb");

salutation2.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.motb;
	button.classList.add("salutation-button");
	button.onclick = () => speak(item.sound);
	motbDiv.appendChild(button);
});

const salutation3 = [
	{motc: "January", sound: "January"},
	{motc: "February", sound: "February"},
	{motc: "March", sound: "March"},
	{motc: "April", sound: "April"},
	{motc: "May", sound: "May"},
	{motc: "June", sound: "June"},
	{motc: "July", sound: "July"},
	{motc: "August", sound: "August"},
	{motc: "September", sound: "September"},
	{motc: "October", sound: "October"},
	{motc: "November", sound: "November"},
	{motc: "December", sound: "December"}
];

const motcDiv = document.getElementById("motc");

salutation3.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.motc;
	button.classList.add("salutation-button");
	button.onclick = () => speak(item.sound);
	motcDiv.appendChild(button);
});

const salutation4 = [
	{motd: "Red", sound: "Red"},
	{motd: "Blue", sound: "Blue"},
	{motd: "Yellow", sound: "Yellow"},
	{motd: "Green", sound: "Green"},
	{motd: "Black", sound: "Black"},
	{motd: "White", sound: "White"},
	{motd: "Grey", sound: "Grey"},
	{motd: "Brown", sound: "Brown"},
	{motd: "Orange", sound: "Orange"},
	{motd: "Pink", sound: "Pink"},
	{motd: "Purple", sound: "Purple"}
];

const motdDiv = document.getElementById("motd");

salutation4.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.motd;
	button.classList.add("salutation-button");
	button.onclick = () => speak(item.sound);
	motdDiv.appendChild(button);
});

function verifierReponse(){
	let reponse = document.querySelector("input[name='answer']:checked");
	let resultat = document.getElementById("resultat");
	if(!reponse){
		event.preventDefault();
		resultat.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat.style.color = "red";
		resultat.style.transition = "0.3s ease";
		resultat.style.transform = "translateX(0)";
		return;
	}else if(reponse.value === "c"){
		resultat.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat.style.color = "green";
		resultat.style.transform = "translateX(0)";
		resultat.style.transition = "0.3s ease";
		return;
	}else{
		resultat.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Good morning. Note 0/1</strong>";
		resultat.style.color = "red";
		resultat.style.transform = "translateX(0)";
		resultat.style.transition = "0.3s ease";
	}
}

function verifierReponse1(){
	let reponse1 = document.querySelector("input[name='answer1']:checked");
	let resultat = document.getElementById("resultat1");
	if(!reponse1){
		event.preventDefault();
		resultat1.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat1.style.color = "red";
		resultat1.style.transition = "0.3s ease";
		resultat1.style.transform = "translateX(0)";
		return;
	}else if(reponse1.value === "f"){
		resultat1.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat1.style.color = "green";
		resultat1.style.transition = "0.3s ease";
		resultat1.style.transform = "translateX(0)";
		return;
	}else{
		resultat1.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Thank you. Note 0/1</strong>";
		resultat1.style.color = "red";
		resultat1.style.transition = "0.3s ease";
		resultat1.style.transform = "translateX(0)";
	}
}

function verifierReponse2(){
	let reponse2 = document.querySelector("input[name='answer2']:checked");
	let resultat2 = document.getElementById("resultat2");
	if(!reponse2){
		event.preventDefault();
		resultat2.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat2.style.color = "red";
		resultat2.style.transition = "0.3s ease";
		resultat2.style.transform = "translateX(0)";
		return;
	}else if(reponse2.value === "k"){
		resultat2.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat2.style.color = "green";
		resultat2.style.transition = "0.3s ease";
		resultat2.style.transform = "translateX(0)";
		return;
	}else{
		resultat2.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: You're welcome. Note 0/1</strong>";
		resultat2.style.color = "red";
		resultat2.style.transition = "0.3s ease";
		resultat2.style.transform = "translateX(0)";
	}
}

function verifierReponse3(){
	let reponse3 = document.querySelector("input[name='answer3']:checked");
	let resultat3 = document.getElementById("resultat3");
	if(!reponse3){
		event.preventDefault();
		resultat3.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat3.style.color = "red";
		resultat3.style.transition = "0.3s ease";
		resultat3.style.transform = "translateX(0)";
		return;
	}else if(reponse3.value === "n"){
		resultat3.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat3.style.color = "green";
		resultat3.style.transition = "0.3s ease";
		resultat3.style.transform = "translateX(0)";
		return;
	}else{
		resultat3.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Goodbye. Note 0/1</strong>";
		resultat3.style.color = "red";
		resultat3.style.transition = "0.3s ease";
		resultat3.style.transform = "translateX(0)";
	}
}

function verifierReponse4(){
	let reponse4 = document.querySelector("input[name='answer4']:checked");
	let resultat4 = document.getElementById("resultat4");
	if(!reponse4){
		event.preventDefault();
		resultat4.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat4.style.color = "red";
		resultat4.style.transition = "0.3s ease";
		resultat4.style.transform = "translateX(0)";
		return;
	}else if(reponse4.value === "r"){
		resultat4.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat4.style.color = "green";
		resultat4.style.transition = "0.3s ease";
		resultat4.style.transform = "translateX(0)";
		return;
	}else{
		resultat4.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Sorry. Note 0/1</strong>";
		resultat4.style.color = "red";
		resultat4.style.transition = "0.3s ease";
		resultat4.style.transform = "translateX(0)";
	}
}

function verifierReponse5(){
	let reponse5 = document.querySelector("input[name='answer5']:checked");
	let resultat5 = document.getElementById("resultat5");
	if(!reponse5){
		event.preventDefault();
		resultat5.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat5.style.color = "red";
		resultat5.style.transition = "0.3s ease";
		resultat5.style.transform = "translateX(0)";
		return;
	}else if(reponse5.value === "u"){
		resultat5.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat5.style.color = "green";
		resultat5.style.transition = "0.3s ease";
		resultat5.style.transform = "translateX(0)";
		return;
	}else{
		resultat5.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Please. Note 0/1</strong>";
		resultat5.style.color = "red";
		resultat5.style.transition = "0.3s ease";
		resultat5.style.transform = "translateX(0)";
	}
}

function verifierReponse6(){
	let reponse6 = document.querySelector("input[name='answer6']:checked");
	let resultat6 = document.getElementById("resultat6");
	if(!reponse6){
		event.preventDefault();
		resultat6.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat6.style.color = "red";
		resultat6.style.transition = "0.3s ease";
		resultat6.style.transform = "translateX(0)";
		return;
	}else if(reponse6.value === "ac"){
		resultat6.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat6.style.color = "green";
		resultat6.style.transition = "0.3s ease";
		resultat6.style.transform = "translateX(0)";
		return;
	}else{
		resultat6.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Three. Note 0/1</strong>";
		resultat6.style.color = "red";
		resultat6.style.transition = "0.3s ease";
		resultat6.style.transform = "translateX(0)";
	}
}

function verifierReponse7(){
	let reponse7 = document.querySelector("input[name='answer7']:checked");
	let resultat7 = document.getElementById("resultat7");
	if(!reponse7){
		event.preventDefault();
		resultat7.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat7.style.color = "red";
		resultat7.style.transition = "0.3s ease";
		resultat7.style.transform = "translateX(0)";
		return;
	}else if(reponse7.value === "af"){
		resultat7.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat7.style.color = "green";
		resultat7.style.transition = "0.3s ease";
		resultat7.style.transform = "translateX(0)";
		return;
	}else{
		resultat7.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: 8. Note 0/1</strong>";
		resultat7.style.color = "red";
		resultat7.style.transition = "0.3s ease";
		resultat7.style.transform = "translateX(0)";
	}
}

function verifierReponse8(){
	let reponse8 = document.querySelector("input[name='answer8']:checked");
	let resultat8 = document.getElementById("resultat8");
	if(!reponse8){
		event.preventDefault();
		resultat8.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat8.style.color = "red";
		resultat8.style.transition = "0.3s ease";
		resultat8.style.transform = "translateX(0)";
		return;
	}else if(reponse8.value === "aj"){
		resultat8.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat8.style.color = "green";
		resultat8.style.transition = "0.3s ease";
		resultat8.style.transform = "translateX(0)";
		return;
	}else{
		resultat8.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Nine. Note 0/1</strong>";
		resultat8.style.color = "red";
		resultat8.style.transition = "0.3s ease";
		resultat8.style.transform = "translateX(0)";
	}
}

function verifierReponse9(){
	let reponse9 = document.querySelector("input[name='answer9']:checked");
	let resultat9 = document.getElementById("resultat9");
	if(!reponse9){
		event.preventDefault();
		resultat9.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat9.style.color = "red";
		resultat9.style.transition = "0.3s ease";
		resultat9.style.transform = "translateX(0)";
		return;
	}else if(reponse9.value === "an"){
		resultat9.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat9.style.color = "green";
		resultat9.style.transition = "0.3s ease";
		resultat9.style.transform = "translateX(0)";
		return;
	}else{
		resultat9.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: 6. Note 0/1</strong>";
		resultat9.style.color = "red";
		resultat9.style.transition = "0.3s ease";
		resultat9.style.transform = "translateX(0)";
	}
}

function verifierReponse10(){
	let reponse10 = document.querySelector("input[name='answer10']:checked");
	let resultat10 = document.getElementById("resultat10");
	if(!reponse10){
		event.preventDefault();
		resultat10.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat10.style.color = "red";
		resultat10.style.transition = "0.3s ease";
		resultat10.style.transform = "translateX(0)";
		return;
	}else if(reponse10.value === "as"){
		resultat10.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat10.style.color = "green";
		resultat10.style.transition = "0.3s ease";
		resultat10.style.transform = "translateX(0)";
		return;
	}else{
		resultat10.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Wednesday. Note 0/1</strong>";
		resultat10.style.color = "red";
		resultat10.style.transition = "0.3s ease";
		resultat10.style.transform = "translateX(0)";
	}
}

function verifierReponse11(){
	let reponse11 = document.querySelector("input[name='answer11']:checked");
	let resultat11 = document.getElementById("resultat11");
	if(!reponse11){
		event.preventDefault();
		resultat11.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat11.style.color = "red";
		resultat11.style.transition = "0.3s ease";
		resultat11.style.transform = "translateX(0)";
		return;
	}else if(reponse11.value === "av"){
		resultat11.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat11.style.color = "green";
		resultat11.style.transition = "0.3s ease";
		resultat11.style.transform = "translateX(0)";
		return;
	}else{
		resultat11.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Monday. Note 0/1</strong>";
		resultat11.style.color = "red";
		resultat11.style.transition = "0.3s ease";
		resultat11.style.transform = "translateX(0)";
	}
}

function verifierReponse12(){
	let reponse12 = document.querySelector("input[name='answer12']:checked");
	let resultat12 = document.getElementById("resultat12");
	if(!reponse12){
		event.preventDefault();
		resultat12.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat12.style.color = "red";
		resultat12.style.transition = "0.3s ease";
		resultat12.style.transform = "translateX(0)";
		return;
	}else if(reponse12.value === "bc"){
		resultat12.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat12.style.color = "green";
		resultat12.style.transition = "0.3s ease";
		resultat12.style.transform = "translateX(0)";
		return;
	}else{
		resultat12.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Wednesday. Note 0/1</strong>";
		resultat12.style.color = "red";
		resultat12.style.transition = "0.3s ease";
		resultat12.style.transform = "translateX(0)";
	}
}

function verifierReponse13(){
	let reponse13 = document.querySelector("input[name='answer13']:checked");
	let resultat13 = document.getElementById("resultat13");
	if(!reponse13){
		event.preventDefault();
		resultat13.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat13.style.color = "red";
		resultat13.style.transition = "0.3s ease";
		resultat13.style.transform = "translateX(0)";
		return;
	}else if(reponse13.value === "be"){
		resultat13.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat13.style.color = "green";
		resultat13.style.transition = "0.3s ease";
		resultat13.style.transform = "translateX(0)";
		return;
	}else{
		resultat13.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Friday. Note 0/1</strong>";
		resultat13.style.color = "red";
		resultat13.style.transition = "0.3s ease";
		resultat13.style.transform = "translateX(0)";
	}
}

function verifierReponse14(){
	let reponse14 = document.querySelector("input[name='answer14']:checked");
	let resultat14 = document.getElementById("resultat14");
	if(!reponse14){
		event.preventDefault();
		resultat14.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat14.style.color = "red";
		resultat14.style.transition = "0.3s ease";
		resultat14.style.transform = "translateX(0)";
		return;
	}else if(reponse14.value === "bk"){
		resultat14.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat14.style.color = "green";
		resultat14.style.transition = "0.3s ease";
		resultat14.style.transform = "translateX(0)";
		return;
	}else{
		resultat14.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Saturday. Note 0/1</strong>";
		resultat14.style.color = "red";
		resultat14.style.transition = "0.3s ease";
		resultat14.style.transform = "translateX(0)";
	}
}

function verifierReponse15(){
	let reponse15 = document.querySelector("input[name='answer15']:checked");
	let resultat15 = document.getElementById("resultat15");
	if(!reponse15){
		event.preventDefault();
		resultat15.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat15.style.color = "red";
		resultat15.style.transition = "0.3s ease";
		resultat15.style.transform = "translateX(0)";
		return;
	}else if(reponse15.value === "bn"){
		resultat15.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat15.style.color = "green";
		resultat15.style.transition = "0.3s ease";
		resultat15.style.transform = "translateX(0)";
		return;
	}else{
		resultat15.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: January. Note 0/1</strong>";
		resultat15.style.color = "red";
		resultat15.style.transition = "0.3s ease";
		resultat15.style.transform = "translateX(0)";
	}
}

function verifierReponse16(){
	let reponse16 = document.querySelector("input[name='answer16']:checked");
	let resultat16 = document.getElementById("resultat16");
	if(!reponse16){
		event.preventDefault();
		resultat16.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat16.style.color = "red";
		resultat16.style.transition = "0.3s ease";
		resultat16.style.transform = "translateX(0)";
		return;
	}else if(reponse16.value === "br"){
		resultat16.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat16.style.color = "green";
		resultat16.style.transition = "0.3s ease";
		resultat16.style.transform = "translateX(0)";
		return;
	}else{
		resultat16.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: April. Note 0/1</strong>";
		resultat16.style.color = "red";
		resultat16.style.transition = "0.3s ease";
		resultat16.style.transform = "translateX(0)";
	}
}

function verifierReponse17(){
	let reponse17 = document.querySelector("input[name='answer17']:checked");
	let resultat17 = document.getElementById("resultat17");
	if(!reponse17){
		event.preventDefault();
		resultat17.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat17.style.color = "red";
		resultat17.style.transition = "0.3s ease";
		resultat17.style.transform = "translateX(0)";
		return;
	}else if(reponse17.value === "bv"){
		resultat17.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat17.style.color = "green";
		resultat17.style.transition = "0.3s ease";
		resultat17.style.transform = "translateX(0)";
		return;
	}else{
		resultat17.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: December. Note 0/1</strong>";
		resultat17.style.color = "red";
		resultat17.style.transition = "0.3s ease";
		resultat17.style.transform = "translateX(0)";
	}
}

function verifierReponse18(){
	let reponse18 = document.querySelector("input[name='answer18']:checked");
	let resultat18 = document.getElementById("resultat18");
	if(!reponse18){
		event.preventDefault();
		resultat18.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat18.style.color = "red";
		resultat18.style.transition = "0.3s ease";
		resultat18.style.transform = "translateX(0)";
		return;
	}else if(reponse18.value === "ca"){
		resultat18.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat18.style.color = "green";
		resultat18.style.transition = "0.3s ease";
		resultat18.style.transform = "translateX(0)";
		return;
	}else{
		resultat18.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: September. Note 0/1</strong>";
		resultat18.style.color = "red";
		resultat18.style.transition = "0.3s ease";
		resultat18.style.transform = "translateX(0)";
	}
}

function verifierReponse19(){
	let reponse19 = document.querySelector("input[name='answer19']:checked");
	let resultat19 = document.getElementById("resultat19");
	if(!reponse19){
		event.preventDefault();
		resultat19.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat19.style.color = "red";
		resultat19.style.transition = "0.3s ease";
		resultat19.style.transform = "translateX(0)";
		return;
	}else if(reponse19.value === "cf"){
		resultat19.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat19.style.color = "green";
		resultat19.style.transition = "0.3s ease";
		resultat19.style.transform = "translateX(0)";
		return;
	}else{
		resultat19.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Juin. Note 0/1</strong>";
		resultat19.style.color = "red";
		resultat19.style.transition = "0.3s ease";
		resultat19.style.transform = "translateX(0)";
	}
}

function verifierReponse20(){
	let reponse20 = document.querySelector("input[name='answer20']:checked");
	let resultat20 = document.getElementById("resultat20");
	if(!reponse20){
		event.preventDefault();
		resultat20.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat20.style.color = "red";
		resultat20.style.transition = "0.3s ease";
		resultat20.style.transform = "translateX(0)";
		return;
	}else if(reponse20.value === "ck"){
		resultat20.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat20.style.color = "green";
		resultat20.style.transition = "0.3s ease";
		resultat20.style.transform = "translateX(0)";
		return;
	}else{
		resultat20.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Red. Note 0/1</strong>";
		resultat20.style.color = "red";
		resultat20.style.transition = "0.3s ease";
		resultat20.style.transform = "translateX(0)";
	}
}

function verifierReponse21(){
	let reponse21 = document.querySelector("input[name='answer21']:checked");
	let resultat21 = document.getElementById("resultat21");
	if(!reponse21){
		event.preventDefault();
		resultat21.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat21.style.color = "red";
		resultat21.style.transition = "0.3s ease";
		resultat21.style.transform = "translateX(0)";
		return;
	}else if(reponse21.value === "cp"){
		resultat21.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat21.style.color = "green";
		resultat21.style.transition = "0.3s ease";
		resultat21.style.transform = "translateX(0)";
		return;
	}else{
		resultat21.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Jaune. Note 0/1</strong>";
		resultat21.style.color = "red";
		resultat21.style.transition = "0.3s ease";
		resultat21.style.transform = "translateX(0)";
	}
}

function verifierReponse22(){
	let reponse22 = document.querySelector("input[name='answer22']:checked");
	let resultat22 = document.getElementById("resultat22");
	if(!reponse22){
		event.preventDefault();
		resultat22.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat22.style.color = "red";
		resultat22.style.transition = "0.3s ease";
		resultat22.style.transform = "translateX(0)";
		return;
	}else if(reponse22.value === "cr"){
		resultat22.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat22.style.color = "green";
		resultat22.style.transition = "0.3s ease";
		resultat22.style.transform = "translateX(0)";
		return;
	}else{
		resultat22.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Green. Note 0/1</strong>";
		resultat22.style.color = "red";
		resultat22.style.transition = "0.3s ease";
		resultat22.style.transform = "translateX(0)";
	}
}

function verifierReponse23(){
	let reponse23 = document.querySelector("input[name='answer23']:checked");
	let resultat23 = document.getElementById("resultat23");
	if(!reponse23){
		event.preventDefault();
		resultat23.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat23.style.color = "red";
		resultat23.style.transition = "0.3s ease";
		resultat23.style.transform = "translateX(0)";
		return;
	}else if(reponse23.value === "cu"){
		resultat23.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat23.style.color = "green";
		resultat23.style.transition = "0.3s ease";
		resultat23.style.transform = "translateX(0)";
		return;
	}else{
		resultat23.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Orange. Note 0/1</strong>";
		resultat23.style.color = "red";
		resultat23.style.transition = "0.3s ease";
		resultat23.style.transform = "translateX(0)";
	}
}

function verifierReponse24(){
	let reponse24 = document.querySelector("input[name='answer24']:checked");
	let resultat24 = document.getElementById("resultat24");
	if(!reponse24){
		event.preventDefault();
		resultat24.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat24.style.color = "red";
		resultat24.style.transition = "0.3s ease";
		resultat24.style.transform = "translateX(0)";
		return;
	}else if(reponse24.value === "db"){
		resultat24.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat24.style.color = "green";
		resultat24.style.transition = "0.3s ease";
		resultat24.style.transform = "translateX(0)";
		return;
	}else{
		resultat24.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: Black. Note 0/1</strong>";
		resultat24.style.color = "red";
		resultat24.style.transition = "0.3s ease";
		resultat24.style.transform = "translateX(0)";
	}
}

function ouvrirPublicite(){
	window.open("https://pilote083.github.io/MonProfEnLigne/", "_blank");
	event.preventDefault();
}
function gestionClic(){
	setTimeout(ouvrirPublicite, 30000);
	event.preventDefault();
}
var elements = document.querySelectorAll("button, input");
elements.forEach(element => {
	element.addEventListener("click", gestionClic);
	event.preventDefault();
});