import './Produto.css';

const Produto = ({ nome, preco, descricao }) => {
  return (
    <div className="produto-container">
      <h2 className="produto-nome">{nome}</h2>
      <p className="produto-preco">
        <strong>Preço:</strong> R$ {preco}
      </p>
      <p className="produto-descricao">{descricao}</p>
    </div>
  );
};

export default Produto;
