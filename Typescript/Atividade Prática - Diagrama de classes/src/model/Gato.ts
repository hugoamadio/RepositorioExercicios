import Animal from "./Animal";

class Gato extends Animal {
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
    console.log("O Gato está andando...");
  }

  beberAgua(): void {
    console.log("O Gato está bebendo água...");
  }

  emitirSom(): void {
    console.log("O Gato está emitindo som...");
  }

  brincar(){
    console.log("O gato está brincando");
  }
}

export default Gato