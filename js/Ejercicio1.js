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

/*LONGITUD*/
var boton = document.getElementById('longitud');

boton.addEventListener('click', function()
{
    const texto1 = document.getElementById('palabra').value;
    window.alert(`la longitud del texto "${texto1}" es ` + texto1.length);
});

/*MAYUSCULAS */
var mayusculasQ = document.getElementById('mayuscula');

mayusculasQ.addEventListener('click', function()
{
    const texto1 = document.getElementById('palabra').value;
    window.alert(`"${texto1}" en mayúscula se veria asi ` + texto1.toUpperCase());
});

/*MINUSCULAS*/
var minusculasQ = document.getElementById('minusculas');

minusculasQ.addEventListener('click', function()
{
    const texto1 = document.getElementById('palabra').value;
    window.alert(`"${texto1}" en minúsculas se veria asi ` + texto1.toLowerCase());
});

/*PRIMERA LETRA*/
var primerCaracterQ = document.getElementById('primerCaracter');

primerCaracterQ.addEventListener('click',function()
{
    const texto1 = document.getElementById('palabra').value;
    window.alert(`la primera letra de "${texto1}" es ` + texto1.charAt());
});