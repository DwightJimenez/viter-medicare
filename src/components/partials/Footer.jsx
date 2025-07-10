import React from "react";
import { FaClinicMedical } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className='py-20 bg-blue-800 text-white'>
        <div className='max-w-6xl mx-auto px-4 '>
          <div className='grid md:grid-cols-4 gap-5'>
            <div>
              <div className='flex items-center space-x-2'>
                <FaClinicMedical className='text-white text-2xl' />
                <span className='font-bold text-xl mb-2'>MediCare+</span>
              </div>
              <p className='text-blue-200'>
                Providing compassionate healthcare services since 2005
              </p>
            </div>
            <div>
              <p className='font-bold text-lg mb-2'>Quick Links</p>
              <ul className='text-blue-200'>
                <li>
                  <a href='#home'>Home</a>
                </li>
                <li>
                  <a href='#services'>Services</a>
                </li>
                <li>
                  <a href='#doctors'>Doctors</a>
                </li>
                <li>
                  <a href='#emergency'>Emergency</a>
                </li>
                <li>
                  <a href='#pharmacy'>Pharmacy</a>
                </li>
              </ul>
            </div>
            <div>
              <p className='text-lg font-bold mb-2'>Contact Us</p>
              <ul className='text-blue-200'>
                <li>123 Medical Center Drive</li>
                <li>Healthville, HV 12345</li>
                <li>Phone: (555) 987-6543</li>
                <li>Email: info@medicareplus.com</li>
              </ul>
            </div>
            <div>
              <p className='text-lg font-bold mb-2'>Opening Hours</p>
              <ul className='text-blue-200'>
                <li>Monday: Friday: 8am - 8pm</li>
                <li>Saturday: 9am - 5pm</li>
                <li>Sunday: Emergency only</li>
              </ul>
            </div>
          </div>
          <div className="h-[1px] w-full bg-blue-700 my-8"></div>
          <p className='text-center text-blue-200'>
            &copy; 2025 MediCare+. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
