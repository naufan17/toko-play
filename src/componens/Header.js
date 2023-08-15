import { React } from 'react';

export default function Header() {      
    return (
        <section className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:p-8 lg:p-12">
            <div className="max-w-xl md:mx-auto mt-6 sm:mt-12 sm:text-center lg:max-w-2xl">
                <h2 className="max-w-lg mb-6 text-2xl font-bold leading-none text-gray-900 sm:text-4xl sm:mx-auto">
                    Toko Play
                </h2>
                <p className="text-sm mb-6 text-gray-700 sm:text-lg">
                    Video Produk Review
                </p>
            </div>
        </section>
    );
}