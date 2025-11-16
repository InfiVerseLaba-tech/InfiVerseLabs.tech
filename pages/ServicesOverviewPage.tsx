
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import GlowCard from '../components/ui/GlowCard';
import GradientText from '../components/ui/GradientText';
import { SERVICES } from '../constants';
import { ArrowRight } from '../components/icons/Icons';

const ServicesOverviewPage: React.FC = () => {
  const services = Object.values(SERVICES);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="text-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl font-bold">
              Our <GradientText>Ecosystem</GradientText> of Solutions
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
              We provide an integrated suite of services designed to accelerate your growth, enhance your efficiency, and secure your digital assets from end to end.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 100}>
                <Link to={service.href} className="block h-full">
                  <GlowCard className="h-full flex flex-col group">
                    <h2 className="font-heading text-3xl font-bold text-sky-300">{service.title}</h2>
                    <p className="mt-2 text-slate-400 flex-grow">{service.description}</p>
                    <div className="mt-6 text-sky-400 flex items-center gap-2 font-semibold transition-transform duration-300 group-hover:translate-x-1">
                      Explore {service.title}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </GlowCard>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverviewPage;
