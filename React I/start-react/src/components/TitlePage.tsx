interface TitlePageProps {
    title:string;
}

function TitlePage({title}:TitlePageProps){
    return <h1 style={{color: "blueviolet"}}>{title}</h1>
}

export default TitlePage