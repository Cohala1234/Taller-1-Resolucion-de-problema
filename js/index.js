var fahrenheit;
fahrenheit = prompt('Ingrese el grado fahrenheit', '');
fahrenheit=parseInt(fahrenheit);
var centígrados;
centígrados=(fahrenheit-32)/1.8;
console.log("La torta se tiene que precalentar a ",centígrados, " °C");
document.write("La torta se tiene que precalentar a ",centígrados, " °C");
window.alert("La torta se tiene que precalentar a " + centígrados + " °C");