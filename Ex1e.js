var n =prompt("combien d'entier voulez vous rentrer");
n=parseInt(n);
var a=0;
var result=0;
for(i=0;i<n;i++){
    a=prompt("entrez un entier");
    a=parseInt(a);
    result=result+a;
}
alert("le résultat est"+result);