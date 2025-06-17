'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = ['home', 'services', 'about', 'contact'];
  //     const current = sections.find(section => {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const rect = element.getBoundingClientRect();
  //         return rect.top <= 100 && rect.bottom >= 100;
  //       }
  //       return false;
  //     });
  //     if (current) setActiveSection(current);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Services', href: '/services', id: 'services' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              DevCo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                } ${
                  activeSection === link.id 
                    ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:transform after:scale-x-100' 
                    : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} my-1`}></span>
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden bg-white shadow-lg`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => {
                handleNavClick(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === link.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              } transition-colors duration-300`}
            >
              {link.name}
            </Link>
          ))}
          {/* <button className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
            Get Started
          </button> */}
        </div>
      </div>
    </header>
  );
} 