const hobbies = ["Correr", "Jogar", "Ler", "Viajar",];
//utilizando para alterar arrays e retornar um novo array, compondo um novo resultado para cada indice do array original
const novosHobbies = hobbies.map((hob) => {
    return `<p>${hob}</p>`;

})

console.log(novosHobbies);