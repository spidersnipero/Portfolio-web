import React from "react";
import { FaGithub, FaMedium } from "react-icons/fa";

type Project = {
  image: string;
  name: string;
  description: string;
  tags: string[];
  githubLink: string;
  mediumLink?: string; // Add an optional mediumLink property
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="max-w-2xl rounded-t-xl overflow-hidden shadow-lg hover:shadow-2xl mx-auto relative">
      <img
        className="w-full  object-cover"
        src={project.image}
        alt={project.name}
      />

      <div className="p-6  ">
        <div className="relative ">
          <div className="absolute top-0 right-0 m-2 flex flex-col items-end ">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="text-gray-700 hover:text-gray-900 mb-2"
                size={24}
              />
            </a>
            {project.mediumLink && (
              <a
                href={project.mediumLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMedium
                  className="text-gray-700 hover:text-gray-900"
                  size={24}
                />
              </a>
            )}
          </div>

          <div className="font-bold text-xl mb-2">{project.name}</div>

          <div className="pt-4 pb-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 text-base mb-4">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
