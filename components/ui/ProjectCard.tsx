import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  imageSrc: string;
  title?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title }) => {
  return (
    <div 
      className="group relative w-full aspect-[4/3] overflow-hidden cursor-pointer bg-[#1a1a1a]"
    >
      <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
         <Image
            src={imageSrc}
            alt={title || "Project Image"}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
         />
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center border-4 border-transparent group-hover:border-[#E3B13C]/50">
        {/* Simple overlay for effect */}
      </div>
    </div>
  );
};

export default ProjectCard;
