let produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro",
        categoria: "smartphones",
        preco: 7999,
        precoOriginal: 8999,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
        descricao: "Smartphone Apple com câmera avançada"
    },
    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: 8999,
        precoOriginal: 10999,
        desconto: 18,
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        descricao: "Notebook Apple ultrafino e potente"
    },
    {
        id: 3,
        nome: "AirPods Pro",
        categoria: "headphones",
        preco: 1899,
        precoOriginal: 2299,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
        descricao: "Fones sem fio com cancelamento de ruído"
    },
    {
        id: 4,
        nome: "Samsung Galaxy S24",
        categoria: "smartphones",
        preco: 5499,
        precoOriginal: 6299,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        descricao: "Smartphone Samsung com tela AMOLED"
    },
    {
        id: 5,
        nome: "Apple Watch Series 9",
        categoria: "smartwatch",
        preco: 3299,
        precoOriginal: 3799,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
        descricao: "Relógio inteligente com monitoramento"
    },
    {
        id: 6,
        nome: "Teclado Mecânico",
        categoria: "accessories",
        preco: 499,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
        descricao: "Teclado mecânico RGB para gamers"
    },
    {
        id: 7,
        nome: "Sony WH-1000XM5",
        categoria: "headphones",
        preco: 2499,
        precoOriginal: 2999,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
        descricao: "Fone com cancelamento de ruído"
    },
    {
        id: 8,
        nome: "Dell XPS 13",
        categoria: "laptops",
        preco: 7999,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
        descricao: "Notebook Windows premium"
    }
];

let containerProdutos = document.querySelector(".products-container");


function mostrarProdutos() {
    let htmlProdutos = ""
    produtos.forEach(prd => {
        htmlProdutos = htmlProdutos + `
            <div class="product-card">
                <img class="product-img" src="${prd.imagem}" alt="${prd.nome}">
                <div class="product-info">
                    <h3 class="product-name">${prd.nome}</h3>
                    <p class="product-description">${prd.descricao}</p>
                    <p class="product-price">${prd.preco}</p>
                    <button class="product-button">Ver Detalhes</button>
                </div>
            </div>
        `
    })

    containerProdutos.innerHTML = htmlProdutos;
    // O innerHTML serve para inserir o HTML dentro do containerProdutos
    // O forEach percorre o array de produtos e cria um card para cada produto
    // A variável htmlProdutos armazena o HTML de cada produto
    // No final, o containerProdutos recebe todo o HTML gerado

}

window.onload = mostrarProdutos
// windows = janela / onload = quando a janela carregar

// A função mostrarProdutos é chamada quando a janela é carregada, para exibir os produtos na página
// O código acima cria uma lista de produtos e exibe cada um deles em um card na página HTML
// A função mostrarProdutos percorre o array de produtos e gera o HTML necessário para exibir cada produto
// O HTML gerado é inserido no containerProdutos, que é um elemento da página onde os produtos serão exibidos
// A função window.onload garante que os produtos sejam exibidos assim que a página for carregada
// Isso permite que os produtos sejam dinâmicos e possam ser facilmente atualizados ou modificados no futuro
// A estrutura do código permite que novos produtos sejam adicionados ao array sem precisar alterar o HTML
// Isso torna o código mais flexível e fácil de manter, pois a lógica de exibição dos produtos está separada da estrutura HTML
// Além disso, o uso de template literals (``) permite uma formatação mais clara e legível do HTML gerado
// O código também pode ser facilmente adaptado para incluir mais informações sobre os produtos, como avaliações, categorias, etc.
// A função mostrarProdutos pode ser chamada novamente para atualizar a lista de produtos, se necessário
// Isso permite que o código seja reutilizado em diferentes partes da aplicação, como em filtros ou buscas de produtos
// O uso de classes CSS para estilização dos cards de produtos permite uma personalização visual fácil e rápida
// A estrutura modular do código facilita a manutenção e a adição de novas funcionalidades no futuro
// O código é um exemplo básico de como criar uma loja online simples usando JavaScript e HTML
// Ele pode ser expandido para incluir funcionalidades adicionais, como filtros de produtos, carrinho de compras, etc.
// A lógica de exibição dos produtos é separada da lógica de manipulação do DOM, o que torna o código mais organizado
// O uso de funções permite uma melhor reutilização do código e facilita a leitura e compreensão do mesmo
// O código é um bom ponto de partida para quem deseja aprender mais sobre desenvolvimento web e criação de lojas online
// A estrutura do código é simples e fácil de entender, ideal para iniciantes em JavaScript
// A função mostrarProdutos pode ser facilmente adaptada para buscar produtos de uma API ou banco de dados
// Isso permite que o código seja escalável e possa ser usado em projetos maiores e mais complexos
// O uso de JavaScript para manipulação do DOM permite uma interação dinâmica com o usuário, tornando a experiência mais rica
// O código é um exemplo prático de como usar JavaScript para criar uma interface de usuário interativa e responsiva
// A função mostrarProdutos pode ser chamada em diferentes momentos, como ao carregar a página ou ao aplicar filtros
// Isso permite que a lista de produtos seja atualizada dinamicamente, sem precisar recarregar a página
