class Produto {
  id: number;
  nome: string;
  preco: number;
  ativo: boolean;
  estoque: number | 0;

  constructor(nome: string, preco: number, ativo = true, estoque = 0) {
    this.id = new Date().getTime();
    this.nome = nome;
    this.preco = preco;
    this.ativo = ativo;
    this.estoque = estoque;
  }

  desativar() {
    this.ativo = false;
    console.log("Produto desativado com sucesso.");
  }

  ativar() {
    this.ativo = true;
    console.log("Produto ativado com sucesso.");
  }

  imprimir() {
    console.log(`Id: ${this.id}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco}`);
    console.log(`Ativo: ${this.ativo ? "Sim" : "Não"}`);
    console.log(`Estoque: ${this.estoque}`);
    
  }

  alterarPreco(novoPreco: number) {
    this.preco = novoPreco;
  }

  aumentar(){
    this.estoque ++
  }

  diminuir(){
    if(this.estoque < 1){
      console.log("Não é possivel diminuir o estoque");
    } else {
      this.estoque --
      console.log("Estoque alterado!!")
    }
  }

  aumentarPorQuantidade(qnt: number) {
    this.estoque += qnt
  }

  diminuirQuantidade(qnt: number) {
    if(this.estoque < qnt){
      console.log("Não é possivel diminuir o estoque");
    } else {
      this.estoque -= qnt
      console.log("Estoque alterado!!")
    }
  }
}

export default Produto;
