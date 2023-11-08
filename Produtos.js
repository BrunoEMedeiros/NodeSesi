
export class Produto{
    id;
    desc;
    preco;
    qtd;
    constructor(id, desc, preco, qtd){
        this.id = id;
        this.desc = desc;
        this.preco = preco;
        this.qtd = qtd
    }
}

export let listaProdutos = [
    new Produto(1,'tenis',100,2),
    new Produto(2,'chinelo',20,10),
    new Produto(3,'detergente',5,30),
    new Produto(4,'coca-cola',3.75,20),
]