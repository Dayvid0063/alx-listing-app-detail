import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          {/* Logo */}
          <Image
            src="/assets/airbnb.jpg"
            alt="Logo"
            width={200}
            height={40}
            priority
          />

          {/* Search Bar */}
          <div className="flex-1 mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-full px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-4">
            <Button label="Sign In" variant="secondary" size="medium" />
            <Button label="Sign Up" variant="primary" size="medium" />
          </div>
        </div>

        {/* Accommodation Types */}
        <nav className="flex justify-center gap-6 text-sm font-medium text-gray-600">
          <a
            href="#rooms"
            className="hover:text-red-500 transition duration-200"
          >
            Rooms
          </a>
          <a
            href="#mansions"
            className="hover:text-red-500 transition duration-200"
          >
            Mansions
          </a>
          <a
            href="#countryside"
            className="hover:text-red-500 transition duration-200"
          >
            Countryside
          </a>
          <a
            href="#apartments"
            className="hover:text-red-500 transition duration-200"
          >
            Apartments
          </a>
          <a
            href="#villas"
            className="hover:text-red-500 transition duration-200"
          >
            Villas
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
