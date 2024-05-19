
let dineroUsuario = 0;
let compra;
let placaVideo= 800000;
let peocesador= 450000;
let mother = 400000;
const IVA = 0.21;

 dineroUsuario = parseFloat (prompt ("Cuanto dinero quiere ingresar a su cuenta: " ));
while (dineroUsuario<0){
alert("El monto ingresado es incorrecto, vuelva a intentarlo");
dineroUsuario = prompt ("Cuanto dinero quiere ingresar a su cuenta: " );
}
console.log(dineroUsuario);
alert ("Saldo actual: $"+ dineroUsuario);



compra= parseInt (prompt("Ingrese que la opcion del componente que desea comprar: 1-Placa de video, 2-Micro Procesador, 3-Motherboard"));

while ((compra!=1) &&(compra!=2) && (compra!=3)){
   alert ("El valor ingresado es incorrecto");
    compra= parseInt (prompt("Ingrese que la opcion del componente que desea comprar: 1-Placa de video, 2-Micro Procesador, 3-Motherboard"));
}

switch (compra){
    case 1: 
        alert("A seleccionado placa de video");

    break;
    case 2:
         alert("A seleccionado Micro procesador");
    break;
     case 3:
         alert("A seleccionado Motherboard");
    break;
 

}