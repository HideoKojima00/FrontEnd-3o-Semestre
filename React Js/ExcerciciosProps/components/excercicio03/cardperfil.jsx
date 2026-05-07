import './Perfil.css';

const Perfil = ({ nome, idade, profissao }) => {
  return (
    <div className="perfil-card">
      <h2 className="perfil-nome">{nome}</h2>
      <div className="perfil-info">
        <p><strong>Idade:</strong> {idade} anos</p>
        <p><strong>Profissão:</strong> {profissao}</p>
      </div>
    </div>
  );
};

export default Perfil;
