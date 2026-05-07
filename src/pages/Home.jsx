import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield, Award, Truck, Factory, Beaker, Layers, Lock,
  ArrowRight, CheckCircle2, ChevronRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import StatCounter from '../components/StatCounter';
import { products } from '../data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="/hero-drums.png"
            alt="Power Crests HDPE Industrial Drums"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-[#0a1628]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin w-full pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-[36px] sm:text-[48px] lg:text-[64px] font-black text-on-primary leading-[1.05] tracking-tight mb-4 sm:mb-6">
              High-Performance
              <span className="block text-secondary-container">HDPE Industrial</span>
              Containers
            </h1>

            <p className="text-[15px] sm:text-[18px] text-white/70 leading-relaxed mb-8 max-w-lg">
              Engineered for chemical resistance and logistics reliability. Our UN-rated containers provide the structural integrity required for global industrial supply chains.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="group bg-secondary-container text-on-secondary-fixed-variant px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold text-[13px] sm:text-[14px] uppercase tracking-widest hover:bg-secondary-fixed-dim transition-all duration-300 flex items-center justify-center gap-2"
              >
                Request a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products"
                className="group border-2 border-white/30 text-on-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold text-[13px] sm:text-[14px] uppercase tracking-widest hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Catalog
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-secondary-container rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="bg-primary py-4 sm:py-6 overflow-x-auto">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin">
          <div className="flex items-center gap-6 sm:gap-10 lg:gap-16 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
            {[
              { icon: Shield, text: 'UN Certified' },
              { icon: Award, text: 'IIP Listed' },
              { icon: Factory, text: '1 Lakh Units/Month' },
              { icon: Truck, text: 'Pan-India Delivery' },
              { icon: Beaker, text: 'Chemical Resistant' },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-on-primary/80 shrink-0"
              >
                <item.icon size={18} className="text-secondary-container" />
                <span className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider whitespace-nowrap">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUCT SHOWCASE ═══ */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin py-12 sm:py-16 lg:py-section-padding">
        <AnimatedSection className="mb-10 sm:mb-14">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-3">
            Core Product Line
          </span>
          <h2 className="font-headline-lg text-[24px] sm:text-headline-lg text-on-surface">
            Industrial Storage Solutions
          </h2>
          <p className="text-on-surface-variant mt-3 max-w-xl text-[15px] sm:text-[16px]">
            From 10-litre jerry cans to 235-litre industrial barrels — every container precision-engineered for your industry.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.1}>
              <Link
                to={`/products/${product.id}`}
                className="group block bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-on-primary text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded tracking-wider">
                    {product.badge}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-[16px] sm:text-[18px] text-on-surface mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-on-surface-variant text-[13px] sm:text-[14px] mb-3">
                    {product.shortDesc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-[12px] text-primary font-mono font-medium">
                      {product.capacities[0]}–{product.capacities[product.capacities.length - 1]}
                    </span>
                    <span className="text-primary font-bold text-[12px] sm:text-[13px] flex items-center gap-1 group-hover:gap-2 transition-all">
                      VIEW <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8 sm:mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 sm:px-8 py-3 rounded-lg font-bold text-[13px] sm:text-[14px] uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all duration-300"
          >
            View All Products <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>

      {/* ═══ WHY POWER CRESTS ═══ */}
      <section className="bg-surface-container-low py-12 sm:py-16 lg:py-section-padding border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin">
          <AnimatedSection className="text-center mb-10 sm:mb-16">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-3">
              Why Power Crests
            </span>
            <h2 className="font-headline-lg text-[24px] sm:text-headline-lg text-on-surface">
              Trusted by India's Top Industries
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Shield, title: 'Quality Assurance', desc: 'Supervisors monitor every production stage. 10+ quality tests per batch including drop, hydraulic, and UV testing.' },
              { icon: Factory, title: 'Modern Infrastructure', desc: '10,000+ sq.m facility with fully automatic blow moulding machines and 1 lakh units/month capacity.' },
              { icon: Beaker, title: 'R&D Innovation', desc: 'Dedicated R&D department developing cost-effective techniques and custom container solutions.' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Pan-India distribution network with prompt dispatch for standard catalog items from our Uttarakhand facility.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-outline-variant hover:shadow-lg hover:border-primary/20 transition-all duration-500 h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-[16px] sm:text-[18px] text-on-surface mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-on-surface-variant text-[14px] sm:text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="bg-inverse-surface py-12 sm:py-16 lg:py-section-padding">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <StatCounter end={10} suffix="+" label="Years of Excellence" />
            <StatCounter end={100000} label="Units / Month" />
            <StatCounter end={10000} suffix="+" label="Sq. Meters Facility" />
            <StatCounter end={8} suffix="+" label="Product Lines" />
          </div>
        </div>
      </section>

      {/* ═══ TECHNICAL EXCELLENCE ═══ */}
      <section className="bg-[#0c1a2e] py-12 sm:py-16 lg:py-section-padding">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <AnimatedSection>
                <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-widest mb-4 block">
                  Engineered for Extremes
                </span>
                <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-on-primary leading-tight mb-8 sm:mb-10">
                  Technical Excellence in Polyethylene
                </h2>
              </AnimatedSection>

              <div className="space-y-6 sm:space-y-8">
                {[
                  { icon: Beaker, title: 'Chemical Resistance', desc: 'Superior resistance to acids, bases, and organic solvents. Material stable up to 120°C (248°F).' },
                  { icon: Layers, title: 'Optimized Stackability', desc: 'Interlocking base design allows 3-high vertical stacking of 208L drums on standard industrial pallets.' },
                  { icon: Lock, title: 'Structural Integrity', desc: 'Drop-tested from 1.8 meters under full load. UN-certified for hazardous material transport.' },
                ].map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 0.15} direction="left">
                    <div className="flex gap-4 sm:gap-5">
                      <div className="bg-primary-container p-3 sm:p-4 rounded-xl h-fit shrink-0">
                        <item.icon size={24} className="text-on-primary-container" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[17px] sm:text-[20px] text-on-primary mb-1 sm:mb-2">{item.title}</h4>
                        <p className="text-on-tertiary-container text-[14px] sm:text-[15px] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative mt-6 lg:mt-0">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
                <img
                  className="relative rounded-xl border border-white/10 shadow-2xl w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdNvqypJBbl3njZPhQbCGuEw4HubuNyj0DGoiwYTR2R-Wh50g_km9skbpSe-72HyhPDaz_0tz1EzYWUocBTbusASLHcP-NYRYejyXLPAoMeIK_dBRPcTStupyxQ0vLyUEoTreCzUCYryjuVGnUtQI2GbBicQ_OLS-sSp4qn-ax5efugPpafdvBEG3dBpXIh3tldEl_drOSRknby0TyPlbF88hJwfSx1m8SBKAV0y2kjj3Ufkzu1vE586gQHjSrzKWOlFFu1e57GJI"
                  alt="HDPE Manufacturing Process"
                />
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-surface-container-lowest p-4 sm:p-5 border border-outline-variant rounded-xl shadow-xl">
                  <p className="font-mono font-semibold text-[18px] sm:text-[22px] text-primary mb-0.5 sm:mb-1">0.96 g/cm³</p>
                  <p className="font-label-sm text-[10px] sm:text-[11px] text-on-surface-variant uppercase tracking-wider">Material Density</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="bg-secondary-container py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin text-center">
          <AnimatedSection>
            <h2 className="font-heading text-[26px] sm:text-[36px] font-bold text-on-secondary-fixed mb-3 sm:mb-4">
              Need Bulk HDPE Containers?
            </h2>
            <p className="text-on-secondary-fixed-variant text-[15px] sm:text-[18px] mb-6 sm:mb-8 max-w-lg mx-auto">
              Get a custom quote with competitive pricing and dedicated logistics support within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg font-bold text-[13px] sm:text-[14px] uppercase tracking-widest hover:bg-primary-container transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
