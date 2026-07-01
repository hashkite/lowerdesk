const currentYear = new Date().getFullYear();

const productLinks = [
  { label: 'Yogeek Pro Desk', href: '#' },
  { label: 'Ergonomic Floor Seat', href: '#' },
  { label: 'Cable Management Kit', href: '#' },
  { label: 'Anti-Fatigue Mats', href: '#' },
];

const supportLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Assembly Guide', href: '#' },
  { label: 'Warranty Policy', href: '#' },
  { label: 'Contact Support', href: '#' },
];

const socialLinks = [
  { label: 'Yogeek Website', icon: 'public', href: '#' },
  { label: 'Email Support', icon: 'alternate_email', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container text-on-surface w-full border-t border-outline-variant/30" role="contentinfo">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Brand */}
        <div className="md:col-span-4 space-y-6">
          <div className="font-headline text-2xl font-black text-primary">lowerdesk <span className="text-sm font-normal text-on-surface-variant font-body lowercase">by fittrock</span></div>
          <p className="font-body text-base text-on-surface-variant max-w-sm leading-relaxed">
            Engineering the intersection of modern technology and biological necessity.
          </p>
          <address className="text-on-surface-variant font-body text-sm not-italic leading-relaxed">
            Office no 610, 6th floor, Park Plaza,<br />
            Porwal Rd, Lohegaon, Pune,<br />
            Maharashtra 411047
          </address>
        </div>

        {/* Products */}
        <div className="md:col-span-2">
          <h5 className="font-bold mb-6 text-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary">
            Products
          </h5>
          <ul className="space-y-4">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="md:col-span-2">
          <h5 className="font-bold mb-6 text-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary">
            Support
          </h5>
          <ul className="space-y-4">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-4 space-y-6">
          <h5 className="font-bold text-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary">
            Newsletter
          </h5>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border-b-2 border-outline-variant pb-2 group focus-within:border-primary transition-colors"
          >
            <label className="sr-only" for="footer-email">
              Email Address
            </label>
            <input
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-on-surface w-full p-0 font-body text-sm placeholder:text-on-surface-variant/50"
              id="footer-email"
              placeholder="Email Address"
              required
              type="email"
            />
            <button
              className="material-symbols-outlined text-primary hover:translate-x-1 transition-transform"
              type="submit"
              aria-label="Subscribe"
            >
              arrow_forward
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-sm text-on-surface-variant">
          © {currentYear} Lowerdesk by Fittrock. Rooted in Pune. Biological Alignment.
        </p>
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="text-on-surface-variant hover:text-primary transition-colors p-2.5 bg-white rounded-full shadow-sm flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
