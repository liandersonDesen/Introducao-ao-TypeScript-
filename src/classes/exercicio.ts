class ProdutoClass {
    nome: string;
    preco: number;
    estoque: number;

    constructor(nome: string,preco: number,estoque: number){
        this.nome = nome,
        this.preco = preco,
        this.estoque = estoque
    }

    comprar(quantidade:number): string{
        this.estoque -= quantidade
        return `A compra do produto ${this.nome} foi exefuatada com sucesso... Agora o estoque tem ${this.estoque}`
    }
    
    repor(quantidade:number): string{
        this.estoque += quantidade
        return `A reposição do produto ${this.nome} foi exefuatada com sucesso... Agora o estoque tem ${this.estoque}`
    }
}

const produto1=new ProdutoClass("arroz",10,120)
const produto2=new ProdutoClass("feijao",15,100)

console.log(produto1.comprar(10));
console.log(produto1.repor(5));
console.log(produto2.comprar(20));
console.log(produto2.repor(5));

