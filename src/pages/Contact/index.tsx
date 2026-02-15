import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-slate-900 text-white py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <header className="mb-16 text-center md:text-left">
          <h1 className="text-4xl font-black mb-4">Vamos conversar?</h1>
          <p className="text-slate-400 text-lg">
            Sinta-se à vontade para entrar em contato para oportunidades,
            colaborações ou apenas para trocar uma ideia sobre tecnologia.
          </p>
          <div className="w-20 h-1.5 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full mt-6 mx-auto md:mx-0"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="mailto:rafaperez_dev@hotmail.com"
            className="group bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all duration-300 flex flex-col gap-4"
          >
            <div className="bg-blue-600/10 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FaEnvelope size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">E-mail</h3>
              <p className="text-slate-400 text-sm">
                rafaperez_dev@hotmail.com
              </p>
            </div>
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Enviar mensagem <FaArrowRight size={12} />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/rafael-perez-998308a9"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all duration-300 flex flex-col gap-4"
          >
            <div className="bg-blue-600/10 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">LinkedIn</h3>
              <p className="text-slate-400 text-sm">
                Conecte-se comigo profissionalmente
              </p>
            </div>
          </a>

          <a
            href="https://github.com/rafajperez"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all duration-300 flex flex-col gap-4"
          >
            <div className="bg-slate-700/50 w-12 h-12 rounded-2xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-colors">
              <FaGithub size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">GitHub</h3>
              <p className="text-slate-400 text-sm">
                Acompanhe meus repositórios e estudos
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/5516982089222"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-linear-to-br from-green-600/10 to-green-500/5 p-8 rounded-3xl border border-green-500/20 hover:border-green-500 transition-all duration-300 flex flex-col gap-4"
          >
            <div className="bg-green-600/10 w-12 h-12 rounded-2xl flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <FaWhatsapp size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1 text-green-400">
                WhatsApp
              </h3>
              <p className="text-slate-400 text-sm">
                Resposta rápida para propostas e dúvidas
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
