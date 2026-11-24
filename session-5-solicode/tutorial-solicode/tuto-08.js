// Fonction pour calculer la moyenne
function calculerMoyenne(notes) {

    let somme = 0;

    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }

    return somme / notes.length;
}

// Déclaration des tableaux
let groupeA = [12, 14, 16];
let groupeB = [10, 18, 11, 13];

// Appels de la fonction
console.log("Moyenne Groupe A : " + calculerMoyenne(groupeA));

console.log("Moyenne Groupe B : " + calculerMoyenne(groupeB));