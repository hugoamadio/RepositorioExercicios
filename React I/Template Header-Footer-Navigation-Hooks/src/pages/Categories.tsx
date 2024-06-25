import { useState } from "react"
import PageDefault from "../components/PageDefault"
import ButtonDefault from "../components/ButtonDefault/ButtonDefault"
import ListCategories from "../components/ListCategories"
import InputDefault from "../components/InputDefault/InputDefault"

function Categories(){
    const [name, setName] = useState<string>('')
    const [list, setList] = useState<string[]>([])

    function eventClick(){
        if(name.length){
            setList([...list, name])
        }

        setName('')
    }

    function changeEvent(ev: React.ChangeEvent<HTMLInputElement>){
        const value = ev.target.value

        setName(value)
    }

    return(
        <PageDefault>
            <div>
                <label htmlFor="category">Nome: </label>
                <InputDefault onchange={changeEvent} name="category" type="text" value={name}/>
            </div>
            <ButtonDefault label="OK" action={eventClick}/>
            <div>
                <ListCategories categories={list}/>
            </div>
        </PageDefault>
    )
}

export default Categories