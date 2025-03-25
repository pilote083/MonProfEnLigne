function toggleMenu(){
	let menu = document.querySelector(".nav-links");
	let burger = document.querySelector(".menu-burger");
	menu.classList.toggle("active");
	burger.classList.toggle("active");
}

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