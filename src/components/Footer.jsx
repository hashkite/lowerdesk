const currentYear = new Date().getFullYear();

const productLinks = [
  { label: 'Lowerdesk Pro Desk', href: '#' },
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
  { label: 'Lowerdesk Website', icon: 'public', href: '#' },
  { label: 'Email Support', icon: 'alternate_email', href: '#' },
  { label: 'Call Us', icon: 'phone', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white w-full pt-vignette-padding pb-8" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter mb-20">
        {/* Brand */}
        <div className="space-y-6">
          <div className="font-headline text-headline-lg text-white">Lowerdesk</div>
          <p className="font-body text-body-md text-slate-400">
            Precision engineered sit-to-stand furniture for the modern professional.
          </p>
          <div className="flex gap-4" role="list" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                role="listitem"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  {link.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-bold mb-6 text-label-md uppercase tracking-[0.2em] text-indigo-400">
            Products
          </h3>
          <ul className="space-y-4">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold mb-6 text-label-md uppercase tracking-[0.2em] text-indigo-400">
            Support
          </h3>
          <ul className="space-y-4">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Showroom */}
        <div>
          <h3 className="font-bold mb-6 text-label-md uppercase tracking-[0.2em] text-indigo-400">
            Showroom
          </h3>
          <address className="text-slate-400 font-body text-body-md mb-4 not-italic">
            Office no 610, 6th floor, Park Plaza,
            <br />
            Porwal Rd, Lohegaon, Pune,
            <br />
            Maharashtra 411047
          </address>
          <p className="text-slate-400 font-body text-body-md">
            Mon – Fri | 10am – 6pm
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-body-md text-slate-500">
          © {currentYear} Lowerdesk Precision Engineering. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-caption">
            Privacy Policy
          </a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-caption">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
