import { React, useState, useEffect } from 'react';
import axios from 'axios';

export default function Product({id}) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getAllProduct();

    }, []);
    
    const getAllProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products/${id}`);
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <section className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:p-8 lg:p-12">  
            <div className=" bg-indigo-100 rounded-2xl p-4 sm:p-8 shadow-xl">
                <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                    {products.map((product) => {
                        return(
                            <a href={product.product_link} aria-label="Item" className="inline-block overflow-hidden duration-200 transform bg-slate-100 rounded-xl shadow-lg hover:-translate-y-1">
                            <div className="flex flex-col h-full">
                                <img src={product.image} className="object-cover w-full max-h-64" alt=""/>
                                <div className="flex-grow border border-t-0 rounded-b">
                                <div className="p-5">
                                    <h6 className="mb-2 font-semibold text-gray-900 leading-5">
                                        {product.name}
                                    </h6>
                                    <span className="mb-2 font-bold text-gray-900 leading-5">
                                        Rp {product.price}
                                    </span>
                                </div>
                                </div>
                            </div>
                            </a>        
                        )
                    })}
                </div>
            </div>
        </section>
   );
}