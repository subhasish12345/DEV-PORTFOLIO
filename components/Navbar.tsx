
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border border-lime-500 flex items-center justify-center font-bold text-lime-600 text-lg">DS</div>
        </div>
        <div className="flex items-center gap-10 text-sm font-semibold uppercase tracking-widest text-zinc-500">
          <a href="#" className="hover:text-lime-600 transition-colors">Home</a>
          <a href="#skills" className="hover:text-lime-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-lime-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-lime-600 transition-colors">Contact</a>
        </div>
        <div className="hidden md:block">
          <button className="px-6 py-2 border border-zinc-200 rounded-md text-sm font-bold hover:border-lime-500 hover:text-lime-600 transition-all">Download CV</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
