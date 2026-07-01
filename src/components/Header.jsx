import { useState, useEffect, useRef, useCallback } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const firstFocusableRef = useRef(null);

  const navLinks = [
    { href: '#design', label: 'Performance', ariaLabel: 'Explore the performance alignment' },
    { href: '#technology', label: 'Technology', ariaLabel: 'Learn about the technology' },
    { href: '#specs', label: 'Specs', ariaLabel: 'View technical specifications' },
    { href: '#reviews', label: 'Community', ariaLabel: 'Read customer reviews and stories' },
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
    <>
      <header className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30 h-20 transition-all">
        <nav
          aria-label="Main Navigation"
          className="flex justify-between items-center max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 h-full"
        >
          {/* Logo */}
          <a
            href="/"
            aria-label="Lowerdesk by Fittrock Home"
            className="font-headline text-2xl font-bold tracking-tight text-primary transition-colors hover:opacity-90"
          >
            lowerdesk <span className="text-sm font-normal text-on-surface-variant font-body lowercase">by fittrock</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.ariaLabel}
                className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-on-surface-variant hover:text-primary transition-all relative nav-item pb-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://fittrock.com/products/yogeek-sit-to-stand-adjustable-desk"
            className="hidden md:inline-flex bg-primary text-white px-8 py-2.5 font-label text-[13px] font-bold tracking-[0.08em] uppercase rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
            aria-label="Buy Yogeek Sit to Stand Desk Now"
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
      </header>

      {/* Mobile Menu Overlay — rendered outside header to avoid backdrop-blur stacking context */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel — rendered outside header to avoid backdrop-blur stacking context */}
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
            href="https://fittrock.com/products/yogeek-sit-to-stand-adjustable-desk"
            onClick={closeMenu}
            className="block w-full text-center bg-primary text-white px-8 py-4 rounded-lg font-label text-[13px] font-bold tracking-[0.08em] uppercase hover:bg-primary/95 transition-all shadow-lg"
            aria-label="Buy Yogeek Sit to Stand Desk Now"
          >
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
}
