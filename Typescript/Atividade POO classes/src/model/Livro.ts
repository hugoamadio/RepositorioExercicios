class Livro{
    public titulo: string
    private autor: string
    private anoPublicação: number
    private disponivel: boolean

    constructor(titulo: string, autor: string, ano:number, disponivel: boolean = true){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicação = ano
        this.disponivel = disponivel
    }

    emprestar(){
        if(this.disponivel == true){
            this.disponivel = false
        } else {
        }
    }

    devolver(){
        this.disponivel = true
    }
}

export default Livro