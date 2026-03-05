// data/eventos.ts

export interface Evento {
  titulo: string;
  slug: string;
  ano: number;
  data: string;
  local: string;
  tipo: "Show" | "Festival" | "Apresentação" | "Workshop" | "Sessão";
  descricao: string;
  participantes?: string;
  programacao?: string[];
  imagensCount: number;
}

export const eventos: Record<string, Evento> = {
  "aula-show-praca-jk": {
    titulo: "Aula-show — Praça JK",
    slug: "aula-show-praca-jk",
    ano: 2023,
    data: "Junho de 2023",
    local: "Praça JK, Diamantina",
    tipo: "Show",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    participantes: "Alunos das turmas de dança e teatro do CBARTES",
    programacao: [
      "Abertura com dança contemporânea",
      "Apresentações teatrais",
      "Números musicais",
      "Encerramento coletivo",
    ],
    imagensCount: 4,
  },
  "festival-alecrim": {
    titulo: "Festival Alecrim",
    slug: "festival-alecrim",
    ano: 2023,
    data: "Outubro de 2023",
    local: "Centro Histórico, Diamantina",
    tipo: "Festival",
    descricao: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    participantes: "Artistas locais e convidados",
    programacao: [
      "Apresentações de dança",
      "Performances teatrais",
      "Oficinas abertas",
      "Intervenções urbanas",
    ],
    imagensCount: 0,
  },
  "evento-3": {
    titulo: "Sessão Espaço Sagrado",
    slug: "evento-3",
    ano: 2024,
    data: "Maio de 2024",
    local: "Cine CBARTES",
    tipo: "Sessão",
    descricao: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    participantes: "Turmas de dança do CBARTES",
    imagensCount: 0,
  },
  "evento-4": {
    titulo: "Flash mob — Festa da Luz",
    slug: "evento-4",
    ano: 2024,
    data: "Setembro de 2024",
    local: "Centro Histórico, Diamantina",
    tipo: "Apresentação",
    descricao: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    participantes: "Alunos e professores do CBARTES",
    programacao: [
      "Intervenção coreográfica surpresa",
      "Participação do público",
      "Registro fotográfico",
    ],
    imagensCount: 0,
  },
  "evento-5": {
    titulo: "Circuito Banco do Nordeste",
    slug: "evento-5",
    ano: 2024,
    data: "Novembro de 2024",
    local: "Teatro Santa Izabel",
    tipo: "Apresentação",
    descricao: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    participantes: "Companhia de Dança CBARTES",
    programacao: [
      "Abertura institucional",
      "Apresentação: Pulso Invisível",
      "Bate-papo com artistas",
    ],
    imagensCount: 0,
  },
  "evento-6": {
    titulo: "Quadrilha — Mercado Velho",
    slug: "evento-6",
    ano: 2025,
    data: "Junho de 2025",
    local: "Praça do Mercado Velho",
    tipo: "Apresentação",
    descricao: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    participantes: "Comunidade e alunos do CBARTES",
    programacao: [
      "Ensaio aberto",
      "Quadrilha junina",
      "Confraternização",
    ],
    imagensCount: 0,
  },
  "evento-7": {
    titulo: "Mostra Telas Amigáveis",
    slug: "evento-7",
    ano: 2025,
    data: "Agosto de 2025",
    local: "CBARTES",
    tipo: "Sessão",
    descricao: "Quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    participantes: "Cineastas e comunidade",
    programacao: [
      "Exibição de curtas-metragens",
      "Debate com diretores",
      "Lançamento de projetos locais",
    ],
    imagensCount: 0,
  },
  "evento-8": {
    titulo: "Performance PL da Devastação",
    slug: "evento-8",
    ano: 2025,
    data: "Setembro de 2025",
    local: "Espaço público",
    tipo: "Apresentação",
    descricao: "Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    participantes: "Artistas ativistas e comunidade",
    programacao: [
      "Performance site-specific",
      "Intervenção urbana",
      "Manifesto artístico",
    ],
    imagensCount: 0,
  },
};


export const getEventosPorAno = () => {
  const porAno: Record<number, Evento[]> = {};
  
  Object.values(eventos).forEach(evento => {
    if (!porAno[evento.ano]) {
      porAno[evento.ano] = [];
    }
    porAno[evento.ano].push(evento);
  });

  return porAno;
};

// Helper para timeline
export const getEventosParaTimeline = () => {
  const porAno = getEventosPorAno();
  
  return Object.entries(porAno)
    .sort(([anoA], [anoB]) => parseInt(anoA) - parseInt(anoB))
    .map(([ano, eventos]) => ({
      ano: parseInt(ano),
      eventos: eventos.map(e => ({
        titulo: e.titulo,
        slug: e.slug,
        local: e.local,
        data: e.data,
      }))
    }));
};