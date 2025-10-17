document.addEventListener('DOMContentLoaded', function() {
    // 1. Pega o formulário pelo ID
    const form = document.getElementById('contactForm');
    // 2. Pega o elemento onde o status da mensagem será exibido
    const statusMensagem = document.getElementById('mensagem-status');

    if (form) {
        // 3. Adiciona um "ouvinte" de evento para quando o formulário for submetido
        form.addEventListener('submit', function(event) {
            
            // Impede o envio padrão do formulário (que recarregaria a página)
            event.preventDefault(); 
            
            // Limpa qualquer mensagem de status anterior
            statusMensagem.textContent = '';
            statusMensagem.style.color = 'black';

            // Pega os valores dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // =========================================================
            // A. VALIDAÇÃO OBRIGATÓRIA (Campos Vazios)
            // =========================================================
            if (nome === '' || email === '' || mensagem === '') {
                statusMensagem.textContent = 'ERRO: Por favor, preencha todos os campos obrigatórios.';
                statusMensagem.style.color = 'red';
                return; // Para a execução
            }

            // =========================================================
            // B. VALIDAÇÃO OBRIGATÓRIA (Formato do E-mail)
            // =========================================================
            // Expressão regular simples para verificar o formato básico do e-mail (ex: usuario@dominio.com)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            
            if (!emailRegex.test(email)) {
                statusMensagem.textContent = 'ERRO: Por favor, insira um endereço de e-mail válido (ex: seu@dominio.com).';
                statusMensagem.style.color = 'red';
                return; // Para a execução
            }

            // =========================================================
            // C. SIMULAÇÃO DO ENVIO (Se a validação passou)
            // =========================================================
            
            // 1. Simula o processamento da mensagem (você pode adicionar um delay aqui se quiser)
            
            // 2. Exibe a mensagem de sucesso (Pode ser um alerta, como sugerido [cite: 60, 61])
            alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
            statusMensagem.textContent = 'Mensagem enviada com sucesso!';
            statusMensagem.style.color = 'green';
            
            // 3. Limpa os campos do formulário
            form.reset();

            // Exemplo de console.log (Opcional, útil para debug)
            console.log('Dados simulados enviados:', { nome, email, mensagem });
        });
    }
});