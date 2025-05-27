interface Produto{
    id: number;
    nome: string;
    preco: number;
    emEstoque?: boolean; // Propriedade opcional
}

function exibirProduto(produto: Produto) {
    console.log(`
    Produto nº ${produto.id}
    Nome: ${produto.nome}
    Preço: ${produto.preco}
    Em estoque: ${produto.emEstoque ? 'Sim' : 'Não'}
    `);
}

exibirProduto({
    id: 1,
    nome: 'lapis', 
    preco: 5.00, 
    emEstoque: true 
});