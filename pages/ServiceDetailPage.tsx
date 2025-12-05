
import React from 'react';
import { Service } from '../types';
import AnimatedSection from '../components/ui/AnimatedSection';
import GlowCard from '../components/ui/GlowCard';
import GradientText from '../components/ui/GradientText';
import FAQAccordion from '../components/ui/FAQAccordion';
import GradientButton from '../components/ui/GradientButton';
import { CheckCircle } from '../components/icons/Icons';
import { AnimatedPipeline, AnimatedNeuralNetwork, AnimatedCodeUI, AnimatedCharts, AnimatedSecurityShield } from '../components/visuals/ServiceVisuals';

interface ServiceDetailPageProps {
  service: Service;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
    
    const visualMap: { [key: string]: React.ElementType } = {
        'cloud-devops': AnimatedPipeline,
        'ai-ml': AnimatedNeuralNetwork,
        'web-app-dev': AnimatedCodeUI,
        'data-analytics': AnimatedCharts,
        'security': AnimatedSecurityShield,
    };

    const VisualComponent = visualMap[service.id] || (() => null);

  return (
    <div className="pt-16 sm:pt-20 md:pt-24">
      {/* Hero */}
      <section className="text-center py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
            <VisualComponent />
        </div>
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold">
              <GradientText>{service.hero.title}</GradientText>
            </h1>
            <p className="mt-4 xs:mt-5 sm:mt-6 max-w-3xl mx-auto text-sm xs:text-base sm:text-lg md:text-xl text-slate-300 px-2">
              {service.hero.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem -> Solution -> Result */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
                <AnimatedSection>
                    <GlowCard className="h-full">
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-red-400">Problem</h3>
                        <p className="mt-2 text-xs xs:text-sm md:text-base text-slate-300">{service.problemSolution.problem}</p>
                    </GlowCard>
                </AnimatedSection>
                <AnimatedSection delay={200}>
                    <GlowCard className="h-full border-sky-400/50 shadow-sky-500/10">
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-sky-300">Solution</h3>
                        <p className="mt-2 text-xs xs:text-sm md:text-base text-slate-300">{service.problemSolution.solution}</p>
                    </GlowCard>
                </AnimatedSection>
                <AnimatedSection delay={400}>
                    <GlowCard className="h-full">
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-green-400">Result</h3>
                        <p className="mt-2 text-xs xs:text-sm md:text-base text-slate-300">{service.problemSolution.result}</p>
                    </GlowCard>
                </AnimatedSection>
            </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-900/30">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="font-heading text-3xl xs:text-4xl sm:text-5xl font-bold text-center">Core Capabilities</h2>
            </AnimatedSection>
            <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
                {service.features.map((feature, index) => (
                    <AnimatedSection key={index} delay={index * 100}>
                        <div className="flex items-start gap-4 xs:gap-6 mb-6 xs:mb-8">
                           <div className="flex-shrink-0 w-10 h-10 xs:w-12 xs:h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                <feature.icon className="w-5 h-5 xs:w-6 xs:h-6 text-sky-400" />
                           </div>
                           <div className="min-w-0">
                                <h3 className="font-heading text-base xs:text-lg sm:text-xl font-bold">{feature.title}</h3>
                                <p className="text-slate-400 text-xs xs:text-sm md:text-base mt-1">{feature.description}</p>
                           </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="font-heading text-3xl xs:text-4xl sm:text-5xl font-bold text-center">Frequently Asked <GradientText>Questions</GradientText></h2>
            </AnimatedSection>
            <AnimatedSection delay={200} className="mt-8 sm:mt-12 max-w-3xl mx-auto px-2">
                <FAQAccordion items={service.faqs} />
            </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="relative p-6 xs:p-8 sm:p-12 text-center bg-slate-800/50 rounded-lg sm:rounded-2xl border border-slate-700 overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_farthest-side,rgba(124,58,237,0.15),rgba(255,255,255,0))] animate-spin-slow"></div>
                    <div className="relative">
                        <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold px-2">
                           Ready to <GradientText>elevate</GradientText> your business?
                        </h2>
                        <p className="mt-3 xs:mt-4 sm:mt-4 max-w-2xl mx-auto text-sm xs:text-base sm:text-lg text-slate-300 px-2">
                           Let's discuss how our {service.title} expertise can help you achieve your goals. Schedule a free consultation with our experts today.
                        </p>
                        <div className="mt-6 xs:mt-8">
                            <GradientButton href="/contact">Get a Free Consultation</GradientButton>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
