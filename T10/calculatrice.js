function somme ()
{ var a=document.getElementById("t1").value;
 var b=document.getElementById("t2").value;
var c =Number(a) + Number (b);
document.getElementById("resultat").value=c;

}

function soustraction ()
{ var a=document.getElementById("t1").value;
 var b=document.getElementById("t2").value;
var c=Number(a) -  Number (b);
document.getElementById("resultat").value=c;
}

function division ()
{ var a=document.getElementById("t1").value;
 var b=document.getElementById("t2").value;
var c=Number(a) /  Number (b);
document.getElementById("resultat").value=c;
}

function multiplication ()
{ var a=document.getElementById("t1").value;
 var b=document.getElementById("t2").value;
var c=Number(a) * Number (b);
document.getElementById("resultat").value=c;
}

function parité()
{
    var a = document.getElementById("t1").value;
    if (a % 2 == 0) {
        document.getElementById("Parité").value = " Pair "
      } else {
        document.getElementById("Parité").value = " Impair "
      }

}

function permuter()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = document.getElementById("t1").value;
    var a = document.getElementById("t2").value;
    document.getElementById("t1").value = a;
    document.getElementById("t2").value = c;

}



