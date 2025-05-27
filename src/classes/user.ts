let log = console.log
class User {
    //Atributos
    name:string;
    age:number;

    //Construtor
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;

    }
    //metodo
    greet():string{
        return `Olá, eu sou o ${this.name}.
        E minha idade é ${this.age}`
    }
}

const user1 = new User("carlos",12)
const user2 = new User('Jonas', 30)
console.log(user1.greet())
log(user2.greet());
