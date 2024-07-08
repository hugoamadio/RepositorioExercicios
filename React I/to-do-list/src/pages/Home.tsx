    import React, { useState } from "react"
    import ButtonDefault from "../components/ButtonDefault/ButtonDefault"
    import Modal from "../components/Modal/Modal"
import TaskDB from "../database/taskDB"
import RenderTask from "../components/RenderTask/RenderTask"

    function Home(){
        const [newTask, setNewTask] = useState<boolean>(false)
        const [nameTask, setNameTask] = useState<string>('')
        const [categorie, setCategorie] = useState<string>('work')
        const [status, setStatus] = useState<boolean>(false)
        const [nameHolder, setNameHolder] = useState<string>('')

        function openModal(event: React.MouseEvent<HTMLButtonElement>){
            event.preventDefault()
            setNewTask(true)
        }

        function closeModal(event: React.MouseEvent<HTMLButtonElement>){
            event.preventDefault()
            setNewTask(false)
        }

        function checkTask(event: React.MouseEvent<HTMLButtonElement>,taskName: string){
            event.preventDefault()
            setNameHolder(taskName)
            const holderName = TaskDB.findIndex(task => task.name === taskName)
            if(holderName !== -1){
                TaskDB[holderName].status = true
            }
        }

        function createTask(event: React.MouseEvent<HTMLButtonElement>){
            event.preventDefault()
            TaskDB.push({
                name: nameTask,
                categorie: categorie,
                status: status
            })
            closeModal(event)
            setNameTask('')

        }

        function handleNameChange(event: React.ChangeEvent<HTMLInputElement>){
            setNameTask(event.target.value)
        }
        
        function handleCategorie(event: React.ChangeEvent<HTMLSelectElement>){
            setCategorie(event.target.value)
        }

        function handleStatus(event: React.ChangeEvent<HTMLInputElement>){
            setStatus(event.target.value === 'completed')
        }

        return(
            <>
            <form className="form-primary">
                <div style={{width: '99%', display: 'flex',justifyContent: 'end', marginBottom:'30px'}}>
                    <ButtonDefault width="150px" bgColor="#00ed00" hoverColor="#00ff00" action={openModal}>Nova Tarefa</ButtonDefault>
                </div>
                <div>
                <RenderTask checkAction={checkTask}/>
                </div>

            </form>
            {newTask && <Modal>
                            <div style={{marginBottom: '30px'}}>
                                    <h2>Nova Tarefa</h2>
                            </div>
                                <div>
                                    <label>Nome: </label>
                                    <input type="text" value={nameTask} onChange={handleNameChange}/>
                                </div>
                                <div>
                                    <label>Categoria: </label>
                                    <select value={categorie} onChange={handleCategorie}>
                                        <option value="Trabalho">Trabalho</option>
                                        <option value="Estudos">Estudos</option>
                                        <option value="Outros">Outros</option>
                                    </select>
                                </div>
                                <div style={{width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', gap: '30px'}}>
                                    <label>Status:</label>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <div>
                                            <input type="radio" name="status" value='completed' onChange={handleStatus} />
                                            <label>Concluída</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="status" value="open" onChange={handleStatus} />
                                            <label>Em Aberto</label>
                                        </div>

                                    </div>
                                </div>
                                <div style={{display: 'flex',gap: '20px', marginTop: '25px'}}>
                                    <ButtonDefault bgColor="#ff0000" width="80px" hoverColor="#ff0000ba" action={closeModal}>Fechar</ButtonDefault>
                                    <ButtonDefault bgColor="#00ed00" width="120px" hoverColor="#00ff00" action={createTask}>Cadastrar</ButtonDefault>
                                </div>
                        </Modal>}
            </>
        )
    }

    export default Home