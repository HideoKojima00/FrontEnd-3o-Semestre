import './Pessoa.css';

const Pessoa = ({ nome, idade, cidade, foto }) => {
  return (
    <div className="pessoa-card">
      <div className="foto-container">
        <img src={foto} alt={nome} className="pessoa-foto" />
      </div>
      <div className="pessoa-info">
        <h2 className="pessoa-nome">{nome}</h2>
        <p><strong>Idade:</strong> {idade} anos</p>
        <p><strong>Cidade:</strong> {cidade}</p>
      </div>
    </div>
  );
};

export default Pessoa;
