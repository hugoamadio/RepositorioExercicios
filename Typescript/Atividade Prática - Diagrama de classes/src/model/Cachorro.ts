import Animal from "./Animal";

class Cachorro extends Animal {
  especie: string;
  numeroPatas: number;
  temRabo: boolean;

  constructor(especie: string, numeroPatas: number, temRabo: boolean) {
    super(especie, numeroPatas, temRabo);
    this.especie = especie;
    this.numeroPatas = numeroPatas;
    this.temRabo = temRabo;
  }

  andar(): void {
    console.log("O Cachorro está andando...");
  }

  beberAgua(): void {
    console.log("O Cachorro está bebendo água...");
  }

  emitirSom(): void {
    console.log("O Cachorro está emitindo som...");
  }

  rolar(){
    console.log("O Cachorro está rolando...");
  }
}

export default Cachorro