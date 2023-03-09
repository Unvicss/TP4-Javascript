var n =prompt("combien de notes voulez vous rentrer");
n=parseInt(n);
var a=0;
var result=0;
for(i=0;i<n;i++){
    a=prompt("entrez un entier");
    a=parseInt(a);
    result=result+a;
}
result=(result/n);
alert("le résultat est"+result);