function search(){ // fonction qui recherche un mot dans le texte

    let search = document.getElementById('search').value; // récupère la valeur de l'input afin de la comparer avec les paragraphes
    let paragraph = document.getElementsByClassName('paragraphe-transcript'); // récupère les paragraphes dans un tableau
    let count = 0; // compteur de la valeur de l'input trouvée dans les paragraphes initialisé à 0
    search = search.toLowerCase(); // met la valeur de l'input en minuscule

    while (search[0] == " ") {
        search=search.substring(1,search.length); // supprime les espaces au début de la valeur de l'input
    }
    while (search[search.length-1] == " ") {
        search=search.substring(0,search.length-1); // supprime les espaces à la fin de la valeur de l'input
    }

    if (search != "") { // si la valeur de l'input n'est pas vide
        for (let i = 0; i < paragraph.length; i++) { // parcours les paragraphes
            const text = paragraph[i].innerHTML.toLowerCase(); // met le contenu du paragraphe en minuscule
            count += (text.split(search).length - 1);  // compte le nombre de fois que la valeur de l'input est trouvé dans le paragraphe
        }
    }
    
    document.getElementById('occurrence').innerHTML = count + " Mots" // affiche le nombre de fois que la valeur de l'input est trouvée dans les paragraphes
}



function couleur_par(){ // fonction qui change la couleur des paragraphes
    
    let couleur = document.getElementById('couleurs_par').value; // récupère la valeur de la couleur de la selection pour le texte
    let paragraph = document.getElementsByClassName('paragraphe-transcript');
    for (let i = 0; i < paragraph.length; i++) { 
        paragraph[i].style.color = couleur; // change la couleur de tous les paragraphes
    }
}
function couleur_ar(){  // fonction qui change la couleur de l'arrière plan

    let couleur = document.getElementById('couleurs_ar').value; // récupère la valeur de la couleur de la selection pour l'arriere plan
    let body = document.getElementsByTagName('body');
    body[0].style.background = couleur; // change la couleur de l'arriere plan
}
function police_par(){ // fonction qui change la police du texte
    let police = document.getElementById('police').value; // récupère la valeur de la police de la selection
    let paragraph = document.getElementsByClassName('paragraphe-transcript');
    for (let i = 0; i < paragraph.length; i++) { 
        paragraph[i].style.fontFamily = police; // change la police de tous les paragraphes
    }
}
function taille_par(){ // fonction qui change la taille du texte
    let taille = document.getElementById('taille').value; // récupère la valeur de la taille de la selection
    let paragraph = document.getElementsByClassName('paragraphe-transcript');
    for (let i = 0; i < paragraph.length; i++) { 
        paragraph[i].style.fontSize = taille; // change la taille de tous les paragraphes
    }
}


function verifier(){ // fonction qui verifie si une des cases du formulaire est vide
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let civilite = document.getElementsByName('civilite');
    let list1 = document.getElementById('list1').value;
    let list2 = document.getElementById('list2').value;
    let interet = document.getElementsByName('interet');
    let message = document.getElementById('message').value;
    let civbool = false;
    let interetbool = false;

    for (let i = 0; i < civilite.length; i++) { // parcours les boutons radio   
        if (civilite[i].checked) { // si un bouton radio est coché
            civbool = true; // la variable devient true
        }
    }
    for (let i = 0; i < interet.length; i++) { // parcours les boutons checkbox
        if (interet[i].checked) { // si un bouton checkbox est coché
            interetbool = true; // la variable devient true
        }
    }

    while (name[0] == " ") {
        name = name.substring(1,name.length); // supprime les espaces au début de la valeur de l'input
    }
    while (name[name.length-1] == " ") {
        name = name.substring(0,name.length-1); // supprime les espaces à la fin de la valeur de l'input
    }
    while (email[0] == " ") {
        email = email.substring(1,email.length); // supprime les espaces au début de la valeur de l'input
    }
    while (email[email.length-1] == " ") {
        email = email.substring(0,email.length-1); // supprime les espaces à la fin de la valeur de l'input
    }
    while (message[0] == " ") {
        message = message.substring(1,message.length); // supprime les espaces au début de la valeur de l'input
    }
    while (message[message.length-1] == " ") {
        message = message.substring(0,message.length-1); // supprime les espaces à la fin de la valeur de l'input
    }

    if (name != "" && email != "" && civbool && list1 != "default" && list2 != "default" && interetbool && message != ""){ // si toutes les cases sont remplies
        alert("Formulaire envoyé"); // affiche un message de confirmation
        //vider les cases
        document.getElementById('name').value = ""; 
        document.getElementById('email').value = ""; 
        document.getElementById('list1').value = "default"; 
        document.getElementById('list2').value = "default"; 
        document.getElementById('message').value = ""; 
        for (let i = 0; i < civilite.length; i++) { 
            civilite[i].checked = false; // décoche les boutons radio
        }
        for (let i = 0; i < interet.length; i++) {
            interet[i].checked = false; // décoche les boutons checkbox
        }
        
    } else {

        if (name == "") { // si une des case est vide

            alert("Veuillez remplir le nom et prenom"); // affiche un message d'erreur pour le nom

        }else if (email == "") { // si une des case est vide  

            alert("Veuillez remplir l'email"); // affiche un message d'erreur pour l'email

        } else if ( !civbool ) { // si la variable est false

            alert("Veuillez indiquez votre civilité"); // affiche un message d'erreur pour la civilité

        } else if (list1 == "default") { // si une des case est vide

            alert("Veuillez remplir la liste 1"); // affiche un message d'erreur pour la liste 1

        } else if (list2 == "default") { // si une des case est vide

            alert("Veuillez remplir la liste 2"); // affiche un message d'erreur pour la liste 2

        } else if ( !interetbool ) { // si la variable est false

            alert("Veuillez indiquez vos interets"); // affiche un message d'erreur pour l'interet

        } else if (message == "") { // si une des case est vide

            alert("Veuillez nous donnez un message"); // affiche un message d'erreur pour le message

        }

    }

}


function genererList2() { // fonction qui génère la liste 2 en fonction de la liste 1
    let list1 = document.getElementById('list1').value; // récupère la valeur de la liste 1
    let list2 = document.getElementById('list2'); // récupère la liste 2
    list2.innerHTML = ""; // vide la liste 2
    if (list1 == "default") {
        list2.innerHTML += "<option value='default' selected>Choisissez une option dans list1</option>"; // ajoute un option par défaut
        list2.disabled=true;
    } else if (list1 == "option1") {
        list2.disabled=false;
        list2.innerHTML += "<option value='default' selected>Choisissez une option</option>"; // ajoute un option par défaut
        list2.innerHTML += "<option value='option1'>Architecture</option>"; // ajoute l'option1
        list2.innerHTML += "<option value='option2'>Design graphique</option>"; // ajoute l'option2
        list2.innerHTML += "<option value='option3'>Design d'espace</option>"; // ajoute l'option3
        list2.innerHTML += "<option value='option4'>Data sculpture</option>"; // ajoute l'option4
        list2.innerHTML += "<option value='option5'>Musique</option>"; // ajoute l'option5
        list2.innerHTML += "<option value='option6'>Photographie</option>"; // ajoute l'option6
        list2.innerHTML += "<option value='option7'>Building hallucination</option>"; // ajoute l'option7
        list2.innerHTML += "<option value='option8'>Poet</option>"; // ajoute l'option8
    } else if (list1 == "option2") {
        list2.disabled=false;
        list2.innerHTML += "<option value='default' selected>Choisissez une option</option>"; // ajoute un option par défaut
        list2.innerHTML += "<option value='option1'>Data science</option>"; // ajoute l'option1
        list2.innerHTML += "<option value='option2'>Intelligence artificielle</option>"; // ajoute l'option2
        list2.innerHTML += "<option value='option3'>Machine learning</option>"; // ajoute l'option3
        list2.innerHTML += "<option value='option4'>Deep learning</option>"; // ajoute l'option4
    }
}