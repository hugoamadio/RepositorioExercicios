interface BookType {
    id: number;
    titulo: string;
    autor: string;
    ano: number;
    data: string;
    genero: string;
    descricao: string;
}

const BooksDB: BookType[] = [
    {
        id: 1,
        titulo: "1984",
        autor: "George Orwell",
        ano: 1949,
        data: "08-06-1949",
        genero: "Distopia",
        descricao: "Uma obra que apresenta uma sociedade totalitária sob vigilância constante."
    },
    {
        id: 2,
        titulo: "Orgulho e Preconceito",
        autor: "Jane Austen",
        ano: 1813,
        data: "28-01-1813",
        genero: "Romance",
        descricao: "Um romance clássico sobre as complexidades do amor e da sociedade."
    },
    {
        id: 3,
        titulo: "O Grande Gatsby",
        autor: "F. Scott Fitzgerald",
        ano: 1925,
        data: "10-04-1925",
        genero: "Ficção",
        descricao: "Uma crítica à sociedade americana durante os anos 1920."
    },
    {
        id: 4,
        titulo: "Moby Dick",
        autor: "Herman Melville",
        ano: 1851,
        data: "18-10-1851",
        genero: "Aventura",
        descricao: "A saga do capitão Ahab em busca da grande baleia branca."
    },
    {
        id: 5,
        titulo: "Hamlet",
        autor: "William Shakespeare",
        ano: 1603,
        data: "01-01-1603",
        genero: "Tragédia",
        descricao: "Uma das maiores tragédias de Shakespeare, centrada no príncipe Hamlet."
    },
    {
        id: 6,
        titulo: "Dom Quixote",
        autor: "Miguel de Cervantes",
        ano: 1605,
        data: "16-01-1605",
        genero: "Ficção",
        descricao: "A história do cavaleiro errante Dom Quixote e seu fiel escudeiro Sancho Pança."
    },
    {
        id: 7,
        titulo: "Ulisses",
        autor: "James Joyce",
        ano: 1922,
        data: "02-02-1922",
        genero: "Ficção",
        descricao: "Uma narrativa complexa e rica que segue a jornada de um dia na vida de Leopold Bloom."
    },
    {
        id: 8,
        titulo: "A Metamorfose",
        autor: "Franz Kafka",
        ano: 1915,
        data: "01-01-1915",
        genero: "Ficção",
        descricao: "A história de Gregor Samsa, que acorda transformado em um inseto gigante."
    },
    {
        id: 9,
        titulo: "O Apanhador no Campo de Centeio",
        autor: "J.D. Salinger",
        ano: 1951,
        data: "16-07-1951",
        genero: "Ficção",
        descricao: "A jornada de Holden Caulfield por Nova York após ser expulso da escola preparatória."
    },
    {
        id: 10,
        titulo: "Cem Anos de Solidão",
        autor: "Gabriel Garcia Marquez",
        ano: 1967,
        data: "05-06-1967",
        genero: "Realismo Mágico",
        descricao: "A história épica da família Buendía na cidade fictícia de Macondo."
    },
    {
        id: 11,
        titulo: "A Revolução dos Bichos",
        autor: "George Orwell",
        ano: 1945,
        data: "17-08-1945",
        genero: "Distopia",
        descricao: "Uma sátira política sobre uma revolução animal que dá errado."
    },
    {
        id: 12,
        titulo: "O Sol é para Todos",
        autor: "Harper Lee",
        ano: 1960,
        data: "11-07-1960",
        genero: "Ficção",
        descricao: "A luta contra a injustiça racial no sul dos Estados Unidos."
    },
    {
        id: 13,
        titulo: "A Montanha Mágica",
        autor: "Thomas Mann",
        ano: 1924,
        data: "01-01-1924",
        genero: "Ficção",
        descricao: "Uma exploração profunda da condição humana e da sociedade europeia."
    },
    {
        id: 14,
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        ano: 1954,
        data: "29-07-1954",
        genero: "Fantasia",
        descricao: "A épica aventura de Frodo e seus amigos na Terra Média."
    }
]

export default BooksDB;
