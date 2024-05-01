import Imovel from "./Imovel";

class Velho extends Imovel{
    desconto: number
    constructor(desc: number){
        super("Joaquim Lopes", 400000)
        this.desconto = desc
    }

    imprimeValor(): void {
        console.log(`O valor do imóvel é de ${this.preco - this.desconto}`);
    }

    imprimeDesconto(){
        console.log(`O valor do desconto do imóvel é ${this.desconto}`);
    }
}

export default Velho