function calcular() {
    //nome
    var nome = document.getElementById("nome").value;
    //altura
    var altura = parseFloat(document.getElementById("altura").value);
    //peso
    var peso = parseFloat(document.getElementById("peso").value);

    //exibir no console
    console.log(nome);
    console.log(altura);
    console.log(peso);

    //verificar se tem campo sem preencher
    //dar mensagem se tiver faltando sem preencher
    if(!nome.trim().length ==0 || isNaN(altura) || isNaN(peso)){
        alert("Preencher todos os campos");
        return false
    }

    console.log("Liberados para cadastrar");
}
