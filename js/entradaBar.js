var edad;
edad=prompt("Digite su edad: ");
edad=parseInt(edad);
while(edad <= 0)
{
    console.log("El valor ingresado no es correcto, por favor escriba una edad correcta");
    window.alert("El valor ingresado no es correcto, por favor escriba una edad correcta");
    edad=prompt("Digite su edad: ");
    edad=parseInt(edad);
}
if(edad >= 18)
{
    document.write("Usted tiene ",edad, ". Bienvenido a Flow");
    console.log("Usted tiene ",edad ,". Bienvenido a Flow");
    window.alert("Usted tiene " + edad + ". Bienvenido a Flow");
}
else if(edad < 18 && edad >= 1)
{
    document.write("Usted tiene ",edad, ". Vaya a la cama porque usted es menor de edad");
    console.log("Usted tiene ",edad, ". Vaya a la cama porque usted es menor de edad");
    window.alert("Usted tiene " + edad + ". Vaya a la cama porque usted es menor de edad");
}


