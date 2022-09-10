const toggle = document.querySelector(".toggle")
const menuDashboard = document.querySelector(".menu-dashboard")
const iconoMenu = toggle.querySelector("i")
const enlacesMenu = document.querySelectorAll(".enlace")

toggle.addEventListener("click", () => 
{
    menuDashboard.classList.toggle("open")

    if(iconoMenu.classList.contains("bx-menu"))
    {
        iconoMenu.classList.replace("bx-menu", "bx-x")
    }
    else 
    {
        iconoMenu.classList.replace("bx-x", "bx-menu")
    }
})

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuDashboard.classList.add("open")
        iconoMenu.classList.replace("bx-menu", "bx-x")
    })
})

var boton = document.getElementById('calcular');

boton.addEventListener('click', function()
{
    const dato = document.getElementById('grados').value;
    const datoQ = document.getElementById('gradosQ').value;
    const grado = document.getElementById('palabra').value;
    parseInt(dato, datoQ);
    parseFloat(grado);

    if(dato == 1 && datoQ == 2)
    {       
        var valor = (grado - 32)/1.8;
        window.alert(`Los ${grado}º Fahrenheit a Celsius es ${valor}`);
    }
    else if(dato == 1 && datoQ == 3)
    {
        var valor = 5/9*(grado - 32) + 273.15;
        window.alert(`Los ${grado}º Fahrenheit a Kelvin es ${valor.toFixed(2)}`);
    }
    else if(dato == 2 && datoQ == 1)
    {
        var valor = (grado * 1.8) + 32;
        window.alert(`Los ${grado}º Celsius a Fahrenheit es ${valor.toFixed(2)}`);
    }
    else if(dato == 2 && datoQ == 3)
    {
        var valor = parseFloat(grado) + 273.15;
        window.alert(`Los ${grado}º Celsius a Fahrenheit es ${valor.toFixed(2)}`);     
    }
    else if(dato == 3 && datoQ == 1)
    {
        var valor = (grado - 273.15) * 9/5 + 32
        window.alert(`los ${grado}º Kelvin a Fahrenheit es ${valor.toFixed(2)}`);  
    }
    else if(dato == 3 && datoQ == 2)
    {
        var valor = parseFloat(grado) - 273.15;
        window.alert(`los ${grado}º Kelvin a Celcius son: ${valor.toFixed(2)}`);  
    }
})