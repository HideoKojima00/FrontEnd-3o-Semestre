import { use, useState } from "react";
import "./cadfruta.css";

function cadfruta() {
    // states, variaveis e funcoes
    const [fruta, setFruta] = useState("");
    const [arrFrutas, setarrFrutas] = useState([
        { id: 1, nome: "Abacaxi", quantidade: 10 },
        { id: 2, nome: "Mamao", quantidade: 20 },

    ]); //cria um state array vazio
    setArrFrutas([...arrFrutas,
    {
        id: Date.now(), nome: fruta, quantidade: quantidade
    }]); //adiciona um novo objeto ao array de frutas

    limparFormulario(); // apos cadastrar, limpar os campos do formulario

    return false;
    {
        //limpa os states
        function limparFormulario() {
            setFruta("");
            setQuantidade(0);
        }
    }

    return (
        <section className="sessao_cadastro">
            <h1>Cadastro</h1>
            <fieldset className="linha">
                <label htmlFor="fruta" className="cadastrar_rotulo">Digite o nome da fruta</label>
                <input
                    type="text"
                    id="fruta"
                    className="cadastrar_input"
                    onChange={(e) => {
                        setFruta(e.target.value)
                    }}
                />
                <button
                    className="cadastro_bnt-cadastrar"
                    onClick={() => {
                        return setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta }])
                    }}
                >Cadastrar</button>
            </fieldset>

            <ul className="listagem">
                {arrFrutas.map((f) => {
                    return <li key={f.id}>{f.nome}</li>
                })}
                <li>Mamao</li>
                <li>Abacate</li>
            </ul>
        </section>
    );
}
//Adicione mais um campo para cadastro da quantidade de frutas

export default cadfruta;