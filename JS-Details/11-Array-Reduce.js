const produtos = [
    {
        descricao: "Camiseta hora de aventura",
        preco: 29.99,
        categoria: "Roupas",
        perfil: "M",
        quantidade: 10,
        promocao: true
    },
    
    {
        descricao: "Camiseta preta",
        preco: 39.99,
        categoria: "Roupas",
        perfil: "F",
        quantidade: 20,
        promocao: true
    },
    
    {
        descricao: "Camiseta regata branca",
        preco: 59.99,
        categoria: "Roupas",
        perfil: "M",
        quantidade: 12,
        promocao: false
    },
    
    {
        descricao: "Camiseta regata muscle",
        preco: 69.99,
        categoria: "Roupas",
        perfil: "F",
        quantidade: 15,
        promocao: false
    }
    
];

//reduz o array a um unico elemento, No caso um somatorio, por exemplo:
let totalPreco = 0;
let totalEstoque = estoque.reduce((total, produto) => {
    totalPreco += produto.preco;
    return total + produto.quantidade;
}, 0); 
console.clear
console.log(`Voce tem um total de ${totalEstoque} produtos no estoque`);
console.log(`O valor total do seu estoque é de R$${totalPreco.toFixed(2)}`);