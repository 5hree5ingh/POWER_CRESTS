import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target, Eye, Users, Lightbulb, Award, Heart,
  ArrowRight, CheckCircle2, Building
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import StatCounter from '../components/StatCounter';

const timeline = [
  { year: '2014', title: 'Foundation', desc: 'Founded in Ankleshwar GIDC, Gujarat — one of India\'s premier chemical industrial hubs.' },
  { year: '2016', title: 'Expansion', desc: 'Scaled manufacturing capacity with additional blow moulding machines and expanded facility.' },
  { year: '2018', title: 'Certification', desc: 'Achieved UN certification and IIP listing for all core product lines.' },
  { year: '2020', title: 'Innovation', desc: 'Launched dedicated R&D department for developing next-gen container solutions.' },
  { year: '2024', title: 'Scale', desc: 'Reached 1,00,000 units/month capacity with multiple manufacturing units and pan-India distribution.' },
];

const team = [
  'Design Engineers', 'Technicians', 'Quality Assurance',
  'R&D Personnel', 'Administration', 'Business Development',
  'Skilled Labour', 'Customer Service'
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-inverse-surface pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-[0.2em] block mb-3">
                About Power Crests
              </span>
              <h1 className="font-heading text-[44px] lg:text-headline-xl font-bold text-on-primary leading-tight mb-6">
                Since 2014 — Engineering Trust in Every Container
              </h1>
              <p className="text-on-tertiary-container text-[17px] leading-relaxed mb-8">
                Power Crests Pvt Ltd started with one manufacturing plant in Ankleshwar GIDC and has since expanded to multiple units serving industries across India. We manufacture and supply high-quality HDPE plastic containers — drums, barrels, carboys — using advanced technology and top-tier raw materials.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Customization', 'Quality', 'Innovation', 'Ethics'].map((tag) => (
                  <span key={tag} className="bg-white/10 border border-white/20 text-on-primary text-[13px] font-medium px-4 py-2 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <img
                className="rounded-xl border border-white/10 shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdNvqypJBbl3njZPhQbCGuEw4HubuNyj0DGoiwYTR2R-Wh50g_km9skbpSe-72HyhPDaz_0tz1EzYWUocBTbusASLHcP-NYRYejyXLPAoMeIK_dBRPcTStupyxQ0vLyUEoTreCzUCYryjuVGnUtQI2GbBicQ_OLS-sSp4qn-ax5efugPpafdvBEG3dBpXIh3tldEl_drOSRknby0TyPlbF88hJwfSx1m8SBKAV0y2kjj3Ufkzu1vE586gQHjSrzKWOlFFu1e57GJI"
                alt="Power Crests Manufacturing Facility"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-margin py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Target, title: 'Our Mission', desc: 'To deliver premium HDPE packaging solutions that exceed industry standards through continuous innovation, rigorous quality control, and ethical business practices — empowering our clients\' supply chains with reliable, certified containers.' },
            { icon: Eye, title: 'Our Vision', desc: 'To be India\'s most trusted HDPE container manufacturer, recognized for technical excellence, sustainable manufacturing practices, and unwavering commitment to customer satisfaction across all industrial sectors.' },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{item.title}</h3>
                <p className="text-on-surface-variant text-[16px] leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface-container-low py-20 border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <AnimatedSection className="text-center mb-16">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-3">Our Journey</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">A Decade of Growth</h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant hidden lg:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    <div className={`lg:w-5/12 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <span className="font-mono font-bold text-[32px] text-primary">{item.year}</span>
                      <h4 className="font-semibold text-[20px] text-on-surface mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant text-[15px]">{item.desc}</p>
                    </div>
                    <div className="w-5 h-5 bg-primary rounded-full border-4 border-surface-container-low shrink-0 z-10 hidden lg:block" />
                    <div className="lg:w-5/12" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-margin py-20">
        <AnimatedSection className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-3">Our Values</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">What Drives Us</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, title: 'Quality First', desc: 'Every product undergoes 10+ quality tests before dispatch.' },
            { icon: Users, title: 'Client Focus', desc: 'Custom solutions tailored to your specific industry requirements.' },
            { icon: Lightbulb, title: 'Innovation', desc: 'Dedicated R&D team developing next-generation solutions.' },
            { icon: Heart, title: 'Ethical Business', desc: 'Transparent pricing, honest delivery timelines, fair partnerships.' },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="text-center p-8 bg-surface-container-lowest rounded-xl border border-outline-variant hover:shadow-lg hover:border-primary/20 transition-all duration-500">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 mx-auto">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-[18px] text-on-surface mb-2">{item.title}</h3>
                <p className="text-on-surface-variant text-[14px]">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-inverse-surface py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <AnimatedSection className="text-center mb-12">
            <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-[0.2em] block mb-3">Our People</span>
            <h2 className="font-heading text-[36px] font-bold text-on-primary">A Team Built for Excellence</h2>
            <p className="text-on-tertiary-container mt-3 max-w-lg mx-auto">
              Our diverse workforce blends deep industry experience with youthful innovation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((role, i) => (
              <AnimatedSection key={role} delay={i * 0.05}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-all">
                  <Building size={24} className="text-secondary-container mx-auto mb-3" />
                  <span className="text-on-primary text-[14px] font-medium">{role}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-container py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin text-center">
          <AnimatedSection>
            <h2 className="font-heading text-[32px] font-bold text-on-secondary-fixed mb-4">
              Ready to Partner with Power Crests?
            </h2>
            <p className="text-on-secondary-fixed-variant text-[17px] mb-8 max-w-md mx-auto">
              Join hundreds of satisfied industrial clients across India.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-[14px] uppercase tracking-widest hover:bg-primary-container transition-all shadow-lg"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
