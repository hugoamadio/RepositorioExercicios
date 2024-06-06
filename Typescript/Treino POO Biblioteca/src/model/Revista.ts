import RevistaType from "../types/revistaType";
import ItemBiblioteca from "./ItemBiblioteca";

class Revista extends ItemBiblioteca{
    edicao?: string

    constructor(revista: RevistaType){
        super(revista.titulo, true)
        this.edicao = revista.edicao
    }
}

export default Revista