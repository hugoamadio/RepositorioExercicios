import { useContext, useEffect, useState } from "react"
import { ContactsContext } from "../contexts/ContactsContext"
import DefaultLayout from "../config/layout/DefaultLayout"

function Contacts(){
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const contactContext = useContext(ContactsContext)

    useEffect(() =>{
        console.log(contactContext?.data)
    }, [contactContext?.data])

    function handleClick(){
        contactContext?.setData([...contactContext.data, { name, phone }])
        setName('')
        setPhone('')
    }

    const config ={
        navigation: true,
        footer: true
    }

    return (
        <DefaultLayout config={config}>
            <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#e3e3e3',
            color: '#000',
            fontSize: 'large',
            flexDirection: 'column',
            gap: '25px'
        }}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" value={name} onChange={ev => setName(ev.target.value)}/>
            </div>
            <div>
                <label htmlFor="fone">Fone: </label>
                <input type="text" value={phone} onChange={ev => setPhone(ev.target.value)}/>
            </div>
            <button onClick={handleClick}>Cadastrar</button>
        </div>
        </DefaultLayout>
        
    )
}

export default Contacts