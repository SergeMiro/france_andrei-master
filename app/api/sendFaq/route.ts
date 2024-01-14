// require('dotenv').config();

// import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
// import path from 'path';

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
// 	try {
// 	  const { email } = req.body;

const transporter = nodemailer.createTransport({
	host: 'wh-mercury.node.regery.net', // SMTP сервер
	port: 587,
	secure: false,
	auth: {
		// user: process.env.EMAIL_USER,
		// pass: process.env.EMAIL_PASS,
		user: 'contact@france-experience.fr',
		pass: 'VYCT17jLBA*RXHcZiyFaW3r%',
	},
	tls: {
		rejectUnauthorized: false
	}
});

//   const pdfPath = path.join(process.cwd(), 'public', 'files', 'FAQ_France-Experience.pdf');


//   const mailOptions = {
// 	from: process.env.EMAIL_USER,
// 	to: email,
// 	subject: 'France Experience FAQ',
// 	text: 'Текст сообщения...',
// 	attachments: [{ filename: 'FAQ_France-Experience.pdf', path: pdfPath }],
//  };

// 	const result = await transporter.sendMail(mailOptions);
// 	console.log('Email sent:', result);
// 	res.status(200).json({ message: 'Email успешно отправлен' });
// 	} catch (error) {
// 	console.error('Ошибка при отправке email:', error);
// 	res.status(500).json({ message: 'Ошибка при отправке email' });
// 	}
// }

/////////////////////////////////////////////////////////////////////////////////


const mailOptions = {
	from: 'contact@france-experience.fr',
	to: 'mirochnyk.sergiy@gmail.com',
	subject: 'aaaaaaaaa',
	text: 'aaaaaaaaaaaa.'
};

transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
	if (error) {
		console.log(`Произошла ошибка: ${error.message}`);
	} else {
		console.log(`Сообщение отправлено: ${info.response}`);
	}
});



