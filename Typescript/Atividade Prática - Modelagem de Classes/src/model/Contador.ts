class Contador {
    contador: number

    constructor(contador = 0){
        this.contador = contador
    }

    incrementar(){
        this.contador++
    }

    imprimir(){
        console.log(this.contador);
    }

    zerar(){
        this.contador = 0
    }

    decrementar(){
        this.contador--
    }
}

export default Contador