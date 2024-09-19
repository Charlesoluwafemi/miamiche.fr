import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Import for Heroicons v1

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-3xl font-extrabold cursor-pointer text-pink-600">
              BonRegal
            </span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/menu-of-the-week">
            <span className="hover:text-gray-400 cursor-pointer">Menu of the Week</span>
          </Link>
          <Link href="/discovery-box">
            <span className="hover:text-gray-400 cursor-pointer">Discovery Box</span>
          </Link>
          <Link href="/gift-voucher">
            <span className="hover:text-gray-400 cursor-pointer">Gift Voucher</span>
          </Link>
          <Link href="/my-customer-area">
            <span className="hover:text-gray-400 cursor-pointer">My Customer Area</span>
          </Link>
          <Link href="/blog">
            <span className="hover:text-gray-400 cursor-pointer">Blog</span>
          </Link>
          <Link href="/business">
            <span className="hover:text-gray-400 cursor-pointer">Business</span>
          </Link>
          <Link href="/who-are-we">
            <span className="hover:text-gray-400 cursor-pointer">Who Are We</span>
          </Link>
          {/* Add Cart Link */}
          <Link href="/cart">
            <span className="hover:text-gray-400 cursor-pointer">Cart</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="w-6 h-6 text-white" />
            ) : (
              <MenuIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-gray-700 text-white space-y-2 p-4">
          <Link href="/menu-of-the-week">
            <span className="block hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Menu of the Week</span>
          </Link>
          <Link href="/discovery-box">
            <span className="block hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Discovery Box</span>
          </Link>
          <Link href="/gift-voucher">
            <span className="block hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Gift Voucher</span>
          </Link>
          <Link href="/my-customer-area">
            <span className="block hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>My Customer Area</span>
          </Link>
          <Link href="/blog">
            <span className="block hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Blog</span>
          </Link>
          <Link href="/business">
            <span className="block hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Business</span>
          </Link>
          <Link href="/who-are-we">
            <span className="block hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Who Are We</span>
          </Link>
          {/* Add Cart Link */}
          <Link href="/cart">
            <span className="block hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
