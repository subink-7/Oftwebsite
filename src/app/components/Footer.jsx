import React from 'react'
import Image from "next/image";
import npFlag from '@/app/images/np-flag.jpg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3">
          <h3 className="text-sm font-semibold">INFO</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-white">Sign In</a></li>
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Help</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Size Guide</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 text-center">
          <p className="text-sm">
            Due to the impact of Covid-19, we are currently experiencing minor delays with our shipping carriers.
          </p>
          <p className="mt-2 text-sm font-semibold">Free shipping over $100</p>
          <p className="text-sm font-semibold">Free 5-day return shipping</p>
          <div className="mt-4 flex justify-center items-center">
            <Image src={npFlag} alt="Nepal Flag" width={32} height={32} />
            <p className="ml-2 text-sm">Available in Nepal</p>
          </div>
        </div>

        <div className="w-full md:w-1/3 text-center md:text-right">
          <h3 className="text-sm font-semibold">COMPANY</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Dressmart Cares</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
        <p className="text-xs text-gray-600 mt-4 md:mt-0">© 2024 OftShop LLC. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </footer>
  )
}
