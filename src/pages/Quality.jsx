import { Link } from 'react-router-dom';
import {
  Shield, CheckCircle2, ArrowRight, AlertTriangle,
  Thermometer, ArrowDownToLine, RotateCcw, Layers,
  Gauge, Wind, Sun, Palette, Scale, Stamp
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { qualityTests } from '../data/products';

const iconMap = {
  Thermometer, ArrowDownToLine, RotateCcw, Layers,
  Gauge, Wind, Sun, Palette, Scale, Stamp
};

const processSteps = [
  { step: '01', title: 'Raw Material Inspection', desc: 'Every raw material lot undergoes MFI (Melt Flow Index) testing before production approval.' },
  { step: '02', title: 'Production Monitoring', desc: 'Quality supervisors monitor every stage of the blow moulding and injection moulding process.' },
  { step: '03', title: 'Structural Testing', desc: 'Drop test, rolling test, and stake load testing verify physical integrity under real-world conditions.' },
  { step: '04', title: 'Pressure Testing', desc: 'Hydraulic and air pressure tests ensure zero leakage across all closures and seams.' },
  { step: '05', title: 'Environmental Testing', desc: 'UV stabilizer and chemical compatibility tests verify long-term durability and performance.' },
  { step: '06', title: 'Final QC & Dispatch', desc: 'Color uniformity, weight consistency, and print adhesion checks before shipment authorization.' },
];

export default function Quality() {
  return (
    <>
      {/* Hero */}
      <section className="bg-inverse-surface pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <AnimatedSection>
            <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-[0.2em] block mb-3">
              Quality Assurance
            </span>
            <h1 className="font-heading text-[44px] lg:text-headline-xl font-bold text-on-primary mb-4">
              Certified Quality at Every Stage
            </h1>
            <p className="text-on-tertiary-container text-[18px] max-w-xl">
              Every Power Crests container passes through 10+ rigorous quality tests before reaching your facility.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-margin py-20">
        <AnimatedSection className="mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Certifications & Compliance</h2>
          <p className="text-on-surface-variant text-[16px] max-w-xl">
            Our products are listed with IIP (Indian Institute of Packaging) and conform to national and international packaging standards.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'UN Certified', desc: 'All containers are UN-rated for the transport of hazardous and non-hazardous materials worldwide.', icon: Shield },
            { title: 'IIP Listed', desc: 'Products listed with Indian Institute of Packaging conforming to national standards.', icon: CheckCircle2 },
            { title: 'International Standards', desc: 'Manufacturing processes adhere to international packaging norms and quality benchmarks.', icon: AlertTriangle },
          ].map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.1}>
              <div className="bg-primary text-on-primary p-8 rounded-xl hover:shadow-xl transition-all duration-500">
                <cert.icon size={36} className="text-secondary-container mb-4" />
                <h3 className="font-semibold text-[20px] mb-3">{cert.title}</h3>
                <p className="text-on-primary/80 text-[15px] leading-relaxed">{cert.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Test Matrix */}
      <section className="bg-surface-container-low py-20 border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <AnimatedSection className="text-center mb-16">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-3">
              10-Point Quality Protocol
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Comprehensive Testing Matrix
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityTests.map((test, i) => {
              const Icon = iconMap[test.icon] || CheckCircle2;
              return (
                <AnimatedSection key={test.name} delay={i * 0.06}>
                  <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant hover:shadow-md hover:border-primary/20 transition-all duration-500 h-full flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[16px] text-on-surface mb-1">{test.name}</h4>
                      <p className="text-on-surface-variant text-[14px] leading-relaxed">{test.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-margin py-20">
        <AnimatedSection className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-3">
            Quality Process
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            From Raw Material to Dispatch
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 0.08}>
              <div className="relative bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:shadow-lg transition-all duration-500 h-full">
                <span className="font-mono font-black text-[48px] text-primary/10 absolute top-4 right-6">
                  {step.step}
                </span>
                <div className="relative z-10">
                  <h4 className="font-semibold text-[18px] text-on-surface mb-3">{step.title}</h4>
                  <p className="text-on-surface-variant text-[15px] leading-relaxed">{step.desc}</p>
                </div>
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
              Quality You Can Trust
            </h2>
            <p className="text-on-secondary-fixed-variant text-[17px] mb-8 max-w-md mx-auto">
              Request compliance documentation, MSDS sheets, or test reports for any of our products.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-[14px] uppercase tracking-widest hover:bg-primary-container transition-all shadow-lg"
            >
              Request Documentation <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
