import './Jogo.css';

const Jogo = ({ nome, plataforma, preco, imagem }) => {
  return (
    <div className="jogo-card">
      <img src={imagem} alt={nome} className="jogo-imagem" />
      <div className="jogo-info">
        <h2 className="jogo-nome">{nome}</h2>
        <span className="jogo-plataforma">{plataforma}</span>
        <p className="jogo-preco">R$ {preco}</p>
      </div>
    </div>
  );
};

export default Jogo;
