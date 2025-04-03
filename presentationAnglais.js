function introduce() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let mood = document.getElementById("mood").value;
    if(name && age  && mood) {
    let message = `Hello! My name is ${name}. I am ${age} years old and I feel ${mood} today.`;
    let message1 = `Bonjour! Mon prénom est ${name}. J'ai ${age} ans et je me sens ${mood} aujourd'hui.`;
    let result = document.getElementById("result");
    let resultat = document.getElementById("resultat");
    result.textContent = message;
    resultat.textContent = message1;
    result.style.opacity = 1;
    resultat.style.opacity = 1} else {
               alert("Veuillez remplir tous les champs!");
           }
       }

       function toggleMenu(){
        let menu = document.querySelector(".nav-links");
        let burger = document.querySelector(".menu-burger");
        menu.classList.toggle("active");
        burger.classList.toggle("active");
    }

function speak(text){
	let utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = "en-GB";
	speechSynthesis.speak(utterance);
}

const alphabet = [
	{letter: "Hello, my name is ", sound: "Hello, my name is"},
	{letter: "Hi, I'm ", sound: "Hi, I'm "}
];

const myname = document.getElementById("myname");
	
alphabet.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.letter;
	button.classList.add("letter-button");
	button.onclick = () => speak(item.sound);
	myname.appendChild(button);
});

const age = [
	{age: "I am twenty years old.", sound: "I am twenty years old."}
];

const age1 = document.getElementById("age");
	
age.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.age;
	button.classList.add("age-button");
	button.onclick = () => speak(item.sound);
	age1.appendChild(button);
});

const origine = [
	{origine: "I am from France.", sound: "I am from France."},
    {origine: "I was born in Toulon in 1995", sound: "I was born in Toulon in 1995"}
];

const origine1 = document.getElementById("origine");
	
origine.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.origine;
	button.classList.add("origine-button");
	button.onclick = () => speak(item.sound);
	origine1.appendChild(button);
});

const faire = [
	{faire: "I am a job.", sound: "I am a job."},
    {faire: "I work as a job.", sound: "I work as a job."},
    {faire: "I am a student.", sound: "I am a student."}
];

const faire1 = document.getElementById("faire");
	
faire.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.faire;
	button.classList.add("faire-button");
	button.onclick = () => speak(item.sound);
	faire1.appendChild(button);
});

const loisir = [
	{loisir: "I like hobby.", sound: "I like hobby."},
    {loisir: "I love hobby.", sound: "I love hobby."},
    {loisir: "My hobbies are .", sound: "My hobbies are ."},
    {loisir: "I love reading and playing football.", sound: "I love reading and playing football."}
];

const loisir1 = document.getElementById("loisir");
	
loisir.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.loisir;
	button.classList.add("loisir-button");
	button.onclick = () => speak(item.sound);
	loisir1.appendChild(button);
});

const cloture = [
	{cloture: "Nice to meet you!", sound: "Nice to meet you!"},
    {cloture: "It's a pleasure to meet you!", sound: "It's a pleasure to meet you!"}
];

const cloture1 = document.getElementById("cloture");
	
cloture.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.cloture;
	button.classList.add("cloture-button");
	button.onclick = () => speak(item.sound);
	cloture1.appendChild(button);
});