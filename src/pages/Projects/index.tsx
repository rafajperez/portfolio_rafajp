import { type Project } from "../../types/project";

const Projects = () => {
  const myProjects: Project[] = [
    {
      id: 1,
      title: "Coffee Shop",
      description: "E-commerce completo com Firebase e React.ts",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      githubUrl: "https://github.com/seu-usuario/coffee-shop",
      deployUrl: "https://coffee-shop-demo.vercel.app",
    },
  ];
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Meus Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {myProjects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-blue-100 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
