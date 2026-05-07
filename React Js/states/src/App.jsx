import {useState} from "react"

function App() {
  //objeto privado
  const [nome, setNome] = useState("Google")

  // Só assim para trocar o nome, caso tenha setNome
  // setNome = Felipe Fontes
  function trocarTexto(){
    setNome("Microsoft")
  }

  function fuiAbandonado(){
    setNome("Input foi abandonado :(")
  }

  return (
    <>
      <h1>{nome} Page</h1>
      <button onClick={trocarTexto}>Mudar texto</button>
      <button onClick={() => {
        return setNome("Yahoo")
      }}>Mudar texto</button>
      {/* evento - evento disparado: change */}
      {/* target - quem disparou o evento change */}
      {/* value - valor do input que disparou o evento change */}
      <textarea typpe="text" onBlur={fuiAbandonado} onChange={(evento) => setNome(evento.target.value)}></textarea>
    </>
    
    
    );
};

export default App