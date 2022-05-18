let numero1 = parseInt(prompt("Escriba un numero"));
let numero2 = parseInt(prompt("Escriba otro numero"));
let numero3 = parseInt(prompt("Escriba otro numero mas"));

if (numero1 > numero2 && numero1 > numero3) {
    document.write("El primer numero es el mas grande: " + numero1)
}else if (numero2 > numero1 && numero2 > numero3){
    document.write("El segundo numero es el mas grande: " + numero2)
}else if (numero3 > numero1 && numero3 > numero2) {
    document.write("El tercer numero es el mas grande: " + numero3)  
}else {
    document.write("Error, Todos los numeros son iguales o no escribiste alguno.")
}
