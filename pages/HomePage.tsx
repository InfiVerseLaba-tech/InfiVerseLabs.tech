
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import GlowCard from '../components/ui/GlowCard';
import GradientButton from '../components/ui/GradientButton';
import GradientText from '../components/ui/GradientText';
import ThreeBackground from '../components/background/ThreeBackground';
import { SERVICES, PROJECTS } from '../constants';
import { Cpu, Zap, ShieldCheck, Layers, ArrowRight } from '../components/icons/Icons';
import {
  Aws, Azure, Gcp, Kubernetes, Terraform, ReactLogo, Python, Openai
} from '../components/icons/TechLogos';

// Animated Globe / Universe component (futuristic sphere behind hero heading)
const AnimatedGlobe = () => {
  // We'll build a layered CSS globe with subtle rotation and a slightly transparent look
  // to sit behind the hero heading text and not obstruct readability.
  return (
    <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] pointer-events-none">
      {/* Rotating ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full rounded-full border border-sky-400/20 opacity-60" style={{ animation: 'spin 36s linear infinite' }} />
      </div>

      {/* Subtle second ring */}
      <div className="absolute inset-8 rounded-full border border-violet-500/10 opacity-60 animate-[spin_80s_linear_infinite]" />

      {/* The globe sphere */}
      <div
        className="absolute inset-4 rounded-full overflow-hidden"
        style={{
          background: 'radial-gradient(closest-side, rgba(255,255,255,0.12), rgba(148,163,184,0.05) 40%, rgba(99,102,241,0.06) 75%)',
          transform: 'translateZ(0) rotateZ(14deg)',
          opacity: 0.28,
          backdropFilter: 'blur(6px)'
        }}
      >
        {/* Inner rotation overlay to create a globe-like dynamic */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 25%, rgba(255,255,255,0.12), transparent 6%), radial-gradient(circle at 70% 75%, rgba(0,0,0,0.06), transparent 12%), radial-gradient(circle at 50% 50%, rgba(99,102,241,0.06), transparent 24%)',
            transformOrigin: '50% 50%',
            animation: 'spin 35s linear infinite'
          }}
        />
      </div>

      {/* Glow layer to enhance cosmic look */}
      <div className="absolute -inset-8 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08),_rgba(99,102,241,0))] opacity-80 filter blur-xl" />
    </div>
  );
};


const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = Object.values(SERVICES).slice(0, 4);

    return (
    <div className="overflow-hidden">
      <ThreeBackground />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 xs:pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-8 sm:pb-12 relative">
        {/* Hero globe sits behind the heading content - centered in the section */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <AnimatedGlobe />
        </div>
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10 w-full">
            <AnimatedSection>
          <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter text-center">
            Infinite <GradientText>Innovation.</GradientText>
            <br />
            One Universe.
          </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
          <p className="mt-4 xs:mt-5 sm:mt-6 max-w-2xl mx-auto text-sm xs:text-base sm:text-lg text-slate-300 text-center px-2">
            Empowering businesses with Cloud, AI, and Full-Stack solutions that scale.
          </p>
            </AnimatedSection>
        <AnimatedSection delay={400} className="mt-6 xs:mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full px-2">
          <GradientButton href="/contact">Get Started</GradientButton>
          <Link to="/services" className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base md:text-lg font-bold text-white rounded-lg hover:bg-slate-800/50 transition-colors duration-300 text-center">View Our Services</Link>
        </AnimatedSection>
        </div>
      </section>

      {/* Services at a Glance */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="font-heading text-3xl xs:text-4xl sm:text-5xl font-bold text-center">InfiVerse at a <GradientText>Glance</GradientText></h2>
                <p className="mt-3 xs:mt-4 max-w-2xl mx-auto text-center text-sm xs:text-base text-slate-300 px-2">
                    We deliver comprehensive tech solutions designed for the future.
                </p>
            </AnimatedSection>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {services.map((service, index) => (
                    <AnimatedSection key={service.id} delay={index * 150}>
                        <Link to={service.href}>
                            <GlowCard className="h-full group">
                                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-sky-300">{service.title}</h3>
                                <p className="mt-2 text-xs xs:text-sm md:text-base text-slate-400">{service.description}</p>
                                <div className="mt-4 text-sky-400 flex items-center gap-2 text-sm xs:text-base font-semibold transition-transform duration-300 group-hover:translate-x-1">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </div>
                            </GlowCard>
                        </Link>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </section>

      {/* Why Choose InfiVerse */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-900/30">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-3xl xs:text-4xl sm:text-5xl font-bold text-center">Why Choose <GradientText>InfiVerse</GradientText>?</h2>
            <p className="mt-3 xs:mt-4 max-w-2xl mx-auto text-center text-sm xs:text-base text-slate-300 px-2">
              We're not just developers; we're architects of innovation, building robust and scalable solutions.
            </p>
          </AnimatedSection>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: Zap, title: "Faster Deployment", text: "Automated CI/CD pipelines for rapid and reliable releases." },
              { icon: Cpu, title: "AI-first Mindset", text: "Leveraging AI to solve complex problems and drive growth." },
              { icon: ShieldCheck, title: "Secure Architecture", text: "Security is built-in, not bolted-on, for end-to-end protection." },
              { icon: Layers, title: "Cloud-native Builds", text: "Harnessing the full power of the cloud for scalability and resilience." }
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 150}>
                <GlowCard>
                  <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-500/20 to-violet-500/20 rounded-lg">
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-sky-300" />
                  </div>
                  <h3 className="mt-3 sm:mt-4 font-heading text-lg sm:text-xl md:text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-xs xs:text-sm md:text-base text-slate-400">{item.text}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Slider */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-3xl xs:text-4xl sm:text-5xl font-bold text-center">Real-world <GradientText>Impact</GradientText></h2>
            <p className="mt-3 xs:mt-4 max-w-2xl mx-auto text-center text-sm xs:text-base text-slate-300 px-2">
              Explore how we've transformed businesses with our innovative solutions.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200} className="mt-8 sm:mt-12 relative h-64 sm:h-80 md:h-96">
            {PROJECTS.map((project, index) => (
              <div key={project.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative w-full h-full rounded-lg sm:rounded-2xl overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 text-white w-full">
                    <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold">{project.title}</h3>
                    <p className="text-sm sm:text-base md:text-xl mt-1 sm:mt-2 text-slate-300">{project.client}</p>
                    <p className="mt-2 sm:mt-4 max-w-xl text-base sm:text-lg md:text-2xl font-semibold text-sky-300 line-clamp-2">
                      "{project.metric}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
             <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {PROJECTS.map((_, index) => (
                    <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-sky-400' : 'bg-slate-600'}`}></button>
                ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h3 className="text-center text-sm sm:text-base md:text-lg text-slate-400 font-semibold">Technologies We Trust</h3>
                <div className="mt-6 sm:mt-8 flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap">
                    {[Aws, Azure, Gcp, Kubernetes, Terraform, ReactLogo, Python, Openai].map((Icon, index) => (
                        <Icon key={index} className="h-8 sm:h-10 md:h-12 w-auto text-slate-500 hover:text-white transition-colors" />
                    ))}
                </div>
            </AnimatedSection>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="relative p-6 sm:p-8 md:p-12 text-center bg-slate-800/50 rounded-lg sm:rounded-2xl border border-slate-700 overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_farthest-side,rgba(56,189,248,0.15),rgba(255,255,255,0))] animate-spin-slow"></div>
                    <div className="relative">
                        <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold px-2">
                            Let's build your universe of <GradientText>innovation.</GradientText>
                        </h2>
                        <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm xs:text-base md:text-lg text-slate-300 px-2">
                            Ready to transform your vision into reality? Our team is here to help you navigate your digital journey.
                        </p>
                        <div className="mt-6 sm:mt-8">
                            <GradientButton href="/contact">Start a Project</GradientButton>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
