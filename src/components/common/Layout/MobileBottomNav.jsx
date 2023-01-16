// import { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaHome, FaHeart, FaStore, FaWhatsapp } from 'react-icons/fa'
import { FiPackage, FiUser } from 'react-icons/fi'
import WhatsAppButton from '../WhatsAppButton'


const links = [
	{
		label: 'Shop',
		href: '/',
		icon: ( <FaStore className="text-lg" /> ),
	},
	{
		label: 'Products',
		href: '/products',
		icon: ( <FiPackage className="text-lg" /> ),
	},
	{
		label: 'Account',
		href: '/account',
		icon: ( <FiUser className="text-lg" /> ),
	},
	{
		label: 'Contact',
		href: 'https://wa.me/917875995888',
		icon: ( <FaWhatsapp className="text-lg" /> ),
	}
]

const MobileBottomNav = () => {
    const router = useRouter();

    return (
        <div  className="sm:hidden absolute">
            <nav className="fixed bottom-0 w-full border-t bg-zinc-100 pb-safe">
				<div className="mx-auto flex h-12 max-w-md items-center justify-around px-6">
					{links.map(({ href, label, icon }) => (
						<Link 
                            key={label} 
                            href={href}
                            className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
                                router.pathname === href
                                    ? "text-pink-600"
                                    : "text-zinc-600 hover:text-zinc-900"
                            }`}
                        >
                            {icon}
                            <span className="text-xs text-zinc-600 dark:text-gray-300">
                                {label}
                            </span>
						</Link>
					))}
					
					{/* <div className="flex h-full w-full flex-col items-center justify-center space-y-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
						<FaHeart className="text-lg" />
						<span className="text-xs text-zinc-600 dark:text-gray-300">
							Wishlist
						</span>
					</div> */}

					{/* <WhatsAppButton /> */}
				</div>
			</nav>
        </div>
    )
}

export default MobileBottomNav