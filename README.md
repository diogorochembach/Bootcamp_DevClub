# Bootcamp_DevClub
Primeiro projeto com HTML CSS e JavaScript
Neste primeiro projeto, desenvolvi com orientação do Rodolfo Mori uma pagina de web de forma a por em prática os conhecimentos 
adquiridos durante as aulas. Utilizando as tecnologias HTML-CSS-JavaScript.
O código cria uma lista de produtos e exibe cada um deles em um card na página HTML
A função mostrarProdutos é chamada quando a janela é carregada, para exibir os produtos na página
A função mostrarProdutos percorre o array de produtos e gera o HTML necessário para exibir cada produto

O HTML gerado é inserido no containerProdutos, que é um elemento da página onde os produtos serão exibidos
A função window.onload garante que os produtos sejam exibidos assim que a página for carregada
Isso permite que os produtos sejam dinâmicos e possam ser facilmente atualizados ou modificados no futuro
A estrutura do código permite que novos produtos sejam adicionados ao array sem precisar alterar o HTML
Isso torna o código mais flexível e fácil de manter, pois a lógica de exibição dos produtos está separada da estrutura HTML
Além disso, o uso de template literals (``) permite uma formatação mais clara e legível do HTML gerado

O código também pode ser facilmente adaptado para incluir mais informações sobre os produtos, como avaliações, categorias, etc.
A função mostrarProdutos pode ser chamada novamente para atualizar a lista de produtos, se necessário
Isso permite que o código seja reutilizado em diferentes partes da aplicação, como em filtros ou buscas de produtos
O uso de classes CSS para estilização dos cards de produtos permite uma personalização visual fácil e rápida
A estrutura modular do código facilita a manutenção e a adição de novas funcionalidades no futuro
O código é um exemplo básico de como criar uma loja online simples usando JavaScript, CSS e HTML

O site pode ser expandido para incluir funcionalidades adicionais, como filtros de produtos, carrinho de compras, etc.
A lógica de exibição dos produtos é separada da lógica de manipulação do DOM, o que torna o código mais organizado
O uso de funções permite uma melhor reutilização do código e facilita a leitura e compreensão do mesmo
O código é um bom ponto de partida para quem deseja aprender mais sobre desenvolvimento web e criação de lojas online
A estrutura do código é simples e fácil de entender, ideal para iniciantes em JavaScript

A função mostrarProdutos pode ser facilmente adaptada para buscar produtos de uma API ou banco de dados
Isso permite que o código seja escalável e possa ser usado em projetos maiores e mais complexos
O uso de JavaScript para manipulação do DOM permite uma interação dinâmica com o usuário, tornando a experiência mais rica
O código é um exemplo prático de como usar JavaScript para criar uma interface de usuário interativa e responsiva
// A função mostrarProdutos pode ser chamada em diferentes momentos, como ao carregar a página ou ao aplicar filtros
// Isso permite que a lista de produtos seja atualizada dinamicamente, sem precisar recarregar a página
