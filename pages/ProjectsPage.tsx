
import React, { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GradientText from '../components/ui/GradientText';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { X, TrendingUp } from '../components/icons/Icons';

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <div
    className="group relative rounded-xl overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <img src={project.imageUrl} alt={project.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <h3 className="font-heading text-2xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-2">{project.title}</h3>
      <p className="text-sky-300 transition-transform duration-300 group-hover:-translate-y-2">{project.client}</p>
      <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs bg-slate-700/80 text-slate-300 px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X className="w-8 h-8" />
        </button>
        <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
        <h2 className="font-heading text-4xl font-bold mt-6"><GradientText>{project.title}</GradientText></h2>
        <p className="text-slate-400 text-lg mt-1">{project.client}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map(tag => (
                <span key={tag} className="text-sm bg-sky-500/10 text-sky-300 px-3 py-1 rounded-full">{tag}</span>
            ))}
        </div>
        
        <div className="mt-6 border-t border-slate-700 pt-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <p className="text-lg font-semibold text-slate-300 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-400"/>
                    Key Result
                </p>
                <p className="text-3xl font-bold text-green-400 mt-2">{project.metric}</p>
            </div>
            
            <div className="mt-6">
                <h3 className="text-2xl font-bold font-heading">Project Details</h3>
                <p className="mt-2 text-slate-300 whitespace-pre-line">{project.details}</p>
            </div>
        </div>
      </div>
    </div>
  );
};


const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="text-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl font-bold">
              Innovation in <GradientText>Action</GradientText>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
              We've partnered with industry leaders to deliver transformative solutions. Explore our portfolio of case studies to see the tangible impact of our work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
