var a = prompt("entrez le premier nombre");
var b = prompt("entrez le deuxieme nombre");

a=parseInt(a);
b=parseInt(b);
var i=a;
var result=a;
while(b>1){
b=b-1;
result=result*i;
}
alert("le résultat est"+result);