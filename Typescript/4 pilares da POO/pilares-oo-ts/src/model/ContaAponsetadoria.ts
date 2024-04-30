class ContaAposentadoria extends ContaBanco {
  private saldo: number;
  protected numeroConta: number;

  constructor() {
    super();
    this.saldo = 0;

    this.numeroConta = new Date().getTime();
  }

  aviso(): void {
    console.log("Conta Aposentadoria.");
  }

  imprimirConta(): void {
    console.log("Imprimir apo...");
  }
}
