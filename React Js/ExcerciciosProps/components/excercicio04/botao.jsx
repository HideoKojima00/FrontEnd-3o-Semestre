import './Botao.css';

const Botao = ({ texto, cor }) => {
  return (
    <button 
      className="btn-custom" 
      style={{ backgroundColor: cor }}
    >
      {texto}
    </button>
  );
};
