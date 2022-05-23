let frase = prompt("ingresa una frase de 5 caracteres");

for(let indice = 0; indice < frase.length; indice++) {
    if (frase.charAt(indice) === "a" || frase.charAt(indice) === "e" || frase.charAt(indice) === "i" || frase.charAt(indice) === "o" || frase.charAt(indice) === "u") {
    document.write(frase.charAt(indice))
    }
}