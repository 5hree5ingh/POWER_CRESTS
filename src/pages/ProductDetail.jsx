import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowLeft, CheckCircle2, Shield, Beaker,
  Wheat, Droplets, Palette, Pill, Fuel, Package
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { products } from '../data/products';

const appIcons = {
  'Chemicals': Beaker, 'Dyes & Pigments': Palette, 'Agro Products': Wheat,
  'Food Products': Package, 'Pharmaceuticals': Pill, 'Solvents': Droplets,
  'Lubricants & Oil': Fuel, 'Paints & Inks': Palette, 'Pigments': Palette,
  'Hazardous Chemicals': Shield, 'Liquid Packaging': Droplets,
  'Adhesives': Droplets, 'Viscous Materials': Droplets, 'Bulk Storage': Package,
  'Dyes': Palette,
};

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-[36px] font-bold text-on-surface mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary font-bold">← Back to Products</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-inverse-surface pt-24 pb-4">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <div className="flex items-center gap-2 text-[13px] text-on-tertiary-container">
            <Link to="/" className="hover:text-secondary-container transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-secondary-container transition-colors">Products</Link>
            <span>/</span>
            <span className="text-on-primary">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="bg-inverse-surface pb-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <span className="inline-block bg-secondary-container text-on-secondary-fixed-variant font-bold text-[12px] px-4 py-1.5 rounded tracking-wider mb-4">
                {product.badge}
              </span>
              <h1 className="font-heading text-[40px] font-bold text-on-primary mb-4">
                {product.name}
              </h1>
              <p className="text-on-tertiary-container text-[17px] leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Capacity Pills */}
              <div className="mb-8">
                <span className="font-label-sm text-[12px] text-primary-fixed-dim uppercase tracking-wider block mb-3">
                  Available Capacities
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.capacities.map((cap) => (
                    <span
                      key={cap}
                      className="bg-white/10 text-on-primary font-mono font-medium text-[14px] px-4 py-2 rounded-lg border border-white/10 hover:bg-primary-container hover:text-on-primary-container transition-all cursor-default"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Specs */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-8">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[11px] text-on-tertiary-container uppercase tracking-wider">Material</p>
                    <p className="font-mono font-semibold text-on-primary">{product.specs.material}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-on-tertiary-container uppercase tracking-wider">Rating</p>
                    <p className="font-mono font-semibold text-on-primary">{product.specs.rating}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-on-tertiary-container uppercase tracking-wider">Sizes</p>
                    <p className="font-mono font-semibold text-on-primary">{product.capacities.length}</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-fixed-variant px-8 py-4 rounded-lg font-bold text-[14px] uppercase tracking-widest hover:bg-secondary-fixed-dim transition-all"
              >
                Request Quote for {product.name} <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-margin py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Features */}
          <AnimatedSection>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Features</h2>
            <div className="space-y-4">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant">
                  <CheckCircle2 size={22} className="text-primary shrink-0" />
                  <span className="text-[16px] text-on-surface">{feature}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Applications */}
          <AnimatedSection delay={0.15}>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Applications</h2>
            <div className="grid grid-cols-2 gap-4">
              {product.applications.map((app) => {
                const Icon = appIcons[app] || Package;
                return (
                  <div key={app} className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span className="text-[15px] text-on-surface font-medium">{app}</span>
                  </div>
                );
              })}
            </div>

            {/* Dimension example */}
            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h4 className="font-bold text-[16px] text-primary mb-2">Dimension Reference</h4>
              <p className="font-mono text-[14px] text-on-surface-variant">{product.specs.example}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-surface-container-low py-20 border-t border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <AnimatedSection className="mb-10">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Related Products</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rp, i) => (
              <AnimatedSection key={rp.id} delay={i * 0.1}>
                <Link
                  to={`/products/${rp.id}`}
                  className="group block bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={rp.image} alt={rp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[18px] text-on-surface group-hover:text-primary transition-colors">{rp.name}</h3>
                    <p className="text-on-surface-variant text-[14px] mt-1">{rp.capacities.join(', ')}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
