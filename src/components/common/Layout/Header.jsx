import { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from '../WhatsAppButton';
import CustomButton from '../CustomButton';
import { cartTotalPriceSelector, cartTotalSelector, clear, decrement, increament } from "@/redux/features/cartSlice";
import { AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';



const links = [
	{
		label: 'Home',
		href: '/',
	},
    {
        label: 'Products',
        href: '/products',
    },
    {
        label: 'Blogs',
        href: '/blogs',
    },
    {
		label: 'About',
		href: '/about',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
]

const MobileNav = ({open, setOpen}) => {
    const router = useRouter();

    return (
        <div 
            className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`} 
            onClick={() => {
                setOpen(!open)
            }}
        >
            <div className="flex items-center filter drop-shadow-md h-20 ml-4 mt-8"> 
            {/*logo container*/}
                <Image 
                    src={"/innerkomfort-logo-b.png"} 
                    alt="innerkomfort Logo" 
                    width={243} 
                    height={126} 
                    className="cursor-pointer" 
                    onClick={() => router.push("/")}
                />
            </div>
            <div className="flex flex-col ml-12 my-12 space-y-4 text-lg text-[#0B0B45] font-medium">
                {links.map(({ href, label}) => (
                    <Link key={label} href={href} className="inline-flex">
                        {label}
                    </Link>
                ))}
                <WhatsAppButton />
            </div>

            <div className="ml-10 uppercase -mt-4">    
                <CustomButton 
                    title={"Locate Us"}
                    onClick={() => router.push("https://goo.gl/maps/izcdXUZjavexZVcF7")}
                />
            </div>

            {/* <button 
                className="uppercase mt-2 border px-4 py-1 ml-6 rounded-md font-medium tracking-wide bg-[#070077] text-white hover:bg-blue-600 hover:text-white transition duration-200 shadow-lg" 
                onClick={() => router.push("https://goo.gl/maps/7p4NWp3QN9a6VM3RA")}
            >
                Locate Us
            </button> */}
        </div>
    )
}



const Header = ()  => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const total = useSelector(cartTotalSelector);
    const [change, setChange] = useState(false);

    const cart = useSelector((state) => state.cart);
    const ui = useSelector((state) => state.ui);
    const dispatch = useDispatch();
    const totalPrice = useSelector(cartTotalPriceSelector);
    const ref = useRef();

    useEffect(() => {
        if (total !== 0) {
          setChange(true);
    
          setTimeout(() => {
            setChange(false);
          }, 1000);
        }
    }, [total]);

    console.log(cart)

    const toggleCart = () => {
        // console.log("Clicked");
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        } else if (ref.current.classList.contains('translate-x-0')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const clearCartFunc = () => {
        console.log("Cleared");
        console.log(dispatch(clear()));
        dispatch(clear());
    }

    // const handlePointerDown = (x) => {
    //     if (x === true) {

    //     }
    // }

    return (
        <header>
            <nav className="fixed top-0 z-[1000] flex items-center justify-between w-full px-2 h-[54px] lg:h-[63px] lg:px-52 shadow-lg bg-white">
                <Image 
                    src={"/innerkomfort-logo-b.png"} 
                    alt="innerkomfort-logo" 
                    width={171} 
                    height={81} 
                    className="cursor-pointer filter drop-shadow-md md:hidden" 
                    onClick={() => router.push("/")}
                />

                <Image 
                    src={"/innerkomfort-logo-b.png"} 
                    alt="innerkomfort-logo" 
                    width={207} 
                    height={90} 
                    className="cursor-pointer filter drop-shadow-md hidden md:block" 
                    onClick={() => router.push("/")}
                />

                <div className="w-10/12 flex justify-end items-center">
                    {/* <MobileNav open={open} setOpen={setOpen} /> */}
                    {/* Cart Icon */}
                    <div className="md:hidden mt-2 mr-4">
                        <button className="text-red-500" onClick={toggleCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="absolute top-4 pr-1 pl-1 bg-green-500 rounded-full text-xs">
                                <div className="p-1  text-white">{total}</div>
                            </span>
                        </button>
                    </div>

                    <div className="hidden md:flex ml-auto">
                        <div className="hidden ml-4 md:flex items-center space-x-4 text-[#0B0B45]">
                            {links.map(({ href, label}) => (
                                <Link key={label} href={href} className="header-link group">
                                    <span className="span">{label}</span>
                                </Link>
                            ))}

                            {/* Cart Icon */}
                            <div className="mt-2 mr-4">
                                <button className="text-red-500" onClick={toggleCart}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="absolute top-4 pr-1 pl-1 bg-green-500 rounded-full text-xs">
                                        <div className="p-1  text-white">{total}</div>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cart Functionality */}
                <div ref={ref} className="cart-sidebar w-80 md:w-96 absolute top-0 right-0 bg-gray-100 p-10 min-h-screen transform transition-transform translate-x-full">
                    <h2 className="flex text-xl font-bold text-center justify-center items-center mt-8">This is my Cart</h2>
                    <span onClick={toggleCart} className="absolute top-8 right-5 text-xl cursor-pointer">
                        <AiFillCloseCircle />
                    </span>
                    <div className="lg:p-2">
                        <ol className="list-decimal">
                            {
                                (cart.length === 0) ? (
                                    <div className="flex justify-center items-center my-4">No Items in cart</div>
                                ) : (
                                    <>
                                        {
                                            cart.map((cartItem)=>{
                                                return (
                                                    <Fragment key={cartItem.id}>
                                                        <li>
                                                            <div className="flex item my-4">
                                                                <div className="w-2/3">{cartItem.title}</div>
                                                                <div className="flex w-1/3 justify-center items-center">
                                                                    <AiOutlineMinusCircle 
                                                                        className="mx-2 cursor-pointer" 
                                                                        // disabled ={cartItem.quantity === 1}
                                                                        onClick={()=>{dispatch(decrement(cartItem.id));}}
                                                                    /> 
                                                                        {cartItem.quantity}
                                                                    <AiOutlinePlusCircle 
                                                                        className="mx-2 cursor-pointer" 
                                                                        onClick={()=>{dispatch(increament(cartItem.id));}}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </>
                                )
                            }
                        </ol>
                    </div>

                    <div className="">
                        {
                            totalPrice > 0 && <h3 className="flex text-lg font-semibold p-4 text-center justify-center items-center mt-8">Subtotal: {totalPrice}</h3>
                        }
                        {/* <h3 className="flex text-lg font-semibold p-4 text-center justify-center items-center mt-8">Subtotal: </h3> */}
                    </div>

                    <div className="flex justify-center items-center text-center text-sm md:text-md">
                        <button 
                            className="mt-2 border px-2 py-1 ml-6 rounded-md tracking-wide bg-[#070077] text-white hover:bg-blue-600 hover:text-white transition duration-200 shadow-lg" 
                            onClick={() => router.push("/checkout")}
                        >
                            Checkout
                        </button>

                        <button 
                            className="mt-2 border px-2 py-1 ml-6 rounded-md tracking-wide bg-[#070077] text-white hover:bg-blue-600 hover:text-white transition duration-200 shadow-lg" 
                            onClick={clearCartFunc}
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}

export default Header;