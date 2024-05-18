
let dineroUsuario = 0;
 dineroUsuario = parseFloat (prompt ("Cuanto dinero quiere ingresar a su cuenta: " ));
while (dineroUsuario<0){
alert("El monto ingresado es incorrecto, vuelva a intentarlo");
dineroUsuario = prompt ("Cuanto dinero quiere ingresar a su cuenta: " );
}
console.log(dineroUsuario);
alert ("Saldo actual: $"+ dineroUsuario);