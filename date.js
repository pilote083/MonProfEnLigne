document.getElementById("date-form").addEventListener("submit", function(event){
    event.preventDefault();
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    if(!monthNames.includes(month)){
        alert("Le mois que vous avez saisi n'est pas valide. Veuillez entrer un mois en Anglais.");
        return;
    }

    let suffix = "th";
    if(day == 1 || day == 21 || day == 31){
        suffix = "st"; }else if(day == 2 || day == 22){
            suffix = "nd";
        }else if(day == 3 || day == 23){
            suffix = "rd";
        }

    const formattedDate = `${month} ${day}${suffix}, ${year}`;

    document.getElementById("result").innerHTML = `<h3>Date en anglais : ${formattedDate}</h3>`;
});

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