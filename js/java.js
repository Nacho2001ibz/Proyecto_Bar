//Estas son las variables que vamos a utilizar junto a nuestras funciones
var preu_unitari=0;
var quantitat=0;
var producte="";
var preu_final=0;
var total=0;



//Hecho por Aaron Martinez, Nacho Pineda, Martin Stutzmann y Raquel Monleon

//Esta función utiliza las variables preu_unitari y producte.
//Su función es igualar preu_unitari al valor de p1 y producte al valor de prod.

function posa_producte(prod,p1) {
	 preu_unitari =p1;
	 producte=prod;
}


//Esta función utiliza las variables qw (la cual se crea aqui mismo), quantitat y cant
//La función lo primero que hace es pasar la variable qw de nombre a decimal y lo imprime en la pantalla. A continuación iguala quantitat al valor de qw*10+ valor de cant y lo imprime en pantalla

function cantidad(cant) {
	var qw= parseFloat(document.getElementById("quant").innerHTML);
	quantitat=qw*10+cant;
	document.getElementById("quant").innerHTML=quantitat;
  //document.getElementById("quantitat").innerHTML=parseFloat(document.getElementById("quantitat").innerHTML)*10+cant;
}

//Su función es recargar la página redireccionandote al siguiente link

function recargar() {
location.href = "file:///home/ubtadmin/Escriptori/burgerkingu%20VERSION%20DESTROZED/webhtml5.html";
}

//Su función es igualar quant en 0 simulando que borras una cantidad equivocada.

function borrado() {
document.getElementById("quant").innerHTML= "0";
}

//Esta función utiliza todas las variables, preu_unitari, quantitat, prodcute, preu_final, total y limon.
//Su función es escribir lineas en el ticket (aside), dejando unos espacios para que no quede todo apelotonado y finalmente nos suma los preu_final para calcular el precio total.

function posa_linea_ticket() {
preu_final=calcula_total(preu_unitari,quantitat);
document.getElementById("producte").innerHTML +=producte+ "<br>";
document.getElementById("preu_unitari").innerHTML +=preu_unitari+ "€"+ "<br>";
document.getElementById("quantitat").innerHTML+=document.getElementById("quant").innerHTML+"<br>";
document.getElementById("preu_final").innerHTML +=preu_final+ "€"+ "<br>";
document.getElementById("quant").innerHTML=0+ "<br>";
total+=preu_final;
document.getElementById("limon").innerHTML="Total a pagar: " + total +"€";
}

//Esta función utiliza las variables preu y cant.
//Su función es devolvernos el valor de preu*cant.
function calcula_total(preu,cant){
	return preu*cant;
}
//HOLA HOLITA HOLAA ukgukgi
