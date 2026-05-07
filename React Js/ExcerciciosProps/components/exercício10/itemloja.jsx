import './ItemLoja.css';

const ItemLoja = ({ nome, preco, categoria, estoque }) => {
  return (
    <div className="loja-item">
      <h2 className="loja-nome">{nome}</h2>
      <p className="loja-categoria">Categoria: {categoria}</p>
      <p className="loja-preco">R$ {preco}</p>
      
      {/* Regra de estoque com operador ternário */}
      <div className={`status-estoque ${estoque > 0 ? 'disponivel' : 'indisponivel'}`}>
        {estoque > 0 ? "Produto disponível" : "Produto indisponível"}
      </div>
    </div>
  );
};

export default ItemLoja;
