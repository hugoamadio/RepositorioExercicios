abstract class Animal {
  qntPatas: number;
  temRabo: boolean;
  temPelo: boolean;
  constructor(patas: number, rabo: boolean, pelo: boolean) {
    this.qntPatas = patas;
    this.temRabo = rabo;
    this.temPelo = pelo;
  }
  abstract andar(): void;

  abstract comer(): void;

  abstract beberAgua(): void;
}

export default Animal