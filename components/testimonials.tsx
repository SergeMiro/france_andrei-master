import Image from 'next/image'
import AvatarImage from '@/public/fonts/icon_otzyv.png'

export default function Testimonials() {
	return (
		<section className="relative">

			{/* Illustration behind content */}
			<div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
				<svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
							<stop stopColor="#FFF" offset="0%" />
							<stop stopColor="#EAEAEA" offset="77.402%" />
							<stop stopColor="#DFDFDF" offset="100%" />
						</linearGradient>
					</defs>
					<g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
						<circle cx="1630" cy="128" r="128" />
						<circle cx="178" cy="481" r="40" />
					</g>
				</svg>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-8">

					{/* xs:text-lg sm:text-lg md:text-xl lg:text-xl text-gray-600 */}
					<div className="max-w-3xl mx-auto  pb-12 md:pb-16">
						<h2 className="h2 mb-4 text-center pb-2">Почему нам можно доверять🌟</h2>
						<div className='flex flex-row flex-nowrap items-center justify-center'>
							<img className='w-10 mr-2 transition-transform ease-in-out duration-300 transform hover:scale-75' src="/fonts/icon_o.png" alt="icon_0" />
							<p className="xs:text-lg sm:text-lg md:text-xl lg:text-xl text-gray-600 xs:m-1 md:m-2" data-aos="zoom-y-out">
								Мы официально зарегистрированы во Франции более 8 лет и работаем по договору
							</p>
						</div>
						<div className='flex flex-row flex-nowrap items-center justify-center'>
							<img className='w-10 mr-2 transition-transform ease-in-out duration-300 transform hover:scale-75' src="/fonts/icon_o.png" alt="icon_0" />
							<p className="xs:text-lg sm:text-lg md:text-xl lg:text-xl text-gray-600 xs:m-1 md:m-2">
								Наша компания - это команда профессионалов, которая находится на связи и помогает преодолеть все возникающие преграды
							</p>
						</div>
						<div className='flex flex-row flex-nowrap items-center justify-center'>
							<img className='w-10 mr-2 transition-transform ease-in-out duration-300 transform hover:scale-75' src="/fonts/icon_o.png" alt="icon_0" />
							<p className="xs:text-lg sm:text-lg md:text-xl lg:text-xl text-gray-600 xs:m-1 md:m-2" data-aos="zoom-y-out">
								Нашими партнерами являются известные организации, например <a className='text-purple-600 hover:text-purple-400 anim' href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%8C%D1%8F%D0%BD%D1%81_%D0%A4%D1%80%D0%B0%D0%BD%D1%81%D0%B5%D0%B7" target="_blank">Альянс Франсез</a>, а также крупные компании по трудоустройству за рубежом
							</p>
						</div>
						<div className='flex flex-row flex-nowrap items-center justify-center'>
							<img className='w-10 mr-2 transition-transform ease-in-out duration-300 transform hover:scale-75' src="/fonts/icon_o.png" alt="icon_0" />
							<p className="xs:text-lg sm:text-lg md:text-xl lg:text-xl text-gray-600 xs:m-1 md:m-2" data-aos="zoom-y-out">
								Мы работаем с лучшими проверенными работодателями в разных регионах Франции
							</p>
						</div>
					</div>

					{/* Items */}
					<div className="flex flex-wrap justify-center">
						<p className='h3 text-gray-600 text-center'>Отзывы наших клиентов</p>
					</div>

					{/* Testimonials */}
					<div className='flex xs:flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap w-full'>
						<div className="xs:w-full sm:w-full md:w-1/3 mx-auto xs:mt-10 sm:mt-10 md:mt-20" data-aos="zoom-y-out">
							<div className="relative flex items-start border-2 border-gray-200 rounded-2xl bg-white mx-2">
								<div className="text-center xs:pt-16 md:pt-20 xs:mx-1 md:mx-2">
									<div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
										<svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
											<path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
										</svg>
										<Image className="relative rounded-full" src={AvatarImage} width={96} height={96} alt="Testimonial 01" />
									</div>
									<span className="xs:text-lg sm:text-lg md:text-xl lg:text-xl text-gray-600 mb-4 px-1">
										“Ну вот я и вернулась. Впечатлений масса,попробую поделиться. Стажировку проходила в кемпинге 5*рядом с Перпиньяном. Работала официанткой в ресторане кемпинга. Кемпинг-это как наша турбаза,только класса люкс, с бассейнами, водными горками, рестораном, баром, анимацией..."
									</span>
									<a href="https://vk.com/topic-92692367_34307956" target="_blank" className='text-purple-300 hover:text-purple-500 cursor-pointer anim'> ... читать далее</a>
									<cite className="block font-bold text-lg not-italic mt-3 mb-1">Юлия</cite>
									<div className="text-gray-600">
										<span className='italic'>г. Воронеж</span>
										{/* <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a> */}
									</div>
								</div>
							</div>
						</div>

						<div className="xs:w-full sm:w-full md:w-1/3 mx-auto xs:mt-10 sm:mt-10 md:mt-20" data-aos="zoom-y-out ">
							<div className="relative flex items-start border-2 border-gray-200 rounded-2xl bg-white mx-2">
								<div className="text-center xs:pt-16 md:pt-20 xs:mx-1 md:mx-2">
									<div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
										<svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
											<path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
										</svg>
										<Image className="relative rounded-full" src={AvatarImage} width={96} height={96} alt="Testimonial 01" />
									</div>
									<span className="xs:text-lg sm:text-lg md:text-xl lg:text-xl text-gray-600 mb-4 px-1">
										“Была на стажировке с конца декабря по март в отеле 4* в Куршевеле. В отеле было ещё трое русских стажеров,поэтому у нас сразу создалась своя комманда поддержки)) .Я работала в ресторане на завтраках и ужинах. Днём было свободное время, удалось покататься на горных лыжах,это был ...“
									</span>
									<a href="https://vk.com/topic-92692367_34307956" target="_blank" className='text-purple-300 hover:text-purple-500 cursor-pointer anim'> ... читать далее</a>
									<cite className="block font-bold text-lg not-italic mt-3 mb-1">Настя</cite>
									<div className="text-gray-600">
										<span className='italic'>г. Ростов</span>
										{/* <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a> */}
									</div>
								</div>
							</div>
						</div>

						<div className="xs:w-full sm:w-full md:w-1/3 mx-auto xs:mt-10 sm:mt-10 md:mt-20" data-aos="zoom-y-out">
							<div className="relative flex items-start border-2 border-gray-200 rounded-2xl bg-white mx-2">
								<div className="text-center xs:pt-16 md:pt-20 xs:mx-1 md:mx-2">
									<div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
										<svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
											<path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
										</svg>
										<Image className="relative rounded-full" src={AvatarImage} width={96} height={96} alt="Testimonial 01" />
									</div>
									<span className="xs:text-lg sm:text-lg md:text-xl lg:text-xl text-gray-600 mb-4 px-1">
										“Я  проходил стажировку поваром в ресторане отеля 5* в Бо де Прованс. Я работаю поваром в Петербурге,поэтому моей целью было получить опыт работу в хорошем французском ресторане,так как это большой плюс для карьеры.Получил интересный опыт,вся работа организована немного не так,как в моем ресторане...“
									</span>
									<a href="https://vk.com/topic-92692367_34307956" target="_blank" className='text-purple-300 hover:text-purple-500 cursor-pointer anim'> ... читать далее</a>
									<cite className="block font-bold text-lg not-italic mt-3 mb-1">Денис</cite>
									<div className="text-gray-600">
										<span className='italic'>г. Санкт-Петербург</span>
										{/* <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a> */}
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
		</section>
	)
}