//Primer ejercicio
/*
var pedirHora, pedirMinuto;

pedirHora = prompt('Digita una hora: ');
pedirHora=parseInt(pedirHora);
pedirMinuto = prompt('Digita unos minutos: ');
pedirMinuto=parseInt(pedirMinuto);

// horas
for (var hora=0; hora<=pedirHora; hora++) 
{
    // minutos
    for (var minuto=0; minuto<pedirMinuto; minuto++) 
    {
        // segundos
        for (var segundo=0; segundo<=59; segundo++) 
        {
            // escribe hora:minutos:segundos (actualizandose a medida que va pasando cada segundo)
            console.log(hora, ":", minuto, ":", segundo, "<br>");
            document.write(hora, ":", minuto, ":", segundo, "<br>");
            window.alert(hora + ":" + minuto + ":" + segundo);
        }
    }
}
*/

//Segundo ejercicio
/*
var frase;
var vocales = frase.length;

frase = prompt("Escribe una frase: ");

for (var i = 0; i < vocales; i++) 
{
    if (frase.substr(i,1) == "a" || frase.substr(i,1) == "e" || frase.substr(i,1) == "i" || frase.substr(i,1) == "o" || frase.substr(i,1) == "u") 
    {
        console.log("Las vocales que aparecen en la frase son: ", frase.substr(i,1));
        window.alert("Las vocales que aparecen en la frase son: " + frase.substr(i,1));
    };
}
*/