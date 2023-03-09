var a = prompt("entrez le premier nombre");
var b = prompt("entrez le deuxieme nombre");
var result=0;
a=parseInt(a);
b=parseInt(b);
while(b>0){
b=b-1;
result=result+a;
}
alert("le résultat est"+result);