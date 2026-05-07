import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight,
  Send, MessageCircle
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { products } from '../data/products';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-inverse-surface pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <AnimatedSection>
            <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-[0.2em] block mb-3">
              Get in Touch
            </span>
            <h1 className="font-heading text-[44px] lg:text-headline-xl font-bold text-on-primary mb-4">
              Let's Build Your Packaging Solution
            </h1>
            <p className="text-on-tertiary-container text-[18px] max-w-xl">
              Request a custom technical quote and logistics plan. Our specialists respond within 24 business hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-margin py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Info */}
          <div>
            <AnimatedSection>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Request a Bulk Quote</h2>
              <p className="text-on-surface-variant text-[16px] leading-relaxed mb-8">
                Complete the form to receive a customized technical quote and logistics plan within 24 business hours. Our specialists are ready to assist with compatibility inquiries.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <ul className="space-y-4 mb-10">
                {[
                  'Direct manufacturer pricing',
                  'Custom branding & labeling available',
                  'Full MSDS & Compliance documentation provided',
                  'Tiered volume discounts for 500+ units',
                  'Express 24-hour dispatch for catalog items',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary shrink-0" />
                    <span className="text-on-surface text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Contact Cards */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                <a href="tel:+919045101186" className="flex items-center gap-4 p-5 bg-surface-container-low rounded-xl border border-outline-variant hover:shadow-md hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">+91-90451 01186</p>
                    <p className="text-on-surface-variant text-[13px]">Available Mon–Sat, 9 AM–6 PM</p>
                  </div>
                </a>

                <a href="mailto:powercrests@gmail.com" className="flex items-center gap-4 p-5 bg-surface-container-low rounded-xl border border-outline-variant hover:shadow-md hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">powercrests@gmail.com</p>
                    <p className="text-on-surface-variant text-[13px]">We reply within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-surface-container-low rounded-xl border border-outline-variant">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Registered Office</p>
                    <p className="text-on-surface-variant text-[14px] leading-relaxed">
                      Khasara No. 587, Akbarpuruood,<br />
                      Behind Shree Cement, Laksar Road,<br />
                      Lakshar, Haridwar,<br />
                      Uttarakhand, India – 247663
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-surface-container-low rounded-xl border border-outline-variant">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Business Hours</p>
                    <p className="text-on-surface-variant text-[14px]">Mon – Sat: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form */}
          <AnimatedSection delay={0.15} direction="right">
            <div className="bg-surface-container p-8 lg:p-10 rounded-2xl border border-outline-variant shadow-sm sticky top-24">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle2 size={64} className="text-primary mx-auto mb-6" />
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                    Quote Request Received!
                  </h3>
                  <p className="text-on-surface-variant">
                    Our team will get back to you within 24 business hours with a customized quote.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider">Full Name *</label>
                      <input
                        className="bg-surface-container-lowest border border-outline rounded-lg p-3 focus:border-2 focus:border-primary outline-none transition-all text-[15px]"
                        placeholder="John Doe"
                        type="text"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider">Company *</label>
                      <input
                        className="bg-surface-container-lowest border border-outline rounded-lg p-3 focus:border-2 focus:border-primary outline-none transition-all text-[15px]"
                        placeholder="Industrial Corp."
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider">Email Address *</label>
                    <input
                      className="bg-surface-container-lowest border border-outline rounded-lg p-3 focus:border-2 focus:border-primary outline-none transition-all text-[15px]"
                      placeholder="procurement@company.com"
                      type="email"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider">Phone Number</label>
                    <input
                      className="bg-surface-container-lowest border border-outline rounded-lg p-3 focus:border-2 focus:border-primary outline-none transition-all text-[15px]"
                      placeholder="+91-XXXXXXXXXX"
                      type="tel"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider">Product Selection *</label>
                    <select
                      className="bg-surface-container-lowest border border-outline rounded-lg p-3 focus:border-2 focus:border-primary outline-none transition-all text-[15px]"
                      required
                    >
                      <option value="">Select a product...</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>{p.name} ({p.capacities.join(', ')})</option>
                      ))}
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider">Estimated Quantity</label>
                    <input
                      className="bg-surface-container-lowest border border-outline rounded-lg p-3 focus:border-2 focus:border-primary outline-none transition-all text-[15px]"
                      placeholder="500"
                      type="number"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider">Message</label>
                    <textarea
                      className="bg-surface-container-lowest border border-outline rounded-lg p-3 focus:border-2 focus:border-primary outline-none transition-all text-[15px] resize-none"
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary py-4 font-bold rounded-lg uppercase tracking-widest hover:bg-primary-container transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-[14px]"
                  >
                    <Send size={18} />
                    Submit Quote Request
                  </button>

                  <div className="text-center pt-2">
                    <a
                      href="https://wa.me/919045101186"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] text-primary font-medium hover:text-primary-container transition-colors"
                    >
                      <MessageCircle size={16} />
                      Or chat with us on WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-outline-variant">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0!2d78.0516!3d29.7370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929b9a9ef6c39%3A0x9a7f30d1c2c8e1b0!2sLaksar%2C%20Haridwar%2C%20Uttarakhand%20247663!5e0!3m2!1sen!2sin!4v1715063000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Power Crests Location"
        />
      </section>
    </>
  );
}
