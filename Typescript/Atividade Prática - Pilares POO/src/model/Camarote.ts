import Ingresso from "./Ingresso";

class Camarote extends Ingresso{
    adicional: number;

    constructor(adicional:number){
        super(50)
        this.adicional = adicional
    }

    imprimeValor(): void {
        console.log(this.valor + this.adicional);
    }
}

export default Camarote