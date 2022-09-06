var opcion=1, alcancia=0, suma=0;

while(opcion==1)
{
    alcancia=prompt("Cuanto dinero desea depositar en la alcancia: ");   
    alcancia=parseInt(alcancia); 
    
    opcion=prompt("Digite 1 si quiere seguir ahorrando o 2 si quiere romper la alcancia: ");  
    opcion=parseInt(opcion);

    suma = suma + alcancia;
    suma=parseInt(suma);
}
if(opcion == 2)
{
    document.write("El dinero que usted ahorro fue de: ",suma);
    console.log("El dinero que usted ahorro fue de: ",suma);
    window.alert("El dinero que usted ahorro fue de: " + suma);
}

