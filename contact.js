const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para analisar dados de formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'andressadessacosta@gmail.com',
        pass: 'Eudessacosta1'
    }
});

// Rota para enviar email quando o formulário de contato é submetido
app.post('/enviar-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'andressadessacosta@gmail.com',
        to: 'andressadessacosta@gmail.com', // Corrigido o endereço de email de destino
        subject: 'KontaktFormular',
        text: `Name: ${name}\nEmail: ${email}\nMensagem: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erro ao enviar email');
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).send('Email enviado com sucesso');
        }
    });
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
