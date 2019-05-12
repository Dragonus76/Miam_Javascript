// Variable globales

var vBudget =  20;
var vRepas = 0;


// Affiche le budget 
document.getElementById("hBudget").innerHTML = vBudget;

// Capte la passation de commande 

document.getElementById("btnCommander").addEventListener("click",acheterSW);

/*Achéte le nombre de sandwich par jour au prix du jour */

function acheterSW(){
	reinitFormu();
	var jour = 0;
	while (vBudjet > 0){
		jour++;
		var prixDuJour = calculerPrixDujour();
		var nbrSandwiches = document.getElementById("hNSandwiches").value;
		var prixTotal = prixDuJour * nbrSandwiches;

		if (vBudjet >= prixTotal){
			vBudjet = vBudjet - prixTotal;
			vRepas++;
			document.getElementById("hTicket").innerHTML += "<p>Le jour" + jour + ", les sandwiches sont à " + prixDuJour + "$. il te reste"

			if (jour == 5){
				document.getElementById("hTicket").innerHTML += "<p><em>Mais tu as tenu CINQ jour au moins.Bravo; !</em></P>";

			}
		} 

		else{
			document.getElementById("hTicket").innerHTML += "<p>Aujourd'huit, les sandwiches sont à " + prixDuJour +"$.Tu n'as plus assez.Demande à un pote de partager son sandwiches</p>";
			vBudjet = 0;
		}
	}
	document.getElementById("hTicket").innerHTML += "<p> Tu as pu faire" + vRepas +"repas cette semaine.</p> ";

}

/*Etablie le prix des sandwiches pour un jour */


function calculerPrixDuJour(){
	var prixSW = (Math.random() * (5 * 1) + 1).toFixed(2);
	return prixSW;
}

/*Réinitialise le jeu pour la prochaine commande */


function reinitFormu(){
	vBudjet = 20;
	vRepas = 0;
	document.getElementById("hTicket").innerHTML = "";
}