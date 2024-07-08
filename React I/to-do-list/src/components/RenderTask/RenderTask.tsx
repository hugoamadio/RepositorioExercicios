import TaskDB from "../../database/taskDB"
import CheckIcon from '@mui/icons-material/Check';
import ButtonDefault from "../ButtonDefault/ButtonDefault";

interface RenderTaskProps{
    checkAction: (event: React.MouseEvent<HTMLButtonElement>, taskName: string) => void;
}

function RenderTask({checkAction}: RenderTaskProps){

    const tasksFalse = TaskDB.filter(task => task.status === false)
    const taskTrue = TaskDB.filter(task => task.status === true)

    return(
        <>
            {tasksFalse.map(task => (
                <div key={task.name} style={{border: '1px solid black', width: '520px', boxSizing: "border-box", padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: "row", margin: '10px'}}>
                    <div>
                        <h3>{task.name}</h3>
                        <p>{task.categorie}</p>
                        <p>{task.status}</p>
                        <p></p>
                    </div>
                    <div>
                        <ButtonDefault style={{border:'none'}} action={(event) => checkAction(event, task.name)}>
                            <CheckIcon color="success" fontSize="large"/>
                        </ButtonDefault>
                    </div>
                </div>
            ))}

            {taskTrue.map(task => (
                <div key={task.name} style={{border: '1px solid black', width: '520px', boxSizing: "border-box", padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'space-around', flexDirection: "column", margin: '10px'}}>
                    <h3 style={{textDecoration: 'line-through'}}>{task.name}</h3>
                    <p>{task.categorie}</p>
                    <p>{task.status}</p>
                    <p></p>
                </div>
            ))}
        </>
    )
}

export default RenderTask