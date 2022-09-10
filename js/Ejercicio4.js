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

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuDashboard.classList.add("open")
        iconoMenu.classList.replace("bx-menu", "bx-x")
    })
})

var verificar = document.getElementById('verificar');

verificar.addEventListener('click', function()
{
      var nombres = document.getElementById('nombres').value;
      var apellidos = document.getElementById('apellidos').value;
      var materia = document.getElementById('materia').value;
      parseInt(nombres, apellidos, materia);

      if(nombres == 1 && apellidos == 7 && materia == 1 || materia == 7)
      {
            window.alert("¡RESPUESTA CORRECTA!")
      }
      else if(nombres == 2 && apellidos == 6 && materia == 8)
      {
            window.alert("¡RESPUESTA CORRECTA!")
      }
      else if(nombres == 3 && apellidos == 5 && materia == 5)
      {
            window.alert("¡RESPUESTA CORRECTA!")
      }
      else if(nombres == 4 && apellidos == 4 && materia == 4)
      {
            window.alert("¡RESPUESTA CORRECTA!")
      }
      else if(nombres == 5 && apellidos == 3 && materia == 6)
      {
            window.alert("¡RESPUESTA CORRECTA!")
      }
      else if(nombres == 6 && apellidos == 2 && materia == 2)
      {
            window.alert("¡RESPUESTA CORRECTA!")
      }
      else if(nombres == 7 && apellidos == 1 && materia == 3)
      {
            window.alert("¡RESPUESTA CORRECTA!")
      }
      else if(nombres == 1 && apellidos == 7 && materia == 2)
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }
      else if(nombres == 1 && apellidos == 7 && materia == 3)
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }    
      else if(nombres == 1 && apellidos == 7 && materia == 4)
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }  
      else if(nombres == 1 && apellidos == 7 && materia == 5)
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }  
      else if(nombres == 1 && apellidos == 7 && materia == 6)
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }  
      else if(nombres == 1 && apellidos == 1 && materia == 1)
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }  
      else if(nombres == 1 && apellidos == 2 && materia == 1)
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }  
      else if(nombres == 1 && apellidos == 3 && materia == 1)
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }  
      else if(nombres == 1 && apellidos == 4 && materia == 1)
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }  
      else if(nombres == 1 && apellidos == 5 && materia == 1)
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }  
      else if(nombres == 1 && apellidos == 6 && materia == 1)
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }  
      else if(nombres == 1 && apellidos == 1 && materia == 1)
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }  
      else
      {
            window.alert("¡RESPUESTA INCORRECTA!")
      }
})