var a = prompt("entrez le premier nombre");
var b = prompt("entrez le deuxieme nombre");
var result = parseInt(a) * parseInt(b);
if (result < 0 ) {
    alert("négatif");
}
if (result > 0 ) {
    alert("positif");
}
if(result === 0) {
    alert("nul");
}
