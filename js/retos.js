var texto = document.getElementById("texto1");
var boton = document.getElementById("longitud");
var caja = document.getElementById("colorF");
var boton2 = document.getElementById("cambioP");
var pagprincipal = document.getElementById("principal");

function palabra()
{
    alert(`La longitud es: ${texto.value.length}`);
}
boton.addEventListener(`click`,palabra)


caja.addEventListener(`mouseover`, function() 
{
    caja.classList.replace("colorF","colorD")
});

caja.addEventListener(`mouseout`, function() 
{
    caja.classList.replace("colorD","colorF")
});


boton2.addEventListener(`click`, function()
{
    boton2.classList.replace("cambioP","cambio2")
});

boton2.addEventListener(`dblclick`, function()
{
    boton2.classList.replace("cambio2","cambio3")
});


pagprincipal.addEventListener(`click`, () => {
    console.log('Acabas de pinchar');
    console.log('Dejaste de pinchar');
});
