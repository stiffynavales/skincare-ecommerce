"use client"

import { useState } from "react"

export default function Header() {
  const [cartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="w-full bg-yellow-500 h-6 flex items-center justify-center text-xs font-bold text-gray-900 tracking-wide shadow-sm">
        FREE SHIPPING ON US ORDERS OVER $100
      </div>
      <header className="bg-white py-2 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left side: Hamburger + Logo */}
          <div className="flex items-center gap-2">
            <button
              className="flex flex-col justify-center items-center w-8 h-8 text-gray-900 focus:outline-none mr-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-gray-900 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-900 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-900"></span>
            </button>
            <div className="text-xl font-black text-gray-900 tracking-wide">D1</div>
          </div>

          {/* Right side: Get Started + Cart */}
          <div className="flex items-center gap-4">
            <button className="bg-gray-900 text-white text-xs font-semibold px-4 py-1 rounded-full hover:bg-gray-800 transition-colors">
              GET STARTED
            </button>
            <div className="relative cursor-pointer text-2xl text-gray-900">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
        {/* Simple dropdown menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md z-40">
            <nav className="flex flex-col px-4 py-2">
              <a href="#products" className="py-2 text-gray-900 hover:text-yellow-500">Products</a>
              <a href="#routine" className="py-2 text-gray-900 hover:text-yellow-500">Routine</a>
              <a href="#ingredients" className="py-2 text-gray-900 hover:text-yellow-500">Ingredients</a>
              <a href="#reviews" className="py-2 text-gray-900 hover:text-yellow-500">Reviews</a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}