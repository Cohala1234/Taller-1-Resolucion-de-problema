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

var triangulo = document.getElementById('triangulo');

triangulo.addEventListener('click', function()
{
    var lado1 = document.getElementById('lado1').value;
    var lado2 = document.getElementById('lado2').value;
    var lado3 = document.getElementById('lado3').value;
    parseFloat(lado1, lado2, lado3);

    if(lado1 == lado2 && lado1 == lado3)
    {
        window.alert(`El triangulo es EQUILATERO porque sus lados son iguales.`)
    }
    else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3)
    {
        window.alert(`El triangulo es ISÓSCELES porque dos lados son similares.`);
    }
    else
    {
        window.alert(`El triangulo es ESCALENO porque todos sus lados son diferentes.`);
    }  
});