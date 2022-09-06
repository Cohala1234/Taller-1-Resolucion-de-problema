//Funcion por declaracion
/*
var nombre, edad;
function edades() 
{
    nombre = prompt("Digite su nombre: ");

    edad = prompt("Digite su edad: ");
    edad = parseInt(edad);

    while (edad < 1) 
    {
        window.alert("Ingresa un valor valido"); 
        edad = prompt("Por favor digite su edad correctamente: ");
        edad = parseInt(edad);
    }
    if(edad >= 18)
    {
        window.alert("Hola " + nombre + " puedes ingresar al bar Flow");
    }
    else if(edad >= 1 && edad < 18)
    {
        window.alert("Hola " + nombre + " no puedes ingresar al bar, vaya a dormir");
    }
}
edades();
*/

//Funcion por anonimo
/*
var nombre, edad; 

nombre = prompt("Digite su nombre: ");

var edades = function(edad)
{
    edad = prompt("Digite su edad");
    edad = parseInt(edad);

    while (edad < 1) 
    {
        window.alert("Ingresa un valor valido"); 
        edad = prompt("Por favor digite su edad correctamente: ");
        edad = parseInt(edad);
    }
    if(edad >= 18)
    {
        window.alert("Hola " + nombre + " puedes ingresar al bar Flow");
    }
    else if(edad >= 1 && edad < 18)
    {
        window.alert("Hola " + nombre + " no puedes ingresar al bar, vaya a dormir");
    }
return edad
}
edades(edad);
*/

//Funcion por expresion
/*
var nombre, edad;
nombre = prompt("Digite su nombre: ");

var edades = function edadesQ()
{
    edad=prompt("Digite su edad: ");
    edad=parseInt(edad);

    while (edad < 1) 
    {
        window.alert("Ingresa un valor valido"); 
        edad = prompt("Por favor digite su edad correctamente: ");
        edad = parseInt(edad);
    }
    if(edad >= 18)
    {
        window.alert("Hola " + nombre + " puedes ingresar al bar Flow");
    }
    else if(edad >= 1 && edad < 18)
    {
        window.alert("Hola " + nombre + " no puedes ingresar al bar, vaya a dormir");
    }

return edad
}
var entrarBar = edades();
*/

//Funcion por flecha
/*
var nombre, edad;

nombre = prompt("Digite su nombre: ");

var edades = (edad) => {

    edad = prompt("Digite su edad: ");

    while (edad < 1) 
    {
        window.alert("Ingresa un valor valido"); 
        edad = prompt("Por favor digite su edad correctamente: ");
        edad = parseInt(edad);
    }
    if(edad >= 18)
    {
        window.alert("Hola " + nombre + " puedes ingresar al bar Flow");
    }
    else if(edad >= 1 && edad < 18)
    {
        window.alert("Hola " + nombre + " no puedes ingresar al bar, vaya a dormir");
    }

return edad;
}
edades(edad);
*/


//02/09/2022
/*
var edad1 = (edad) => {
    mayor = (edad >= 18)
    ?alert("Usted es mayor edad")
    :alert("Usted es menor edad")
}

var e = prompt("ingresa tu edad: ");
edad1(e)


const tigre =  
{
    nombre:"Tonny",
    edad:10,
    raza:"Blanco",
    peso:100,

    comer()
    {
        console.log("El tigre come");
    }
}
console.log(tigre)

mascota.comer();
*/
