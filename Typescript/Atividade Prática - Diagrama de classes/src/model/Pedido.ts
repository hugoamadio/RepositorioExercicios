import Item from "./Item";

class Pedido {
    public itens: Item[];
    public valorTotal: number;

    constructor(itens: Item[], valorTotal: number){
        this.itens = itens
        this.valorTotal = valorTotal
    }
}

export default Pedido