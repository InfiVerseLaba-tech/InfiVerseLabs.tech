
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
    <div className="pt-24">
      {/* Hero */}
      <section className="text-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl font-bold">
              Let's <GradientText>Connect</GradientText>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
              Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below or reach out to us through one of our channels.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700">
                <h2 className="font-heading text-3xl font-bold">Send us a message</h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300">Company (Optional)</label>
                    <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                    <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"></textarea>
                  </div>
                  <div>
                    <GradientButton type="submit" fullWidth>
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </GradientButton>
                  </div>
                   {status === 'success' && <p className="text-green-400">Message sent successfully! We'll be in touch soon.</p>}
                   {status === 'error' && <p className="text-red-400">Please fill out all required fields.</p>}
                </form>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
                <div className="space-y-8">
                    <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 flex items-start gap-4">
                        <Mail className="w-8 h-8 text-sky-400 mt-1"/>
                        <div>
                            <h3 className="text-xl font-bold">Email Us</h3>
                            <p className="text-slate-400">Our team is ready to answer your questions.</p>
                            <a href="mailto:contact@InfiVerseLabs.tech" className="text-sky-400 hover:underline">contact@InfiVerseLabs.tech</a>
                        </div>
                    </div>
                     <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 flex items-start gap-4">
                        <Phone className="w-8 h-8 text-sky-400 mt-1"/>
                        <div>
                            <h3 className="text-xl font-bold">Call Us</h3>
                            <p className="text-slate-400">Talk to our experts directly.</p>
                            <a href="tel:+1234567890" className="text-sky-400 hover:underline">+1 (234) 567-890</a>
                        </div>
                    </div>
                     <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 flex items-start gap-4">
                        <MapPin className="w-8 h-8 text-sky-400 mt-1"/>
                        <div>
                            <h3 className="text-xl font-bold">Visit Us</h3>
                            <p className="text-slate-400">123 Innovation Drive, Tech City, 10101</p>
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
