
let dineroUsuario = 0;
let componente;
let compra;
let accion;
let acumulador = 0;
let contador= 0;
const PLACA = 800000;
const PROCESADOR = 450000;
const MOTHER = 400000;
let inicio=1

function cuenta (a,b){
    calculo = a-b;
}

while(inicio==1){
alert("A continuaciones seleccione la accion que desea realizar");
accion = prompt("1. Cargar saldo | 2.Realizar compra | ESC.Salir del programa" )


if (accion==1){
 acumulador = contador;
 dineroUsuario = parseFloat (prompt ("Cuanto dinero quiere ingresar a su cuenta: " ));
 
while (dineroUsuario<0){
alert("El monto ingresado es incorrecto, vuelva a intentarlo");
dineroUsuario = parseFloat (prompt ("Cuanto dinero quiere ingresar a su cuenta: " ));
}
contador = acumulador + dineroUsuario
alert ("Saldo actual: $"+ parseFloat(contador));


}

else if (accion==2){
componente= parseInt (prompt("Ingrese que la opcion del componente que desea comprar: 1-Placa de video, 2-Micro Procesador, 3-Motherboard"));

while ((componente!=1) &&(componente!=2) && (componente!=3)){
   alert ("El valor ingresado es incorrecto");
   componente= parseInt (prompt("Ingrese que la opcion del componente que desea comprar: 1-Placa de video, 2-Micro Procesador, 3-Motherboard"));
}


switch (componente){
    case 1: 
        alert("A seleccionado placa de video");
        compra= prompt ("El precio es de $800000. Si desea continuar con su compra presione 1, para salir presione ESC");
        while(compra !=1 && compra!="ESC"){
            alert("Valor opcion incorrecta, vuelva a intentarlo")
            compra= prompt ("El precio es de $800000. Si desea continuar con su compra presione 1, para salir presione ESC");
        }
        if(compra==1){
           cuenta (contador,PLACA);
            
        console.log(calculo);
           
            if(calculo >= 0){
                alert ("La compra se ha realizado con exito. Su saldo actual es de: " + calculo);
            } else 
            alert("No dispone con el dinero suficiente para realizar dicha compra");
                
        }else if (compra=="ESC")
        alert ("Compra cancelada");


    break;
    case 2:
         alert("A seleccionado Micro procesador");
         compra= prompt ("El precio es de $450000. Si desea continuar con su compra presione 1, para salir presione ESC");
         while(compra !=1 && compra!="ESC"){
            alert("Valor opcion incorrecta, vuelva a intentarlo")
            compra= prompt ("El precio es de $450000. Si desea continuar con su compra presione 1, para salir presione ESC");
        }
         
         if(compra==1){
            cuenta (contador,PROCESADOR);
             
         console.log(calculo);
            
             if(calculo >= 0){
                 alert ("La compra se ha realizado con exito. Su saldo actual es de: " + calculo);
             } else 
             alert("No dispone con el dinero suficiente para realizar dicha compra");
                 
         }else if (compra=="ESC")
            alert ("Compra cancelada");
    
 
    break;
     case 3:
         alert("A seleccionado Motherboard");
         compra= prompt ("El precio es de $400000. Si desea continuar con su compra presione 1, para salir presione ESC");
         while(compra !=1 && compra!="ESC"){
            alert("Valor opcion incorrecta, vuelva a intentarlo")
            compra= prompt ("El precio es de $400000. Si desea continuar con su compra presione 1, para salir presione ESC");
        }
        
         if(compra==1){
            cuenta (contador,MOTHER);
             
         console.log(calculo);
            
             if(calculo >= 0){
                 alert ("La compra se ha realizado con exito. Su saldo actual es de: " + calculo);
             } else 
             alert("No dispone con el dinero suficiente para realizar dicha compra");
                 
         }else if (compra=="ESC")
            alert ("Compra cancelada");
    
 
    break;
 

}
}else if (accion=="ESC"){
    inicio=0
    alert("Fin del programa");
}
}



class componentee {
    constructor
         (hardware, precio, stock){
            this.hardware = hardware;
            this.precio = precio;
            this.stock = stock;
         }

} 

const componentes = [];
componentes.push(new componentee("MICROPROCESADOR INTEL CORE I3 10105", "145000","10"));
componentes.push(new componentee("MICROPROCESADOR CPU AMD RYZEN 5 4600G", "130000","5"));
componentes.push(new componentee("PLACA DE VIDEO GIGABYTE NVIDIA GEFORCE RTX 3050", "410000","2"));
componentes.push(new componentee("PLACA DE VIDEO GPU NVIDIA GEFORCE PALIT RTX 4060", "460000","3"));

for (let i = 0; i < componentes.length; i++) {
    console.log(`Componente ${i + 1}:`);
    console.log(`Hardware: ${componentes[i].hardware}`);
    console.log(`Precio: ${componentes[i].precio}`);
    console.log(`Stock: ${componentes[i].stock}`);
    console.log('------------------------');}