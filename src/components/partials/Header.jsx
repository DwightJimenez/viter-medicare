import React from "react";
import { FaClinicMedical, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Navigation */}
      <nav className='bg-white shadow-lg sticky top-0 z-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex justify-between items-center py-4'>
            <div className='flex items-center space-x-2'>
              <FaClinicMedical className='text-blue-600 text-2xl' />
              <span className='font-bold text-xl text-blue-800'>MediCare+</span>
            </div>
            <div className='hidden md:flex space-x-8'>
              <a
                href='#home'
                className='text-blue-800 font-medium hover:text-blue-600'
              >
                Home
              </a>
              <a
                href='#services'
                className='text-blue-800 font-medium hover:text-blue-600'
              >
                Services
              </a>
              <a
                href='#doctors'
                className='text-blue-800 font-medium hover:text-blue-600'
              >
                Doctors
              </a>
              <a
                href='#emergency'
                className='text-blue-800 font-medium hover:text-blue-600'
              >
                Emergency
              </a>
              <a
                href='#pharmacy'
                className='text-blue-800 font-medium hover:text-blue-600'
              >
                Pharmacy
              </a>
            </div>
            <button className='md:hidden text-gray-600' onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes />
              ) : (
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`
        fixed inset-0 bg-gradient-to-r from-blue-500 to-blue-700 z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
      >
        <div className='flex flex-col items-center space-y-8 text-white text-2xl'>
          <a
            href='#home'
            className='hover:text-blue-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href='#stores'
            className='hover:text-blue-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Stores
          </a>
          <a
            href='#services'
            className='hover:text-blue-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href='#contact'
            className='hover:text-blue-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
