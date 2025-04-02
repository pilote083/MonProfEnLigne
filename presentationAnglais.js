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