//Escribir el id del formulario para podedr modificarlo con eventos
//Para realizarlo utilizaremos las funciones dom de javascript 
const FRMHOTEL=document.querySelector("#frmHotel");
//crear un evento clic con listener
FRMHOTEL.addEventListener("submit", calcularHospedaje)
//crear funcion
function calcularHospedaje(evt){
    evt.preventDefault();
    let diasHosp = document.querySelector("#txtDiasHosp").value;
    let precioDia = document.querySelector("#txtPrecioDiario").value;
    let TipoPago = document.querySelector("#cmbTipoPago").value;
    let descuento = 0;
    let total;

    let subtotal = diasHosp*precioDia;
    if(diasHosp >5){
        descuento = subtotal* 0.1;
    }else if(diasHosp >10 && diasHosp <= 15){
        descuento = subtotal * 0.15;
    }else if(diasHosp >15 ){
        descuento = subtotal * 0.2;
    }
    total = subtotal - descuento;
    if(TipoPago=="Tarjeta"){
        total=total*1.03;
    }
//imprime el resultado 
let imprimir = document.getElementById("resultado")
imprimir.textContent = `Subtotal a pagar:$${subtotal}  Descuento:$${descuento} Total:$${total} Tipo de pago:${TipoPago}`;
}
