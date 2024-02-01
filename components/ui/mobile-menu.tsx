"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation'; // Combined import for cleaner code
import { Transition } from "@headlessui/react";
import Link from "next/link";


export default function MobileMenu() {
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

///////////////////////////////////////////////////////

  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-4 h-4 fill-current text-purple-900 z-50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="18" height="4" />
          <rect y="11" width="21" height="4" />
          <rect y="18" width="24" height="4" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-auto pb-16 z-20 left-0 w-full overflow-scroll bg-white border-b border-b-purple-900 rounded-bl-myxl xs:bg-opacity-95"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-10">
				<li className="text-center my-3">
              <Link
                href="/"
                className=" text-gray-600 text-center w-full my-2"
                onClick={(e) => { e.preventDefault(); scrollToAboutUs(); setMobileNavOpen(false); }}
              >
                <span>О нас</span>
              </Link>
            </li>
				<li className="text-center my-3">
              <Link
                href="/services"
                className=" text-gray-600 text-center w-full my-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Наши услуги</span>
              </Link>
            </li>
				<li className="text-center my-3">
              <Link
                href="/gallery"
                className=" text-gray-600 text-center w-full my-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Галерея</span>
              </Link>
            </li>
				
				{/* <li className="hidden text-center my-3">
              <Link
                href="/"
                className=" text-gray-600 text-center w-full my-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>FAQ</span>
              </Link>
            </li> */}

				<li className="text-center my-3">
              <Link
                href="/"
                className=" text-gray-600 text-center w-full my-2"
                onClick={(e) => { e.preventDefault(); scrollToContacts(); setMobileNavOpen(false); }}
              >
                <span>Контакты</span>
              </Link>
            </li>
            <li className="hidden text-center mt-8">
              <Link
                href="/signin"
                className="flex font-medium w-full text-purple-800 py-2 justify-center border-2 border-purple-800 rounded-3xl"
                onClick={() => setMobileNavOpen(false)}
              >
                Войти
              </Link>
            </li>
            <li className="hidden text-center">
              <Link
                href="/signup"
                className="btn-sm text-gray-50 bg-purple-800 hover:bg-gray-800 w-full my-2 rounded-3xl"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Зарегистрироваться</span>
                <svg
                  className="w-3 h-3 fill-current shrink-0 ml-2 -mr-1 text-white"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414"
                    fillRule="nonzero"
                  />
                </svg>
              </Link>
            </li>


          </ul>
        </Transition>
      </div>
    </div>
  );
}
