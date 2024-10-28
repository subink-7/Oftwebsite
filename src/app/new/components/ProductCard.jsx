import Image from 'next/image'
import React from 'react'

export default function ProductCard({ imageUrl, title, off, price }) {
  return (
    <div className="transition-transform duration-300 hover:scale-105">
      <div className="text-center bg-gray-800 p-4 rounded-lg text-white">
        {/* Image */}
        <Image 
          src={imageUrl ?? '/placeholder-image.jpg'} 
          alt={title ?? 'Product'} 
          width={200} 
          height={200} 
          className="mx-auto" 
        />

        {/* Product Title and Details */}
        <h3 className="mt-4 font-semibold">{title ?? 'Default Title'}</h3>
        <p className="text-sm">{off ?? '0%'} : From {price ?? '$0.00'}</p>

        {/* Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          Add to cart
        </button>
      </div>
    </div>
  );
}
