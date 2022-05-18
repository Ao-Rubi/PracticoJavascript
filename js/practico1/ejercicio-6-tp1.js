let numero1 = parseInt(prompt("Escriba un numero"));
let numero2 = parseInt(prompt("Escriba otro numero"));

if (numero1 > numero2) {
    document.write("El Primer numero es mas grande: " + numero1)
}else {
    if (numero1 < numero2) {
        document.write("El Segundo numero es mas grande: " + numero2)  
    }else{
        document.write("Error, Los numeros son iguales o no escribiste algun numero")  
    }
}