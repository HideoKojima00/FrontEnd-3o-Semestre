let frutasVermelhas = [];
// frutasCitricas[0] = "Morango";
frutasVermelhas.push("Morango");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Melancia");
frutasVermelhas.push("Framboesa");

console.log(frutasVermelhas);
let frutaRemovedFromFirstArray = frutasVermelhas.shift(); //Remove o primeiro elemento do array
console.log(` ${frutaRemovedFromFirstArray} foi removido da cesta!`);
console.log(frutasVermelhas);