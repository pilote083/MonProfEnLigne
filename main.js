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