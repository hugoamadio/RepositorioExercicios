// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados

// Escolha uma das opções para interagir com o sistema:

// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes
// dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que
// armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este
// identificador deve ser gerado de forma automática

// 2 - Listar todos os veículos
// -> Ao entrar nesta opção o sistema deve listar os veículos
// com o seguinte layout:
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000

// 3 - Filtrar veículos por marca
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar a marca que quer filtrar
// -> Deve ser listado os veículos que forem da mesma marca
// -> A lista deve ter o seguinte layout:
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000

// 4 - Atualizar veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve permitir que o usuário
// atualize somente a cor e o preço.

// 5 - Remover veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve remover o veículo

// 6 - Sair do sistema

// Regras:
// - Os dados de um veículo são: identificador, modelo, marca,
// ano, cor, preco

// - A opção de filtro deve ser por marca e ordenada pelo preco
// - A lista de veículos deve estar ordenada pelo preco.
// - Só deve ser possível atualizar a cor e o preço do veículo.



let listaVeiculos = []
var condicaoDeParada = true
let identificador = 1

console.log("1 - Cadastrar veículo");
console.log("2 - Listar todos os veículos");
console.log("3 - Filtrar veículos por marca");
console.log("4 - Atualizar veículo");
console.log("5 - Remover veículo");
console.log("6 - Sair do sistema");
console.log("-------------------------------------------")
while (condicaoDeParada) {
    let opcao = Number(prompt("Digite a opção desejada"))
    switch (opcao) {
        case 1:
            cadastrarVeiculo()
            break;

        case 2:
            mostrarVeiculos()
            break;

        case 3:
            filtrar()
            break;

        case 4:
            atualizarVeiculo()
            break;

        case 5:
            removerVeiculo()
            break;

        case 6:
            condicaoDeParada = false
            break;

        default:
            break;
    }
}


function cadastrarVeiculo() {
    let veiculo = {}
    veiculo.id = identificador++
    veiculo.modelo = prompt("Digite o modelo do veículo")
    veiculo.marca = prompt("Digite a marca")
    veiculo.ano = Number(prompt("Digite o ano"))
    veiculo.cor = prompt("Digite a cor")
    veiculo.preco = Number(prompt("Digite o preço"))
    listaVeiculos.push(veiculo)

}

function mostrarVeiculos() {
    console.log(listaVeiculos)
}

function filtrar() {
    let marcaCarro = prompt("Deseja filtrar os carros por qual marca?")
    let novoArray = listaVeiculos.filter((veiculo) => veiculo.marca == marcaCarro)
    console.log(novoArray)
}

function atualizarVeiculo() {
    let entradaIdentificador = Number(prompt("Digite o ID do veículo"))
    let veiculo = listaVeiculos.find(veiculo => veiculo.id == entradaIdentificador)
    if (veiculo) {
        veiculo.cor = prompt("Digite a nova cor")
        veiculo.preco = Number(prompt("Digite o novo preco"))
        console.log(veiculo)
    } else {
        console.log("Veiculo Não encontrado")
    }
}

function removerVeiculo() {
    let entradaIdentificadorRemover = Number(prompt("Digite o ID do veículo"))
    let indexVeiculo = listaVeiculos.findIndex(veiculo => veiculo.id == entradaIdentificadorRemover)
    console.log(indexVeiculo)
    if(indexVeiculo >= 0){
        listaVeiculos.splice(indexVeiculo,1)
        console.log("Veículo Removido")
    } else {
        console.log("Veículo não encontrado")
    }
}