import Image from "next/image";
import { Button } from "./button";
import { Github } from "lucide-react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  githubUrl?: string;
  siteUrl?: string;
  hoverColor?: string;
}

// Helper function to darken a hex color
function darkenHexColor(hex, factor = 0.8) {
  if (!hex || hex.length !== 7 || hex[0] !== "#") {
    // Handle invalid hex codes, return original or a default dark color
    return "#000000";
  }

  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  r = Math.floor(r * factor);
  g = Math.floor(g * factor);
  b = Math.floor(b * factor);

  r = Math.min(255, Math.max(0, r)).toString(16).padStart(2, "0");
  g = Math.min(255, Math.max(0, g)).toString(16).padStart(2, "0");
  b = Math.min(255, Math.max(0, b)).toString(16).padStart(2, "0");

  return `#${r}${g}${b}`;
}

const ProjectCard = ({
  imageSrc,
  title,
  githubUrl,
  siteUrl,
  hoverColor = "#0000ff",
}: ProjectCardProps) => {
  const darkenedHoverColor = darkenHexColor(hoverColor);
  const hoverStyle = {
    background: `linear-gradient(to top, ${darkenedHoverColor}BB, transparent)`,
  };

  return (
    <div className="rounded-lg overflow-hidden group relative shadow-lg">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={400}
        className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div
        style={hoverStyle}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center p-4"
      >
        <h3
          className="text-white text-lg font-bold mb-2"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
        >
          {title}
        </h3>
        <div className="flex space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Button
                variant="outline"
                size="icon"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer"
              >
                <Github className="h-4 w-4" />
              </Button>
            </a>
          )}
          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Button
                variant="secondary"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer"
              >
                Visite o projeto
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
