import './Aluno.css';

const Aluno = ({ nome, curso, imagem }) => {
  return (
    <div className="aluno-card">
      <img src={imagem} alt={nome} className="aluno-foto" />
      <h3 className="aluno-nome">{nome}</h3>
      <p className="aluno-curso">{curso}</p>
    </div>
  );
};

export default Aluno;
