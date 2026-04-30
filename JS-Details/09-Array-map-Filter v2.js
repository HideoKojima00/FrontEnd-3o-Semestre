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


// Tera que retornar todas as camisetas tanto masculinas quanto femininas, utilizando o filter para isso, veja:
const CamisetasFemininas = produtos.filter((produto) => {
    return produto.perfil === "F";
});

const CamisetasMasculinas = produtos.filter((produto) => {
    return produto.perfil === "M";
});

// console.log(CamisetasFemininas);
const produtosPromocao = produtos.filter((produto) => {
    if (p.promocao == true) {
        return p.promocao == true;
        qtsPromocao += p.quantidade;
    }
});

console.log(`Temos produtos em promoção: ${qtsPromocao}`);
console.log(produtosPromocao);


