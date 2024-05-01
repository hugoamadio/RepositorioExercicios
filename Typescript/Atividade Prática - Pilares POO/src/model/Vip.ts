import Ingresso from "./Ingresso";

class Vip extends Ingresso{
    valorVIP:number
    constructor(adicionalVIP: number){
        super(50)
        this.valorVIP = adicionalVIP
    }

    imprimeValor(): void {
        console.log(this.valor + this.valorVIP);
    }
}

export default Vip