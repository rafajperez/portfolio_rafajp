import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { type Project } from "../../types/project";
interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-slate-700">
      {/* Espaço para Imagem - se não tiver, usa um placeholder colorido */}
      <div className="h-48 bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} />
        ) : (
          project.title
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        {/* Tags de Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="flex justify-between items-center">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:text-blue-500 transition-colors"
          >
            <FaGithub size={20} /> Code
          </a>
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-400 transition-colors"
            >
              <FaExternalLinkAlt size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
