
import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GradientText from '../components/ui/GradientText';
import { WORKFLOW_STEPS } from '../constants';
import { ArrowRight } from '../components/icons/Icons';

const WorkflowPage: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24">
      {/* Hero */}
      <section className="text-center py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold">
              Our Blueprint for <GradientText>Success</GradientText>
            </h1>
            <p className="mt-4 xs:mt-5 sm:mt-6 max-w-3xl mx-auto text-sm xs:text-base sm:text-lg md:text-xl text-slate-300 px-2">
              We follow a structured, agile, and transparent process to ensure every project is delivered on time, within budget, and to the highest standards of quality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-0">
            {WORKFLOW_STEPS.map((step, index) => (
              <React.Fragment key={step.id}>
                <AnimatedSection delay={index * 200} className="w-full md:w-1/5 p-0 md:p-4">
                    <div className="text-center p-4 xs:p-5 sm:p-6 border border-slate-700 bg-slate-800/50 rounded-lg sm:rounded-xl h-full flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-500/20 to-violet-500/20 rounded-full border-2 border-sky-400 mx-auto flex-shrink-0">
                            <step.icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-sky-300" />
                        </div>
                        <p className="mt-2 xs:mt-3 sm:mt-4 text-sky-400 font-bold text-lg xs:text-xl sm:text-2xl">0{step.id}</p>
                        <h3 className="font-heading text-base xs:text-lg sm:text-2xl font-bold mt-1">{step.title}</h3>
                        <p className="text-slate-400 text-xs xs:text-sm md:text-base mt-2">{step.description}</p>
                    </div>
                </AnimatedSection>
                {index < WORKFLOW_STEPS.length - 1 && (
                    <div className="h-8 xs:h-10 sm:h-12 md:h-auto w-full md:w-auto flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-slate-600 -rotate-90 md:rotate-0 flex-shrink-0" />
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
