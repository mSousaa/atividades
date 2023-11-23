class Pessoa{
    constructor(nome,cpf,sexo){
        this.nome = nome
        this.cpf = cpf
        this.sexo = sexo
    }

    getNome(){
        console.log(this.nome)
    }

    getCpf(){
        console.log(this.cpf)
    }
}

const pessoa1 = new Pessoa('Maria', 3189231312, "Feminino")
const pessoa2 = new Pessoa('Joao', 8242994823, "Masculino")

pessoa1.getNome()
pessoa2.getCpf()

class ListaLigada{
    constructor(value){
        this.value = value
        this.ant = null
        this.prox = null
    }
    ultimoItem(){
        let item = this
        while(item.prox != null){
            item = item.prox
        }
        return item
    }
    addItem(valor){
        const novoItem = new ListaLigada(valor)
        let ultimoItem = this.ultimoItem()
        ultimoItem.prox = novoItem
        novoItem.ant = ultimoItem
    }
    exibirUltimoItem(){
        let ultimoItem = this.ultimoItem()
        console.log(ultimoItem)
    }
    primeiroItem(){
        let item = this
        while(item.ant != null){
            item = item.ant
        }
        return item
    }
    exibirPrimeiroItem(){
        let primeiroItem = this.primeiroItem()
        console.log(primeiroItem)
    }
    removerItem(posicao){
        let item = this
        let contador = 1
        while(item.prox != null){
            if(contador === posicao){
                item.prox = item.prox.prox
                item.prox.ant = item
            }
            item = item.prox
            contador++
        }
    }
    mostrarTodos(){
        let item = this.primeiroItem()
        while(item != null){
            console.log(item.value)
            item = item.prox
        }
    }
}
const listaPrincipal = new ListaLigada(1) 
listaPrincipal.addItem(10)
listaPrincipal.addItem(20) 
listaPrincipal.addItem(30) 
listaPrincipal.addItem(40) 
listaPrincipal.addItem(50)
listaPrincipal.removerItem(2)
listaPrincipal.mostrarTodos()