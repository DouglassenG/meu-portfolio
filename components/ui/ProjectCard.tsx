import Image from 'next/image';
import { Button } from './button';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  githubUrl?: string;
  siteUrl?: string;
}

const ProjectCard = ({ imageSrc, title, githubUrl, siteUrl }: ProjectCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden group relative">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={400}
        className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center p-4 group-hover:bg-gradient-to-t group-hover:from-blue-700/30 group-hover:to-transparent">
        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
        <div className="flex space-x-4">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <Button variant="outline" size="icon" className="hover:bg-blue-500/30 opacity-70 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          )}
          {siteUrl && (
            <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <Button variant="secondary" className="hover:bg-blue-500/30 opacity-70 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">Visite o projeto</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;