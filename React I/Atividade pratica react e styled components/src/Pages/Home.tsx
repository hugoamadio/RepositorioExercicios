
import DivMar from "../Components/DivMar";
import ElementIcon from '../Components/ElementIcon/ElementIcon';
import DivFlexColumn from '../Components/DivFlexColumn/DivFlexColumn';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import LoremIpsum from "../Components/LoremIpsum.tsx/LoremIpsum";
import YellowPhone from "../assets/yellow-phone.jpg"
import ImageComponent from "../Components/ImageComponent/ImageComponent";
import CodeImage from "../assets/code-image.jpg"
import image from "../assets/crianca.webp"
import Footer from "../Components/FooterComponent/Footer";


function Home(){
    return(
        <>
                < DivMar text="Minha primeira página com React."/>
                <DivFlexColumn style={{backgroundColor: '#F8F9FB'}}>
                    <ElementIcon icon={<DesktopWindowsOutlinedIcon color="primary" style={{ fontSize: '60px' }}/>} title='Somente para desktop' subTitle='Vamos aprender, como utilizar um framework.'/>
                    <ElementIcon icon={<FilterNoneOutlinedIcon color="primary" style={{ fontSize: '60px' }}/>} title="Criado com componentes" subTitle="Utilizamos o Styled Components."/>
                    <ElementIcon icon={<CheckCircleOutlinedIcon color="primary" style={{ fontSize: '60px' }}/>} title="Facíl aproveitamento" subTitle="Estamos no caminho."/>
                </DivFlexColumn >
                <DivFlexColumn>
                    <LoremIpsum>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quam nobis facere, non dignissimos soluta incidunt quasi illo accusantium quibusdam pariatur commodi molestiae aliquid. Quod quidem magnam veritatis nihil quibusdam?
                        Consectetur corporis harum suscipit cum minima voluptatibus inventore odio vero amet distinctio officia sed dicta tempora, neque nisi adipisci impedit voluptatum voluptatem. Voluptates ut fuga dolor recusandae, sed ad est.
                        Autem quia reprehenderit velit, ex perferendis quibusdam voluptatum sed voluptate tempora culpa aliquam pariatur nam hic suscipit quaerat? Quibusdam ducimus illum, magnam vitae corporis ipsa! Voluptates ad impedit fugiat ut?
                        Corporis, possimus porro? Ab ipsam saepe, sed ex quo veniam perferendis quibusdam ut provident aut ea adipisci similique facilis libero natus impedit ducimus fugit quis error? Repudiandae, cupiditate! Sed, quis.</p>
                    </LoremIpsum>
                    <ImageComponent imgSrc={YellowPhone}/>
                </DivFlexColumn>
                <DivFlexColumn>
                    <ImageComponent imgSrc={CodeImage}/>
                    <LoremIpsum>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quam nobis facere, non dignissimos soluta incidunt quasi illo accusantium quibusdam pariatur commodi molestiae aliquid. Quod quidem magnam veritatis nihil quibusdam?
                        Consectetur corporis harum suscipit cum minima voluptatibus inventore odio vero amet distinctio officia sed dicta tempora, neque nisi adipisci impedit voluptatum voluptatem. Voluptates ut fuga dolor recusandae, sed ad est.
                        Autem quia reprehenderit velit, ex perferendis quibusdam voluptatum sed voluptate tempora culpa aliquam pariatur nam hic suscipit quaerat? Quibusdam ducimus illum, magnam vitae corporis ipsa! Voluptates ad impedit fugiat ut?
                        Corporis, possimus porro? Ab ipsam saepe, sed ex quo veniam perferendis quibusdam ut provident aut ea adipisci similique facilis libero natus impedit ducimus fugit quis error? Repudiandae, cupiditate! Sed, quis.</p>
                    </LoremIpsum>
                </DivFlexColumn>
                <DivFlexColumn>
                    <LoremIpsum>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quam nobis facere, non dignissimos soluta incidunt quasi illo accusantium quibusdam pariatur commodi molestiae aliquid. Quod quidem magnam veritatis nihil quibusdam?
                        Consectetur corporis harum suscipit cum minima voluptatibus inventore odio vero amet distinctio officia sed dicta tempora, neque nisi adipisci impedit voluptatum voluptatem. Voluptates ut fuga dolor recusandae, sed ad est.
                        Autem quia reprehenderit velit, ex perferendis quibusdam voluptatum sed voluptate tempora culpa aliquam pariatur nam hic suscipit quaerat? Quibusdam ducimus illum, magnam vitae corporis ipsa! Voluptates ad impedit fugiat ut?
                        Corporis, possimus porro? Ab ipsam saepe, sed ex quo veniam perferendis quibusdam ut provident aut ea adipisci similique facilis libero natus impedit ducimus fugit quis error? Repudiandae, cupiditate! Sed, quis.</p>
                    </LoremIpsum>
                    <ImageComponent imgSrc={image}/>
                </DivFlexColumn>
                <DivMar style={{height: '200px'}} text="Contato"/>
                <Footer subText="teste"></Footer>
                
        </>
    )
}

export default Home