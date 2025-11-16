
import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GradientText from '../components/ui/GradientText';
import { WORKFLOW_STEPS } from '../constants';
import { ArrowRight } from '../components/icons/Icons';

const WorkflowPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="text-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl font-bold">
              Our Blueprint for <GradientText>Success</GradientText>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
              We follow a structured, agile, and transparent process to ensure every project is delivered on time, within budget, and to the highest standards of quality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col md:flex-row items-center justify-between">
            {WORKFLOW_STEPS.map((step, index) => (
              <React.Fragment key={step.id}>
                <AnimatedSection delay={index * 200} className="w-full md:w-1/5 p-4">
                    <div className="text-center p-6 border border-slate-700 bg-slate-800/50 rounded-xl h-full flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500/20 to-violet-500/20 rounded-full border-2 border-sky-400">
                            <step.icon className="w-8 h-8 text-sky-300" />
                        </div>
                        <p className="mt-4 text-sky-400 font-bold text-2xl">0{step.id}</p>
                        <h3 className="font-heading text-2xl font-bold mt-1">{step.title}</h3>
                        <p className="text-slate-400 mt-2">{step.description}</p>
                    </div>
                </AnimatedSection>
                {index < WORKFLOW_STEPS.length - 1 && (
                    <div className="w-full md:w-auto h-16 md:h-auto flex items-center justify-center">
                        <ArrowRight className="w-10 h-10 text-slate-600 -rotate-90 md:rotate-0" />
                    </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkflowPage;
