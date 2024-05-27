import Biblioteca from "./model/Biblioteca";
import Funcionario from "./model/Funcionario";
import Livro from "./model/Livro";
import Usuario from "./model/Usuario";



const biblioteca = new Biblioteca()

const livroHarryPotter = new Livro('Harry Potter', "JK Holing", 1997)
const livroGalinhaPintadinha = new Livro('Galinha Pintadinha', 'almir sater', 2005)
const livroSaciPerere = new Livro('Saci Perere', "monteiro lobato", 2001)

const funcionario = new Funcionario('hugo', true, biblioteca)
const usuario = new Usuario('hugo')

funcionario.adicionarLivro(livroHarryPotter)
funcionario.adicionarLivro(livroGalinhaPintadinha)
funcionario.adicionarLivro(livroSaciPerere)
funcionario.removerLivro('Harry Potter')
biblioteca.listarLivrosDisponiveis()
biblioteca.registrarUsuario(new Usuario('antonio'))
biblioteca.registrarUsuario(new Usuario('jão'))
biblioteca.registrarUsuario(new Usuario('toninho'))
biblioteca.usuarios.forEach(user => console.log(user))
biblioteca.buscarLivroPorTitulo('Saci Perere')
biblioteca.emprestarLivro('Saci Perere')
biblioteca.buscarLivroPorTitulo('Saci Perere')
biblioteca.emprestarLivro('Saci Perere')
funcionario.
