const FRMTERRENO=document.querySelector("#frmTerreno");
//crear un evento clic con listener
FRMTERRENO.addEventListener("submit", calcularPrecio)
//crear funcion
function calcularPrecio(evt){
    evt.preventDefault();
    let largo = document.querySelector("#txtLargo").value;
    let ancho = document.querySelector("#txtAncho").value;
    let precio = document.querySelector("#txtPrecioPorMetro").value;
    let desc = 0;
    let totall;

    let metros = largo*ancho;
    let sub = metros*precio;

    if( metros >400 && metros <=800){
        desc = sub* 0.05;
    }else if( metros>800 && metros <=1000){
        desc = sub * 0.08;
    }else if( metros >1000 && metros <=2000){
        desc = sub * 0.1;
    }else if ( metros>2000){
        desc = sub * 0.25;
    }
    totall = sub - desc;
    let imprimir = document.getElementById("precio")
    imprimir.textContent= `Subtotal: $${sub} Descuento: $${desc} Total: $${totall}`;
    if(precio===""){
        alert("llene los campos vacios");
        return false;
    }else if (ancho===""){
        alert("llene los campos vacios")
    }else if (largo===""){
        alert("llene los campos vacios")
    }
}