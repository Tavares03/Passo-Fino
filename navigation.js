// Arquivo: navigation.js

document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('nav-container');
    if (!navContainer) return;

    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    let navHTML = '';

    if (usuarioLogado) {
        // Menu para usuário LOGADO
        navHTML = `
            <nav>
                <a href="index.html">Home</a>
                <a href="produtos.html">Produtos</a>
                <a href="carrinho.html">Carrinho</a>
                <span style="color: #FF6600; font-weight: bold; padding: 10px 20px;">Olá, ${usuarioLogado.nome}!</span>
                <a href="#" id="logout-btn" style="background-color: #555;">Sair</a>
            </nav>
        `;
    } else {
        // Menu para usuário DESLOGADO (visível apenas em login/cadastro)
        navHTML = `
            <nav>
                <a href="login.html">Login</a>
                <a href="cadastro.html">Cadastro</a>
            </nav>
        `;
    }

    navContainer.innerHTML = navHTML;

    // Adiciona funcionalidade ao botão de logout se ele existir
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Impede que o link '#' recarregue a página
            
            // Limpa a sessão
            sessionStorage.removeItem('usuarioLogado');
            // Opcional: Limpar também o carrinho ao deslogar
            localStorage.removeItem('carrinho');
            
            alert('Você foi desconectado.');
            window.location.href = 'login.html';
        });
    }
});