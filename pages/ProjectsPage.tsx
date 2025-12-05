
import React, { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GradientText from '../components/ui/GradientText';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { X, TrendingUp } from '../components/icons/Icons';

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <div
    className="group relative rounded-lg sm:rounded-xl overflow-hidden cursor-pointer h-64 sm:h-80"
    onClick={onClick}
  >
    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
      <h3 className="font-heading text-lg sm:text-2xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-2 line-clamp-2">{project.title}</h3>
      <p className="text-xs sm:text-base text-sky-300 transition-transform duration-300 group-hover:-translate-y-2 line-clamp-1">{project.client}</p>
      <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {project.tags.slice(0, 2).map(tag => (
          <span key={tag} className="text-xs bg-slate-700/80 text-slate-300 px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6" onClick={onClose}>
      <div className="relative bg-slate-900 border border-slate-700 rounded-lg sm:rounded-2xl w-full max-w-2xl sm:max-w-3xl max-h-[90vh] overflow-y-auto p-4 xs:p-6 sm:p-8" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 xs:top-4 right-3 xs:right-4 p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
          <X className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <img src={project.imageUrl} alt={project.title} className="w-full h-40 sm:h-64 object-cover rounded-lg" />
        <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl font-bold mt-4 xs:mt-5 sm:mt-6"><GradientText>{project.title}</GradientText></h2>
        <p className="text-slate-400 text-sm xs:text-base sm:text-lg mt-1">{project.client}</p>
        
        <div className="flex flex-wrap gap-2 mt-3 xs:mt-4">
            {project.tags.map(tag => (
                <span key={tag} className="text-xs xs:text-sm bg-sky-500/10 text-sky-300 px-2 xs:px-3 py-1 rounded-full">{tag}</span>
            ))}
        </div>
        
        <div className="mt-4 xs:mt-6 border-t border-slate-700 pt-4 xs:pt-6">
            <div className="bg-slate-800/50 p-4 xs:p-6 rounded-lg border border-slate-700">
                <p className="text-sm xs:text-base sm:text-lg font-semibold text-slate-300 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0"/>
                    Key Result
                </p>
                <p className="text-2xl xs:text-3xl sm:text-4xl font-bold text-green-400 mt-2">{project.metric}</p>
            </div>
            
            <div className="mt-4 xs:mt-6">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold font-heading">Project Details</h3>
                <p className="mt-2 text-slate-300 text-xs xs:text-sm sm:text-base whitespace-pre-line line-clamp-6">{project.details}</p>
            </div>
        </div>
      </div>
    </div>
  );
};


const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="pt-16 sm:pt-20 md:pt-24">
      {/* Hero */}
      <section className="text-center py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold">
              Innovation in <GradientText>Action</GradientText>
            </h1>
            <p className="mt-4 xs:mt-5 sm:mt-6 max-w-3xl mx-auto text-sm xs:text-base sm:text-lg md:text-xl text-slate-300 px-2">
              We've partnered with industry leaders to deliver transformative solutions. Explore our portfolio of case studies to see the tangible impact of our work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {PROJECTS.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default ProjectsPage;
