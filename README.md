<h1 align="center">
  Passo Fino - E-commerce de Camisas de Time ⚽
</h1>

<p align="center">
  <em>Um projeto de e-commerce front-end completo, construído com tecnologias web puras, simulando uma experiência de compra real.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-4CAF50?style=for-the-badge" alt="Status do Projeto: Concluído">
  <img src="https://img.shields.io/badge/Licença-MIT-orange?style=for-the-badge" alt="Licença MIT">
</p>

---

###  डेमो do Projeto (GIF)

<p align="center">
  <img src="https://i.imgur.com/your-demo.gif" alt="Demonstração do Projeto Passo Fino" width="800"/>
</p>

---

## ✨ Funcionalidades

O projeto conta com um conjunto robusto de funcionalidades para simular um ambiente de e-commerce real:

* 👤 **Sistema de Autenticação:** Cadastro e Login de usuários com persistência de dados no `localStorage`.
* 🛡️ **Sessão de Usuário e Rotas Protegidas:** Acesso restrito às páginas principais, redirecionando usuários não autenticados para a tela de login.
* 📊 **Navegação Dinâmica:** O menu se adapta ao status do usuário, exibindo uma mensagem de boas-vindas e um botão "Sair".
* 🔎 **Catálogo com Filtros Avançados:** Uma página de produtos com um sistema de filtragem em tempo real por:
    * Marca (`Nike`, `Adidas`, `Puma`).
    * Tipo (`Nacional`, `Internacional`).
    * Faixa de Preço.
* 🛒 **Carrinho de Compras Funcional:** Adicione produtos, visualize o carrinho, veja o total e "finalize" a compra, com dados salvos no `localStorage`.

---

## 🚀 Tecnologias Utilizadas

A tabela abaixo lista as tecnologias e ferramentas utilizadas na construção do projeto:

| Tecnologia      | Propósito                                                   |
| --------------- | ----------------------------------------------------------- |
| **HTML5** | Estrutura semântica e conteúdo das páginas.                 |
| **CSS3** | Estilização, design e layout (com Flexbox).                 |
| **JavaScript** | Lógica, interatividade e manipulação de dados no cliente.   |
| **Node.js** | Ambiente para rodar o servidor de desenvolvimento local.    |
| **`serve`** | Pacote `npm` para criar um servidor estático instantâneo.   |

---

## ⚙️ Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas:

* [**Node.js (versão LTS)**](https://nodejs.org/en/)
* Um navegador de internet moderno (Google Chrome, Firefox, etc.).

---

## ▶️ Como Rodar o Projeto

Siga estes passos para executar o projeto em sua máquina:

1.  **Clone o Repositório** (ou baixe os arquivos):
    ```bash
    git clone [https://github.com/seu-usuario/passo-fino.git](https://github.com/seu-usuario/passo-fino.git)
    ```

2.  **Acesse a Pasta do Projeto**:
    ```bash
    cd passo-fino
    ```

3.  **Inicie o Servidor Local**:
    Este comando irá iniciar um servidor na porta `3000`.
    ```bash
    npx serve
    ```

4.  **Acesse no Navegador**:
    Abra seu navegador e visite o endereço: `http://localhost:3000`

5.  **Pronto!** O site estará funcionando e você será redirecionado para a página de login. Para parar o servidor, volte ao terminal e pressione `Ctrl + C`.

---

## 🛠️ Como o Sistema Funciona

A persistência de dados é simulada utilizando a API de Armazenamento Web do navegador:

* `localStorage`: Usado para dados que devem persistir mesmo após o fechamento do navegador.
    * `usuarios`: Armazena a lista de todos os usuários cadastrados.
    * `carrinho`: Salva os itens que o usuário adicionou ao carrinho de compras.
* `sessionStorage`: Usado para dados que devem durar apenas durante a sessão da página (até o fechamento da aba).
    * `usuarioLogado`: Guarda as informações do usuário que fez o login, servindo como "token" de autenticação para as rotas protegidas.

---

<details>
  <summary>📁 Estrutura de Arquivos</summary>
  passo-fino/
├── 📄 index.html
├── 📄 produtos.html
├── 📄 carrinho.html
├── 📄 login.html
├── 📄 cadastro.html
├── 📄 style.css
├── 📄 navigation.js
└── 📄 README.md

</details>
