import Conta from "./Conta";

class ContaKids extends Conta {
  private numeroContaKids: string;
  private limite: number;

  constructor(contaPai: number, limite: number) {
    super();
    this.limite = limite;

    this.numeroContaKids = new Date().getTime() + "-K";
  }

  public imprimirContaKids() {
    console.log("Conta pai: ", this.numeroConta);
    console.log("Limite: ", this.limite);
    console.log("Saldo: ", this.retornaSaldo());
  }

  public aviso(): void {
    console.log("Conta Kids");
  }

  public imprimirConta(): void {
    console.log("Imprimindo...");
  }
}

export default ContaKids;
