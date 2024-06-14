import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import DivMar from "../Components/DivMar";
import ElementIcon from '../Components/ElementIcon/ElementIcon';
import DivFlexColumn from '../Components/ElementIcon/DivFlexColumn';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

function Home(){
    return(
        <>
                < DivMar text="Minha primeira página com React."/>
                <DivFlexColumn>
                    <ElementIcon icon={<DesktopWindowsOutlinedIcon/>} subTitle="Vamos aprender, como utilizar um framework." title="Somente para desktop"/>
                    <ElementIcon icon={<FilterNoneOutlinedIcon/>} subTitle="Utilizando o Styled Components." title="Criando com componentes"/>
                    <ElementIcon icon={<CheckCircleOutlinedIcon/>} subTitle='Estamos no caminho.' title='Facíl aproveitamento'/>
                </DivFlexColumn>
                
        </>
    )
}

export default Home