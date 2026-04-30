// Utilizando para filtrar um elemento dentro de um array. Retorna apenas o encontrado, veja:
const numeros = [1, 2, 3, 4, 5];

const numeroEncontrado = numeros.filter((n) => {
     return n == 10;
});
console.log(numeroEncontrado);


const nomes = ["Ana", "Joao", "Lu", "Maria", "Zé"];

pessoasLegais = nomes.filter((nome) => {
    return nome.length <= 5;
});

console.log(pessoasLegais);