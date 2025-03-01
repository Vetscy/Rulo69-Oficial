const CLIENT_ID = 'SEU_CLIENT_ID';
const REDIRECT_URI = 'http://localhost:3000/callback'; // Altere para seu domínio em produção
const DISCORD_ENDPOINT = 'https://discord.com/api/oauth2/authorize';

function loginWithDiscord(event) {
    event.preventDefault();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Em breve, o painel será liberado! Fique atento para mais novidades';
    document.body.appendChild(notification);

    // Mostrar a notificação com animação
    setTimeout(() => notification.classList.add('show'), 100);

    // Remover a notificação após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Verificar se o usuário está logado
function checkAuth() {
    const token = localStorage.getItem('discord_token');
    if (token) {
        // Atualizar UI para usuário logado
        document.querySelector('.login-btn').textContent = 'Perfil';
    }
}
