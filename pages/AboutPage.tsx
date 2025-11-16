
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
    <div className="pt-24">
      {/* Hero */}
      <section className="text-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl font-bold">
              Architects of the <GradientText>Digital Future</GradientText>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
              InfiVerseLabs.tech was born from a passion for solving complex challenges with elegant technological solutions. We are a collective of engineers, scientists, and strategists dedicated to pushing the boundaries of what's possible.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-heading text-4xl font-bold">Our Mission</h2>
              <p className="mt-4 text-slate-300 text-lg">
                To empower businesses of all sizes to thrive in a digital-first world by providing accessible, scalable, and intelligent technology solutions. We aim to democratize innovation and build a future where technology works for everyone.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <GlowCard>
                <img src="https://picsum.photos/seed/mission/1000/600" alt="Team collaborating" className="rounded-lg"/>
              </GlowCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center">Our Core <GradientText>Values</GradientText></h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-slate-300">
              The principles that guide every decision we make and every line of code we write.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 150}>
                <GlowCard className="text-center h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500/20 to-violet-500/20 rounded-lg mx-auto">
                    <value.icon className="w-8 h-8 text-sky-300" />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-bold">{value.title}</h3>
                  <p className="mt-2 text-slate-400">{value.text}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center">Our Journey</h2>
          </AnimatedSection>
          <div className="mt-12 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-700 hidden md:block"></div>
            {TIMELINE_EVENTS.map((event, index) => (
              <AnimatedSection key={index}>
                <div className="md:flex items-center mb-8">
                  <div className={`flex md:justify-end w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
                    <GlowCard className="w-full">
                      <p className="text-sky-400 font-bold text-xl">{event.year}</p>
                      <h3 className="font-heading text-2xl font-bold mt-1">{event.title}</h3>
                      <p className="text-slate-400 mt-2">{event.description}</p>
                    </GlowCard>
                  </div>
                  <div className="w-1/2 md:flex justify-center hidden">
                      <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center">
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
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center">Meet the <GradientText>Innovators</GradientText></h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 150}>
                <div className="group perspective-1000">
                    <div className="relative w-full h-96 transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden">
                            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover rounded-xl" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl"></div>
                            <div className="absolute bottom-0 p-4">
                                <h3 className="font-heading text-2xl font-bold text-white">{member.name}</h3>
                                <p className="text-sky-300">{member.role}</p>
                            </div>
                        </div>
                        {/* Back */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-800 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                            <h3 className="font-heading text-2xl font-bold text-white">{member.name}</h3>
                            <p className="text-sky-300">{member.role}</p>
                            <p className="mt-4 text-slate-300">{member.bio}</p>
                        </div>
                    </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
          <AnimatedSection>
              <h2 className="font-heading text-4xl font-bold">Join Our Universe</h2>
              <p className="mt-4 max-w-xl mx-auto text-lg text-slate-300">
                  We're always looking for passionate talent to join our mission. Explore our open positions.
              </p>
              <div className="mt-8">
                  <GradientButton href="/contact">View Careers</GradientButton>
              </div>
          </AnimatedSection>
      </section>
    </div>
  );
};

export default AboutPage;
