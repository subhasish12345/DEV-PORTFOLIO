
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-space font-bold text-zinc-900 mb-4">Featured <span className="text-lime-600">Projects</span></h2>
            <p className="text-zinc-500">A collection of my recent technical endeavors.</p>
          </div>
          <a href="#" className="hidden md:block text-lime-600 text-sm font-bold uppercase tracking-widest hover:underline">View All Projects</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main featured project (larger) */}
          <div className="lg:col-span-2 group relative rounded-3xl overflow-hidden bg-white border border-zinc-100 shadow-sm">
            <img 
              src={PROJECTS[0].image} 
              alt={PROJECTS[0].title} 
              className="w-full h-[400px] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent p-10 flex flex-col justify-end">
              <span className="text-lime-600 text-xs font-bold uppercase tracking-widest mb-3">{PROJECTS[0].tags[0]}</span>
              <h3 className="text-3xl font-bold text-zinc-900 mb-4">{PROJECTS[0].title}</h3>
              <p className="text-zinc-600 max-w-md line-clamp-2 mb-4 font-medium">{PROJECTS[0].description}</p>
              <button className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-lime-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>

          {/* Secondary projects */}
          {PROJECTS.slice(1).map((project, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden bg-white border border-zinc-100 shadow-sm">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{project.title}</h3>
                <p className="text-zinc-600 text-sm mb-4 line-clamp-1 font-medium">{project.description}</p>
                <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600 hover:bg-lime-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </div>
          ))}

          {/* Static placeholder */}
          <div className="group relative rounded-3xl overflow-hidden bg-white border border-zinc-100 shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-lime-50">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 italic">Next Big Project...</h3>
                <p className="text-zinc-500 text-sm">Working on advanced AI models and complex data streams.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
