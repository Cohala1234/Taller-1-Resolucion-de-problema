//Primer ejercicio
/*
var cantidad;

cantidad = prompt("Digite cuantos estudiantes va a calificar: ");
cantidad = parseInt(cantidad);

var estudiante = new Array(), notas = new Array();

estudiante = [cantidad];
notas = [cantidad];

for (var i = 0; i < cantidad; i++) 
{
    var cont = i + 1;
    estudiante[i] = prompt("Digite el nombre del " + cont + " estudiante");
}
for (var i = 0; i < cantidad; i++) 
{
    notas[i] = prompt("Ingrese la nota final del estudiante " + estudiante[i]);
}
for(var i = 0 ; i < cantidad ; i++)
{
    window.alert("El estudiante " + estudiante[i] + ", tiene la nota final en " + notas[i]);
    document.write("El estudiante ", estudiante[i], ", tiene la nota final en ", notas[i], "<br>");
    console.log("El estudiante ", estudiante[i], ", tiene la nota final en ", notas[i], "<br>");
}
*/

//Segundo ejercicio
/*
var numero;
numero = prompt("Desde que numero quieres hacer cuenta regresiva: ");

var array = [];

down(numero);

function down(numero)
{
    for (i=numero; i>=1;i--)
    {
        array.push(i);
    }
}
window.alert(array);
*/

//Ejercicio en clase 01/08/2022
/*
var cantidad;

cantidad = prompt("Cuantos meses quiere digitar: ");
cantidad = parseInt(cantidad);

var mes = new Array();
mes = [cantidad];

for (var i = 0; i < cantidad; i++) 
{
    var cont = i + 1;
    mes[i] = prompt("Digite el nombre del mes " + cont);
}
mes.forEach(cantidad => {
    console.log(cantidad,[]);
    document.write(cantidad,[],", ");
});
*/
/*
var cantidad, meses = [], mes, cont;

cantidad = prompt("Cuantos meses quiere digitar: ");
cantidad = parseInt(cantidad);

for(var i = 0; i < cantidad; i++)
{
    cont = i + 1;
    mes = prompt("Digite el nombre del mes " + cont);
    meses.push(mes);
    console.log(meses);
}

meses.forEach(cantidad => {
    console.log(cantidad,[]);
    document.write(cantidad,[],", ");
});
*/