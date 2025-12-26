'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CircularBadge from '../ui/CircularBadge';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemCount] = useState(0); // TODO: Connect to cart state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Shop' },
    { href: '/#faq', label: 'FAQ' },
  ];

  return (
    <>
      {/* Circular Badge - Fixed top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] hidden lg:block"
      >
        <CircularBadge
          variant={isScrolled ? "white" : "transparent"}
          size="md"
          className={`transition-all duration-300 ${
            isScrolled
              ? 'text-koel-teal shadow-lg'
              : 'text-white'
          }`}
        />
      </motion.div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-dark shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-28'
          }`}>
            {/* Mobile: Menu Button (Left) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 sm:w-11 sm:h-11 bg-koel-blue border border-white rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`transition-all duration-500 ${isScrolled ? 'w-5 h-5' : 'w-5 h-5 sm:w-6 sm:h-6'}`} strokeWidth={2} />
              ) : (
                <Menu className={`transition-all duration-500 ${isScrolled ? 'w-5 h-5' : 'w-5 h-5 sm:w-6 sm:h-6'}`} strokeWidth={2} />
              )}
            </button>

            {/* Desktop: Logo (Left) */}
            <Link href="/" className="hidden md:flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`relative transition-all duration-500 ${
                  isScrolled ? 'w-24 h-10' : 'w-32 h-14'
                }`}
              >
                <Image
                  src="/logo.svg"
                  alt="KOEL Logo"
                  fill
                  className={`object-contain transition-all duration-300 ${
                    isScrolled ? 'brightness-0 invert' : ''
                  }`}
                  priority
                />
              </motion.div>
            </Link>

            {/* Mobile: Logo (Center) */}
            <Link href="/" className="md:hidden absolute left-1/2 -translate-x-1/2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`relative transition-all duration-500 ${
                  isScrolled ? 'w-16 h-7' : 'w-20 h-9'
                }`}
              >
                <Image
                  src="/logo.svg"
                  alt="KOEL Logo"
                  fill
                  className={`object-contain transition-all duration-300 ${
                    isScrolled ? 'brightness-0 invert' : ''
                  }`}
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-white font-medium hover:text-koel-blue transition-all duration-300 ${
                    isScrolled ? 'text-base' : 'text-lg'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Cart Icon (Right on both mobile and desktop) */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative md:p-2 md:text-white md:hover:text-koel-blue md:transition-colors md:duration-300 md:hidden sm:w-11 sm:h-11 w-10 h-10 bg-koel-blue border border-white rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all duration-300"
                aria-label="Shopping cart"
              >
                <ShoppingCart
                  className={`transition-all duration-500 ${
                    isScrolled ? 'w-5 h-5' : 'w-5 h-5 sm:w-6 sm:h-6'
                  }`}
                  strokeWidth={2}
                />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-koel-aqua rounded-full text-[10px] flex items-center justify-center text-white font-bold">
                    {cartItemCount}
                  </span>
                )}
              </motion.button>

              {/* Desktop: Cart Icon */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex relative p-2 text-white hover:text-koel-blue transition-colors duration-300"
                aria-label="Shopping cart"
              >
                <ShoppingCart
                  className={`transition-all duration-500 ${
                    isScrolled ? 'w-5 h-5 md:w-6 md:h-6' : 'w-6 h-6 md:w-7 md:h-7'
                  }`}
                  strokeWidth={2}
                />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-koel-blue rounded-full text-[10px] md:text-xs flex items-center justify-center text-white font-bold">
                    {cartItemCount}
                  </span>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed top-0 right-0 bottom-0 w-64 glass-dark z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end p-6">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white hover:text-koel-blue"
                  >
                    <X className="w-6 h-6" strokeWidth={2} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-6 px-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white text-lg font-medium hover:text-koel-blue transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
