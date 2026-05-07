import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, FileText, Share2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const footerLinks = {
  Products: [
    { label: 'Open Top Drums', path: '/products/full-open-top-drums' },
    { label: 'Square Mouser', path: '/products/square-mouser-drums' },
    { label: 'Jerry Cans', path: '/products/jerry-cans' },
    { label: 'Rocket Drums', path: '/products/rocket-type-drums' },
    { label: 'Large Carboys', path: '/products/large-carboys' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Infrastructure', path: '/infrastructure' },
    { label: 'Quality & Testing', path: '/quality' },
    { label: 'Contact', path: '/contact' },
  ],
  Resources: [
    { label: 'MSDS Sheets', path: '#' },
    { label: 'Compliance Docs', path: '#' },
    { label: 'UN Certifications', path: '#' },
    { label: 'IIP Listing', path: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-inverse-surface border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-margin py-16">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center">
                  <span className="text-on-secondary-fixed font-black text-lg">PC</span>
                </div>
                <div>
                  <span className="font-bold text-[20px] text-on-primary tracking-tight">
                    POWER CRESTS
                  </span>
                  <span className="block text-[10px] text-primary-fixed-dim tracking-[0.25em] uppercase -mt-1">
                    Pvt Ltd
                  </span>
                </div>
              </div>
              <p className="text-on-tertiary-container text-[15px] leading-relaxed mb-6 max-w-sm">
                Pioneering durable HDPE container technology for India's most demanding industrial environments. Engineered for safety, certified for compliance.
              </p>
              <div className="space-y-3">
                <a href="tel:+919045101186" className="flex items-center gap-3 text-on-tertiary-container hover:text-secondary-container transition-colors text-[14px]">
                  <Phone size={16} className="text-primary-fixed-dim" /> +91-90451 01186
                </a>
                <a href="mailto:contact@powercrests.in" className="flex items-center gap-3 text-on-tertiary-container hover:text-secondary-container transition-colors text-[14px]">
                  <Mail size={16} className="text-primary-fixed-dim" /> powercrests@gmail.com
                </a>
                <div className="flex items-start gap-3 text-on-tertiary-container text-[14px]">
                  <MapPin size={16} className="text-primary-fixed-dim mt-0.5 shrink-0" />
                  <span>Khasara No. 587, Akbarpuruood,<br />Behind Shree Cement, Laksar Road,<br />Lakshar, Haridwar, Uttarakhand – 247663</span>
                </div>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <span className="font-label-sm text-[12px] text-primary-fixed-dim font-bold uppercase tracking-[0.2em] block mb-4">
                  {title}
                </span>
                <div className="space-y-3">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.path}
                      className="block text-on-tertiary-container hover:text-secondary-container transition-colors text-[14px]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-on-tertiary-container/70">
            © {new Date().getFullYear()} Power Crests Pvt Ltd. All rights reserved. Engineered for Durability.
          </p>
          <div className="flex gap-4">
            <Globe size={18} className="text-on-tertiary-container/50 hover:text-on-primary cursor-pointer transition-colors" />
            <Share2 size={18} className="text-on-tertiary-container/50 hover:text-on-primary cursor-pointer transition-colors" />
            <FileText size={18} className="text-on-tertiary-container/50 hover:text-on-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
