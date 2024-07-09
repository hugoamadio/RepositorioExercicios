import { useContext, useEffect, useState } from "react"
import DefaultLayout from "../config/layouts/DefaultLayout"
import { UserContext } from "../contexts/UserContext"
import { useNavigate } from "react-router-dom"

function Login(){

    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()

    const userContext = useContext(UserContext)

    const homeConfigs = {
        navigation: true,
        footer: true
    }

    function handleLogin(){
        console.log(`usuario: ${user} /n senhar: ${password}`)
        userContext?.setData({user, password})
        navigate('/home')
    }

    useEffect(()=>{
        console.log(userContext?.data)
    },[userContext])

    return(
        <DefaultLayout config={homeConfigs}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '15px'
            }}>
                <div>
                    <label htmlFor="user">User:</label>
                    <input type="text" value={user} onChange={ev => setUser(ev.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
                </div>
                <div>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Login