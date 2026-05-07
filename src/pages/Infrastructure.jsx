import { Link } from 'react-router-dom';
import {
  Factory, ArrowRight, Box, Cpu, Hexagon, Cog,
  Scissors, Snowflake, Zap, Blend
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import StatCounter from '../components/StatCounter';
import { machinery } from '../data/products';

const iconMap = {
  Factory, Box, Cpu, Hexagon, Cog, Blend, Scissors, Snowflake, Zap
};

export default function Infrastructure() {
  return (
    <>
      {/* Hero */}
      <section className="bg-inverse-surface pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <AnimatedSection>
            <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-[0.2em] block mb-3">
              Manufacturing Facility
            </span>
            <h1 className="font-heading text-[44px] lg:text-headline-xl font-bold text-on-primary mb-4">
              10,000+ Sq. Meters of Modern Manufacturing
            </h1>
            <p className="text-on-tertiary-container text-[18px] max-w-xl">
              Equipped with fully automatic blow moulding machines, injection moulding, and world-class quality testing infrastructure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter end={10000} suffix="+" label="Sq. Meters Area" />
            <StatCounter end={100000} label="Units / Month" />
            <StatCounter end={23} suffix="+" label="Machines" />
            <StatCounter end={15} suffix="+" label="Mould Variants" />
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-margin py-20">
        <AnimatedSection className="mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Our Facility</h2>
          <p className="text-on-surface-variant text-[16px] max-w-xl">
            Strategically located in Ankleshwar GIDC, Gujarat — one of India's largest chemical industrial zones — our facility is designed for maximum production efficiency.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Production Floor', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzL4fgxjPYVmDWhjAybLno2GKehKUh_LmTknWB1Fjkrm8Kml0z643159-qXaAzRE4POLzsZt7dqNMyp2wL6hI1pltcGO3O9c5R3cze-M5iUjuBy8Ge-5_92c6wC_JJStie_l-7MrG2iDXP9GkGRo1PWtEMtsZCr1L_Wdm1TyXQrxOooWo4E4K0v7pl7von9g3p9Bg-vTq6__6bPytpgA79FsymhtrC-s_xlpo6IvEUYG9KpgvXXfyy0cBdZ0twKWv9ryHnZMOGJ-0' },
            { title: 'Quality Lab', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdNvqypJBbl3njZPhQbCGuEw4HubuNyj0DGoiwYTR2R-Wh50g_km9skbpSe-72HyhPDaz_0tz1EzYWUocBTbusASLHcP-NYRYejyXLPAoMeIK_dBRPcTStupyxQ0vLyUEoTreCzUCYryjuVGnUtQI2GbBicQ_OLS-sSp4qn-ax5efugPpafdvBEG3dBpXIh3tldEl_drOSRknby0TyPlbF88hJwfSx1m8SBKAV0y2kjj3Ufkzu1vE586gQHjSrzKWOlFFu1e57GJI' },
            { title: 'Warehouse', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlCG6eB-wnjXvUyavM7jJRock3vAC6XDeVQ3ovqcvXoXW2wAge6lwPS6XJ_SZdNONotC3c3vfUGXVCqX5Hp6SQjRHUS55h0_vpzr3kAlhdFJPopLgbb1v6MsyrY38JSNkql5XWGUomu7VL8A4ILjYaesryrJmygv8YfZcy-VK4r4x-QClEpFaI3fko7iGJ-1pDCCwZQao5ePGfADg2RXSPX7ZV3AONhZhGQ4Z8GGEShUz6GFnf3NXPAurXJQF-dLZrw_6dGmK7eO0' },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="group rounded-xl overflow-hidden border border-outline-variant">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-surface-container-lowest">
                  <h3 className="font-semibold text-[16px] text-on-surface">{item.title}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Machinery */}
      <section className="bg-surface-container-low py-20 border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <AnimatedSection className="text-center mb-16">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-3">
              Equipment
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Machinery & Equipment
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {machinery.map((machine, i) => {
              const Icon = iconMap[machine.icon] || Cog;
              return (
                <AnimatedSection key={machine.name} delay={i * 0.05}>
                  <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant hover:shadow-md hover:border-primary/20 transition-all duration-300 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[15px] text-on-surface">{machine.name}</h4>
                    </div>
                    <div className="bg-primary text-on-primary font-mono font-bold text-[14px] px-3 py-1.5 rounded-lg">
                      ×{machine.qty}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-margin py-20">
        <AnimatedSection className="mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Production Capabilities</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Blow Moulding', desc: 'Fully automatic blow moulding machines producing containers from 20L to 235L with precise wall thickness control.' },
            { title: 'Injection Moulding', desc: 'Injection moulding for caps, closures, and specialized components with tight tolerance requirements.' },
            { title: 'Custom Moulds', desc: '15+ blow moulds and 6 injection moulds covering the complete range from 20L to 200L containers.' },
            { title: 'Temperature Control', desc: '3 cooling towers (70 T/R) and 2 chilling plants (25 Ton) ensuring consistent material processing temperatures.' },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant h-full">
                <h3 className="font-semibold text-[18px] text-on-surface mb-3">{item.title}</h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-container py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin text-center">
          <AnimatedSection>
            <h2 className="font-heading text-[32px] font-bold text-on-secondary-fixed mb-4">
              Want a Factory Tour?
            </h2>
            <p className="text-on-secondary-fixed-variant text-[17px] mb-8 max-w-md mx-auto">
              Schedule a visit to our Ankleshwar facility and see our manufacturing process firsthand.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-[14px] uppercase tracking-widest hover:bg-primary-container transition-all shadow-lg"
            >
              Schedule Visit <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
