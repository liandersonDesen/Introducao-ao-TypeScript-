class caixaEletronico{
    private saldo : number;

    constructor(saldo:number){
        this.saldo = saldo
    }
    getBalance():string {
        return `O saldo atual é : ${this.saldo}`
    }
    Depositar(valor:number):string{
        if(valor>0){
            this.saldo += valor
            return `O saldo atualizado é :${this.saldo}`
        }else{
            return `Valor não aceito`
        }
    }
    
    Saque(valor:number):string{
        if(valor>0 && this.saldo>valor){
            this.saldo -= valor
            return `O saldo atualizado é :${this.saldo}`
        }else{
            return `Valor não aceito`
        }
    }
    
}

const conta= new caixaEletronico(100.00)
console.log(conta.Saque(200))
console.log(conta.Saque(-200))
console.log(conta.Saque(0))
console.log(conta.Saque(50))

console.log(conta.Depositar(100))
console.log(conta.Depositar(-100))