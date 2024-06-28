class heroi {
    constructor (paramNome, paramAtaque, paramTipo){
        this.nome = paramNome;
        this.tipo = paramTipo;
        this.ataque = paramAtaque;
    }

    atacar () {
        console.log (`o ${this.tipo} chamado ${this.nome} atacou usando ${this.ataque}`)
    }
}
    
    let heroi1 = new heroi ("Conan", "espada", "Guerreiro")
    let heroi2 = new heroi ("Gandalf", "magia", "Mago")
    let heroi3 = new heroi ("Kung Lao", "artes marciais", "Monge")
    let heroi4 = new heroi ("Hanzo", "shuriken", "Ninja")

    
    


    heroi1.atacar()
    heroi2.atacar()
    heroi3.atacar()
    heroi4.atacar()