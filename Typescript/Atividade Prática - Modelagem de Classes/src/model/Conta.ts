class Conta {
    numeroConta: number
    nomeCorrentista: string
    saldo: number

    constructor(conta: number, nome: string, saldo = 0){
        this.numeroConta = conta
        this.nomeCorrentista = nome
        this.saldo = saldo
    }

    alterarNome(newName: string){
        this.nomeCorrentista = newName
        console.log(`Nome alterado para ${this.nomeCorrentista}`)
    }

    deposito(valorDep: number){
        this.saldo += valorDep
    }

    saque(valorSaq: number){
        if(valorSaq > this.saldo){
            console.log("Não é possivel realizar o saque pois o saldo é insuficiente");
        }else{
            this.saldo -= valorSaq
            console.log("Saque realizado com sucesso!");
            
        }
    }

    consultarSaldo(){
        console.log(`Saldo da conta: ${this.saldo}`);
        
    }
}

export default Conta