import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Import for Heroicons v1

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo - Aligned to the Left */}
        <div className="flex items-center">
          <Link href="/">
            <span className="text-3xl font-extrabold cursor-pointer text-pink-600">
              BonRegal
            </span>
          </Link>
        </div>

        {/* Navigation Links - Centered on Desktop */}
        <div className="hidden md:flex space-x-6 mx-auto">
          <Link href="/menu-of-the-week">
            <span className="text-lg font-medium hover:text-gray-400 cursor-pointer">Menu of the Week</span>
          </Link>
          <Link href="/discovery-box">
            <span className="text-lg font-medium hover:text-gray-400 cursor-pointer">Discovery Box</span>
          </Link>
          <Link href="/gift-voucher">
            <span className="text-lg font-medium hover:text-gray-400 cursor-pointer">Gift Voucher</span>
          </Link>
          <Link href="/my-customer-area">
            <span className="text-lg font-medium hover:text-gray-400 cursor-pointer">My Customer Area</span>
          </Link>
          <Link href="/blog">
            <span className="text-lg font-medium hover:text-gray-400 cursor-pointer">Blog</span>
          </Link>
          <Link href="/business">
            <span className="text-lg font-medium hover:text-gray-400 cursor-pointer">Business</span>
          </Link>
          <Link href="/who-are-we">
            <span className="text-lg font-medium hover:text-gray-400 cursor-pointer">Who Are We</span>
          </Link>
          <Link href="/cart">
            <span className="text-lg font-medium hover:text-gray-400 cursor-pointer">Cart</span>
          </Link>
        </div>

        {/* Mobile Menu Button - Aligned to the Right */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="w-6 h-6 text-white" />
            ) : (
              <MenuIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-gray-700 text-white space-y-2 p-4">
          <Link href="/menu-of-the-week">
            <span className="block text-lg font-medium hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Menu of the Week</span>
          </Link>
          <Link href="/discovery-box">
            <span className="block text-lg font-medium hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Discovery Box</span>
          </Link>
          <Link href="/gift-voucher">
            <span className="block text-lg font-medium hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Gift Voucher</span>
          </Link>
          <Link href="/my-customer-area">
            <span className="block text-lg font-medium hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>My Customer Area</span>
          </Link>
          <Link href="/blog">
            <span className="block text-lg font-medium hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Blog</span>
          </Link>
          <Link href="/business">
            <span className="block text-lg font-medium hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Business</span>
          </Link>
          <Link href="/who-are-we">
            <span className="block text-lg font-medium hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Who Are We</span>
          </Link>
          <Link href="/cart">
            <span className="block text-lg font-medium hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}


