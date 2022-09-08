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

const averiguar = document.getElementById('trig');
averiguar.addEventListener('click',()=>{
      const lad1 = document.getElementById('lado1').value;
      const lad2 = document.getElementById('lado2').value;
      const lad3 = document.getElementById('lado3').value;
      parseFloat(lad1);parseFloat(lad2);parseFloat(lad3);
      if(lad1==lad2 && lad1 ==lad3){
            alert(`El triangulo es equilatero ya que sus lados son iguales.`)
      }else if(lad1==lad2 || lad2==lad3 || lad1==lad3){
            alert(`El triangulo es isósceles, dos lados son similares.`);
      }else{
            alert(`El triangulo es ecaleno, todos sus lados son diferentes.`);
      }  
})