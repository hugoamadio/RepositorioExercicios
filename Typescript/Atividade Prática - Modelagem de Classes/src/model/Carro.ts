class Carro{
    consumo: number
    qntTanque: number
    
    constructor(consumo:number, qntTanque = 0){
        this.consumo = consumo
        this.qntTanque = qntTanque
    }

    andar(distancia:number){
        const placeholder = distancia / this.consumo
        if(this.qntTanque >= placeholder){
            this.qntTanque -= placeholder
            console.log(`Andando por ${distancia.toFixed(2)}Km...`);
            console.log(`Consumo de: ${placeholder.toFixed(2)} litros`);
            console.log(`Restam no tanque ${this.qntTanque.toFixed(2)} litros`);
        } else {
            console.log("Não há combustivel suficiente");
            
        }
    }

    adicionarGasolina(qnt:number){
        this.qntTanque = qnt
        console.log(`Foi adicionado ao tanque ${qnt} litros de combustivel`);
    }

    obterGasolina(){
        console.log(`Tanque: ${this.qntTanque}`);
        
    }
}

export default Carro