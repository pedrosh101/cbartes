

export interface Exposicao {
  artista: string;
  titulo: string;
  ano: string;
  data: string;
  descricao: string;
  sobre: string;
  tecnica: string;
  local: string;
  quantidade: number;

}

export const exposicoes: Record<string, Exposicao> = {
  "marcelo-brant": {
    artista: "Marcelo Brant",
    titulo: "Boas Vindas",
    ano: "2022",
    data: "01/06/2022",
    descricao: "Exposição inaugural do CBARTES. Uma celebração visual que marca o início de um novo espaço dedicado às artes em Diamantina.",
    sobre: "Marcelo Brant é artista visual e professor sediado em Diamantina. Seu trabalho explora as interseções entre arte contemporânea e cultura local.",
    tecnica: "Técnica mista",
    local: "Galeria CBARTES",
 
    quantidade: 7,

  },

  "ditto-leite": {
    artista: "Ditto Leite",
    titulo: "Filhos do Rio",
    ano: "2022",
    data: "05/08/2022",
    descricao: "Uma reflexão visual sobre as águas que atravessam Diamantina e as vidas que delas dependem. A exposição celebra a relação ancestral entre o povo e os rios da região.",
    sobre: "Ditto Leite é artista visual, bailarino e diretor artístico do CBARTES. Multi-artista com vasta experiência em dança contemporânea, artes visuais e performance.",
    tecnica: "Pintura e fotografia",
    local: "Galeria CBARTES",

    quantidade: 14,

  },

  "graciola-rodrigues": {
    artista: "Graciola Rodrigues",
    titulo: "Mulheres do Mundo",
    ano: "2022",
    data: "17/09/2022",
    descricao: "Uma homenagem à força, diversidade e beleza feminina através de retratos que capturam a essência de mulheres de diferentes culturas e contextos.",
    sobre: "Graciola Rodrigues é artista plástica de Diamantina, conhecida por seu trabalho com retratos e representações da figura feminina.",
    tecnica: "Pintura em acrílico",
    local: "Galeria CBARTES",

    quantidade: 7,

  },

  "adriana-reis": {
    artista: "Adriana Reis",
    titulo: "Perspectivas",
    ano: "2022",
    data: "07/10/2022",
    descricao: "Exploração de diferentes pontos de vista através da arte abstrata, convidando o espectador a questionar sua própria percepção da realidade.",
    sobre: "Adriana Reis é artista plástica residente em Diamantina, com trabalhos focados em abstração e experimentação com cores e formas.",
    tecnica: "Técnica mista",
    local: "Galeria CBARTES",

    quantidade: 2,

  },

  "herivelton-silva": {
    artista: "Herivelton Silva",
    titulo: "Lumine Naturae",
    ano: "2022",
    data: "05/11/2022",
    descricao: "Uma investigação poética sobre a luz natural e sua relação com os elementos da natureza. As obras capturam momentos efêmeros de luminosidade.",
    sobre: "Herivelton Silva é artista plástico e poeta de Diamantina. Seu trabalho transita entre artes visuais e literatura.",
    tecnica: "Pintura e instalação",
    local: "Galeria CBARTES",

    quantidade: 2,
 
  },

  "here-fonseca": {
    artista: "Herê Fonseca",
    titulo: "Fragmentos",
    ano: "2023",
    data: "04/03/2023",
    descricao: "Obras que exploram a fragmentação da memória e da identidade contemporânea através de composições visuais complexas.",
    sobre: "Herê Fonseca é artista plástico de Diamantina, reconhecido por seu trabalho experimental com materiais diversos.",
    tecnica: "Colagem e técnica mista",
    local: "Galeria CBARTES",

    quantidade: 2,

  },

  "ofelia-ricardo": {
    artista: "Ofélia Ortega e Ricardo Keferaus",
    titulo: "Aliatórias",
    ano: "2023",
    data: "15/04/2023",
    descricao: "Uma exposição colaborativa que celebra o acaso e as conexões inesperadas através de obras criadas em diálogo entre dois artistas.",
    sobre: "Ofélia Ortega e Ricardo Keferaus são artistas que trabalham tanto individualmente quanto em colaboração, explorando processos criativos compartilhados.",
    tecnica: "Técnica mista",
    local: "Galeria CBARTES",
    quantidade: 3,

  },

  "cristina-queiroz": {
    artista: "Cristiane Queiroz",
    titulo: "O Que Nos Constitui",
    ano: "2023",
    data: "17/06/2023",
    descricao: "Exposição fotográfica que investiga os elementos fundamentais da identidade humana, capturando momentos íntimos e universais.",
    sobre: "Cristina Queiroz é fotógrafa de Diamantina. Concepção de Viviane Queiroz. Trabalho focado em retratos e fotografia documental.",
    tecnica: "Fotografia",
    local: "Galeria CBARTES",

    quantidade: 2,

  },

  "kuta": {
    artista: "Kuta Ndumbu",
    titulo: "A Pintura e a Palavra",
    ano: "2023",
    data: "12/08/2023",
    descricao: "Diálogo entre linguagens visuais e textuais, trazendo a perspectiva africana para questões universais da arte contemporânea.",
    sobre: "Kuta Ndumbu é artista plástico africano. Seu trabalho integra tradições visuais africanas com questões contemporâneas.",
    tecnica: "Pintura em acrílico",
    local: "Galeria CBARTES",

    quantidade: 7,

  },

  "samora-delcio": {
    artista: "Samora Délcio",
    titulo: "Travessias",
    ano: "2023",
    data: "07/10/2023",
    descricao: "Obras que exploram os conceitos de trânsito, movimento e transformação na contemporaneidade urbana.",
    sobre: "Samora Délcio é artista plástico de Belo Horizonte com trabalhos expostos em diversas galerias de Minas Gerais.",
    tecnica: "Técnica mista",
    local: "Galeria CBARTES",
    quantidade: 9,

  },

  "luciano-ribeiro": {
    artista: "Luciano Ribeiro",
    titulo: "Espaço da Cor",
    ano: "2023",
    data: "11/11/2023",
    descricao: "Investigação cromática que celebra a cor como elemento fundamental da expressão artística e da percepção visual.",
    sobre: "Luciano Ribeiro é artista plástico de Sete Lagoas, reconhecido por suas experimentações com cores vibrantes e composições abstratas.",
    tecnica: "Pintura em acrílico",
    local: "Galeria CBARTES",

    quantidade: 3,

  },

  "coletiva": {
    artista: "Exposição Coletiva",
    titulo: "Vozes Visuais",
    ano: "2024",
    data: "01/06/2024",
    descricao: "Exposição coletiva reunindo artistas plásticas e visuais de Diamantina em uma celebração da diversidade criativa local.",
    sobre: "Artistas: Raquel Galiciolli, Annalu Quadros, Graciola Rodrigues, Flora Martins, Ceci Gaiad, Ana Ribeiro, Ditto Leite.",
    tecnica: "Pintura, fotografia e técnica mista",
    local: "Galeria CBARTES",
    quantidade: 10,

  },

  "chrystel-baue": {
    artista: "Chrystel Baue",
    titulo: "Fragmentos que Respiram",
    ano: "2025",
    data: "07/06/2025",
    descricao: "Uma investigação sobre a efemeridade e a permanência através de obras que exploram a relação entre o orgânico e o construído.",
    sobre: "Chrystel Baue é artista plástica francesa residente no Brasil. Seu trabalho transita entre pintura, instalação e performance.",
    tecnica: "Técnica mista e instalação",
    local: "Galeria CBARTES",
    quantidade: 14,

  },

  "fotografica-2025": {
    artista: "Ditto Leite, Claudia Ribeiro e Casal Click",
    titulo: "Olhares Cruzados",
    ano: "2025",
    data: "07/06/2025",
    descricao: "Exposição fotográfica coletiva que apresenta três perspectivas distintas sobre a paisagem urbana e humana de Diamantina.",
    sobre: "Três olhares fotográficos se encontram para revelar diferentes camadas da cidade e seus habitantes.",
    tecnica: "Fotografia",
    local: "Galeria CBARTES",
    quantidade: 9,

  }
};

// Helper function para gerar lista de links
export const getExposicoesLinks = () => {
  return Object.entries(exposicoes).map(([slug, expo]) => ({
    title: expo.artista,
    link: `/espaco/galeria/${slug}`,
    ano: expo.ano,
    titulo: expo.titulo,
  }));
};