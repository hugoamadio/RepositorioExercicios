import FormatoDeDesenhos from "./FormatoDeDesenho";

class Retangulo extends FormatoDeDesenhos{
    private comprimento: number
    private altura: number

    constructor(comprimento: number, altura: number){
        super()
        this.comprimento = comprimento
        this.altura = altura
    }

    desenhar(): void {
        console.log(`Desenhando um retangulo com comprimento:${this.comprimento} e altura:${this.altura}`);
    }

    redimensionar(): void {
        console.log("Redimensionando o retangulo...");
        
    }
}

export default Retangulo