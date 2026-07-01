import { useState, useEffect, useRef, useCallback } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const firstFocusableRef = useRef(null);

  const navLinks = [
    { href: '#design', label: 'Design', ariaLabel: 'Explore the Design' },
    { href: '#technology', label: 'Technology', ariaLabel: 'Learn about the Technology' },
    { href: '#specs', label: 'Specs', ariaLabel: 'View technical specifications' },
    { href: '#reviews', label: 'Reviews', ariaLabel: 'Read customer reviews' },
  ];

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, closeMenu]);

  // Focus trap inside mobile menu
  useEffect(() => {
    if (mobileMenuOpen && firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }

    // Prevent body scroll when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-indigo-100/20 shadow-sm">
      <nav
        aria-label="Main Navigation"
        className="flex justify-between items-center max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop h-20"
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Lowerdesk Home"
          className="font-headline text-headline-lg tracking-tighter text-on-surface z-50"
        >
          Lowerdesk
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.ariaLabel}
              className="font-label text-label-md text-secondary hover:text-primary transition-colors relative nav-item"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#cta"
          className="hidden md:inline-flex bg-primary text-on-primary px-8 py-3 rounded-lg font-label text-label-md hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-primary/20"
          aria-label="Buy Lowerdesk Pro Desk Now"
        >
          Buy Now
        </a>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          onClick={toggleMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-surface-container transition-colors"
        >
          <span
            className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
      >
        <div className="flex justify-end mb-8">
          <button
            ref={firstFocusableRef}
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface" aria-hidden="true">close</span>
          </button>
        </div>

        <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.ariaLabel}
              onClick={closeMenu}
              className="font-headline text-xl text-on-surface py-3 px-4 rounded-lg hover:bg-surface-container transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <a
            href="#cta"
            onClick={closeMenu}
            className="block w-full text-center bg-primary text-on-primary px-8 py-4 rounded-lg font-label text-label-md hover:bg-indigo-700 transition-all shadow-lg shadow-primary/20"
            aria-label="Buy Lowerdesk Pro Desk Now"
          >
            Buy Now
          </a>
        </div>
      </div>
    </header>
  );
}
