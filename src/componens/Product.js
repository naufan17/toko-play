import { React, useState, useEffect } from 'react';
import axios from 'axios';

import CardProduct from './CardProduct'

export default function Product({id}) {
    const [products, setProducts] = useState([]);
    const [productLoading, setProductLoading] = useState(true);
    
    useEffect(() => {
        getAllProduct();

    }, []);
    
    const getAllProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products/${id}`);
            setProducts(response.data.products);
            setProductLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <section className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:p-8 lg:p-12">  
            <div className=" bg-indigo-100 rounded-2xl p-4 sm:p-8 shadow-xl">
                {productLoading ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full border-t-8 border-indigo-500 border-opacity-50 h-32 w-32"></div>
                    </div>
                ) : (
                    <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                        {products.map((product) => {
                            return(
                                <CardProduct
                                    product_link = {product.product_link}
                                    image = {product.image}
                                    name = {product.name}
                                    price = {product.price}
                                />
                            )
                        })}
                    </div>   
                )}
           </div>
        </section>
   );
}