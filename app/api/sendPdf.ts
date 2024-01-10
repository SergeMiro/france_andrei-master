import type { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');
import path from 'path';


export default async function sendPdf(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
	host: 'smtp.your-email-provider.com', // Замените на ваш SMTP сервер
	port: 587, // или 465 (зависит от вашего провайдера)
	secure: false, // true для порта 465, false для других портов
	auth: {
	  user: 'contact@france-experience.fr', // Ваш email
	  pass: 'yourpassword', // Ваш пароль
	},
	tls: {
	  // Для некоторых серверов может потребоваться следующая настройка
	  rejectUnauthorized: false
	}
 });



//////////////////////////////////////////////////////////////////////////////




  const pdfPath = path.join(process.cwd(), 'public', 'files', 'wiki.pdf');

  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Ваш PDF файл',
    text: 'Пожалуйста, найдите приложенный PDF файл.',
    attachments: [{
      filename: 'wiki.pdf',
      path: pdfPath,
    }],
  }, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка при отправке email' });
      return;
    }
    res.status(200).json({ message: 'Email успешно отправлен' });
  });
}
