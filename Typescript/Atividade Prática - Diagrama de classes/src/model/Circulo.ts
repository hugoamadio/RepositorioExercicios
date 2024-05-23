import FormatoDeDesenhos from "./FormatoDeDesenho";

class Circulo extends FormatoDeDesenhos {
    private raio: number

    constructor(raio: number){
        super()
        this.raio = raio
    }

    desenhar(): void {
        console.log(`Desenhando um circulo de raio ${this.raio}...`);
    }
    
    redimensionar(): void {
        console.log(`Redimensionando o circulo...`);
    }
}

export default Circulo