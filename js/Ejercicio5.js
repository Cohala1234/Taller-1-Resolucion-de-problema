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

const calC = document.getElementById('Acirculo');
 calC.addEventListener('click',()=>{
      const area = document.getElementById('radio').value;
      const final = 3.1416 * (parseFloat(area)**2);
      alert(`El area del circulo es: ${final.toFixed(2)}`);
 });
 const calP = document.getElementById('Pcirculo');
 calP.addEventListener('click',()=>{
      const area = document.getElementById('radio1').value;
      const final = (2*3.1416) * parseFloat(area);
      alert(`El perimetro del circulo es: ${final.toFixed(2)}`);
 });
const triA = document.getElementById('Atriangulo');
triA.addEventListener('click', ()=>{
      const base1 = document.getElementById('base1').value;
      const altura1 = document.getElementById('altura1').value;
      a = (parseFloat(base1) * parseFloat(altura1)) /2;
      alert(`El area del triangulo es: ${a}`);
});
const triP = document.getElementById('Ptriangulo');
triP.addEventListener('click', ()=>{
      const lado = document.getElementById('lad1').value;
      const lad = document.getElementById('lad2').value;
      const lad1 = document.getElementById('lad3').value;
      const a = parseFloat(lado)+parseFloat(lad)+parseFloat(lad1);
      alert(`El perimetro del triangulo es: ${a}`);  
});