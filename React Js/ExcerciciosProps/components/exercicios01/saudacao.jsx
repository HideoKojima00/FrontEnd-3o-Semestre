import './Saudacao.css';

const Saudacao = ({ nome }) => {
  return (
    <div className="saudacao-container">
      <h1 className="saudacao-texto">
        Olá, <span className="saudacao-nome">{nome}</span>! Seja bem-vindo(a)!
      </h1>
    </div>
  );
};

export default Saudacao;
