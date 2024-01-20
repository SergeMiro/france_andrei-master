import Link from 'next/link'
import Image from 'next/image'
import Logo_header from '@/public/images/logo.svg'

export default function Logo() {
	return (
		<Link href="/" className="block" aria-label="Cruip">
			<div className="flex justify-start items-center ">
				<Image src={Logo_header} alt="France.Experience Logo" className="xs:w-12 xs:h-12 md:w-16 md:h-16"/>
				<div className='flex justify-start xs:ml-2 sm:ml-3 md:ml-4'>
					<h1 className='font-extrabold text-xl' style={{ color: '#3E3085', paddingTop: '1px' }}>Franc</h1>
					<h1 className='font-extrabold text-3xl' style={{ color: '#701578' }}>E</h1>
					<h1 className='font-extrabold text-xl' style={{ color: '#701578', paddingTop: '13px' }}>xpérience</h1>
				</div>
			</div>
		</Link>
	)
}
