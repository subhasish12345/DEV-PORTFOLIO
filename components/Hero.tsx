
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image */}
        <div className="relative group flex justify-center lg:justify-start">
          <div className="relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-zinc-100">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Profile"
              className="w-full h-full object-cover grayscale brightness-105 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-60"></div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-lime-500 rounded-br-3xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start lg:pl-12">
          <span className="text-lime-600 font-bold mb-4 tracking-wider uppercase text-sm">Hello, I'm Debadatta</span>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-6 leading-tight font-space">
            {PERSONAL_INFO.title.split('|')[1].trim()} <br />
            <span className="text-zinc-300">&</span> Specialist
          </h1>
          <p className="text-zinc-500 text-lg max-w-lg leading-relaxed mb-10">
            {PERSONAL_INFO.summary}
          </p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="px-8 py-4 bg-lime-500 text-white font-bold rounded-md hover:bg-lime-600 shadow-lg shadow-lime-500/30 transition-all uppercase tracking-widest text-xs">
              About Me
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto w-full mt-24">
        <div className="bg-white border border-zinc-100 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-sm">
          <div className="text-center md:text-left border-r border-zinc-100 last:border-0">
            <h3 className="text-3xl font-bold text-zinc-900 mb-1">01+</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Years Experience</p>
          </div>
          <div className="text-center md:text-left border-r border-zinc-100 last:border-0">
            <h3 className="text-3xl font-bold text-zinc-900 mb-1">20+</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Completed Models</p>
          </div>
          <div className="text-center md:text-left border-r border-zinc-100 last:border-0">
            <h3 className="text-3xl font-bold text-zinc-900 mb-1">5+</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Industry Tools</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-zinc-900 mb-1">100%</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
