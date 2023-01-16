import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { fetchProducts } from "@/redux/features/productSlice";
import Link from "next/link";


const Product = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    console.log(products.list);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            {products.loading && <div>Loding....</div>}
            
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center items-center -m-4">
                    {
                         products.list.map((product)=>{
                            return (
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg" key={product.id}>
                                    <Link href={"/"} className="rounded">
                                        <img 
                                            src={product.cover}
                                            alt={product.title}
                                            title={product.title}
                                            className="m-auto h-[36vh] block"
                                        />
                                    </Link>
                                    <div className="mt-2 justify-center text-center">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                                        <p className="mt-1">₹ {product.price} </p>
                                        <div className="flex space-x-2 text-center justify-center">
                                            {
                                                product.quantity.map((qty)=>{ 
                                                    return (
                                                        <div key={qty.id}>
                                                            <p className="mt-1"> {qty.value} ml</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-4 p-4">
                                        <button
                                            // onClick={}
                                            className="text-center justify-center border bg-blue-700 text-white rounded-md pl-2 pr-2 p-1"
                                        >
                                            Buy Now
                                        </button>
                                        <button
                                            onClick={() => {dispatch(addToCart(product));}}
                                            className="text-center justify-center border bg-blue-700 text-white rounded-md pl-2 pr-2 p-1"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;