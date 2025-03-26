function toggleMenu(){
	let menu = document.querySelector(".nav-links");
	let burger = document.querySelector(".menu-burger");
	menu.classList.toggle("active");
	burger.classList.toggle("active");
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