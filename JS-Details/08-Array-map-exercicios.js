const numeros = [50, 200, 250, 800, 992.87,800,500,9876,99,134];

console.log(`Array original: ${numeros}`);

//Rodar o map gerando um novo array com o dobro dos numeros do original
const numeroMultiplicados = numeros.map((num) => {
    return num * 2;
});

console.log(`Array Modificado:`);
console.log();//pula uma linha

//apos, exiba os valores do array dobro no console utilizando o forEach
let textoResultado = "";
numeroMultiplicados.forEach((num) => {
    textoResultado += `${num} | `; // acumula texto em uma string (sem pular linha)
});

//remover o ultimo pipe
// str.substring(0,str.length -1);
textoResultado = textoResultado.substring(0, textoResultado.length - 1); //remove os ultimos 3 caracteres (pipe e espaço)
console.log(textoResultado); //mostra o texto completo
