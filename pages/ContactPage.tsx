
import React, { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GradientText from '../components/ui/GradientText';
import GradientButton from '../components/ui/GradientButton';
import { Mail, Phone, MapPin } from '../components/icons/Icons';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Mock submission
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="pt-16 sm:pt-20 md:pt-24">
      {/* Hero */}
      <section className="text-center py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold">
              Let's <GradientText>Connect</GradientText>
            </h1>
            <p className="mt-4 xs:mt-5 sm:mt-6 max-w-3xl mx-auto text-sm xs:text-base sm:text-lg md:text-xl text-slate-300 px-2">
              Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below or reach out to us through one of our channels.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <AnimatedSection>
              <div className="p-6 xs:p-7 sm:p-8 bg-slate-800/50 rounded-xl sm:rounded-2xl border border-slate-700">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold">Send us a message</h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5 xs:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs xs:text-sm font-medium text-slate-300 mb-2">Full Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg shadow-sm py-2.5 xs:py-3 px-3 xs:px-4 text-sm xs:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg shadow-sm py-2.5 xs:py-3 px-3 xs:px-4 text-sm xs:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs xs:text-sm font-medium text-slate-300 mb-2">Company (Optional)</label>
                    <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg shadow-sm py-2.5 xs:py-3 px-3 xs:px-4 text-sm xs:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors" placeholder="Your company" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg shadow-sm py-2.5 xs:py-3 px-3 xs:px-4 text-sm xs:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <div className="pt-2">
                    <GradientButton type="submit" fullWidth>
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </GradientButton>
                  </div>
                   {status === 'success' && <p className="text-center text-sm xs:text-base text-green-400 font-medium">Message sent successfully! We'll be in touch soon.</p>}
                   {status === 'error' && <p className="text-center text-sm xs:text-base text-red-400 font-medium">Please fill out all required fields.</p>}
                </form>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
                <div className="space-y-6 md:space-y-8">
                    <div className="p-5 xs:p-6 bg-slate-800/50 rounded-xl sm:rounded-2xl border border-slate-700 flex flex-col xs:flex-row xs:items-start gap-4">
                        <Mail className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-sky-400 flex-shrink-0"/>
                        <div className="min-w-0">
                            <h3 className="text-base xs:text-lg sm:text-xl font-bold">Email Us</h3>
                            <p className="text-slate-400 text-xs xs:text-sm md:text-base mt-1">Our team is ready to answer your questions.</p>
                            <a href="mailto:contact@InfiVerseLabs.tech" className="text-sky-400 hover:text-sky-300 hover:underline text-xs xs:text-sm md:text-base break-all transition-colors mt-2 inline-block">contact@InfiVerseLabs.tech</a>
                        </div>
                    </div>
                     <div className="p-5 xs:p-6 bg-slate-800/50 rounded-xl sm:rounded-2xl border border-slate-700 flex flex-col xs:flex-row xs:items-start gap-4">
                        <Phone className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-sky-400 flex-shrink-0"/>
                        <div className="min-w-0">
                            <h3 className="text-base xs:text-lg sm:text-xl font-bold">Call Us</h3>
                            <p className="text-slate-400 text-xs xs:text-sm md:text-base mt-1">Talk to our experts directly.</p>
                            <a href="tel:+91  8007804952" className="text-sky-400 hover:text-sky-300 hover:underline text-xs xs:text-sm md:text-base transition-colors mt-2 inline-block">+91 8007804952 </a>
                        </div>
                    </div>
                     <div className="p-5 xs:p-6 bg-slate-800/50 rounded-xl sm:rounded-2xl border border-slate-700 flex flex-col xs:flex-row xs:items-start gap-4">
                        <MapPin className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-sky-400 flex-shrink-0"/>
                        <div className="min-w-0">
                            <h3 className="text-base xs:text-lg sm:text-xl font-bold">Visit Us</h3>
                            <p className="text-slate-400 text-xs xs:text-sm md:text-base mt-1">Pune, Maharashtra India, 10101</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
