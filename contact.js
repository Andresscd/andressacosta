document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Recupera os dados do formulário
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('message').value;

    // Constrói o objeto de dados para enviar
    var dados = {
        name: nome,
        email: email,
        mensagem: nachricht
    };

    // Envia os dados para o serviço de e-mail usando EmailJS
    emailjs.send('service_andressa', 'template_andressac', dados)
    .then(function(response) {
        console.log('E-mail enviado com sucesso:', response);
        alert('E-mail enviado com sucesso!');
    }, function(error) {
        console.error('Ocorreu um erro ao enviar o e-mail:', error);
        alert('Ocorreu um erro ao enviar o e-mail.');
    });
});
