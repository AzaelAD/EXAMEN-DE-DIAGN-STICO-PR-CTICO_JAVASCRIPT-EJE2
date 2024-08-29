// 2. Reversión de cadena
function revertirFrase(frase) {
    return frase.split(" ").reverse().join(" ");
}

const frase = "Isaac no ronca así";
console.log("Frase invertida:", revertirFrase(frase));
