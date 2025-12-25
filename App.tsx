
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AIChat from './components/AIChat';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-lime-200">
      <Navbar />
      
      <main>
        <Hero />
        
        <Skills />

        {/* Testimonial Section */}
        <section className="py-32 px-6 bg-zinc-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-space font-bold text-zinc-900 mb-4 italic">Listen to my <span className="text-lime-600">Collaborators</span></h2>
              <div className="w-20 h-1 bg-lime-500 mx-auto"></div>
            </div>
            
            <div className="flex justify-center">
              <div className="max-w-3xl bg-white p-12 rounded-[2rem] border border-zinc-100 shadow-xl text-center relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">"</div>
                <p className="text-xl text-zinc-600 italic mb-8 leading-relaxed">
                  "Debadatta showed exceptional skill in data cleaning and visualization during his internship. His ability to extract meaningful insights from raw datasets helped us significantly in our decision-making process."
                </p>
                <div>
                  <h4 className="font-bold text-zinc-900 uppercase tracking-widest text-sm">Project Stakeholder</h4>
                  <div className="flex justify-center gap-1 mt-2">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-4 h-4 text-lime-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Experience />

        <section id="contact" className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-6xl md:text-8xl font-space font-bold text-zinc-900 mb-10 tracking-tighter">
              Let's work together on <br />
              <span className="text-lime-600">your next project</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mb-12 text-lg font-medium">
              Open for interesting projects in the marketing and IT sectors involving data-driven decision making.
            </p>
            <button className="px-10 py-5 bg-lime-500 text-white font-extrabold rounded-md hover:scale-105 shadow-xl shadow-lime-500/20 transition-transform uppercase tracking-[0.2em]">
              Hire Me Now
            </button>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-3xl font-space font-bold text-zinc-900 tracking-tighter">
            Debadatta<span className="text-lime-600">Swain</span>
          </div>
          <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-lime-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-lime-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-lime-600 transition-colors">Instagram</a>
          </div>
          <p className="text-zinc-400 text-xs tracking-widest uppercase font-bold">
            © 2024. All Rights Reserved.
          </p>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
