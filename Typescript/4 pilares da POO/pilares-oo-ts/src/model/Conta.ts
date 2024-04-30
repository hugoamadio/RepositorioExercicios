//ENCAPSULAMENTO
class Conta extends ContaBanco {
  private saldo: number;
  protected numeroConta: number;

  constructor(numeroConta?: number) {
    super();
    this.saldo = 0;

    if (numeroConta) {
      this.numeroConta = numeroConta;
    } else {
      this.numeroConta = new Date().getTime();
    }
  }

  public deposito(valor: number) {
    this.saldo += valor;
  }

  public saque(valor: number) {
    this.saldo -= valor;
  }

  public retornaSaldo() {
    return this.saldo;
  }

  public retornaNumeroConta() {
    return this.numeroConta;
  }

  public aviso(): void {
    console.log("Conta normal.");
  }

  public imprimirConta(): void {
    console.log("Imprimindo...");
  }
}

export default Conta;
