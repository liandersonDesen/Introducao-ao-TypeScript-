class BankAccount {
    
    private balance : number

    constructor(inicialBalance:number){
        this.balance = inicialBalance
    }

    getBalance():string {
        return `O saldo atual é : ${this.balance}`
    }
    Depositar(valor:number):string{
        if(valor>0){
            this.balance += valor
            return `O saldo atualizado é :${this.balance}`
        }else{
            return `Valor não aceito`
        }
    }
    
    Saque(valor:number):string{
        if(valor>0){
            this.balance -= valor
            return `O saldo atualizado é :${this.balance}`
        }else{
            return `Valor não aceito`
        }
    }
    
}

const contaBancaria1 = new BankAccount(100.00)

//Mostrar o saldo
console.log(contaBancaria1.getBalance())

//Depositar 100 na conta
console.log(contaBancaria1.Depositar(100))

//Saque de 50
console.log(contaBancaria1.Saque(-50))
