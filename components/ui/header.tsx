'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {
  const [top, setTop] = useState<boolean>(true);


  ///////////////////////////// SCROLL FUNCTION //////////////////////////////////
  const scrollToAboutUs = () => { 
    const aboutUsElement = document.getElementById('aboutUs');
    const headerHeight = document.getElementById('header_content')?.offsetHeight || 0;

    if (aboutUsElement) {
      const targetPosition = aboutUsElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      console.log('Scrolling to:', targetPosition);
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    } else {
      console.error('Element with id "aboutUs" not found.');
    }
  };

  const scrollToContacts = () => {
	const contactUsElement = document.getElementById('contactUs');
	const headerHeight = document.getElementById('header_content')?.offsetHeight || 0;

	if (contactUsElement) {
	  const targetPosition = contactUsElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
	  console.log('Scrolling to:', targetPosition);
	  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
	} else {
	  console.error('Element with id "contactUs" not found.');
	}
 };
//////////////////////////////////////////////////////////////////////////////////

  // Добавляем слушателя события прокрутки
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };
  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    // Очищаем слушателя события при размонтировании компонента
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

	return (
		<header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
			<div className="max-w-6xl mx-auto px-5 sm:px-6">
				<div id='header_content' className="flex items-center justify-between h-16 md:h-20">

					{/* Site branding */}
					<div className="shrink-0">
						<Logo />
					</div>

					{/* Desktop navigation */}
					<nav className="hidden md:flex md:grow">
						{/* Desktop sign in links */}
						<ul className="flex grow justify-end flex-nowrap items-center">
							<li>
								<Link href="/" onClick={(e) => { e.preventDefault(); scrollToAboutUs(); }} className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">О нас</Link>
							</li>
							<li>
								<Link href="/services" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Наши услуги</Link>
							</li>
							<li className='hidden'>
								<Dropdown title="Наши услуги">
									{/* Ваше содержимое Dropdown */}
									<ul className='px-4'>
										<li className='py-1'>
											<Link href="/services#stage">Стажировка</Link>
										</li>
										<li className='py-1'>
											<Link href="/services#moving">Переезд</Link>
										</li>
										<li className='py-1'>
											<Link href="/services#education">Обучение</Link>
										</li>
										<li className='py-1'>
											<Link href="/services#work">Работа</Link>
										</li>
										<li className='py-1'>
											<Link href="/services#administration">Административные вопросы</Link>
										</li>
									</ul>
								</Dropdown>
							</li>
							<li>
								<Link href="/gallery" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Галерея</Link>
							</li>
							<li>
								<Link href="/" onClick={(e) => { e.preventDefault(); scrollToContacts(); }} className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Контакты</Link>
							</li>
							<li className='hidden'>
								<Link href="/signup" className="btn-sm text-gray-100 bg-purple-800 rounded-3xl hover:bg-gray-600 ml-3">
									<span>Регистрация</span>
									<svg className="w-3 h-3 fill-current text-gray-100 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
									</svg>
								</Link>
							</li>
							<li className='hidden '>
								<Link href="/signin" className="btn-sm text-purple-800 rounded-3xl border-purple-800 hover:bg-purple-800 hover:text-gray-100 ml-3">Войти</Link>
							</li>
						</ul>

					</nav>

					<MobileMenu />

				</div>
			</div>
		</header>
	)
}
