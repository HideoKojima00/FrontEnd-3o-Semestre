import "./contador.css"

const Contador = () => {
    useState [valor, setValor] = useState(0)
    return (
        <>
        <p>Contagem {valor}</p>
        <button onClick={()=>{
            return setValor(valor + 1)
        }}>++</button>
        </>
    )
}