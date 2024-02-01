import React, { useState, useEffect, FormEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Combined import for cleaner code
import Link from "next/link";
import Image from 'next/image'
import Logo_footer from '@/public/images/logo.svg'


export default function Footer() {
	const [top, setTop] = useState<boolean>(true);
	const pathname = usePathname();
	const router = useRouter();
 
  // Function to scroll to the "About Us" section
  const scrollToAboutUs = async () => {
	if (pathname === '/') {
	  // We're already on the homepage, attempt to scroll to the "About Us" section
	  const aboutUsElement = document.getElementById('aboutUs');
	  const headerHeight = document.getElementById('header_content')?.offsetHeight || 0;

	  if (aboutUsElement) {
		 const targetPosition = aboutUsElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
		 window.scrollTo({ top: targetPosition, behavior: 'smooth' });
	  } else {
		 console.error('Element with id "aboutUs" not found.');
	  }
	} else {
	  // We're not on the homepage, navigate there first
	  await router.push('/');
	  // Use a slight delay to ensure the page has rendered
	  setTimeout(() => {
		 const aboutUsElement = document.getElementById('aboutUs');
		 const headerHeight = document.getElementById('header_content')?.offsetHeight || 0;

		 if (aboutUsElement) {
			const targetPosition = aboutUsElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
			window.scrollTo({ top: targetPosition, behavior: 'smooth' });
		 } else {
			console.error('Element with id "aboutUs" not found.');
		 }
	  }, 100); // Adjust this timeout as necessary
	}
 };

 // Function to scroll to the "Contact" section
 const scrollToContacts = async () => {
  if (pathname === '/') {
	 // Already on the homepage, directly scroll to the "Contacts" section
	 const contactUsElement = document.getElementById('contactUs');
	 const headerHeight = document.getElementById('header_content')?.offsetHeight || 0;

	 if (contactUsElement) {
		const targetPosition = contactUsElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
		console.log('Scrolling to:', targetPosition);
		window.scrollTo({ top: targetPosition, behavior: 'smooth' });
	 } else {
		console.error('Element with id "contactUs" not found.');
	 }
  } else {
	 // Not on the homepage, navigate there first
	 await router.push('/');
	 // Use a slight delay to ensure the page has rendered
	 setTimeout(() => {
		const contactUsElement = document.getElementById('contactUs');
		const headerHeight = document.getElementById('header_content')?.offsetHeight || 0;

		if (contactUsElement) {
		  const targetPosition = contactUsElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
		  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
		} else {
		  console.error('Element with id "contactUs" not found.');
		}
	 }, 100); // Adjust this timeout as necessary
  }
};
 
	// Scroll handler to determine if user has scrolled down the page
	const scrollHandler = () => {
	 window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };
 
  useEffect(() => {
	 scrollHandler();
	 window.addEventListener('scroll', scrollHandler);
	 return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

	return (
		<footer>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">

				{/* Top area: Blocks */}
				<div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

					{/* 1st block */}
					<div className="flex justify-center items-center sm:col-span-12 lg:col-span-3">
						<div className="mb-2">
							<Image src={Logo_footer} alt="France.Experience Logo" className="w-16 h-16 xs:text-start md:text-center" />
						</div>

					</div>

					{/* 2nd block */}
					<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
						<p className="text-gray-800 font-medium mb-2">Социальные сети</p>
						<ul className="text-sm">
							<li className="mb-2 flex items-center hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="19"
									height="19"
									viewBox="0 0 33.867 33.867"
									className="mr-2 w-4"
									id="tiktok"
									>
									<path
										fill="#ff005d"
										d="m23.293 2.08-5.119.002v21.132a4.465 4.465 0 0 1-2.767 4.138 4.463 4.463 0 0 1-4.88-.971 4.466 4.466 0 0 1-.972-4.883 4.463 4.463 0 0 1 4.138-2.764h1.656v-5.12h-1.656a9.614 9.614 0 0 0-8.867 5.927A9.613 9.613 0 0 0 6.906 30a9.614 9.614 0 0 0 10.461 2.081 9.613 9.613 0 0 0 5.926-8.868V11.497c1.393.83 3.04 1.44 5.064 1.44h2.559V7.815h-2.559c-2.878 0-3.659-1.171-4.342-2.657-.683-1.485-.722-3.078-.722-3.078Z"
									/>
									<path
										fill="#00e0ff"
										d="m22.269 1.057-5.119.001V22.19a4.465 4.465 0 0 1-2.767 4.138 4.463 4.463 0 0 1-4.88-.971c-1.287-1.286-2.18-3.202-1.484-4.883.696-1.68 2.86-3.384 4.65-3.062l1.656.298v-5.12h-1.656a9.614 9.614 0 0 0-8.867 5.927 9.613 9.613 0 0 0 2.08 10.46c2.74 2.74 6.367 2.956 9.947 1.473 3.58-1.483 5.422-4.763 5.598-8.634l.561-12.372c1.394.83 3.322 1.85 5.329 2.121l2.575.347-.81-2.536.81-.997V6.792h-2.559c-2.878 0-3.659-1.171-4.342-2.657-.683-1.484-.722-3.078-.722-3.078Z"
									/>
								</svg>;
								<a href="#0" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">TikTok</a>
							</li>
							<li className="mb-2 flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" className="mr-2 w-4" id="telegram"><circle cx="12" cy="12" r="12" fill="#039be5"></circle><path fill="#fff" d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"></path></svg>
								<a href="https://t.me/frexperience" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Telegram</a>
							</li>
						</ul>
					</div>

					{/* 3rd block */}
					<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
						<p className="text-gray-800 font-medium mb-2">Ресурсы</p>
						<ul className="text-sm">
							<li className="mb-2">
								<a href="https://www.service-public.fr/" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Service-public</a>
							</li>
							<li className="mb-2">
								<a href="https://www.ameli.fr/paris/assure" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Ameli</a>
							</li>
							<li className="mb-2">
								<a href="https://www.isere.gouv.fr/" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Isere</a>
							</li>
							<li className="mb-2">
								<a href="https://www.immigration.interieur.gouv.fr/" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Immigration</a>
							</li>
							<li className="mb-2">
								<a href="https://ants.gouv.fr/" target="_blank" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">ANTS</a>
							</li>
						</ul>
					</div>

					{/* 4th block */}
					<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
						<p className="text-gray-800 font-medium mb-2">Компания</p>
						<ul className="text-sm">
							<li className="mb-2">
								<Link href="/" onClick={(e) => { e.preventDefault(); scrollToAboutUs(); }} className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'>О нас</Link>
							</li>
							<li className="mb-2">
								<a href="/services" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Услуги</a>
							</li>
							<li className="mb-2">
								<a href="/gallery" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Галерея</a>
							</li>

							{/* <li className="mb-2">
								<a href="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Ответы на вопросы</a>
							</li> */}

							<li className="mb-2">
								<Link href="/" onClick={(e) => { e.preventDefault(); scrollToContacts() }} className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'>Контакты</Link>
							</li>
						</ul>
					</div>

					{/* 5th block */}
					<div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
						<p className="text-gray-800 font-medium mb-2">У вас сложные вопросы ? 😉</p>
						<div className='flex flex-row flex-nowrap justify-start items-center mb-4'>
							<p className="text-sm text-gray-600">Получите наш FAQ </p>
							<a className='ml-3' href="/files/FAQ_France-Experience.pdf" download="FAQ_France-Experience.pdf" aria-label="Скачать FAQ">
								<img
									className='w-6 hover:scale-110 anim'
									src="/fonts/icon_download.png"
									alt="скачать"
									title="Скачать FAQ"
								/>
							</a>
						</div>
						<form className='hidden'>
							<div className="flex flex-wrap mb-4">
								<div className="w-full">
									<label className="block text-sm sr-only" htmlFor="Proposal">Email</label>
									<div className="relative flex items-center max-w-xs">
										<input
											id="mail_faq"
											type="email"
											className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm rounded-2xl"
											placeholder="Ваш email"
											required
										/>
										<button type="submit" className="absolute inset-0 left-auto" aria-label="отправить">
											<span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
											<svg className="w-3 h-3 fill-current text-purple-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
											</svg>
										</button>
									</div>
									{/* Success message */}
									{/* <p className="mt-2 text-purple-800 text-sm">Спасибо за регистрацию!</p> */}
								</div>
							</div>
						</form>
						<p className="text-gray-800 font-medium mb-2 mt-8">Наш email 24/7 🕜</p>
						<div className='flex flex-row flex-nowrap justify-start items-center mb-4'>
							<p className="text-sm text-gray-600">contact@france-experience.fr</p>
						</div>
					</div>




				</div>

				{/* Bottom area */}
				<div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
					{/* Copyrights note */}
					<div className="text-xs text-gray-600 mr-4">Created by Sergiy MIRO 🚀</div>
				</div>

			</div>
		</footer>
	)
}
