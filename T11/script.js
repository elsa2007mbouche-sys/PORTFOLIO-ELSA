function calcul_moyenne () {
var n1 = prompt ("Donner la 1ère note:");
var n2 = prompt ("Donner la 2ère note:");
var n3 = prompt ("Donner la 3ère note:");
 var somme = Number(n1) + Number(n2)+ Number(n3);

 document.write ("Voici la somme :" + somme + "<br>");
 var moyenne = somme/3;

 document.write ("Voici la moyenne :" + moyenne + "<br>");
 
 if (moyenne > 10) {
    document.write("Vous n'etes pas admis");
}
else { 
    document.write("Vous etes admis");


}
}

function test_age(){
    let age = prompt ("Quelle est votre age ?");
    if (age < 18){
        document.write("Vous etes mineur");
        document.bgColor="red"
    }
    else{
        document.write("vous etes majeur");
        document.bgColor="green"
    }

    }

function simple_affichage (){
let name = prompt("Donnez votre nom");
let prenom = prompt("Donnez votre prénom");

document.write('<div style="margin:auto; width:300px; border:2px solid blue;">');
document.write("Bonjour" +" "+prenom +" " + name)
    document.write('</div>');
}

function test_couleur() {
    let couleur = prompt ("Donnez une couleur")
    if(couleur =="rouge"||couleur == "red"){
        document.body.style.backgroundColor = red
    }
    else if (couleur == "bleu"|| couleur == "blue"){
        document.body.style.backgroundColor = blue
    }
    else if (couleur == "green"|| couleur == "vert"){
        document.body.style.backgroundColor = vert
    }
    else if (couleur == "rose"|| couleur == "pink"){
        document.body.style.backgroundColor = pink
    }
    else {
        document.write("Couleur non comprise")
    }


}