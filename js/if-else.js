//Primer ejercicio
/*
var numero;

numero = prompt("Escribe un número: ");

if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) 
{
    if (numero % 2 == 0) 
    {
        console.log("El ", numero, " es divisible por 2");
        document.write("El ", numero, " es divisible por 2", "<br>");
        window.alert("El " + numero + " es divisible por 2");
    }
    if (numero % 3 == 0) 
    {
        console.log("El ", numero, " es divisible por 2");
        document.write("El ", numero, " es divisible por 3", "<br>");
        window.alert("El " + numero + " es divisible por 3");
    }
    if (numero % 5 == 0) 
    {
        console.log("El ", numero, " es divisible por 2");
        document.write("El ", numero, " es divisible por 5", "<br>");
        window.alert("El " + numero + " es divisible por 5");
    }
    if (numero % 7 == 0) 
    {
        console.log("El ", numero, " es divisible por 2");
        document.write("El ", numero, " es divisible por 7", "<br>");
        window.alert("El " + numero + " es divisible por 7");
    }
} 
else 
{
    console.log("El ", numero, " no es divisible ni por 2, ni por 3, ni por 5, ni por 7");
    document.write("El ", numero, " no es divisible ni por 2, ni por 3, ni por 5, ni por 7");
    window.alert("El " + numero + " no es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}
*/
//Segundo ejercicio
/*
var nombre, edad;

nombre = prompt ('Por favor introduce tu nombre:');

if (nombre == "") 
{ 
    console.log('No has introducido ningún nombre', "<br>"); 
    document.write('No has introducido ningún nombre', "<br>"); 
    window.alert ('No has introducido ningún nombre'); 
}
else 
{ 
    console.log("Hola ", nombre, ". Bienvenido a esta página web.", "<br>"); 
    document.write("Hola ", nombre, ". Bienvenido a esta página web.", "<br>"); 
    window.alert ("Hola " + nombre + ". Bienvenido a esta página web."); 
}

edad = prompt ("Digita tu edad");
edad = parseInt(edad);

if (edad >3 && edad < 10) 
{
    console.log("Hola ", nombre, ". Bienvenido a esta página web.", "<br>"); 
    document.write("Hola ", nombre, ". Bienvenido a esta página web.", "<br>"); 
    window.alert ("Eres un niño.");
}
else if (edad>=10 && edad <18) 
{
    console.log("Eres un jovencito.");
    document.write("Eres un jovencito.");
    window.alert ("Eres un jovencito.");
}
else if (edad >=18 && edad < 90) 
{
    console.log("Eres mayor de edad.");
    document.write("Eres mayor de edad.");
    window.alert ("Eres mayor de edad.");
}
else if (edad >=90) 
{ 
    console.log("Tienes muchos años encima...");
    document.write("Tienes muchos años encima...");
    window.alert ("Tienes muchos años encima...");
}
else 
{
    console.log("No has introducido un valor válido de edad");
    document.write("No has introducido un valor válido de edad");
    window.alert ("No has introducido un valor válido de edad");
}
*/