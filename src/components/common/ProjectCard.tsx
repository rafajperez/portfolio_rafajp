import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { type Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 flex flex-col w-full max-w-[320px] mx-auto">
      {/* Header Compacto - Reduzido para h-24 */}
      <div className="h-24 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white relative px-4 overflow-hidden shrink-0">
        {/* Ícone de fundo ainda menor */}
        <FaCode
          size={50}
          className="absolute -bottom-1 -right-1 opacity-10 -rotate-12"
        />

        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="relative z-10 flex items-center gap-3">
            {/* Círculo do ícone bem pequeno agora */}
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md border border-white/30 shadow-sm">
              <FaCode size={16} className="text-white" />
            </div>

            {/* Nome do projeto ao lado do ícone */}
            <span className="text-sm font-bold uppercase tracking-widest drop-shadow-sm">
              {project.title}
            </span>
          </div>
        )}

        <span className="absolute top-3 right-3 text-[14px] font-mono font-bold text-white/60">
          #{project.id}
        </span>
      </div>

      {/* Conteúdo Proporcional */}
      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-[11px] mt-1 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 text-[9px] font-bold uppercase bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded border border-blue-100 dark:border-blue-800/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Rodapé */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-slate-700 mt-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
          >
            <FaGithub size={14} /> Code
          </a>

          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[11px] font-bold text-blue-600 dark:text-blue-400"
            >
              Live Demo <FaExternalLinkAlt size={10} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
