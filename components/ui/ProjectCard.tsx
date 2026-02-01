"use client";

import Image from "next/image";
import { Button } from "./button";
import { Github } from "lucide-react";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  githubUrl?: string;
  siteUrl?: string;
  hoverColor?: string;
}

// Helper function to darken a hex color
function darkenHexColor(hex: string, factor: number = 0.8): string {
  if (!hex || hex.length !== 7 || hex[0] !== "#") {
    return "#000000";
  }

  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  r = Math.floor(r * factor);
  g = Math.floor(g * factor);
  b = Math.floor(b * factor);

  const rHex = Math.min(255, Math.max(0, r)).toString(16).padStart(2, "0");
  const gHex = Math.min(255, Math.max(0, g)).toString(16).padStart(2, "0");
  const bHex = Math.min(255, Math.max(0, b)).toString(16).padStart(2, "0");

  return `#${rHex}${gHex}${bHex}`;
}

const ProjectCard = ({
  imageSrc,
  title,
  githubUrl,
  siteUrl,
  hoverColor = "#0000ff",
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const darkenedHoverColor = darkenHexColor(hoverColor);
  const hoverStyle = {
    background: `linear-gradient(to top, ${darkenedHoverColor}BB, transparent)`,
  };

  const cardStyle = {
    borderColor: isHovered && isDesktop ? hoverColor : "transparent",
    boxShadow: isHovered && isDesktop ? `0 0 20px ${hoverColor}99` : 'none',
    transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
  };

  return (
    <div
      className="rounded-lg overflow-hidden group relative shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={cardStyle}
    >
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
        <h3 className="text-gray-50 text-lg font-bold mb-2">{title}</h3>
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
                style={{ cursor: "pointer" }}
              >
                <Github className="h-4 w-4 cursor-pointer" />
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
                style={{ cursor: "pointer" }}
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
