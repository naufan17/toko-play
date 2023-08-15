import { React } from 'react';

export default function Product({product_link, image, name, price}) {
    return (
        <a href={product_link} aria-label="Item" className="inline-block overflow-hidden duration-200 transform bg-slate-100 rounded-xl shadow-lg hover:-translate-y-1">
            <div className="flex flex-col h-full">
                <img src={image} className="object-cover w-full max-h-64" alt=""/>
                <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                    <h6 className="mb-2 font-semibold text-gray-900 leading-5">
                        {name}
                    </h6>
                    <span className="mb-2 font-bold text-gray-900 leading-5">
                        Rp {price}
                    </span>
                </div>
                </div>
            </div>
        </a>        
    );
}