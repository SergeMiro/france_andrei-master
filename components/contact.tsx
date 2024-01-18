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
			<div className="max-w-6xl mx-auto mb-12 px-4 sm:px-6 ">
				<div>

					{/* CTA box */}
					<div className="relative bg-purple-900 rounded-l-full rounded-tr-full py-5 px-6 my-4 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

						{/* Background illustration */}
						<div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
							<svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
										<stop stopColor="#DFDFDF" offset="0%" />
										<stop stopColor="#4C4C4C" offset="44.317%" />
										<stop stopColor="#333" offset="100%" />
									</radialGradient>
								</defs>
								<g fill="none" fillRule="evenodd">
									<g fill="#FFF">
										<ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
										<ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
										<ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
										<ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
										<ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
										<ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
										<ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
										<ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
									</g>

									{/* ФЛАГ ФРАНЦИИ НА ФОНЕ ПИСЬМА */}


								</g>
							</svg>
						</div>


						<div ref={contactRef} id="contactUs" className="flex justify-center items-center">
							<div className="sm:w-3/4 md:w-3/5 flex flex-row flex-nowrap items-center">
								<img className="xs:absolute xs:-left-4 xs:-top-4 xs:z-10 md:relative xs:w-18 xs:h-20 md:w-28 md:h-28 items-center" src="/fonts/icon_megaphone.png" alt="megaphone" />
								<p className="xs:text-xl md:text-4xl text-white font-bold xs:mb-1 md:mb-2 xs:ml-4 md:ml-8">Связаться с нами 📱</p>
							</div>
							<div className="sm:w-1/4 md:w-2/5 flex sm:flex-col md:flex-row justify-end items-end">
									<a href="https://t.me/FranceExperienceBot" target="_blank">
										<img className="xs:w-16 md:w-24 cursor-pointer hover:scale-110 anim" src="/fonts/icon_telegram.png" alt="telegram" />
									</a>
							</div>
						</div>



					</div>

				</div>
			</div>
		</section>
	)
}