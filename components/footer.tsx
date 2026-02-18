import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

interface FooterProps {
  color: string;
}

export default function Footer({ color }: FooterProps) {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Marca */}
          <div className="md:col-span-2">
            <p className="text-3xl font-black">ESCOLA</p>
            <p className="text-3xl font-black  mb-5" style={{ color: color }}>
              CBARTES
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Escola de artes cênicas em Diamantina, Minas Gerais. Formação em
              dança, teatro e outras linguagens artísticas.
            </p>
          </div>

          {/* Contato */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-6">
              Contato
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-gray-300">
                <FaMapMarkerAlt size={20} />
                <span>
                  Av. Jacaranda 45, Campo Belo
                  <br />
                  Diamantina, MG
                </span>
              </div>
              <a
                href="https://wa.me/553897421313"
                className="flex items-center gap-3 text-gray-300 transition-colors"
                style={{}}
                onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                <FaWhatsapp size={20} />
                (38) 89742-1313
              </a>
              <a
                href="mailto:espacoculturalcbartes@gmail.com"
                className="flex items-center gap-3 text-gray-300 transition-colors"
                style={{}}
                onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                <FaEnvelope size={18} />
                espacoculturalcbartes@gmail.com
              </a>
            </div>
          </div>

          {/* Redes */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-6">
              Redes Sociais
            </p>
            <div className="space-y-4 text-sm">
              <a
                href="https://instagram.com/cbartes_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 transition-colors w-fit"
                style={{}}
                onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} CBARTES. Todos os direitos reservados.
          </p>
          <p className="text-xs text-zinc-600">
            Diamantina, Minas Gerais, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
