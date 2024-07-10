import { useEffect, useState } from "react"
import DivAtividade from "../components/divAtividade/divAtividade"

function Atividade(){
    const [count, setCount] = useState<number>(0)
    const [message, setMessage] = useState<string>('')
    const [enable, setEnable] = useState<boolean>(false)

    function handleClickCount(){
        setCount(count + 1)
    }

    useEffect(() => {
        setMessage("Aqui está a menssagem!!")
    }, [])

    useEffect(() => {
        alert('o estado mudou e o alerta foi exibido!!')
    }, [enable])

    function handleClickMessage(){
        if(!enable){
            setEnable(true)
        } else {
            setEnable(false)
        }
    }

    return(
        <div style={{
            width: '100%',
            height: '100vh',
            backgroundColor: '#f5f58b',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '50px'
        }}>


            <DivAtividade>
                <p>Exercício 1: Contador Simples com useState</p>
                <p>Objetivo: Criar um contador que incrementa quando o botão é clicado.</p>
                <strong>Contador: {count}</strong>
                <button onClick={handleClickCount}>Incremento</button>
            </DivAtividade>


            <DivAtividade>
                <p>Exercício 2: Mensagem Inicial com useEffect</p>
                <p>Objetivo: Exibir uma mensagem inicial apenas uma vez quando o componente é montado.</p>
                <strong>{message}</strong>
            </DivAtividade>


            <DivAtividade>
                <p>Exercício: Exibição de Mensagem</p>
                <p>Objetivo: Mostrar uma mensagem na tela sempre que um estado específico mudar.</p>
                <button onClick={handleClickMessage}>Iniciar</button>
            </DivAtividade>
        </div>
    )
}

export default Atividade