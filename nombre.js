const translations = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
    100: "One hundred",
    1000: "One thousand"
};

function showTranslation(number) {
    const translationElement = document.getElementById('translation');
    const translation = translations[number];

    // Ajouter la classe visible pour l'animation
    translationElement.classList.remove('visible');
   
    // Effet de fondu et de déplacement
    setTimeout(() => {
        translationElement.innerHTML = `${translation}`;
        translationElement.classList.add('visible');
       
        // Animation de rebond sur le texte affiché
        translationElement.style.animation = 'bounce 1s ease-in-out';
    }, 100);  // léger délai pour éviter l'effet immédiat

    // Réinitialisation de l'animation pour qu'elle se répète correctement
    translationElement.addEventListener('animationend', () => {
        translationElement.style.animation = '';
    });
}

const salutation4 = [
	{number: "1", sound: "One"},
	{number: "2", sound: "Two"},
	{number: "3", sound: "Three"},
	{number: "4", sound: "Four"},
	{number: "5", sound: "Five"},
	{number: "6", sound: "Six"},
	{number: "7", sound: "Seven"},
	{number: "8", sound: "Eight"},
	{number: "9", sound: "Nine"},
	{number: "10", sound: "Ten"},
	{number: "11", sound: "Eleven"},
    {number: "12", sound: "Twelve"},
    {number: "13", sound: "Thirteen"},
    {number: "14", sound: "Fourteen"},
    {number: "15", sound: "Fifteen"},
    {number: "16", sound: "Sixteen"},
    {number: "17", sound: "Seventeen"},
    {number: "18", sound: "Eighteen"},
    {number: "19", sound: "Nineteen"},
    {number: "20", sound: "Twenty"},
    {number: "30", sound: "Thirty"},
    {number: "40", sound: "Fourty"},
    {number: "50", sound: "Fifty"},
    {number: "60", sound: "Sixty"},
    {number: "70", sound: "Seventy"},
    {number: "80", sound: "Eighty"},
    {number: "90", sound: "Ninety"},
    {number: "100", sound: "One hundred"},
    {number: "1000", sound: "One thousand"}
];

const motdDiv = document.getElementById("bouh");

salutation4.forEach(item => {
	let button = document.createElement("button");
	button.textContent = item.number;
	button.classList.add("salutation-button");
	button.onclick = () => speak(item.sound);
	motdDiv.appendChild(button);
});

function speak(text){
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB";
    speechSynthesis.speak(utterance);
}

function toggleMenu(){
	let menu = document.querySelector(".nav-links");
	let burger = document.querySelector(".menu-burger");
	menu.classList.toggle("active");
	burger.classList.toggle("active");
}

document.addEventListener("click", function ouvrirPubUneFois(){
	window.open("https://www.clictune.com/krMR", "_blank");
	document.removeEventListener("click", ouvrirPubUneFois);
});