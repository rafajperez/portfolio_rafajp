import {
  FaGraduationCap,
  FaCode,
  FaServer,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen bg-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-black mb-4">Sobre mim</h1>
          <div className="w-20 h-1.5 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p>
              Olá! Sou o{" "}
              <span className="text-white font-semibold">Rafael Perez</span>,
              graduado em Análise e Desenvolvimento de Sistemas. Minha jornada
              no desenvolvimento começou pelo Front-end, onde descobri a paixão
              por transformar código em interfaces funcionais e intuitivas.
            </p>
            <p>
              Atualmente, foco meus estudos no ecossistema{" "}
              <span className="text-blue-400">React e TypeScript</span>, mas
              estou em constante transição para o universo{" "}
              <span className="text-cyan-400">DevOps</span>. Acredito que um
              desenvolvimento eficiente exige uma entrega automatizada e segura.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 flex items-center gap-4">
              <FaGraduationCap className="text-blue-500 shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-white text-sm">Formação</h3>
                <p className="text-xs text-slate-400">
                  Análise e Desenv. de Sistemas
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 flex items-center gap-4">
              <FaCode className="text-cyan-500 shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-white text-sm">
                  Stack Principal
                </h3>
                <p className="text-xs text-slate-400">
                  React, TypeScript, Tailwind, Node.js
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FaServer className="text-blue-500" />
            Learning Path
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                <FaCheckCircle /> Estágio 01
              </div>
              <p className="text-white font-semibold">Front-end Core</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Domínio de React, Hooks, Context API e estilização moderna.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                <FaSpinner className="animate-spin" /> Estágio 02
              </div>
              <p className="text-white font-semibold">Angular</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Explorando arquiteturas robustas e RxJS para projetos
                corporativos.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                <div className="w-4 h-4 rounded-full border-2 border-slate-700" />{" "}
                Estágio 03
              </div>
              <p className="text-white font-semibold">DevOps & Cloud</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Foco em Docker, CI/CD e infraestrutura como código.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
