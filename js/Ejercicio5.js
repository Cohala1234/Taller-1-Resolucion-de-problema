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
//CIRCULO
    //PERIMETRO
    var circuloPerimetro = document.getElementById("circuloPerimetro");
    var perimetroCirculo = document.getElementById("perimetroCirculo");
    var cerrarCirculo = document.querySelector(".cerrarCirculo");

    circuloPerimetro.addEventListener("click", function()
    {
        perimetroCirculo.style.display = "block";
    });
    cerrarCirculo.addEventListener("click", function()
    {
        perimetroCirculo.style.display = "none"; 
    });

    var calcularCirculo = document.getElementById("calcularCirculo");

    calcularCirculo.addEventListener("click", function()
    {
        var radio = document.getElementById("radio").value;
        parseInt(radio);
        var resultado = radio * 3.1416 * 2;
        window.alert(`El perímetro del circulo es ${resultado.toFixed(2)}`);
    });
    //AREA
    var circuloArea = document.getElementById("circuloArea");
    var areaCirculo = document.getElementById("areaCirculo");
    var cerrarCirculo2 = document.querySelector(".cerrarCirculo2");

    circuloArea.addEventListener("click", function()
    {
        areaCirculo.style.display = "block";
    });
    cerrarCirculo2.addEventListener("click", function()
    {
        areaCirculo.style.display = "none"; 
    });

    var calcularCirculo2 = document.getElementById("calcularCirculo2");

    calcularCirculo2.addEventListener("click", function()
    {
        var radio2 = document.getElementById("radio2").value;
        parseInt(radio2);
        var resultado = 3.1416 * (radio2 *  radio2);
        window.alert(`El área del circulo es ${resultado.toFixed(2)}`);
    });
//TRIANGULO
    //PERIMETRO
    var trianguloPerimetro = document.getElementById("trianguloPerimetro");
    var perimetroTriangulo = document.getElementById("perimetroTriangulo");
    var cerrarTriangulo = document.querySelector(".cerrarTriangulo");

    trianguloPerimetro.addEventListener("click", function()
    {
        perimetroTriangulo.style.display = "block";
    });
    cerrarTriangulo.addEventListener("click", function()
    {
        perimetroTriangulo.style.display = "none"; 
    });

    var calcularTriangulo = document.getElementById("calcularTriangulo");

    calcularTriangulo.addEventListener("click", function()
    {
        var lado1=document.getElementById("lado1").value;
        var lado2=document.getElementById("lado2").value;
        var lado3=document.getElementById("lado3").value;
        var resultado = (parseInt(lado1) + parseInt(lado2) + parseInt(lado3));
        window.alert(`El perímetro del triangulo es ${resultado}`);
    });
    //AREA
    var trianguloArea = document.getElementById("trianguloArea");
    var areaTriangulo = document.getElementById("areaTriangulo");
    var cerrarTriangulo2 = document.querySelector(".cerrarTriangulo2");

    trianguloArea.addEventListener("click", function()
    {
        areaTriangulo.style.display = "block";
    });
    cerrarTriangulo2.addEventListener("click", function()
    {
        areaTriangulo.style.display = "none"; 
    });

    var calcularTriangulo2 = document.getElementById("calcularTriangulo2");

    calcularTriangulo2.addEventListener("click", function()
    {
        var baseTriangulo = document.getElementById("baseTriangulo").value;
        var alturaTriangulo = document.getElementById("alturaTriangulo").value;
        parseInt(baseTriangulo, alturaTriangulo);
        var resultado = (baseTriangulo * alturaTriangulo)/2;
        window.alert(`El perímetro del triangulo es ${resultado}`);
    })
//CUADRADO
    //PERIMETRO
    var cuadradoPerimetro=document.getElementById("cuadradoPerimetro");
    var perimetroCuadrado=document.getElementById("perimetroCuadrado");
    var cerrarCuadrado=document.querySelector(".cerrarCuadrado");

    cuadradoPerimetro.addEventListener("click", function()
    {
        perimetroCuadrado.style.display = "block";
    });
    cerrarCuadrado.addEventListener("click", function()
    {
        perimetroCuadrado.style.display = "none"; 
    });

    var calcularCuadrado = document.getElementById("calcularCuadrado");

    calcularCuadrado.addEventListener("click", function()
    {
        var ladoCuadrado = document.getElementById("ladoCuadrado").value;
        parseInt(ladoCuadrado);
        var resultado = ladoCuadrado * 4;
        window.alert(`El perímetro del cuadrado es ${resultado}`);
    });
    //AREA
    var cuadradoArea = document.getElementById("cuadradoArea");
    var areaCuadrado = document.getElementById("areaCuadrado");
    var cerrarCuadrado2 = document.querySelector(".cerrarCuadrado2");

    cuadradoArea.addEventListener("click", function()
    {
        areaCuadrado.style.display = "block";
    });
    cerrarCuadrado2.addEventListener("click", function()
    {
        areaCuadrado.style.display = "none"; 
    });

    var calcularCuadrado2 = document.getElementById("calcularCuadrado2");

    calcularCuadrado2.addEventListener("click", function()
    {
        var ladoCuadrado2 = document.getElementById("ladoCuadrado2").value;
        parseInt(ladoCuadrado2);
        var resultado = ladoCuadrado2 * ladoCuadrado2;
        window.alert(`El área del triangulo es ${resultado}`);
    })
//RECTANGULO
    //PERIMETRO
    var rectanguloPerimetro = document.getElementById("rectanguloPerimetro");
    var perimetroRectangulo = document.getElementById("perimetroRectangulo");
    var cerrarRectangulo = document.querySelector(".cerrarRectangulo");

    rectanguloPerimetro.addEventListener("click", function()
    {
        perimetroRectangulo.style.display = "block";
    });
    cerrarRectangulo.addEventListener("click", function()
    {
        perimetroRectangulo.style.display = "none"; 
    });

    var calcularRectangulo = document.getElementById("calcularRectangulo");

    calcularRectangulo.addEventListener("click", function()
    {
        var baseRectangulo = document.getElementById("baseRectangulo").value;
        var alturaRectangulo = document.getElementById("alturaRectangulo").value;
        parseInt(baseRectangulo, alturaRectangulo);
        var resultado = 2 * (parseInt(baseRectangulo) + parseInt(alturaRectangulo));
        window.alert(`El perímetro del rectangulo es ${resultado}`);
    });
    //AREA
    var rectanguloArea = document.getElementById("rectanguloArea");
    var areaRectangulo = document.getElementById("areaRectangulo");
    var cerrarRectangulo2 = document.querySelector(".cerrarRectangulo2");

    rectanguloArea.addEventListener("click", function()
    {
        areaRectangulo.style.display = "block";
    });
    cerrarRectangulo2.addEventListener("click", function()
    {
        areaRectangulo.style.display = "none"; 
    });

    var calcularRectangulo2=document.getElementById("calcularRectangulo2");

    calcularRectangulo2.addEventListener("click", function()
    {
        var baseRectangulo2 = document.getElementById("baseRectangulo2").value;
        var alturaRectangulo2 = document.getElementById("alturaRectangulo2").value;
        parseInt(baseRectangulo2, alturaRectangulo2);
        var resultado = baseRectangulo2 * alturaRectangulo2;
        window.alert(`El perímetro del triangulo es ${resultado}`);
    });