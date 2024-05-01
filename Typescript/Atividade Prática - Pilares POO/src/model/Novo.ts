import Imovel from "./Imovel";

class Novo extends Imovel{
    adicional:number
    constructor(adicional:number){
        super("Getulio Vargas", 400000)
        this.adicional = adicional
    }
    imprimeValor(): void {
        console.log(`O valor do imóvel é de ${this.preco + this.adicional}`);
    }
    imprimeAdicional(){
        console.log(`O valor do adicional do imóvel é ${this.adicional}`);
        
    }
}

export default Novo