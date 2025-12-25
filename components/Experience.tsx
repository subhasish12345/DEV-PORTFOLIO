
import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-space font-bold mb-12 text-zinc-900">Work <span className="text-lime-600">Journey</span></h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-zinc-100 pb-2">
                <div className="absolute w-4 h-4 bg-lime-500 rounded-full -left-[9px] top-0 shadow-lg shadow-lime-500/30"></div>
                <div className="mb-1 text-sm font-bold text-lime-600">{exp.period}</div>
                <h3 className="text-2xl font-bold mb-1 text-zinc-900">{exp.role}</h3>
                <div className="text-zinc-500 mb-4 font-medium">{exp.company} • {exp.location}</div>
                <ul className="space-y-3">
                  {exp.points.map((p, i) => (
                    <li key={i} className="text-zinc-500 text-sm leading-relaxed flex gap-3 font-medium">
                      <span className="text-lime-500 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-lime-500"></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-space font-bold mb-12 text-zinc-900">Academic <span className="text-lime-600">Base</span></h2>
          <div className="space-y-12">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-zinc-100 pb-12">
                <div className="absolute w-4 h-4 bg-lime-500 rounded-full -left-[9px] top-0 shadow-lg shadow-lime-500/30"></div>
                <div className="mb-1 text-sm font-bold text-lime-600">{edu.period}</div>
                <h3 className="text-2xl font-bold mb-1 text-zinc-900">{edu.degree}</h3>
                <div className="text-zinc-500 font-medium">{edu.institution}</div>
              </div>
            ))}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 shadow-sm">
              <h4 className="font-bold text-lg mb-4 text-zinc-900">Leadership Roles</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-lime-600 font-bold text-sm">MUDRA Club (2023 - Present)</div>
                  <div className="text-zinc-800 text-md font-bold">Member & Coordinator</div>
                  <p className="text-zinc-500 text-sm mt-2 leading-relaxed">Organized events for 100+ attendees, mentoring juniors in technical sessions and hackathons.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
