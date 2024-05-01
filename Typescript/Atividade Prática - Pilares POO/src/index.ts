import Cachorro from "./model/Cachorro";
import Camarote from "./model/Camarote";
import Cavalo from "./model/Cavalo";
import Gato from "./model/Gato";
import Normal from "./model/Normal";
import Novo from "./model/Novo";
import Velho from "./model/Velho";
import Vip from "./model/Vip";

// const ingressoNormal = new Normal()
// ingressoNormal.imprimeValor()

// const ingressoVip = new Vip(100)
// ingressoVip.imprimeValor()

// const ingressoCamarote = new Camarote(300)
// ingressoCamarote.imprimeValor()

// const imovelNovo = new Novo(60000)
// imovelNovo.imprimeValor()
// imovelNovo.imprimeAdicional()

// const imovelVelho = new Velho(25000)
// imovelVelho.imprimeValor()
// imovelVelho.imprimeDesconto()

const cachorro = new Cachorro('leila')
cachorro.andar()
cachorro.beberAgua()
cachorro.comer()
cachorro.latir()
cachorro.mostrarNome()
cachorro.alterarNome('catarina')
cachorro.mostrarNome()

const gato = new Gato('fred')
gato.andar()
gato.beberAgua()
gato.comer()
gato.miar()
gato.mostrarNome()
gato.alterarNome('bento')
gato.mostrarNome()

const cavalo = new Cavalo('neto')
cavalo.andar()
cavalo.beberAgua()
cavalo.comer()
cavalo.relinchar()
cavalo.mostrarNome()
cavalo.alterarNome('ferradura')
cavalo.mostrarNome()