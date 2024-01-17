import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'

// xs: sm: md: lg: 

export default function Hero() {
	return (
		<section className="relative">

			{/* Illustration behind hero content */}
			<div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
				<svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
							<stop stopColor="#FFF" offset="0%" />
							<stop stopColor="#EAEAEA" offset="77.402%" />
							<stop stopColor="#DFDFDF" offset="100%" />
						</linearGradient>
					</defs>
					<g fill="url(#illustration-01)" fillRule="evenodd">
						<circle cx="1232" cy="128" r="128" />
						<circle cx="155" cy="443" r="64" />
					</g>
				</svg>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">

				{/* Hero content */}
				<div className="xs:pt-20 sm:pt-20 md:pt-22 lg:pt-32 xs:pb-6 sm:pb-6 md:pb-15 lg:pb-15 ">

					{/* Section header */}
					<div className="lg:flex space-x-0 lg:space-x-2 lg:mt-5 sm:mt-2 xs:mt-2">
						<div className='relative w-full lg:w-3/5 rounded-md inline-block overflow-hidden mt-8 lg:mt-8 sm:mt-2'>
							<div className='flex xl:flex-nowrap lg:flex-nowrap  md:flex-nowrap  sm:flex-nowrap xs:flex-wrap items-center'>
								<div className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tighter tracking-tighter text-center text-gray-700 mb-1" data-aos="zoom-y-out">Поможем осуществить вашу
									<span className="bg-gradient-to-r from-red-500 via-gray-300 to-blue-500 text-transparent bg-clip-text xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl"> французскую</span>
									<p className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tighter tracking-tighter text-gray-700 mb-4 mt-0" data-aos="zoom-y-out">
										мечту
									</p>
								</div>
							</div>




							<div className="max-w-3xl">
								<p className="xs:text-xs sm:text-sm md:text-base lg:text-base pr-5 z-50 text-gray-600 pt-6 mb-1 text-end italic" data-aos="zoom-y-out" data-aos-delay="150">
									„ La seule source de connaissance c'est l'expérience. “
								</p>
								<p className="xs:text-xs sm:text-sm md:text-base lg:text-base pr-5 z-50 text-gray-600 mb-8 text-end italic" data-aos="zoom-y-out" data-aos-delay="150">
									Albert Einstein
								</p>
								<p className='text-xl text-gray-600 mb-8 text-start italic'></p>
								<div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
									<div>
										<a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 rounded-2xl hidden" href="#0">Start free trial</a>
									</div>
									<div>
										<a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 rounded-3xl hidden" href="#0">Learn more</a>
									</div>
								</div>
							</div>
						</div>

						<div className='relative w-full lg:w-2/5 h-96 rounded-lg inline-block  lg:overflow-visible sm:overflow-hidden m-0'>
							<img src="/images/1.png" alt="главная картинка" className="absolute left-0 top-0 w-full h-full z-0 object-cover anim" style={{ transform: 'translateY(-30px)' }} />
						</div>
					</div>


					{/* Hero image */}
					{/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}
				</div>

			</div>
		</section>
	)
}