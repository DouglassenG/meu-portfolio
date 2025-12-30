import React from 'react';
import { theme } from '@/src/styles';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  { id: 1, src: '/window.svg', title: 'Project 1' },
  { id: 2, src: '/globe.svg', title: 'Project 2' },
  { id: 3, src: '/file.svg', title: 'Project 3' },
  { id: 4, src: '/window.svg', title: 'Project 4' },
  { id: 5, src: '/globe.svg', title: 'Project 5' },
  { id: 6, src: '/file.svg', title: 'Project 6' },
];

const Portfolio = () => {
  return (
    <section 
      className="py-20 px-4 md:px-40 flex flex-col items-center"
    >
      {/* Title Section */}
      <div className="mb-16 text-center space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] border-b-4 pb-2 text-white md:text-[var(--foreground)]" 
            style={{ 
              borderColor: theme.colors.accent 
            }}>
            Portfolio
        </h2>
      </div>

      {/* Grid Content 
          Mobile: 1 Column
          Desktop: 2 Columns
      */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
         {projects.map(p => (
            <div key={p.id} className="w-full">
                <ProjectCard imageSrc={p.src} title={p.title} />
            </div>
         ))}
      </div>
    </section>
  );
};

export default Portfolio;