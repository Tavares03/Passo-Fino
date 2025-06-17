# Passo Fino: E-commerce Front-End

Este é um projeto de e-commerce front-end que simula as funcionalidades de uma loja virtual para venda de camisas de time. A aplicação foi desenvolvida utilizando exclusivamente HTML, CSS e JavaScript, empregando o armazenamento do navegador (`localStorage` e `sessionStorage`) para simular a persistência de dados e sessões de usuário sem a necessidade de um back-end ou banco de dados.

---

## Funcionalidades Principais

* **Autenticação de Usuários:** Sistema completo de cadastro e login.
* **Gerenciamento de Sessão:** As páginas de conteúdo são protegidas e exigem que o usuário esteja autenticado. A sessão é encerrada ao fechar o navegador.
* **Catálogo de Produtos com Filtros:** Exibição de produtos em grade com a funcionalidade de filtrar os resultados por marca, tipo (nacional/internacional) e faixa de preço.
* **Carrinho de Compras:** Permite adicionar produtos, visualizar o carrinho, calcular o valor total e simular a finalização da compra.

---

## Tecnologias Utilizadas

* **HTML5:** Estrutura e marcação semântica do conteúdo.
* **CSS3:** Estilização e layout, utilizando o modelo Flexbox.
* **JavaScript (ES6+):** Lógica do lado do cliente, manipulação do DOM e gerenciamento de estado.
* **Node.js / npm:** Utilizado como ambiente de execução para o servidor de desenvolvimento.
* **`serve`:** Pacote `npm` para servir os arquivos estáticos localmente via HTTP.

---

## Pré-requisitos

Para executar o projeto, é necessário ter as seguintes ferramentas instaladas:

* [Node.js (versão LTS)](https://nodejs.org/en/)
* Um navegador de internet (ex: Google Chrome, Firefox).

---

## Instruções para Execução

Siga os passos abaixo para iniciar o projeto em um ambiente de desenvolvimento local.

1.  **Clone o Repositório**
    Faça o clone do projeto para a sua máquina local.
    ```bash
    git clone [https://github.com/seu-usuario/passo-fino.git](https://github.com/seu-usuario/passo-fino.git)
    ```

2.  **Acesse o Diretório do Projeto**
    Navegue até a pasta raiz do projeto através do seu terminal.
    ```bash
    cd passo-fino
    ```

3.  **Inicie o Servidor Local**
    Este comando utiliza o `npx` para executar um servidor estático que servirá os arquivos do projeto.
    ```bash
    npx serve
    ```

4.  **Abra o Projeto no Navegador**
    Após a execução do comando anterior, o terminal indicará o endereço local. Acesse a URL fornecida, que por padrão é:
    `http://localhost:3000`

O site será carregado, redirecionando para a página de login. Para encerrar o servidor, retorne ao terminal e pressione `Ctrl + C`.

---

## Arquitetura e Armazenamento de Dados

A aplicação utiliza a API de Armazenamento Web do navegador para simular a persistência de dados:

* **`localStorage`**: Utilizado para dados que devem permanecer salvos mesmo após o navegador ser fechado.
    * `usuarios`: Armazena um array JSON com os objetos de todos os usuários cadastrados.
    * `carrinho`: Salva os itens que o usuário adiciona ao carrinho.

* **`sessionStorage`**: Utilizado para dados que devem persistir apenas durante a sessão da página (até que a aba seja fechada).
    * `usuarioLogado`: Armazena o objeto do usuário autenticado, funcionando como um token de sessão para validar o acesso às páginas protegidas.

---

## Estrutura de Arquivos

passo-fino/</br>
├── index.html</br>
├── produtos.html</br>
├── carrinho.html</br>
├── login.html</br>
├── cadastro.html</br>
├── style.css</br>
├── navigation.js</br>
└── README.md</br>
