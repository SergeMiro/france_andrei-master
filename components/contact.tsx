'use client'
import { useRef } from 'react'

export default function Contact() {

	const contactRef = useRef<HTMLDivElement>(null);  // Добавляем реф для блока "О нас"
	const scrollToContacts = () => {     // Функция прокрутки к блоку "О нас"
		if (contactRef.current) {
			contactRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	 };

	return (
		<section>
			<div className="relative max-w-6xl mx-auto mb-12 px-4 sm:px-6 ">
					{/* */}
					<div ref={contactRef} id="contactUs" className="relative bg-purple-900  xs:py-3 md:py-5 xs:px-2 md:px-6 xs:rounded-full md:rounded-l-full md:rounded-tr-full md:rounded-br-lg my-4 xs:mx-2 md:mx-0 shadow-2xl" data-aos="zoom-y-out">
					<div className="xs:absolute md:hidden h-20 w-20 -left-4 -top-6 z-10">
						<img className="xs:w-18 animate-float" src="/fonts/icon_megaphone2.png" alt="megaphone" />
					</div>
						<div className="flex justify-center items-center">
							<div className="w-4/5  flex flex-row flex-nowrap items-center xs:justify-center sm:justify-start xs:pl-0 sm:pl-14 md:pl-0 md:justify-start">
								<img className="xs:hidden md:block md:w-32 md:h-32 items-center" src="/fonts/icon_megaphone.png" alt="megaphone" />
								<p className="xs:text-2xl md:text-4xl text-white font-bold xs:ml-4 md:ml-8 z-20">Связаться с нами </p>
							</div>
							<div className="w-1/5 flex xs:flex-col md:flex-row justify-end items-end xs:gap-2 md:gap-4">
									<a className='xs:hidden md:block' href="mailto:contact@france-experience.fr" target="_blank">
										<img className="xs:w-16 md:w-24 cursor-pointer hover:scale-110 anim" src="/fonts/icon_email.png" alt="email" />
									</a>
									<a href="https://t.me/FranceExperienceBot" target="_blank">
										<img className="xs:w-16 md:w-24 cursor-pointer hover:scale-110 anim" src="/fonts/icon_telegram.png" alt="telegram" />
									</a>
							</div>
						</div>
					</div>
			</div>
		</section>
	)
}

{/* <div className="xs:w-1/5 md:w-2/5 flex xs:flex-col md:flex-row justify-end items-end xs:gap-2 md:gap-4">
<a href="mailto:contact@france-experience.fr?subject=Заявка&body=%0AВаше%20имя:%0A%0AВаша%20фамилия:%0A%0AДата%20рождения:%0A%0AСтрана%20проживания:%0A%0AГород%20проживания:%0A%0AОпишите%20ваш%20запрос:%0A%0A" target="_blank">
	<img className="xs:w-16 md:w-24 cursor-pointer hover:scale-110 anim" src="/fonts/icon_email.png" alt="email" />
</a>
<a href="https://t.me/FranceExperienceBot" target="_blank">
	<img className="xs:w-16 md:w-24 cursor-pointer hover:scale-110 anim" src="/fonts/icon_telegram.png" alt="telegram" />
</a>
</div> */}