export default function Proposal() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div>

					{/* CTA box */}
					<div className="relative bg-blue-500 rounded-xl xs:py-2 md:py-14 xs:px-4 md:px-8 xs:my-2 md:my-6 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

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


						<div className="flex justify-center items-center">
							<div className="xs:w-4/5 md:w-3/5 flex flex-row flex-nowrap items-center">
								<img className="xs:w-18 xs:h-20 md:w-28 md:h-28 items-center" src="/images/icon_contract.png" alt="contract document" />
								<p className="xs:text-2xl md:text-4xl text-white font-bold xs:mb-1 md:mb-2 xs:ml-2 md:ml-8">Подать заявку можно здесь</p>
							</div>
							<div className="xs:w-1/5 md:w-2/5 flex xs:flex-col md:flex-row justify-end items-end xs:gap-2 md:gap-4">
									<a href="mailto:contact@france-experience.fr?subject=Заявка&body=%0AВаше%20имя:%0A%0AВаша%20фамилия:%0A%0AДата%20рождения:%0A%0AСтрана%20проживания:%0A%0AГород%20проживания:%0A%0AОпишите%20ваш%20запрос:%0A%0A" target="_blank">
										<img className="xs:w-16 md:w-24 cursor-pointer hover:scale-110 anim" src="/fonts/icon_email.png" alt="email" />
									</a>
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