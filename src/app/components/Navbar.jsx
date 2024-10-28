
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
      <div>
         {/* Navbar */}
      <header className="bg-slate-800 text-white">
        <div className="container mx-auto px-3 py-2 flex justify-between items-center">
          <Link href="/"className="text-xl font-bold">Oft Shop</Link>
          <nav className="space-x-6">
            <Link href="/new" className="hover:text-gray-400">New</Link>
            <Link href="/clothing" className="hover:text-gray-400">Clothing</Link>
            <Link href="/accessories" className="hover:text-gray-400">Accessories</Link>
            <Link href="/sale" className="hover:text-gray-400">Sale</Link>
          </nav>
          <div className="space-x-4 flex items-center">
            <Link href="login" className="hover:text-gray-400">Log In</Link>
            <Link href="/cart" className="hover:text-gray-400"><span>(0)</span>My Cart</Link>

            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm bg-white focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-300 transition duration-200">
  <svg
    className="w-5 h-5 text-gray-500 mx-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 15l-3.5-3.5M11 4a7 7 0 100 14a7 7 0 000-14z"
    />
  </svg>
  <input 
    type="text" 
    placeholder="Search" 
    className="p-1 w-20 h-6 rounded-lg text-gray-800 bg-white outline-none"
  />
</div>


          </div>
        </div>
      </header>

      </div>
  )
}
