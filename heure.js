function updateClock(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = ((hours % 12) + minutes / 60) * 30;
    const minuteDeg = (minutes + seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;

    const hoursText = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];
    const minutesText = ["o'clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "half"];

    let hourWord = hoursText[hours % 12];
    let minuteWord;

    if(minutes === 0){
        minuteWord = "o'clock";
    }else if(minutes <= 30){
        minuteWord = minutesText[minutes];
    }else{
        minuteWord = minutesText[60 - minutes];
        hourWord = hoursText[(hours + 1) % 12];
    }

    let timeText;
    if(minutes === 0){
        timeText = `${hourWord} ${minuteWord}`;
    }else if(minutes <= 30){
        timeText = `${minuteWord} past ${hourWord}`;
    }else{
        timeText = `${minuteWord} to ${hourWord}`;
    }

    document.getElementById("written-time").textContent = timeText;
}

setInterval(updateClock, 1000);
updateClock();

function verifierReponse(){
	let reponse = document.querySelector("input[name='answer']:checked");
	let resultat = document.getElementById("resultat");
	if(!reponse){
		event.preventDefault();
		resultat.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat.style.color = "red";
		return;
	}else if(reponse.value === "b"){
		resultat.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat.style.color = "green";
		return;
	}else{
		resultat.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: It's quarter past three .Note 0/1</strong>";
		resultat.style.color = "red";
	}
}

function verifierReponse1(){
	let reponse1 = document.querySelector("input[name='answer1']:checked");
	let resultat1 = document.getElementById("resultat1");
	if(!reponse1){
		event.preventDefault();
		resultat1.innerHTML = "<strong>Veuillez sélectionner une réponse.</strong>";
		resultat1.style.color = "red";
		return;
	}else if(reponse1.value === "g"){
		resultat1.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat1.style.color = "green";
		return;
	}else{
		resultat1.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: 6h30 .Note 0/1</strong>";
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
	}else if(reponse2.value === "j"){
		resultat2.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat2.style.color = "green";
		return;
	}else{
		resultat2.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: 7h45 .Note 0/1</strong>";
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
	}else if(reponse3.value === "m"){
		resultat3.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat3.style.color = "green";
		return;
	}else{
		resultat3.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: It's noon .Note 0/1</strong>";
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
	}else if(reponse4.value === "s"){
		resultat4.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat4.style.color = "green";
		return;
	}else{
		resultat4.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: 9h10 .Note 0/1</strong>";
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
	}else if(reponse5.value === "w"){
		resultat5.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat5.style.color = "green";
		return;
	}else{
		resultat5.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: It's quarter to twelve .Note 0/1</strong>";
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
	}else if(reponse6.value === "aa"){
		resultat6.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat6.style.color = "green";
		return;
	}else{
		resultat6.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: It's half past five .Note 0/1</strong>";
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
	}else if(reponse7.value === "ag"){
		resultat7.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat7.style.color = "green";
		return;
	}else{
		resultat7.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: 3h40 .Note 0/1</strong>";
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
	}else if(reponse8.value === "ak"){
		resultat8.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat8.style.color = "green";
		return;
	}else{
		resultat8.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: 12h50 .Note 0/1</strong>";
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
	}else if(reponse9.value === "an"){
		resultat9.innerHTML = "<strong>Bonne réponse ! Note : 1/1</strong>";
		resultat9.style.color = "green";
		return;
	}else{
		resultat9.innerHTML = "<strong>Mauvaise réponse. La bonne réponse était: It's seven o'clock .Note 0/1</strong>";
		resultat9.style.color = "red";
	}
}

function toggleMenu(){
	let menu = document.querySelector(".nav-links");
	let burger = document.querySelector(".menu-burger");
	menu.classList.toggle("active");
	burger.classList.toggle("active");
}