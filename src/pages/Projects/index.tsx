import ProjectCard from "../../components/common/ProjectCard";
import { type Project } from "../../types/project";

const Projects = () => {
  const myProjects: Project[] = [
    {
      id: 1,
      title: "Coffee Shop",
      description: "E-commerce completo com Firebase e React.ts",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      githubUrl: "https://github.com/rafajperez/e-commerce",
      deployUrl: "https://e-commerce-six-brown.vercel.app/",
    },
    {
      id: 2,
      title: "meu-link",
      description:
        "Um dos meus primeiros projetos, o short-link foi feito em React.js",
      technologies: ["React", "Axios"],
      githubUrl: "https://github.com/rafajperez/shortlinks",
      deployUrl: "https://meu-link-five.vercel.app/",
    },
    {
      id: 3,
      title: "Buscador",
      description:
        "O buscador de cep retorna um endereço assim que um cep é pesquisado",
      technologies: ["React", "Jest", "Eslint"],
      githubUrl: "https://github.com/rafajperez/buscador",
      deployUrl: "https://buscador-tau-one.vercel.app/",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-900 py-12 px-6">
      <div className="max-w-6xl mx-auto text-white">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Meus Projetos</h1>
          <p className="text-slate-400">
            Um pouco do que venho construindo nos meus estudos de Front-end.
          </p>
        </header>

        {/* Aqui está o segredo: O grid chama o componente pronto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
