
export interface Galeria {
  title: string;
  link: string;

  items: string[];
  count?: number;
  description?: string;
}

export const galeria: Galeria[] = [
    {
    title: "Eventos CBARTES",
    link: "/espaco/eventos",

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
    title: "Oficinas",
    link: "/escola/oficinas",

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
    link: "/espaco/redes",
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
    title: "Artistas Recebidos",
    link: "/espaco/residencias",
    items: [
      "Hospedagem e suporte para artistas convidados",
      "Espaço para criação e pesquisa",
      "Intercâmbio cultural nacional e internacional",
      "NzangoArtistResidency (Moçambique, 2025)",
    ],
  },
    {
    title: "Cine CBARTES",
    link: "/espaco/cine",
    items: [
      "Exibições de filmes e documentários",
      "Sessão Espaço Sagrado (2024)",
      "Mostra Telas Amigáveis - Documentário BRINCANTES",
      "Programação voltada para a comunidade",
    ],
  },
    {
    title: "Produção Audiovisual",
    link: "/espaco/audiovisual",
    items: [
      "Captação e edição de espetáculos",
      "Documentário BRINCANTES (2025)",
      "Vídeo-dança com Cib Maia",
      "Registro de eventos e processos criativos",
      "Parceria com Postura Digital",
    ],
  },
    {
    title: "Ocupações de Espaços Públicos",
    link: "/espaco/ocupacoes",
    items: [
      "Aulas-show em praças públicas",
      "Quadrilha do CBARTES - Praça do Mercado Velho",
      "Performance contra a PL da Devastação",
      "Flash mob na Festa da Luz",
      "Oficina Corpo.Movídeo em espaços urbanos",
    ],
  },
  {
    title: "Cultura Popular e Ações Comunitárias",
    link: "/cultura-popular",
    items: [
      "Representatividade Feminina",
      "Associação com o PROEXC-UFVJM",

    ],
  },
];