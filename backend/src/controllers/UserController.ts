import { Response, Request} from 'express';
import EmailService from '../services/EmailService';
const users = [
    {name: 'Tiago santos', email: 'tiago@gmail.com'}
]
export default {
    async index(req: Request, res: Response) {
        return res.send(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to:{name: 'Lucas', email: 'tiago@gmail.com'},
            message: {
                subject: 'Bem vindo ao sistema.',
                 body: 'Seja bem-vindo.'
            }
        });

        return res.send('OK')
    }
}