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
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                {products.map((product) => {
                    return(
                        <a href={product.product_link} aria-label="View Item" className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
                        <div className="flex flex-col h-full">
                            <img src={product.image} className="object-cover max-w-64 max-h-64" alt=""/>
                            <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">
                                    {product.name}
                                </h6>
                                <h8 className="mb-2 font-semibold leading-5">
                                    {product.price}
                                </h8>
                            </div>
                            </div>
                        </div>
                        </a>        
                    )
                })}
            </div>
        </div>
   );
}