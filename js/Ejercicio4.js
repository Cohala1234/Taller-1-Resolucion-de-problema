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

const respuesta = document.getElementById('respuesta');
respuesta.addEventListener('click', ()=>{
      const names = document.getElementById('nombre').value;
      const secondName = document.getElementById('apellido').value;
      const materia = document.getElementById('actividad').value;
      parseInt(names); parseInt(secondName); parseInt(materia)
            if(names== 1 && secondName==2 && materia==6){
                  alert("RESPUESTA CORRECTA!!")
            }else if(names== 2 && secondName==4 && materia==1 || materia==7){
                  alert("RESPUESTA CORRECTA!!")
            }else if(names== 3 && secondName==5 && materia==2){
                  alert("RESPUESTA CORRECTA!!")
            }else if(names== 4 && secondName==1 && materia==8){
                  alert("RESPUESTA CORRECTA!!")
            }else if(names== 5 && secondName==3 && materia==3){
                  alert("RESPUESTA CORRECTA!!")
            }else if(names== 6 && secondName==7 && materia==6){
                  alert("RESPUESTA CORRECTA!!")
            }else if(names== 7 && secondName==8 && materia==4){
                  alert("RESPUESTA CORRECTA!!")
            }else{
                  alert("RESPUESTA INCORRECTA¡¡")
            }    
})