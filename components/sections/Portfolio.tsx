import React from 'react';
import { theme } from '@/src/styles';
import ProjectCard from '../ui/ProjectCard';

const column1Projects = [
  { id: 1, src: '/window.svg', title: 'Project 1' },
  { id: 2, src: '/globe.svg', title: 'Project 2' },
  { id: 3, src: '/file.svg', title: 'Project 3' },
];

const column2Projects = [
  { id: 4, src: '/window.svg', title: 'Project 4' },
  { id: 5, src: '/globe.svg', title: 'Project 5' },
  { id: 6, src: '/file.svg', title: 'Project 6' },
];

const Portfolio = () => {
  return (
    <section 
      className="py-20 px-4 md:px-40 flex flex-col items-center"
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Title Section */}
      <div className="mb-16 text-center space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] border-b-4 pb-2" 
            style={{ 
              color: theme.colors.foreground,
              borderColor: theme.colors.accent 
            }}>
            Portfolio
        </h2>
      </div>

      {/* Grid Content - 1 Row, 2 Columns */}
      <div className="w-full flex flex-col md:flex-row gap-8">
         {/* Column 1 (3 items) */}
         <div className="flex-1 flex flex-col gap-8">
            {column1Projects.map(p => (
                <ProjectCard key={p.id} imageSrc={p.src} title={p.title} />
            ))}
         </div>
         
         {/* Column 2 (3 items) */}
         <div className="flex-1 flex flex-col gap-8">
            {column2Projects.map(p => (
                <ProjectCard key={p.id} imageSrc={p.src} title={p.title} />
            ))}
         </div>
      </div>
    </section>
  );
};

export default Portfolio;
