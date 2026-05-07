import './Contato.css';

const Contato = ({ nome, telefone, email }) => {
  return (
    <div className="contato-item">
      <h3 className="contato-nome">{nome}</h3>
      <p><strong>📞 Tel:</strong> {telefone}</p>
      <p><strong>📧 E-mail:</strong> {email}</p>
    </div>
  );
};

export default Contato;
