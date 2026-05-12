import { use, useEffect } from "react";
import "./ciclodevida.css";

export default function CicloDeVida() {
    const [contador, setContador] = useState(0)
    useEffect(() => {
        //quando o componente e montado
        console.log("Componente MONTADO");
    }, [])
    useEffect(() => {
        //quando o componente e atualizado
        console.log("Componente ATUALIZADO");
    }, [contador])




    return (
        <>
        <h1>Contador: {contador}</h1>
        <button onClick={() => setContador(contador + 1)}>Contar</button>
        </>
        
    )
}