import { useState } from "react"

function FormRegister(){
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()      

        const newUser = {
            nome: name,
            email: email,
            pass: pass
        }
        alert(JSON.stringify(newUser, null, 2));
    }

    return(
        <form onSubmit={handleSubmit} style={{width: '500px', height: '500px', boxSizing:'border-box', border: '1px solid black', borderRadius: '24px', padding: '50px 0 0 0', display: 'flex', alignItems:'center', flexDirection: 'column', gap:'8px'}}>
            <h1 style={{margin:'0 0 40px 0'}}>Registro</h1>

                <label htmlFor="label-name">Nome: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{border: '1px solid black', width:'220px', height: '20px'}} />

                <label htmlFor="label-email">Email: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{border: '1px solid black', width:'220px', height: '20px'}} />

                <label htmlFor="label-pass">Password: </label>
                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} style={{border: '1px solid black', width:'220px', height: '20px'}}/>

                <button style={{padding: '12px', margin: '24px 0 0 0', backgroundColor: 'orange', border:'1px solid black', borderRadius: '13px'}} type="submit">Registrar</button>
        </form>
    )
}

export default FormRegister