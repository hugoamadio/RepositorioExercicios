class Animal {
  tipo: string;
  patas: number;
  dentes: boolean;
  nome: string | undefined;

  constructor(
    tipoParametro: string,
    patasParametro: number,
    dentesParametro: boolean,
    nomeParametro?: string | undefined
  ) {
    this.tipo = tipoParametro;
    this.patas = patasParametro;
    this.dentes = dentesParametro;
    this.nome = nomeParametro;
  }

  respirar() {
    console.log("Respirando...");
  }

  andar() {
    console.log("Andando...");
  }
}

export default Animal;
