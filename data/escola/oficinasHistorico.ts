export interface OficinasHistorico {
  nome: string;
  ano: string;
  ministrante: string;
  slug: string;
  sinopse: string;
  cargaHoraria?: string;
  vagas?: number;
  local?: string;
  imagensCount: number;
}

export const oficinasHistorico: OficinasHistorico[] = [
  {
    nome: "Dança Contemporânea",
    ano: "2022",
    ministrante: "Ditto Leite",
    slug: "danca-contemporanea",
    sinopse: "Lorem ipsum dolor sit amet vivamus et turpis lobortis, rutrum velit iaculis, tempus diam. Suspendisse fringilla quam nec purus porttitor malesuada. Nunc nulla dolor, tincidunt a elit et, gravida auctor eros.",
    cargaHoraria: "20h",
    vagas: 25,
    local: "Escola CBARTES",
    imagensCount: 0,
  },
  {
    nome: "Teatro do Oprimido",
    ano: "2022",
    ministrante: "Jean Gimenes",
    slug: "teatro-do-oprimido",
    sinopse: "Oficina baseada na metodologia de Augusto Boal. Vivamus et turpis lobortis, rutrum velit iaculis, tempus diam. Suspendisse fringilla quam nec purus porttitor malesuada. Nunc nulla dolor, tincidunt a elit et, gravida auctor eros.",
    cargaHoraria: "16h",
    vagas: 20,
    local: "Escola CBARTES",
    imagensCount: 0,
  },
  {
    nome: "Oratória",
    ano: "2023",
    ministrante: "Jean Gimenes",
    slug: "oratoria",
    sinopse: "Desenvolvimento de técnicas de comunicação e expressão verbal. Integer efficitur convallis dolor, nec condimentum nulla viverra in. Vivamus et turpis lobortis, rutrum velit iaculis, tempus diam.",
    cargaHoraria: "12h",
    vagas: 15,
    local: "Escola CBARTES",
    imagensCount: 0,
  },
   {
    nome: "Palhaçaria",
    ano: "2023",
    ministrante: "Convidado externo",
    slug: "palhacaria",
    sinopse: "Exploração do universo do palhaço e técnicas circenses. Suspendisse fringilla quam nec purus porttitor malesuada. Nunc nulla dolor, tincidunt a elit et, gravida auctor eros. Vestibulum ante ipsum primis in faucibus orci luctus.",
    cargaHoraria: "8h",
    vagas: 18,
    local: "Teatro Santa Izabel",
    imagensCount: 0,
  },
   {
    nome: "Dança de Salão",
    ano: "2023",
    ministrante: "Convidado externo",
    slug: "danca-de-salao",
    sinopse: "Introdução aos principais ritmos da dança de salão. Phasellus sit amet ipsum tellus. Donec non vestibulum turpis. Nam vel quam volutpat, volutpat quam in, placerat erat.",
    cargaHoraria: "10h",
    vagas: 30,
    local: "Escola CBARTES",
    imagensCount: 0,
  },
  {
    nome: "Música e Movimento",
    ano: "2024",
    ministrante: "UFVJM",
    slug: "musica-e-movimento",
    sinopse: "Parceria UFVJM. Exploração da relação entre música e movimento corporal. Integer efficitur convallis dolor, nec condimentum nulla viverra in. Vivamus et turpis lobortis.",
    cargaHoraria: "15h",
    vagas: 20,
    local: "UFVJM",
    imagensCount: 0,
  },
  {
    nome: "Vídeo-Dança",
    ano: "2024",
    ministrante: "Cib Maia",
    slug: "video-danca",
    sinopse: "Criação audiovisual com dança. Suspendisse fringilla quam nec purus porttitor malesuada. Nunc nulla dolor, tincidunt a elit et, gravida auctor eros.",
    cargaHoraria: "12h",
    vagas: 15,
    local: "Escola CBARTES",
    imagensCount: 0,
  },
   {
    nome: "Corpo.Movídeo",
    ano: "2024",
    ministrante: "Convidado externo",
    slug: "corpo-movideo",
    sinopse: "Workshop de criação coreográfica e registro audiovisual. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    cargaHoraria: "16h",
    vagas: 12,
    local: "Escola CBARTES",
    imagensCount: 0,
  },
   {
    nome: "Dança Africana",
    ano: "2025",
    ministrante: "Convidado externo",
    slug: "danca-africana",
    sinopse: "Imersão nos ritmos e movimentos da dança africana. Phasellus sit amet ipsum tellus. Donec non vestibulum turpis. Nam vel quam volutpat.",
    cargaHoraria: "10h",
    vagas: 25,
    local: "Escola CBARTES",
    imagensCount: 0,
  },
   {
    nome: "Oratória — EmpreendArteLab",
    ano: "2025",
    ministrante: "Jean Gimenes",
    slug: "oratoria-empreendarte",
    sinopse: "Programa de desenvolvimento de comunicação dentro do EmpreendArteLab. Integer efficitur convallis dolor, nec condimentum nulla viverra in.",
    cargaHoraria: "20h",
    vagas: 10,
    local: "Escola CBARTES",
    imagensCount: 0,
  },
];


// Exporta também como Record para buscar por slug (na página dinâmica)
export const oficinasRecord: Record<string, OficinasHistorico> = 
  oficinasHistorico.reduce((acc, oficina) => {
    acc[oficina.slug] = oficina;
    return acc;
  }, {} as Record<string, OficinasHistorico>);

console.log('oficinasRecord:', oficinasRecord);