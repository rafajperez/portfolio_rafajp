import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-slate-900 px-6 py-20 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-700 text-blue-400 text-[12px] font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Open for Work
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
          Construindo o futuro do <br />
          <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Front-end
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Olá, eu sou o{" "}
          <span className="text-white font-medium">Rafael Perez</span>.
          especialista em criar interfaces e sistemas de alta performance,
          começando a estudar automação de processos de entrega para entrar no
          mundo DevOps.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/projects"
            className="group flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/20 w-full sm:w-auto"
          >
            Ver Projetos
            <FaArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <a
            href="https://1drv.ms/b/c/a5f232627018e51d/IQBsrScWugfcT6-hY0PzpDLrAVbNRCkth9R_yHKWz2aMPVQ?e=QAV29q"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-white border border-slate-700 px-6 py-4 rounded-xl font-bold transition-all hover:bg-slate-700 w-full sm:w-auto"
          >
            Download CV
            <FaDownload size={14} />
          </a>
        </div>
      </div>

      <div className="absolute  bottom-2 left-0 right-0 hidden md:block">
        <p className="text-slate-500 text-[12px] uppercase tracking-[0.5em] text-center mb-4">
          Tecnologias principais:
        </p>
        <div className="flex justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-white text-sm font-mono">
          <span>REACT.JS</span>
          <span>TYPESCRIPT</span>
          <span>NEXT</span>
          <span>TAILWIND</span>
          <span>STYLED COMPONENT</span>
          <span>NODE.JS</span>
          <span>GIT</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
