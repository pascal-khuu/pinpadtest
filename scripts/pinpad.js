// Sélectionner les boutons
const buttons = document.getElementsByTagName("button");
console.log(buttons);
for (const button of buttons) {
    // Ecouter tous les boutons
    console.log(button);
    button.addEventListener("click", () => clickButtons(button));
    // Déclenchement du bouton (pour chaque clic)


}

function clickButtons(button) {
    // const element0 = document.getElementById('button0');
    // Récupérer la valeur du bouton
    let button2 = button.value;
    // console.log(button2);
    //Sélectionner l'input
    let input = document.getElementById('codePIN');
    // Mettre valeur dans l'input
    if (input.value.length < 4) {
        input.value = input.value + button2;
        console.log(input.value);
    } else {
        alert("il y a  déjà 4 chiffres pour le code pin. Impossible de rajouter d'autres chiffres");
    }
}