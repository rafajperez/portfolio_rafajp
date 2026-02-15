import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link
            to="/"
            className="text-lg font-black tracking-tighter text-white"
          >
            RAFAEL{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              PEREZ
            </span>
          </Link>

          <p className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-slate-700 mx-1">|</span>
            <span className="flex items-center gap-1.5">
              Feito com <FaHeart className="text-red-500/40" size={10} />
            </span>
          </p>

          <div className="flex items-center gap-5 text-slate-400">
            <a
              href="https://github.com/rafajperez"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-perez-998308a9"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:rafaperez_dev@hotmail.com"
              className="hover:text-cyan-500 transition-colors"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
