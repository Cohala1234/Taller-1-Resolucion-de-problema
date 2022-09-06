//Primer ejercicio
/*
var usuario, contrasena, confirmar;

usuario = prompt('Escriba su nombre de usuario: ');
contrasena = prompt('Escriba su contraseña: ');
confirmar = prompt('Confirme su contraseña: ')

while (contrasena != confirmar) 
{
    console.log("Su contraseña es incorrecta, por favor vuelva a escribir su contraseña");
    window.alert("Su contraseña es incorrecta, por favor vuelva a escribir su contraseña");
    confirmar = prompt('Confirme su contraseña: ');
};
if (contrasena == confirmar) 
{
    console.log("Bienvenido, ", usuario);
    window.alert("Bienvenido, " + usuario);   
    document.write("Bienvenido, ", usuario);
};
/*

//Segundo ejercicio
/*
var numero1, numero2, contador;

numero1 = prompt('Escriba un numero: ');
numero1=parseInt(numero1);
numero2 = prompt('Escriba un numero mayor a ' + numero1);

if (numero1 >= numero2) 
{
    console.log("El segundo numero digitado debe ser mayor que el primer numero digitado");
    window.alert("El segundo numero digitado debe ser mayor que el primer numero digitado");
    numero2 = prompt('Escriba un numero mayor a ', numero1);  
    numero2 = parseInt(numero2);
};

contador = numero1;

while (contador <= numero2)
{
    if (contador % 2 == 0)
    {
        console.log(contador);
        window.alert(contador);
        document.write(contador, " - ");
    }
    contador++;
};
*/
