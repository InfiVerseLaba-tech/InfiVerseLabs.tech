
import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GlowCard from '../components/ui/GlowCard';
import GradientText from '../components/ui/GradientText';
import { TEAM_MEMBERS, TIMELINE_EVENTS } from '../constants';
import { Zap, ShieldCheck, Handshake, BrainCircuit, GitBranch } from '../components/icons/Icons';
import GradientButton from '../components/ui/GradientButton';

const AboutPage: React.FC = () => {
  const values = [
    { icon: BrainCircuit, title: 'Innovation', text: 'We constantly explore new technologies to deliver cutting-edge solutions.' },
    { icon: ShieldCheck, title: 'Integrity', text: 'We build trust through transparent communication and unwavering ethical standards.' },
    { icon: Zap, title: 'Impact', text: 'We are driven by delivering measurable results and tangible value to our clients.' },
    { icon: Handshake, title: 'Collaboration', text: 'We work as an extension of your team, fostering a partnership for success.' },
  ];

  return (
    <div className="pt-16 sm:pt-20 md:pt-24">
      {/* Hero */}
      <section className="text-center py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold">
              Architects of the <GradientText>Digital Future</GradientText>
            </h1>
            <p className="mt-4 xs:mt-5 sm:mt-6 max-w-3xl mx-auto text-sm xs:text-base sm:text-lg md:text-xl text-slate-300 px-2">
              InfiVerseLabs.tech was born from a passion for solving complex challenges with elegant technological solutions. We are a collective of engineers, scientists, and strategists dedicated to pushing the boundaries of what's possible.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl font-bold">Our Mission</h2>
              <p className="mt-3 xs:mt-4 text-slate-300 text-sm xs:text-base md:text-lg">
                To empower businesses of all sizes to thrive in a digital-first world by providing accessible, scalable, and intelligent technology solutions. We aim to democratize innovation and build a future where technology works for everyone.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <GlowCard>
                <img src="https://picsum.photos/seed/mission/1000/600" alt="Team collaborating" className="rounded-lg w-full h-auto"/>
              </GlowCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-900/30">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-3xl xs:text-4xl sm:text-5xl font-bold text-center">Our Core <GradientText>Values</GradientText></h2>
            <p className="mt-3 xs:mt-4 max-w-2xl mx-auto text-center text-xs xs:text-sm md:text-base text-slate-300 px-2">
              The principles that guide every decision we make and every line of code we write.
            </p>
          </AnimatedSection>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 150}>
                <GlowCard className="text-center h-full">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-sky-500/20 to-violet-500/20 rounded-lg mx-auto">
                    <value.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-sky-300" />
                  </div>
                  <h3 className="mt-3 sm:mt-4 font-heading text-lg sm:text-xl md:text-2xl font-bold">{value.title}</h3>
                  <p className="mt-2 text-xs xs:text-sm md:text-base text-slate-400">{value.text}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-3xl xs:text-4xl sm:text-5xl font-bold text-center">Our Journey</h2>
          </AnimatedSection>
          <div className="mt-8 sm:mt-12 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-700 hidden md:block"></div>
            {TIMELINE_EVENTS.map((event, index) => (
              <AnimatedSection key={index}>
                <div className="md:flex items-center mb-6 xs:mb-8">
                  <div className={`flex md:justify-end w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
                    <GlowCard className="w-full">
                      <p className="text-sky-400 font-bold text-lg xs:text-xl md:text-2xl">{event.year}</p>
                      <h3 className="font-heading text-lg xs:text-xl sm:text-2xl font-bold mt-1">{event.title}</h3>
                      <p className="text-slate-400 text-xs xs:text-sm md:text-base mt-2">{event.description}</p>
                    </GlowCard>
                  </div>
                  <div className="w-1/2 md:flex justify-center hidden">
                      <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center flex-shrink-0">
                          <GitBranch className="w-4 h-4 text-sky-400" />
                      </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-900/30">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-3xl xs:text-4xl sm:text-5xl font-bold text-center">Meet the <GradientText>Innovators</GradientText></h2>
          </AnimatedSection>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 150}>
                <div className="group">
                    <div className="relative w-full h-56 xs:h-72 sm:h-80 md:h-96 bg-slate-800 rounded-lg sm:rounded-xl overflow-hidden">
                        <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 xs:p-4 sm:p-6">
                            <h3 className="font-heading text-base xs:text-lg sm:text-2xl font-bold text-white">{member.name}</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-sky-300">{member.role}</p>
                            <p className="mt-2 text-slate-300 text-xs sm:text-sm line-clamp-2">{member.bio}</p>
                        </div>
                    </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 text-center">
          <AnimatedSection>
              <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl font-bold px-2">Join Our Universe</h2>
              <p className="mt-3 xs:mt-4 max-w-xl mx-auto text-sm xs:text-base md:text-lg text-slate-300 px-2">
                  We're always looking for passionate talent to join our mission. Explore our open positions.
              </p>
              <div className="mt-6 xs:mt-8">
                  <GradientButton href="/contact">View Careers</GradientButton>
              </div>
          </AnimatedSection>
      </section>
    </div>
  );
};

export default AboutPage;
