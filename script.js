// Fazer o formulário funcionar
document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // proibe padrão (impedir o comportamento padrão do navegador. nós controlaremos o que faremos com os dados)

        // selecionar os campos
        const nome = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const mensagem = form.querySelector('textarea').value.trim();

        // vai validar se tudo está preenchido
        if (!nome || !email || !mensagem) {
            alert('Preencha todas as informações!');
            return;
        }

        // vai validar se email tem @ e . 
        if (!email.includes('@') || !email.includes('.')) {
            alert('Gentileza inserir um email válido!');
            return;
        }

        // botão carregando
        const button = form.querySelector('button');
        const textoOriginal = button.textContent;

        button.disabled = true;
        button.textContent = 'Enviando';

        // simulando envio
        setTimeout(() => {
            alert(` Sua mensagem foi enviada para nosso suporte.\n\nObrigado, ${nome}!`);

            form.reset();                    // vai limpar o formulário quando o mesmo for enviado
            button.disabled = false;
            button.textContent = textoOriginal;
        }, 1500);
        
    });
});