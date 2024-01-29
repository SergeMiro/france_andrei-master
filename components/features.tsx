'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import MigrationImg from '@/public/images/migration.png'
import StageImg from '@/public/images/stage.png'
import EducationImg from '@/public/images/education.png'
import WorkImg from '@/public/images/work.png'
import AdministrationImg from '@/public/images/administration.png'
import Link from 'next/link'

export default function Features() {
	const [tab, setTab] = useState<number>(1)
	const tabs = useRef<HTMLDivElement>(null)
	const aboutUsRef = useRef<HTMLDivElement>(null);
 
	const heightFix = () => {
	  if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
	}
 
	useEffect(() => {
	  heightFix()
	}, [])
 
	const scrollToAboutUs = () => {
	  if (aboutUsRef.current) {
		 aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
	  }
	};
 
	return (
	  <section className="relative">
		 <div className="absolute inset-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
		 <div className="absolute left-0 right-0 m-auto w-px p-px xs:h-8 sm:h-8 md:h-16 lg:h-20 bg-gray-200 transform -translate-y-1/2"></div>
 
		 <div className="relative max-w-6xl mx-auto px-4">
			<div className="xs:py-3 sm:py-6 md:py-10 lg:py-12">
			  <div className="max-w-3xl mx-auto md:text-justify pb-12 md:pb-20 ">
				 <div className='flex flex-col items-center mb-4'>
					<p ref={aboutUsRef} id="aboutUs" className="h2 text-gray-700">Bienvenue</p>
					<img className='w-15 h-10 mt-2' src="/fonts/icon_fr.png" alt="флаг Франции" />
				 </div>
				 <h2 className="xs:text-lg sm:text-lg md:text-xl lg:text-xl text-gray-600">
					Здравствуйте и добро пожаловать на наш сайт. Наша фирма "France expérience" зарегистрирована во Франции, стране, которую мы очень любим и ценим, так же сильно, как и прекрасный французский язык. Мы занимаемся оформлением стажировок, помогаем с оформлением рабочих и других долгосрочных виз, поступлением в учебные заведения, поиском вакансий, продлением вида на жительство, даём консультации по административным вопросам, медицинским страховкам, налоговым декларациям. Будем рады помочь Вам приобрести интернациональный опыт, усовершенствовать разговорные навыки и познакомиться с этой удивительной страной.
				 </h2>
			  </div>
 
			  <div className="flex xs:flex-wrap-reverse sm:flex-wrap-reverse md:flex-nowrap lg:flex-nowrap max-w-6xl justify-around px-5 sm:px-6">
				 <div className="w-full mx-auto md:col-span-9 lg:col-span-6" data-aos="fade-right">
					<div className="inline-flex items-center mb-4">
					  <p className="h2 text-start inline text-gray-700">Наши услуги</p>
					  <img className='w-12 ml-2 inline' src="/images/cible2.png" alt="доп цель" />
					</div>
					<div className="mb-8 md:mb-0">
					  <a
						 className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
						 href="#"
						 onClick={(e) => { e.preventDefault(); setTab(1); }}
					  >
						 <div className='flex-grow'>
							<h1 className="font-bold leading-snug tracking-tight mb-1">Переезд</h1>
						 </div>
						 <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
							<Link href="/services">
							  <svg className="w-3 h-3 fill-current text-purple-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
								 <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
							  </svg>
							</Link>
						 </div>
					  </a>
					  <a
						 className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
						 href="#"
						 onClick={(e) => { e.preventDefault(); setTab(2); }}
					  >
						 <div className='flex-grow'>
							<h1 className="font-bold leading-snug tracking-tight mb-1">Стажировка</h1>
						 </div>
						 <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
							<Link href="/services">
							  <svg className="w-3 h-3 fill-current text-purple-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
								 <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
							  </svg>
							</Link>
						 </div>
					  </a>
					  <a
						 className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
						 href="#"
						 onClick={(e) => { e.preventDefault(); setTab(3); }}
					  >
						 <div className='flex-grow'>
							<h1 className="font-bold leading-snug tracking-tight mb-1">Обучение</h1>
						 </div>
						 <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
							<Link href="/services">
							  <svg className="w-3 h-3 fill-current text-purple-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
								 <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
							  </svg>
							</Link>
						 </div>
					  </a>
					  <a
						 className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
						 href="#"
						 onClick={(e) => { e.preventDefault(); setTab(4); }}
					  >
						 <div className='flex-grow'>
							<h1 className="font-bold leading-snug tracking-tight mb-1">Работа</h1>
						 </div>
						 <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
							<Link href="/services">
							  <svg className="w-3 h-3 fill-current text-purple-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
								 <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
							  </svg>
							</Link>
						 </div>
					  </a>
					  <a
						 className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
						 href="#"
						 onClick={(e) => { e.preventDefault(); setTab(5); }}
					  >
						 <div className='flex-grow'>
							<h1 className="font-bold leading-snug tracking-tight mb-1">Административные вопросы</h1>
						 </div>
						 <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
							<Link href="/services">
							  <svg className="w-3 h-3 fill-current text-purple-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
								 <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
							  </svg>
							</Link>
						 </div>
					  </a>
					</div>
				 </div>
 

              {/* ТУТ ОШИБКА */}
				 <div className="max-w-xl md:max-w-none md:w-full mx-auto my-auto marker:items-center md:col-span-3 lg:col-span-6 md:order-1">  {/* ТУТ ОШИБКА */}
					<div className="transition-all items-center">
					  <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
						 <Transition
							show={tab === 1}
							appear={true}
							className="w-full"
							enter="transition ease-in-out duration-700 transform order-first"
							enterFrom="opacity-0 translate-y-16"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in-out duration-300 transform absolute"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 -translate-y-16"
							beforeEnter={() => heightFix()}
							unmount={false}
						 >
							<div className="relative inline-flex flex-col">
							  <Image className="md:max-w-full mx-auto rounded h-auto transform animate-float" src={MigrationImg} width={400} height="369"  alt="migration image" />
							</div>
						 </Transition>
						 <Transition
							show={tab === 2}
							appear={true}
							className="w-full"
							enter="transition ease-in-out duration-700 transform order-first"
							enterFrom="opacity-0 translate-y-16"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in-out duration-300 transform absolute"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 -translate-y-16"
							beforeEnter={() => heightFix()}
							unmount={false}
						 >
							<div className="relative inline-flex flex-col">
							  <Image className="md:max-w-full mx-auto rounded h-auto transform animate-float" src={StageImg} width={370} height="342"  alt="stage image" />
							</div>
						 </Transition>
						 <Transition
							show={tab === 3}
							appear={true}
							className="w-full"
							enter="transition ease-in-out duration-700 transform order-first"
							enterFrom="opacity-0 translate-y-16"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in-out duration-300 transform absolute"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 -translate-y-16"
							beforeEnter={() => heightFix()}
							unmount={false}
						 >
							<div className="relative inline-flex flex-col">
							  <Image className="md:max-w-full mx-auto rounded h-auto transform animate-float" src={EducationImg} width={370} height="342"  alt="stage image" />
							</div>
							</Transition>
							<Transition
							show={tab === 4}
							appear={true}
							className="w-full"
							enter="transition ease-in-out duration-700 transform order-first"
							enterFrom="opacity-0 translate-y-16"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in-out duration-300 transform absolute"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 -translate-y-16"
							beforeEnter={() => heightFix()}
							unmount={false}
						 >
							<div className="relative inline-flex flex-col">
							  <Image className="md:max-w-full mx-auto rounded h-auto transform animate-float" src={WorkImg} width={370} height="342"  alt="stage image" />
							</div>
							</Transition>
							<Transition
							show={tab === 5}
							appear={true}
							className="w-full"
							enter="transition ease-in-out duration-700 transform order-first"
							enterFrom="opacity-0 translate-y-16"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in-out duration-300 transform absolute"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 -translate-y-16"
							beforeEnter={() => heightFix()}
							unmount={false}
						 >
							<div className="relative inline-flex flex-col">
							  <Image className="md:max-w-full mx-auto rounded h-auto transform animate-float" src={AdministrationImg} width={400} height="369"  alt="stage image" />
							</div>
							</Transition>


								</div>
							</div>
						</div>


					</div>

				</div>
			</div>
		</section>
	)
}


