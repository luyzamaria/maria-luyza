let inventario = [
{ nome: 'televisão', preco: 1369., emEstoque: true },
{ nome: 'celular', preco: 2000, emEstoque: false },
{ nome: 'bolsa', preco: 60, emEstoque: true },
{ nome: 'cama', preco: 1400, emEstoque: true },
{ nome: 'aliança', preco: 150., emEstoque: true },
{ nome: 'calça', preco: 160, emEstoque: false },
{ nome: 'copo', preco: 60, emEstoque: true },
{ nome: 'cancatiça', preco: 40, emEstoque: false },
{ nome: 'prato', preco: 400, emEstoque: true },
{ nome: 'messa', preco: 2630, emEstoque: true },
{ nome: 'ventilador', preco: 150., emEstoque: true },
{ nome: 'armario', preco: 4020, emEstoque: false },
{ nome: 'sofa', preco: 3500, emEstoque: true },
{ nome: 'buffet', preco: 900, emEstoque: true },
{ nome: 'balcao', preco: 5000, emEstoque: true }
]

for (let i = 0; i < inventario.length; i++) {
if (inventario[i].emEstoque) {
console.log(inventario[i].nome + ' está em estoque.');
}
}
let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log(produtosEmEstoque);