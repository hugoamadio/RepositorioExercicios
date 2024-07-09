import { useContext, useEffect, useState } from "react"
import DefaultLayout from "../config/layout/DefaultLayout"
import ButtonDefault from "../components/ButtonDefault"
import { UserContext } from "../contexts/UserContexts"
import { useNavigate } from "react-router-dom"

function Login(){
    const [user, setUser] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const navigate = useNavigate()

    const userContext = useContext(UserContext)

    const config ={
        navigation: false,
        footer: false
    }

    function handleLogin(){
        userContext?.setData({user, password: pass})
        navigate('/home')
    }

    useEffect(()=>{
        console.log(userContext?.data)
    }, [userContext])

    return (
        <DefaultLayout config={config}>
            <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="user">Login:</label>
                    <input type="text" value={user} onChange={ev => setUser(ev.target.value)}/>
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" value={pass} onChange={ev => setPass(ev.target.value)}/>
                </div>
                <div>
                    <ButtonDefault label="Entrar" action={handleLogin}></ButtonDefault>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Login