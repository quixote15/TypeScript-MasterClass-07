interface ImailTo {
    name: String,
    email: String
}

interface IMailMessage {
    subject: String,
    body: String,
    attachment ?: string[]
}

interface IMessageDTO {
    to: ImailTo,
    message: IMailMessage
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

/**
 * Data Transfer Object (DDD) - Padrao para transferencia de dados entre arquivos
 */
class EmailService implements IEmailService {

    sendMail({to, message} : IMessageDTO) {
        console.log(`Email Enviado to ${to.name}: ${message.subject}`);
    }
}

export default EmailService;