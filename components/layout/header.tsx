'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  const navItems = [
    { label: 'サービス内容', id: 'solution' },
    { label: '選ばれる理由', id: 'reasons' },
    { label: '代表プロフィール', id: 'profile' },
    { label: '実績', id: 'testimonials' },
    { label: '料金', id: 'pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-extrabold text-navy-700 tracking-tight font-[family-name:var(--font-montserrat)]"
            >
              Digle
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-navy-600 hover:text-navy-800 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdGL5TXYHzgEqF_UxdUywJPyXwicdM3MLuXcz1BuEMVkxbPDA/viewform?usp=header', '_blank')}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              無料相談を予約
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-navy-700" />
            ) : (
              <Menu className="h-6 w-6 text-navy-700" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-navy-100"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-navy-600 hover:bg-navy-50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdGL5TXYHzgEqF_UxdUywJPyXwicdM3MLuXcz1BuEMVkxbPDA/viewform?usp=header', '_blank')}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                無料相談を予約
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
