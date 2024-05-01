import Animal from "./Animal";

class Cachorro extends Animal{
    nome: string

    constructor(nome:string){
        super(4,true,true)
        this.nome = nome
    }
    andar(): void {
        console.log("Andando...");
    }
    comer(): void {
        console.log("Comendo...");
    }
    beberAgua(): void {
        console.log("Bebendo água...");
    }
    latir(){
        console.log("Latindo...");
    }
    mostrarNome(){
        console.log(this.nome);
    }
    alterarNome(novoNome:string){
        this.nome = novoNome
        console.log(`Nome alterado para ${this.nome}`);
    }
}

export default Cachorro