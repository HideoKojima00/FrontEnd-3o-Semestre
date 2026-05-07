const Filme = ({ titulo, ano, genero, nota }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h2>{titulo}</h2>
      <p><strong>Ano:</strong> {ano}</p>
      <p><strong>Gênero:</strong> {genero}</p>
      <p><strong>Nota:</strong> {nota}</p>
    </div>
  );
};
