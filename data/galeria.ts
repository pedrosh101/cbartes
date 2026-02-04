
export interface Galeria {
  title: string;
  link: string;
  color: string;
  items: string[];
  count?: number;
  description?: string;
}

export const galeria: Galeria[] = [
  {
    title: "Quem Somos",
    link: "/quem-somos",
    color: "#3E6AF3",
    items: [
      "Equipe de gestão: diretores, coordenações, secretaria",
      "Regimento interno e estrutura organizacional",
      "Missão e valores do espaço cultural",
    ],
  },
  {
    title: "Oficinas",
    link: "/espaco-cultural/oficinas",
    color: "#4A90E2",
    count: 18,
    description: "Oficinas realizadas desde 2022",
    items: [
      "Dança (contemporânea, africana, de salão)",
      "Teatro do Oprimido e palhaçaria",
      "Oratória e desenvolvimento pessoal",
      "Música e movimento",
      "Artes visuais e audiovisual",
    ],
  },
  {
    title: "Articulação em Redes",
    link: "/espaco-cultural/redes",
    color: "#5B9FD8",
    count: 42,
    description: "Parcerias e ações colaborativas",
    items: [
      "Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM)",
      "Circuito Cultural Banco do Nordeste",
      "Prefeitura Municipal de Diamantina",
      "OAB - Ordem dos Advogados do Brasil",
      "Instituto Federal IFNMG",
    ],
  },
  {
    title: "Residências Artísticas",
    link: "/espaco-cultural/residencias",
    color: "#6AADCE",
    items: [
      "Hospedagem e suporte para artistas convidados",
      "Espaço para criação e pesquisa",
      "Intercâmbio cultural nacional e internacional",
      "NzangoArtistResidency (Moçambique, 2025)",
    ],
  },
  {
    title: "Eventos CBARTES",
    link: "/espaco-cultural/eventos",
    color: "#7BBBC4",
    items: [
      "Saraus: 8 edições com música, poesia e artes plásticas",
      "CBARTES de Portas Abertas (inauguração, 2022)",
      "Festival Alecrim (2023)",
      "Entrelaços: 6 encontros de mulheres",
      "Diálogos sobre Dança",
    ],
  },
  {
    title: "Galeria de Exposições",
    link: "/espaco/galeria",
    color: "#8CC9BA",
    count: 14,
    description: "Exposições de artes plásticas e fotografia",
    items: [
      "Filhos do Rio - Ditto Leite",
      "Boas Vindas - Marcelo Brant",
      "O Que Nos Constitui - Cristiane Queiroz",
      "A Pintura e a Palavra - Kuta Ndumbu",
      "Fragmentos que Respiram - Chrystel Baue",
    ],
  },
  {
    title: "Produção Audiovisual",
    link: "/espaco-cultural/audiovisual",
    color: "#9DD7B0",
    items: [
      "Captação e edição de espetáculos",
      "Documentário BRINCANTES (2025)",
      "Vídeo-dança com Cib Maia",
      "Registro de eventos e processos criativos",
      "Parceria com Postura Digital",
    ],
  },
  {
    title: "Cine CBARTES",
    link: "/espaco-cultural/cine",
    color: "#AEE5A6",
    items: [
      "Exibições de filmes e documentários",
      "Sessão Espaço Sagrado (2024)",
      "Mostra Telas Amigáveis - Documentário BRINCANTES",
      "Programação voltada para a comunidade",
    ],
  },
  {
    title: "Ocupações de Espaços Públicos",
    link: "/espaco-cultural/ocupacoes",
    color: "#BFF39C",
    items: [
      "Aulas-show em praças públicas",
      "Quadrilha do CBARTES - Praça do Mercado Velho",
      "Performance contra a PL da Devastação",
      "Flash mob na Festa da Luz",
      "Oficina Corpo.Movídeo em espaços urbanos",
    ],
  },
  {
    title: "Clipping & Mídia",
    link: "/espaco-cultural/midia",
    color: "#D0FF92",
    items: [
      "Jornal Voz de Diamantina",
      "Rádio Rosa do Vale",
      "Programa Café com Cidadania - Rádio Mundo Mix",
      "Programa de TV Agenda",
      "Cobertura de eventos e processos artísticos",
    ],
  },
];