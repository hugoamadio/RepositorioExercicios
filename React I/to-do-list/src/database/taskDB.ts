interface task{
    name: string,
    categorie: string,
    status: boolean
}

const TaskDB: task[] = [
    {
        name: 'fazer pix',
        categorie: 'Trabalho',
        status: false
    },
    {
        name: 'pagar internet',
        categorie: 'Outros',
        status: false
    },
    {
        name: 'terminar relatório',
        categorie: 'Trabalho',
        status: false
    },
    {
        name: 'ler capítulo do livro',
        categorie: 'Estudos',
        status: false
    },
    {
        name: 'organizar documentos',
        categorie: 'Outros',
        status: false
    }
]

export default TaskDB