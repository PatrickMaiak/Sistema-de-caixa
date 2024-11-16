const categorias = [];

criarCategorias(1,"frios")
criarCategorias(2,"bebidas")
criarCategorias(3,"graos")
criarCategorias(4,"carnes")
criarCategorias(5,"agropecuaria")
criarCategorias(6,"temperos")
criarCategorias(7,"agropecuaria")
criarCategorias(8,"temperos")
criarCategorias(9,"agropecuaria")
criarCategorias(10,"temperos")
criarCategorias(11,"agropecuaria")
criarCategorias(12,"temperos")


listaCategorias();


function criarCategorias(id,categoria){
    const novaCategoria = 
        {
            id,
            categoria 

        }
    categorias.push(novaCategoria);
    // console.log(categorias)
};

function listaCategorias(){
    categorias.forEach(categoria =>{
            const botao = document.createElement("button");
            botao.classList.add("botaoDaCategoria");
            botao.textContent= categoria.categoria;

            const listaDeCategoria = document.getElementsByClassName("listaDeCategoria")[0];
            listaDeCategoria.appendChild(botao);
        }
    )
}























const carrinhoDeProdutos = []


adicionarAoCarrinho=(produtoId)=>{

    const produtoEcontrado = listaProdutos.find(produto => produto.id === produtoId)

    console.log(produtoEcontrado);
    listarNoCarrinho(produtoEcontrado.descricao,produtoEcontrado.valor);
};



function listarNoCarrinho(descricao,valor ) {

    const liDocarrinho = document.createElement('li')
    liDocarrinho.classList.add('produto')

    const spanDoNomeNocarrinho = document.createElement('span')
    spanDoNomeNocarrinho.classList.add('nome')
    spanDoNomeNocarrinho.textContent = descricao

    const spanDoPrecoNocarrinho = document.createElement('span')
    spanDoPrecoNocarrinho.classList.add('preco')
    spanDoPrecoNocarrinho.textContent = `R$ ${valor.toFixed(2)}`




   

    const spanQuantidade = document.createElement('span');
    spanQuantidade.classList.add('quantidade');
    spanQuantidade.textContent = `1`;

 
    const buttonRemover = document.createElement('button');
    buttonRemover.classList.add('remover', 'botaoRemoverCarrinho');
    // buttonRemover.textContent = 'Remover';

    liDocarrinho.appendChild(spanDoNomeNocarrinho);
    liDocarrinho.appendChild(spanDoPrecoNocarrinho);
    liDocarrinho.appendChild(spanQuantidade);
    liDocarrinho.appendChild(buttonRemover);

    document.querySelector('.produtos').appendChild(liDocarrinho);

   

    // console.log();
}
























const listaProdutos= [
    {
        id:1,
        categoria:"cafe",
        descricao:"café estrada real 300g",
        valor:22.50,
        quantidade:10,
        desconto: 0,
        status: "disponível"

}];

function adicionarProduto(id, categoria, descricao, valor, quantidade, desconto , status ) {
    const novoProduto = {
        id,
        categoria,
        descricao,
        valor,
        quantidade,
        desconto,
        status
    };
    listaProdutos.push(novoProduto);
    // console.log("Produto adicionado:", novoProduto);
}
function removerProduto(id) {
    const index = listaProdutos.findIndex(produto => produto.id === id);
    if (index !== -1) {
        const produtoRemovido = listaProdutos.splice(index, 1)[0];
        console.log("Produto removido:", produtoRemovido);
    } else {
        console.log("Produto com ID", id, "não encontrado.");
    }
}


const listaDeProdutosContainer = document.querySelector(".listaDeProdutos");


function exibirProdutos() {
    listaProdutos.forEach(produto => {
       
        const botaoProduto = document.createElement("button");
        botaoProduto.classList.add("botaoDeProduto");

        
        const fundoDoBotaoConteudo = document.createElement("div");
        fundoDoBotaoConteudo.classList.add("fundoDoBotaoConteudo");

       
        const rodapeBotaoProduto = document.createElement("div");
        rodapeBotaoProduto.classList.add("rodapeBotaoProduto");
        rodapeBotaoProduto.textContent = produto.descricao; 

        botaoProduto.onclick = () => adicionarAoCarrinho(produto.id);
       
        botaoProduto.appendChild(fundoDoBotaoConteudo);
        botaoProduto.appendChild(rodapeBotaoProduto);

       
        listaDeProdutosContainer.appendChild(botaoProduto);
    });
}
adicionarProduto(2, "bebida", "Coca-Cola 2L", 8.00, 30, 0, "disponível");
adicionarProduto(3, "bebida", "Pepsi 2L", 7.50, 25, 0, "disponível");
adicionarProduto(4, "cafe", "Café Pilão 500g", 15.00, 20, 0, "disponível");
adicionarProduto(5, "cafe", "Café Melitta 500g", 14.50, 15, 0, "disponível");
adicionarProduto(6, "acucar", "Açúcar União 1kg", 5.00, 50, 0, "disponível");
adicionarProduto(7, "arroz", "Arroz Tio João 5kg", 23.00, 12, 0, "disponível");
adicionarProduto(8, "arroz", "Arroz Prato Fino 5kg", 22.50, 10, 0, "disponível");
adicionarProduto(9, "feijao", "Feijão Carioca 1kg", 7.00, 30, 0, "disponível");
adicionarProduto(10, "feijao", "Feijão Preto 1kg", 6.50, 25, 0, "disponível");
adicionarProduto(11, "biscoito", "Oreo 90g", 3.00, 50, 0, "disponível");
adicionarProduto(12, "biscoito", "Passatempo 140g", 4.00, 40, 0, "disponível");
adicionarProduto(13, "chocolate", "Chocolate Nestlé 90g", 5.50, 30, 0, "disponível");
adicionarProduto(14, "chocolate", "Chocolate Lacta 90g", 5.80, 30, 0, "disponível");
adicionarProduto(15, "leite", "Leite Parmalat 1L", 4.20, 25, 0, "disponível");
adicionarProduto(16, "leite", "Leite Italac 1L", 4.00, 25, 0, "disponível");
adicionarProduto(17, "macarrao", "Macarrão Dona Benta 500g", 3.50, 40, 0, "disponível");
adicionarProduto(18, "macarrao", "Macarrão Adria 500g", 3.80, 35, 0, "disponível");
adicionarProduto(19, "oleo", "Óleo de Soja Liza 900ml", 7.00, 20, 0, "disponível");
adicionarProduto(20, "oleo", "Óleo de Soja Soya 900ml", 6.80, 20, 0, "disponível");
adicionarProduto(21, "margarina", "Margarina Qualy 500g", 8.00, 15, 0, "disponível");
adicionarProduto(22, "chocolate", "Chocolate Lacta 90g", 5.80, 30, 0, "disponível");
adicionarProduto(23, "leite", "Leite Parmalat 1L", 4.20, 25, 0, "disponível");
adicionarProduto(24, "leite", "Leite Italac 1L", 4.00, 25, 0, "disponível");
adicionarProduto(25, "macarrao", "Macarrão Dona Benta 500g", 3.50, 40, 0, "disponível");
adicionarProduto(26, "macarrao", "Macarrão Adria 500g", 3.80, 35, 0, "disponível");
adicionarProduto(27, "oleo", "Óleo de Soja Liza 900ml", 7.00, 20, 0, "disponível");
adicionarProduto(28, "oleo", "Óleo de Soja Soya 900ml", 6.80, 20, 0, "disponível");
adicionarProduto(29, "oleo", "Óleo de Soja Soya 900ml", 6.80, 20, 0, "disponível");
adicionarProduto(30, "leite", "Leite Italac 1L", 4.00, 25, 0, "disponível");
adicionarProduto(31, "macarrao", "Macarrão Dona Benta 500g", 3.50, 40, 0, "disponível");
adicionarProduto(32, "macarrao", "Macarrão Adria 500g", 3.80, 35, 0, "disponível");
adicionarProduto(33, "oleo", "Óleo de Soja Liza 900ml", 7.00, 20, 0, "disponível");
adicionarProduto(34, "oleo", "Óleo de Soja Soya 900ml", 6.80, 20, 0, "disponível");
adicionarProduto(35, "oleo", "Óleo de Soja Soya 900ml", 6.80, 20, 0, "disponível");
adicionarProduto(36, "oleo", "Óleo de Soja Soya 900ml", 6.80, 20, 0, "disponível");





exibirProdutos();

// removerProduto(2)

// console.log(listaProdutos);


