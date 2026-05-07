import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { products } from '../data/products';

export default function Products() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-inverse-surface pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin">
          <AnimatedSection>
            <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-[0.2em] block mb-3">
              Product Catalog
            </span>
            <h1 className="font-heading text-[44px] lg:text-headline-xl font-bold text-on-primary mb-4">
              Industrial Storage Solutions
            </h1>
            <p className="text-on-tertiary-container text-[18px] max-w-xl">
              From 10-litre jerry cans to 235-litre industrial barrels. Every container UN-certified and precision-engineered.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-margin py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.08}>
              <Link
                to={`/products/${product.id}`}
                className="group block bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 h-full"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-on-primary text-[11px] font-bold px-3 py-1 rounded tracking-wider">
                    {product.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[20px] text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-on-surface-variant text-[15px] mb-4 line-clamp-2">
                    {product.shortDesc}
                  </p>

                  {/* Capacity pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.capacities.slice(0, 5).map((cap) => (
                      <span key={cap} className="bg-surface-container text-on-surface-variant text-[12px] font-mono font-medium px-2 py-1 rounded">
                        {cap}
                      </span>
                    ))}
                    {product.capacities.length > 5 && (
                      <span className="bg-primary/10 text-primary text-[12px] font-medium px-2 py-1 rounded">
                        +{product.capacities.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                    <div className="flex gap-2">
                      {product.features.slice(0, 2).map((f) => (
                        <span key={f} className="text-[11px] text-primary font-medium bg-primary/5 px-2 py-0.5 rounded">
                          {f}
                        </span>
                      ))}
                    </div>
                    <span className="text-primary font-bold text-[13px] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-20 bg-primary rounded-2xl p-12 text-center">
          <h3 className="font-heading text-[28px] font-bold text-on-primary mb-3">
            Not sure which container suits your needs?
          </h3>
          <p className="text-on-primary/70 text-[16px] mb-6 max-w-md mx-auto">
            Our specialists will recommend the perfect solution for your industry and chemical compatibility requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-fixed-variant px-8 py-4 rounded-lg font-bold text-[14px] uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all"
          >
            Contact Our Team <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
