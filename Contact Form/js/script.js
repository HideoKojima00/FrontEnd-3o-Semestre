async function buscarEndereco(cep) {


    //quando o cep não vier prenchido
    if (cep.trim().length < 8) {
        alert("O CEP não pode ser vazio")
        return false;
    }

    //buscar o CEP lá na ViaCEP
        try {
        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();
        console.log(dados);
        console.log(dados.logradouro);
        console.log(dados.bairro);
        console.log(dados.localidade);
        console.log(dados.estado);

        document.getElementById('rua').value = dados.logradouro;
        document.getElementById('bairro').value = dados.bairro;
        document.getElementById('cidade').value = dados.localidade;
        document.getElementById('estado').value = dados.estado;
    } catch (error) {
        console.error(error);
    }

}



function validarFormulario() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;

    let quantidadeErros = 0;

    quantidadeErros += validarEmail();
    quantidadeErros += validarTelefone();
    quantidadeErros += validarEndereco();
    quantidadeErros += validarAnotacoes();


    if (nome.trim().length == 0) {
        formError("nome");
        quantidadeErros++;
    } else {
        reiniciaBorda("nome");
    }

    if (sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadeErros++;
    } else {
        reiniciaBorda("sobrenome");
    }

    if (quantidadeErros > 0) {
        alert("Existem " + quantidadeErros + " erros no formulário!");
    } else {
        alert("Formulário enviado com sucesso!");
        reiniciaTodasAsBordas();
    }
}

function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red";
}


let objetoContato = {
    nome: nome,
    sobrenome: sobrenome,
    }


function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "transparent";
}

function reiniciaTodasAsBordas() {
    let inputs = document.querySelectorAll("input, textarea");

    inputs.forEach(campo => {
        campo.style.border = "transparent";
    });
}

function validarEmail() {
    let email = document.getElementById("email").value;

    // Regex padrão de email
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim().length == 0) {
        formError("email");
        return 1;
    }

    if (!regex.test(email)) {
        formError("email");
        return 1;
    }

    reiniciaBorda("email");
    return 0;
}



function validarTelefone() {
    let ddi = document.getElementById("telefone_DDI").value;
    let ddd = document.getElementById("telefone_ddd").value;
    let telefone = document.getElementById("telefone").value;

    let erros = 0;

    // País (+55)
    if (ddi.trim().length == 0) {
        formError("telefone_DDI");
        erros++;
    } else {
        reiniciaBorda("telefone_DDI");
    }

    // DDD
    let dddLimpo = ddd.replace(/\D/g, "");
    if (dddLimpo.length !== 2) {
        formError("telefone_ddd");
        erros++;
    } else {
        reiniciaBorda("telefone_ddd");
    }

    // Número
    let telefoneLimpo = telefone.replace(/\D/g, "");
    if (
        telefoneLimpo.length < 8 ||
        telefoneLimpo.length > 9 ||
        (telefoneLimpo.length === 9 && telefoneLimpo[0] !== "9")
    ) {
        formError("telefone");
        erros++;
    } else {
        reiniciaBorda("telefone");
    }

    return erros;
}



function validarAnotacoes() {
    let anotacoes = document.getElementById("anotacoes").value;

    if (anotacoes.trim() === "") {
        formError("anotacoes");
        return 1;
    } else {
        reiniciaBorda("anotacoes");
        return 0;
    }
}



function validarEndereco() {
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let complemento = document.getElementById("complemento").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;

    let erros = 0;

    // CEP (formato 99999-999 ou só números)
    let cepLimpo = cep.replace(/\D/g, "");
    if (cepLimpo.length !== 8) {
        formError("cep");
        erros++;
    } else {
        reiniciaBorda("cep");
    }

    // Rua
    if (rua.trim() === "") {
        formError("rua");
        erros++;
    } else {
        reiniciaBorda("rua");
    }
    // Numero
    if (numero.trim() === "") {
        formError("numero");
        erros++;
    } else {
        reiniciaBorda("numero");
    }

    // Número
    if (complemento.trim() === "") {
        formError("complemento");
        erros++;
    } else {
        reiniciaBorda("complemento");
    }

    // Bairro
    if (bairro.trim() === "") {
        formError("bairro");
        erros++;
    } else {
        reiniciaBorda("bairro");
    }

    // Cidade
    if (cidade.trim() === "") {
        formError("cidade");
        erros++;
    } else {
        reiniciaBorda("cidade");
    }
    // Cidade
    if (cidade.trim() === "") {
        formError("estado");
        erros++;
    } else {
        reiniciaBorda("estado");
    }

    return erros;

}


