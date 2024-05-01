import Ingresso from "./Ingresso";

class Normal extends Ingresso {
    constructor(){
        super(50)
    }
    imprimeValor(): void {
        console.log(this.valor);
    }
}

export default Normal