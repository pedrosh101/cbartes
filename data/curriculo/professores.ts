
export const professores: Record<
  string,
  {
    nome: string;
    slug: string;
    area: string;
    formacao: string[];
    bio: string;
    experiencia: {
      ano: string;
      titulo: string;
      instituicao: string;
      descricao: string;
    }[];
    especializacoes: string[];
    premios?: {
      ano: string;
      titulo: string;
      instituicao: string;
    }[];
    imagemPerfil: string;
    imagemCapa: string;

    galeria?: {
      src: string;
      alt: string;
    }[];
  }
> = {
  "ditto-leite": {
    nome: "Ditto Leite",
    slug: "ditto-leite",
    area: "Dança Contemporânea",
    formacao: [
      "Bacharel em Dança pela Universidade Federal de Minas Gerais",
      "Especialização em Artes Visuais",
      "Formação em Dança Contemporânea pela Angel Vianna",
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    experiencia: [
      {
        ano: "2020 - Atual",
        titulo: "Diretor Artístico",
        instituicao: "Escola CBARTES",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta lacinia leo eu condimentum.",
      },
      {
        ano: "2018 - 2020",
        titulo: "Professor de Dança Contemporânea",
        instituicao: "Universidade Federal dos Vales do Jequitinhonha e Mucuri",
        descricao: "Phasellus sit amet ipsum tellus. Donec non vestibulum turpis. Nam vel quam volutpat.",
      },
      {
        ano: "2015 - 2018",
        titulo: "Bailarino professores",
        instituicao: "Companhia de Dança Contemporânea BH",
        descricao: "Integer efficitur convallis dolor, nec condimentum nulla viverra in. Vivamus et turpis.",
      },
    ],
    especializacoes: [
      "Dança Contemporânea",
      "Técnica de Release",
      "Contact Improvisation",
      "Composição Coreográfica",
      "Direção Artística",
    ],
    premios: [
      {
        ano: "2023",
        titulo: "Prêmio Funarte de Dança",
        instituicao: "Ministério da Cultura",
      },
      {
        ano: "2021",
        titulo: "Destaque Coreografia",
        instituicao: "Festival de Dança de Joinville",
      },
    ],
    imagemPerfil: "/images/3.jpg",
    imagemCapa: "/images/5.jpg",
      galeria: [
    {
      src: "/images/curriculo/professores/ditto-leite/1.jpg",
      alt: "Ditto Leite 1",
    },
    {
      src: "/images/curriculo/professores/ditto-leite/2.jpg",
      alt: "Ditto Leite 2",
    },
    {
      src: "/images/curriculo/professores/ditto-leite/3.jpg",
      alt: "Ditto Leite 3",
    },
  ],
  },

  "jean-gimenes": {
    nome: "Jean Gimenes",
    slug: "jean-gimenes",
    area: "Teatro",
    formacao: [
      "Licenciatura em Teatro pela UFMG",
      "Mestrado em Artes Cênicas",
      "Formação em Teatro do Oprimido com Augusto Boal",
    ],
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    experiencia: [
      {
        ano: "2020 - Atual",
        titulo: "Professor de Teatro",
        instituicao: "Escola CBARTES",
        descricao: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      },
      {
        ano: "2017 - 2020",
        titulo: "Diretor Teatral",
        instituicao: "Teatro Municipal de Diamantina",
        descricao: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
      },
      {
        ano: "2014 - 2017",
        titulo: "Ator profissional",
        instituicao: "Grupo de Teatro Os Satyros",
        descricao: "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.",
      },
    ],
    especializacoes: [
      "Teatro do Oprimido",
      "Direção Teatral",
      "Preparação de Atores",
      "Dramaturgia",
      "Jogos Teatrais",
    ],
    premios: [
      {
        ano: "2022",
        titulo: "Melhor Direção",
        instituicao: "Festival de Teatro de Diamantina",
      },
    ],
    imagemPerfil: "/images/7.jpg",
    imagemCapa: "/images/9.jpg",
  },
};