import Animal from "./Animal";

class Cavalo extends Animal {
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
    console.log("O cavalo está andando...");
  }

  beberAgua(): void {
    console.log("O cavalo está bebendo água...");
  }

  emitirSom(): void {
    console.log("O cavalo está emitindo som...");
  }

  comerCapim(){
    console.log("O cavalo está comendo capim");
  }
}

export default Cavalo