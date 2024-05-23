abstract class Animal{
    public especie: string
    public numeroPatas: number
    public temRabo: boolean

    constructor(especie: string, numeroPatas:number, temRabo:boolean){
        this.especie = especie
        this.numeroPatas = numeroPatas
        this.temRabo = temRabo
    }

    abstract andar(): void

    abstract beberAgua(): void

    abstract emitirSom(): void
}

export default Animal