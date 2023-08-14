import { React, useState, useEffect } from 'react';

export default function Header() {      
    return (
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                Toko Play
            </h2>
            <p className="text-sm text-gray-700 sm:text-lg">
                Video Produk Review
            </p>
        </div>
    );
}