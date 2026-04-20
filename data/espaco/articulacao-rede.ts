// data/articulacaoRedes.ts

export interface EventoRede {
  titulo: string;
  slug: string;
  ano: number;
  data: string;
  local: string;
  tipo:
    | "Oficina"
    | "Roda de Conversa"
    | "Exposição"
    | "Espetáculo"
    | "Debate"
    | "Encontro"
    | "Reunião"
    | "Entrevista"
    | "Show"
    | "Consultoria"
    | "Documentário"
    | "Projeto"
    | "Apoio";
  descricao: string;
  gratuito?: boolean;
  publico?: string;
  participantes?: string;
  parceiros?: string[];
  programacao?: string[];
  selos?: ("Redes" | "Arte é Política")[];
  imagensCount: number;
  imagens?: string[];
}

export const articulacaoRedes: Record<string, EventoRede> = {
  // ─── 2022 ──────────────────────────────────────────────────────────────────

  "roda-conversa-educacao-fisica-2022": {
    titulo: "Roda de Conversa — Educação Física UFVJM",
    slug: "roda-conversa-educacao-fisica-2022",
    ano: 2022,
    data: "23 de junho de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Roda de Conversa",
    gratuito: true,
    descricao:
      "O CBARTES recebeu alunos do curso de Educação Física da UFVJM para roda de conversa sobre dança e formação profissional, mediada pelo multi-artista Ditto Leite.",
    participantes: "Ditto Leite (multi-artista), alunos do curso de Educação Física da UFVJM",
    selos: ["Redes"],
    imagensCount: 0,
  },

  "aula-teatro-belita-2022": {
    titulo: "Aula de Teatro — Escola Municipal Belita Tameirão",
    slug: "aula-teatro-belita-2022",
    ano: 2022,
    data: "9 de outubro de 2022",
    local: "Escola Municipal Belita Tameirão, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    descricao:
      "Aula de teatro ministrada pelo professor Jean Gimenes para alunos da Escola Municipal Belita Tameirão.",
    participantes: "Jean Gimenes (professor), alunos da Escola Municipal Belita Tameirão",
    selos: ["Redes"],
    imagensCount: 3,
    imagens: [
      "/images/redes/aula-teatro-belita-2022/1.webp",
      "/images/redes/aula-teatro-belita-2022/2.webp",
      "/images/redes/aula-teatro-belita-2022/3.webp",
    ],
  },

  "aula-danca-ifnmg-2022": {
    titulo: "Aula de Dança Contemporânea — IFNMG",
    slug: "aula-danca-ifnmg-2022",
    ano: 2022,
    data: "14 de setembro de 2022",
    local: "IFNMG, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    descricao:
      "Aula de Dança Contemporânea ministrada pelo professor Ditto Leite para os alunos do curso técnico de teatro do IFNMG.",
    participantes: "Ditto Leite (professor), alunos do curso técnico de teatro do IFNMG",
    selos: ["Redes"],
    imagensCount: 4,
    imagens: [
      "/images/redes/aula-danca-ifnmg-2022/1.webp",
      "/images/redes/aula-danca-ifnmg-2022/2.webp",
      "/images/redes/aula-danca-ifnmg-2022/3.webp",
      "/images/redes/aula-danca-ifnmg-2022/4.webp",
    ],
  },

  // ─── 2023 ──────────────────────────────────────────────────────────────────

  "oficina-semana-museus-2023": {
    titulo: "Oficina — 21.ª Semana Nacional de Museus",
    slug: "oficina-semana-museus-2023",
    ano: 2023,
    data: "19 de maio de 2023",
    local: "Museu do Diamante, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    publico: "Crianças e adolescentes",
    descricao:
      "Oficina de dança e jogos teatrais integrada à '21.ª Semana Nacional de Museus — Sustentabilidade e Bem-Estar', ministrada por Ditto Leite e Jean Gimenes. Realização do Circuito Cultural Banco do Nordeste em parceria com o Museu do Diamante.",
    participantes: "Ditto Leite e Jean Gimenes",
    parceiros: ["Circuito Cultural Banco do Nordeste", "Museu do Diamante"],
    selos: ["Redes"],
    imagensCount: 6,
    imagens: [
      "/images/redes/oficina-semana-museus-2023/1.webp",
      "/images/redes/oficina-semana-museus-2023/2.webp",
      "/images/redes/oficina-semana-museus-2023/3.webp",
      "/images/redes/oficina-semana-museus-2023/4.webp",
      "/images/redes/oficina-semana-museus-2023/5.webp",
      "/images/redes/oficina-semana-museus-2023/6.webp",
    ],
  },

  "espetaculo-casa-misterios-2023": {
    titulo: "Espetáculo 'A Casa dos Mistérios' — Teatro Santa Izabel",
    slug: "espetaculo-casa-misterios-2023",
    ano: 2023,
    data: "14 de agosto de 2023",
    local: "Teatro Santa Izabel, Diamantina",
    tipo: "Espetáculo",
    gratuito: true,
    descricao:
      "Reapresentação do espetáculo teatral 'A Casa dos Mistérios' para alunos da VEM, EPIL e moradores do distrito do Inhaí, em articulação com a Prefeitura Municipal de Diamantina. Texto e direção: Jean Gimenes. Elenco: alunos da turma infantil de teatro do CBARTES.",
    participantes:
      "Jean Gimenes (texto e direção), alunos da turma infantil de teatro do CBARTES",
    parceiros: ["Prefeitura Municipal de Diamantina"],
    selos: ["Redes"],
    imagensCount: 1,
    imagens: [
      "/images/redes/espetaculo-casa-misterios-2023/1.webp",

    ],
  },

  "exposicao-filhos-rio-teatro-municipal-2023": {
    titulo: "Exposição 'Filhos do Rio' — Teatro Municipal",
    slug: "exposicao-filhos-rio-teatro-municipal-2023",
    ano: 2023,
    data: "5 a 22 de setembro de 2023",
    local: "Sala Marta Moura, Teatro Municipal de Diamantina",
    tipo: "Exposição",
    gratuito: true,
    descricao:
      "Exposição 'Filhos do Rio' do artista plástico Ditto Leite, exibida na Sala Marta Moura do Teatro Municipal de Diamantina.",
    participantes: "Ditto Leite (artista plástico)",
    selos: ["Redes"],
    imagensCount: 9,
    imagens: [
      "/images/redes/exposicao-filhos-rio-teatro-municipal-2023/1.webp",
      "/images/redes/exposicao-filhos-rio-teatro-municipal-2023/2.webp",
      "/images/redes/exposicao-filhos-rio-teatro-municipal-2023/3.webp",
      "/images/redes/exposicao-filhos-rio-teatro-municipal-2023/4.webp",
      "/images/redes/exposicao-filhos-rio-teatro-municipal-2023/5.webp",
      "/images/redes/exposicao-filhos-rio-teatro-municipal-2023/6.webp",
      "/images/redes/exposicao-filhos-rio-teatro-municipal-2023/7.webp",
      "/images/redes/exposicao-filhos-rio-teatro-municipal-2023/8.webp",
      "/images/redes/exposicao-filhos-rio-teatro-municipal-2023/9.webp",
    ],
  },

  "roda-ciencias-humanas-ufvjm-2023": {
    titulo: "CBARTES recebe alunos de Ciências Humanas — UFVJM",
    slug: "roda-ciencias-humanas-ufvjm-2023",
    ano: 2023,
    data: "21 de outubro de 2023",
    local: "CBARTES, Diamantina",
    tipo: "Roda de Conversa",
    descricao:
      "O CBARTES recebeu alunos do curso de Ciências Humanas da UFVJM, no âmbito da disciplina 'Tópicos em Políticas Públicas Culturais', promovida pelos professores Davidson e Atanásio.",
    participantes:
      "Professores Davidson e Atanásio (UFVJM), alunos do curso de Ciências Humanas da UFVJM",
    selos: ["Redes"],
    imagensCount: 3,
    imagens: [
      "/images/redes/roda-ciencias-humanas-ufvjm-2023/1.webp",
      "/images/redes/roda-ciencias-humanas-ufvjm-2023/2.webp",
      "/images/redes/roda-ciencias-humanas-ufvjm-2023/3.webp",
    ],
  },

  // ─── 2024 ──────────────────────────────────────────────────────────────────

  "game-cenico-banco-nordeste-2024": {
    titulo: "Game Cênico — Circuito Cultural Banco do Nordeste",
    slug: "game-cenico-banco-nordeste-2024",
    ano: 2024,
    data: "3 e 4 de março de 2024",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    publico: "Crianças e adolescentes",
    descricao:
      "Game cênico realizado em parceria com o Circuito Cultural Banco do Nordeste, voltado para crianças e adolescentes.",
    parceiros: ["Circuito Cultural Banco do Nordeste"],
    selos: ["Redes"],
    imagensCount: 3,
    imagens: [
      "/images/redes/game-cenico-banco-nordeste-2024/1.webp",
      "/images/redes/game-cenico-banco-nordeste-2024/2.webp",
      "/images/redes/game-cenico-banco-nordeste-2024/3.webp",
    ],
  },

  "roda-filhos-rio-ufvjm-2024": {
    titulo: "Roda de Conversa 'Filhos do Rio' — UFVJM",
    slug: "roda-filhos-rio-ufvjm-2024",
    ano: 2024,
    data: "5 de abril de 2024",
    local: "UFVJM, Diamantina",
    tipo: "Roda de Conversa",
    descricao:
      "Roda de conversa promovida pela PROEXC/UFVJM com o artista visual Ditto Leite sobre a exposição 'Filhos do Rio'.",
    participantes: "Ditto Leite (artista visual)",
    parceiros: ["PROEXC/UFVJM"],
    selos: ["Redes"],
    imagensCount: 13,
    imagens: [
      "/images/redes/roda-filhos-rio-ufvjm-2024/1.webp",
      "/images/redes/roda-filhos-rio-ufvjm-2024/2.webp",
      "/images/redes/roda-filhos-rio-ufvjm-2024/3.webp",
      "/images/redes/roda-filhos-rio-ufvjm-2024/4.webp",
      "/images/redes/roda-filhos-rio-ufvjm-2024/5.webp",
      "/images/redes/roda-filhos-rio-ufvjm-2024/6.webp",
      "/images/redes/roda-filhos-rio-ufvjm-2024/7.webp",
      "/images/redes/roda-filhos-rio-ufvjm-2024/8.webp",
      "/images/redes/roda-filhos-rio-ufvjm-2024/9.webp",
      "/images/redes/roda-filhos-rio-ufvjm-2024/10.webp",
      "/images/redes/roda-filhos-rio-ufvjm-2024/11.webp",
      "/images/redes/roda-filhos-rio-ufvjm-2024/12.webp",
      "/images/redes/roda-filhos-rio-ufvjm-2024/13.webp",
    ],
  },

  "exposicao-filhos-rio-ufvjm-2024": {
    titulo: "Exposição 'Filhos do Rio' — Praça de Serviços UFVJM",
    slug: "exposicao-filhos-rio-ufvjm-2024",
    ano: 2024,
    data: "5 de abril de 2024",
    local: "Praça de Serviços Campos JK, UFVJM, Diamantina",
    tipo: "Exposição",
    descricao:
      "Exibição da exposição 'Filhos do Rio' na Praça de Serviços Campos JK da UFVJM, em parceria com a PROEXC.",
    participantes: "Ditto Leite (artista visual)",
    parceiros: ["PROEXC/UFVJM"],
    selos: ["Redes"],
    imagensCount: 8,
    imagens: [
      "/images/redes/exposicao-filhos-rio-ufvjm-2024/1.webp",
      "/images/redes/exposicao-filhos-rio-ufvjm-2024/2.webp",
      "/images/redes/exposicao-filhos-rio-ufvjm-2024/3.webp",
      "/images/redes/exposicao-filhos-rio-ufvjm-2024/4.webp",
      "/images/redes/exposicao-filhos-rio-ufvjm-2024/5.webp",
      "/images/redes/exposicao-filhos-rio-ufvjm-2024/6.webp",
      "/images/redes/exposicao-filhos-rio-ufvjm-2024/7.webp",
      "/images/redes/exposicao-filhos-rio-ufvjm-2024/8.webp",
    ],
  },

  "roda-trajetoria-artistica-lapp-2024": {
    titulo: "Roda de Conversa — Trajetória Artística como Construção de Identidade",
    slug: "roda-trajetoria-artistica-lapp-2024",
    ano: 2024,
    data: "26 de abril de 2024",
    local: "Espaço Ágora, UFVJM, Diamantina",
    tipo: "Roda de Conversa",
    descricao:
      "Roda de conversa sobre 'Trajetória Artística como Construção de Identidade', promovida pelo Laboratório de Práticas de Ensino Pedagógico, Artes e Corporeidade (LAPP) no Espaço Ágora da UFVJM.",
    parceiros: ["LAPP/UFVJM"],
    selos: ["Redes"],
    imagensCount: 4,
    imagens: [
      "/images/redes/roda-trajetoria-artistica-lapp-2024/1.webp",
      "/images/redes/roda-trajetoria-artistica-lapp-2024/2.webp",
      "/images/redes/roda-trajetoria-artistica-lapp-2024/3.webp",
      "/images/redes/roda-trajetoria-artistica-lapp-2024/4.webp",
    ],
  },

  "encontro-cultura-popular-coletivos-2024": {
    titulo: "1.º Encontro de Cultura Popular e Coletivos Artísticos",
    slug: "encontro-cultura-popular-coletivos-2024",
    ano: 2024,
    data: "28 de junho de 2024",
    local: "CBARTES, Diamantina",
    tipo: "Encontro",
    descricao:
      "Primeiro Encontro de Cultura Popular e Coletivos Artísticos, realizado via Edital de Seleção Pública n.º 007/2024.",
    selos: ["Redes"],
    imagensCount: 2,
    imagens: [
      "/images/redes/encontro-cultura-popular-coletivos-2024/1.webp",
      "/images/redes/encontro-cultura-popular-coletivos-2024/2.webp",

    ],
  },

  "debate-mes-orgulho-pangeia-2024": {
    titulo: "Debate — Mês do Orgulho LGBTQIA+",
    slug: "debate-mes-orgulho-pangeia-2024",
    ano: 2024,
    data: "29 de junho de 2024",
    local: "UFVJM, Diamantina",
    tipo: "Debate",
    descricao:
      "Debate promovido pela PANGEIA/UFVJM em parceria com a PROEXC pelo Mês do Orgulho Gay.",
    parceiros: ["PANGEIA/UFVJM", "PROEXC/UFVJM"],
    selos: ["Redes"],
    imagensCount: 2,
    imagens: [
      "/images/redes/debate-mes-orgulho-pangeia-2024/1.webp",
      "/images/redes/debate-mes-orgulho-pangeia-2024/2.webp",
 
    ],
  },

  "espetaculo-roxas-festival-inverno-2024": {
    titulo: "Espetáculo 'Roxas' — Festival de Inverno de Diamantina",
    slug: "espetaculo-roxas-festival-inverno-2024",
    ano: 2024,
    data: "12 de julho de 2024",
    local: "Teatro Santa Izabel, Diamantina",
    tipo: "Espetáculo",
    descricao:
      "Espetáculo teatral 'Roxas', apresentado no Festival de Inverno de Diamantina. Adaptação do texto 'A Mancha Roxa' de Plínio Marcos. Adaptação e direção: Jean Gimenes. Elenco: alunos da turma adulta de teatro do CBARTES.",
    participantes:
      "Jean Gimenes (adaptação e direção), alunos da turma adulta de teatro do CBARTES",
    selos: ["Redes"],
    imagensCount: 0,
    imagens: [

    ],
  },

  "exposicao-filhos-rio-janauba-2024": {
    titulo: "Exposição 'Filhos do Rio' — UFVJM Campus Janaúba",
    slug: "exposicao-filhos-rio-janauba-2024",
    ano: 2024,
    data: "3 de setembro de 2024",
    local: "UFVJM Campus Janaúba",
    tipo: "Exposição",
    descricao:
      "Itinerância da exposição 'Filhos do Rio' no Campus Janaúba da UFVJM, pela PROEXC.",
    participantes: "Ditto Leite (artista visual)",
    parceiros: ["PROEXC/UFVJM"],
    selos: ["Redes"],
    imagensCount: 3,
    imagens: [
      "/images/redes/exposicao-filhos-rio-janauba-2024/1.webp",
      "/images/redes/exposicao-filhos-rio-janauba-2024/2.webp",
      "/images/redes/exposicao-filhos-rio-janauba-2024/3.webp",
    ],
  },

  "ruptura-silencio-ufvjm-2024": {
    titulo: "'Ruptura do Silêncio' — Dinâmica Teatral",
    slug: "ruptura-silencio-ufvjm-2024",
    ano: 2024,
    data: "12 de dezembro de 2024",
    local: "Espaço Ágora, UFVJM, Diamantina",
    tipo: "Oficina",
    descricao:
      "Dinâmica teatral 'Ruptura do Silêncio', baseada no Teatro do Oprimido do dramaturgo Augusto Boal, realizada no Espaço Ágora da UFVJM.",
    selos: ["Redes"],
    imagensCount: 5,
    imagens: [
      "/images/redes/ruptura-silencio-ufvjm-2024/1.webp",
      "/images/redes/ruptura-silencio-ufvjm-2024/2.webp",
      "/images/redes/ruptura-silencio-ufvjm-2024/3.webp",
      "/images/redes/ruptura-silencio-ufvjm-2024/3.webp",
      "/images/redes/ruptura-silencio-ufvjm-2024/3.webp",
    ],
  },

  "consultoria-thiago-alixandre-2024": {
    titulo: "Consultoria com Thiago Alixandre — Ponto de Cultura Parque da Autonomia",
    slug: "consultoria-thiago-alixandre-2024",
    ano: 2024,
    data: "24 de setembro de 2024",
    local: "CBARTES, Diamantina",
    tipo: "Consultoria",
    descricao:
      "Consultoria com Thiago Alixandre, do Ponto de Cultura Parque da Autonomia (Votorantim/SP).",
    participantes: "Thiago Alixandre (Ponto de Cultura Parque da Autonomia – Votorantim/SP)",
    selos: ["Redes"],
    imagensCount: 2,
    imagens: [
      "/images/redes/consultoria-thiago-alixandre-2024/1.webp",
      "/images/redes/consultoria-thiago-alixandre-2024/2.webp",
   
    ],
  },

  // ─── 2025 ──────────────────────────────────────────────────────────────────

  "reapresentacao-subvercirco-2025": {
    titulo: "Reapresentação 'Subvercirco' — Teatro Santa Izabel",
    slug: "reapresentacao-subvercirco-2025",
    ano: 2025,
    data: "15 de fevereiro de 2025",
    local: "Teatro Santa Izabel, Diamantina",
    tipo: "Espetáculo",
    gratuito: true,
    publico: "Crianças dos bairros atendidos pelo Projeto Um Quintal (CAZUZA)",
    descricao:
      "Reapresentação do espetáculo 'Subvercirco' em parceria com o Banco do Nordeste, com apresentação gratuita para crianças dos bairros atendidos pelo Projeto Um Quintal (CAZUZA).",
    parceiros: ["Banco do Nordeste"],
    selos: ["Redes"],
    imagensCount: 2,
    imagens: [
      "/images/redes/reapresentacao-subvercirco-2025/1.webp",
      "/images/redes/reapresentacao-subvercirco-2025/2.webp",

    ],
  },

  "entrevista-pesquisa-ufvjm-2025": {
    titulo: "Entrevista — Pesquisa de Valorização do Setor Cultural",
    slug: "entrevista-pesquisa-ufvjm-2025",
    ano: 2025,
    data: "19 de março de 2025",
    local: "Diamantina",
    tipo: "Entrevista",
    descricao:
      "Entrevista concedida pelo diretor artístico do CBARTES, Ditto Leite, à professora Izabel Oliveira da UFVJM, pesquisadora do programa de pós-graduação em Economia, para a pesquisa 'Estudo de Valorização do Setor Cultural de Diamantina'.",
    participantes:
      "Ditto Leite (diretor artístico do CBARTES), Izabel Oliveira (professora e pesquisadora UFVJM)",
    selos: ["Redes"],
    imagensCount: 2,
    imagens: [
      "/images/redes/entrevista-pesquisa-ufvjm-2025/1.webp",
      "/images/redes/entrevista-pesquisa-ufvjm-2025/2.webp",
   
    ],
  },

  "oficina-oratoria-cachoeira-fanado-2025": {
    titulo: "Oficina de Oratória — Cachoeira do Fanado",
    slug: "oficina-oratoria-cachoeira-fanado-2025",
    ano: 2025,
    data: "28 de março de 2025",
    local: "Comunidade Rural Cachoeira do Fanado, Minas Novas/MG",
    tipo: "Oficina",
    descricao:
      "Oficina de oratória ministrada pelo professor Jean Gimenes na comunidade rural Cachoeira do Fanado, município de Minas Novas/MG, em parceria com a Associação de Ceramistas, com mediação de Viviane Fortes.",
    participantes: "Jean Gimenes (professor), Viviane Fortes (mediação)",
    parceiros: ["Associação de Ceramistas de Cachoeira do Fanado"],
    selos: ["Redes"],
    imagensCount: 4,
    imagens: [
      "/images/redes/oficina-oratoria-cachoeira-fanado-2025/1.webp",
      "/images/redes/oficina-oratoria-cachoeira-fanado-2025/2.webp",
      "/images/redes/oficina-oratoria-cachoeira-fanado-2025/3.webp",
      "/images/redes/oficina-oratoria-cachoeira-fanado-2025/4.webp",
    ],
  },

  "parceria-festivale-2025": {
    titulo: "Parceria com o 40.º FESTIVALE",
    slug: "parceria-festivale-2025",
    ano: 2025,
    data: "4 de abril de 2025",
    local: "CBARTES, Diamantina",
    tipo: "Reunião",
    descricao:
      "O CBARTES recebeu o diretor do 40.º FESTIVALE, Renato Paranhos, para estabelecer parceria e oferecer suporte ao evento.",
    participantes: "Renato Paranhos (diretor do 40.º FESTIVALE)",
    selos: ["Redes"],
    imagensCount: 1,
    imagens: [
      "/images/redes/parceria-festivale-2025/1.webp",

    ],
  },

  "oficina-teatro-quilombo-massangano-2025": {
    titulo: "Oficina de Teatro — Quilombo Fazenda Santa Cruz",
    slug: "oficina-teatro-quilombo-massangano-2025",
    ano: 2025,
    data: "5 de abril de 2025",
    local: "Quilombo Fazenda Santa Cruz, Diamantina",
    tipo: "Oficina",
    publico: "Adolescentes",
    descricao:
      "Oficina de teatro ministrada pelo professor Jean Gimenes através do Projeto Massangano: Arte, Educação e Agroecologia, no Quilombo Fazenda Santa Cruz, com recurso contemplado pelo Edital 001/2023 PROAP Central.",
    participantes: "Jean Gimenes (professor)",
    parceiros: ["Projeto Massangano"],
    selos: ["Redes"],
    imagensCount: 15,
    imagens: [
      "/images/redes/oficina-teatro-quilombo-massangano-2025/1.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/2.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/3.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/4.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/5.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/6.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/7.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/8.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/9.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/10.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/11.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/12.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/13.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/14.webp",
      "/images/redes/oficina-teatro-quilombo-massangano-2025/15.webp",
    ],
  },

  "reuniao-pnab-prefeitura-2025": {
    titulo: "Reunião com Prefeitura — Reivindicação da PNAB Municipal",
    slug: "reuniao-pnab-prefeitura-2025",
    ano: 2025,
    data: "8 de abril de 2025",
    local: "Prefeitura Municipal de Diamantina",
    tipo: "Reunião",
    descricao:
      "O CBARTES e sua equipe articulou reunião com o prefeito Jeferson Burgarelli e o secretário de Cultura Alberes Mafra para reivindicar a execução da Política Nacional Aldir Blanc (PNAB) municipal.",
    participantes:
      "Equipe CBARTES, Jeferson Burgarelli (prefeito), Alberes Mafra (secretário de Cultura)",
    selos: ["Redes", "Arte é Política"],
    imagensCount: 4,
    imagens: [
      "/images/redes/reuniao-pnab-prefeitura-2025/1.webp",
      "/images/redes/reuniao-pnab-prefeitura-2025/2.webp",
      "/images/redes/reuniao-pnab-prefeitura-2025/3.webp",
      "/images/redes/reuniao-pnab-prefeitura-2025/4.webp",
    ],
  },

  "espetaculo-trupe-homem-so-2025": {
    titulo: "Espetáculo 'A Trupe de Um Homem Só' — Circuito Cultural BN",
    slug: "espetaculo-trupe-homem-so-2025",
    ano: 2025,
    data: "26, 27 e 29 de abril de 2025",
    local: "Conselheiro Mata, Batatau, Museu do Diamante / Casa de Chica da Silva e FUMBEM",
    tipo: "Espetáculo",
    gratuito: true,
    publico: "Crianças e adolescentes de escolas públicas e FUMBEM",
    descricao:
      "Espetáculo de palhaçaria 'A Trupe de Um Homem Só', realizado pelo Circuito Cultural Banco do Nordeste em parceria com a Prefeitura de Diamantina, o Museu do Diamante e o CBARTES, nas comunidades de Conselheiro Mata, Batatau, no Museu do Diamante/Casa de Chica da Silva e na FUMBEM.",
    parceiros: [
      "Circuito Cultural Banco do Nordeste",
      "Prefeitura de Diamantina",
      "Museu do Diamante",
    ],
    selos: ["Redes"],
    imagensCount: 2,
    imagens: [
      "/images/redes/espetaculo-trupe-homem-so-2025/1.webp",
      "/images/redes/espetaculo-trupe-homem-so-2025/2.webp",

    ],
  },

  "oficina-circonhecendo-2025": {
    titulo: "Oficina 'Circonhecendo' — Allan Barros",
    slug: "oficina-circonhecendo-2025",
    ano: 2025,
    data: "2 de maio de 2025",
    local: "IFNMG, Diamantina",
    tipo: "Oficina",
    descricao:
      "Oficina 'Circonhecendo' com o artista mambembe Allan Barros (PB), oferecida pelo IFNMG em parceria com o CBARTES.",
    participantes: "Allan Barros (artista mambembe – Paraíba)",
    parceiros: ["IFNMG"],
    selos: ["Redes"],
    imagensCount: 8,
    imagens: [
      "/images/redes/oficina-circonhecendo-2025/1.webp",
      "/images/redes/oficina-circonhecendo-2025/2.webp",
      "/images/redes/oficina-circonhecendo-2025/3.webp",
      "/images/redes/oficina-circonhecendo-2025/4.webp",
      "/images/redes/oficina-circonhecendo-2025/5.webp",
      "/images/redes/oficina-circonhecendo-2025/6.webp",
      "/images/redes/oficina-circonhecendo-2025/7.webp",
      "/images/redes/oficina-circonhecendo-2025/8.webp",
    ],
  },

  "oficina-movimentos-memorias-2025": {
    titulo: "Oficina 'Movimentos de Memórias' — Edney D'Conti",
    slug: "oficina-movimentos-memorias-2025",
    ano: 2025,
    data: "9 de maio de 2025",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    descricao:
      "Oficina 'Movimentos de Memórias' ministrada pelo bailarino Edney D'Conti (RJ), oferecida pelo Circuito Cultural Banco do Nordeste em parceria com o CBARTES.",
    participantes: "Edney D'Conti (bailarino – Rio de Janeiro)",
    parceiros: ["Circuito Cultural Banco do Nordeste"],
    selos: ["Redes"],
    imagensCount: 7,
    imagens: [
      "/images/redes/oficina-movimentos-memorias-2025/1.webp",
      "/images/redes/oficina-movimentos-memorias-2025/2.webp",
      "/images/redes/oficina-movimentos-memorias-2025/3.webp",
      "/images/redes/oficina-movimentos-memorias-2025/4.webp",
      "/images/redes/oficina-movimentos-memorias-2025/5.webp",
      "/images/redes/oficina-movimentos-memorias-2025/6.webp",
      "/images/redes/oficina-movimentos-memorias-2025/7.webp",
    ],
  },

  "espetaculo-o-invisivel-2025": {
    titulo: "Espetáculo 'O Invisível' — Edney D'Conti",
    slug: "espetaculo-o-invisivel-2025",
    ano: 2025,
    data: "9 de maio de 2025",
    local: "Teatro Santa Izabel, Diamantina",
    tipo: "Espetáculo",
    descricao:
      "Espetáculo de Dança Contemporânea 'O Invisível', apresentado pelo bailarino Edney D'Conti (RJ) no Teatro Santa Izabel, pelo Circuito Cultural Banco do Nordeste em parceria com o CBARTES.",
    participantes: "Edney D'Conti (bailarino – Rio de Janeiro)",
    parceiros: ["Circuito Cultural Banco do Nordeste"],
    selos: ["Redes"],
    imagensCount: 8,
    imagens: [
      "/images/redes/espetaculo-o-invisivel-2025/1.webp",
      "/images/redes/espetaculo-o-invisivel-2025/2.webp",
      "/images/redes/espetaculo-o-invisivel-2025/3.webp",
      "/images/redes/espetaculo-o-invisivel-2025/4.webp",
      "/images/redes/espetaculo-o-invisivel-2025/5.webp",
      "/images/redes/espetaculo-o-invisivel-2025/6.webp",
      "/images/redes/espetaculo-o-invisivel-2025/7.webp",
      "/images/redes/espetaculo-o-invisivel-2025/8.webp",

    ],
  },

  "apoio-capitao-engarrafado-2025": {
    titulo: "Apoio — Pré-produção de 'O Capitão Engarrafado'",
    slug: "apoio-capitao-engarrafado-2025",
    ano: 2025,
    data: "14 de maio a junho de 2025",
    local: "CBARTES, Diamantina",
    tipo: "Apoio",
    descricao:
      "O CBARTES cedeu seu espaço para a pré-produção das gravações do longa-metragem 'O Capitão Engarrafado', da produtora Postura Digital.",
    parceiros: ["Postura Digital"],
    selos: ["Redes"],
    imagensCount: 1,
    imagens: [
      "/images/redes/apoio-capitao-engarrafado-2025/1.webp",

    ],
  },

  "pre-forum-danca-1-2025": {
    titulo: "1.º Encontro do Pré-Fórum — 2.º Fórum Mineiro de Dança",
    slug: "pre-forum-danca-1-2025",
    ano: 2025,
    data: "24 de maio de 2025",
    local: "CBARTES, Diamantina",
    tipo: "Encontro",
    descricao:
      "Primeiro encontro do Pré-Fórum do 2.º Fórum Mineiro de Dança, mediado por Ângela Viegas, articuladora pela região intermediária de Teófilo Otoni.",
    participantes: "Ângela Viegas (articuladora – região intermediária de Teófilo Otoni)",
    selos: ["Redes", "Arte é Política"],
    imagensCount: 0,
    imagens: [

    ],
  },

  "reuniao-camara-ldo-2025": {
    titulo: "Reunião Ordinária da Câmara dos Vereadores — Elaboração da LDO",
    slug: "reuniao-camara-ldo-2025",
    ano: 2025,
    data: "23 de junho de 2025",
    local: "Câmara dos Vereadores de Diamantina",
    tipo: "Reunião",
    descricao:
      "Ângela Viegas, presidente da Associação Cultural Amigos do CBARTES, reuniu-se com representantes da sociedade civil na Câmara dos Vereadores de Diamantina para a elaboração da LDO.",
    participantes:
      "Ângela Viegas (presidente da Associação Cultural Amigos do CBARTES), representantes da sociedade civil",
    selos: ["Redes", "Arte é Política"],
    imagensCount: 3,
    imagens: [
      "/images/redes/reuniao-camara-ldo-2025/1.webp",
      "/images/redes/reuniao-camara-ldo-2025/2.webp",
      "/images/redes/reuniao-camara-ldo-2025/3.webp",
    ],
  },

  "pre-forum-danca-2-2025": {
    titulo: "2.º Encontro do Pré-Fórum Mineiro de Dança",
    slug: "pre-forum-danca-2-2025",
    ano: 2025,
    data: "28 de junho de 2025",
    local: "Diamantina",
    tipo: "Encontro",
    descricao:
      "Segundo encontro do Pré-Fórum Mineiro de Dança.",
    selos: ["Redes", "Arte é Política"],
    imagensCount: 1,
    imagens: [
      "/images/redes/pre-forum-danca-2-2025/1.webp",
  
    ],
  },

  "festivale-40-2025": {
    titulo: "Participação Colaborativa no 40.º FESTIVALE",
    slug: "festivale-40-2025",
    ano: 2025,
    data: "5 de agosto de 2025",
    local: "Diamantina",
    tipo: "Encontro",
    descricao:
      "Participação colaborativa do CBARTES no 40.º FESTIVALE.",
    selos: ["Redes"],
    imagensCount: 0,
    imagens: [

    ],
  },

  "espetaculo-trem-bao-sopa-2025": {
    titulo: "Espetáculo 'Trem Bão é Coisa Boa' — Distrito de Sopa",
    slug: "espetaculo-trem-bao-sopa-2025",
    ano: 2025,
    data: "14 de agosto de 2025",
    local: "Distrito de Sopa, Diamantina",
    tipo: "Espetáculo",
    gratuito: true,
    publico: "Crianças e adolescentes de escolas públicas",
    descricao:
      "Espetáculo teatral 'Trem Bão é Coisa Boa' com a Cia. Pé Vermêi, realização do Circuito Cultural Banco do Nordeste em parceria com o CBARTES, no Distrito de Sopa.",
    participantes: "Cia. Pé Vermêi",
    parceiros: ["Circuito Cultural Banco do Nordeste"],
    selos: ["Redes"],
    imagensCount: 16,
    imagens: [
      "/images/redes/espetaculo-trem-bao-sopa-2025/1.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/2.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/3.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/4.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/5.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/6.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/7.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/8.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/9.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/10.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/11.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/12.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/13.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/14.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/15.webp",
      "/images/redes/espetaculo-trem-bao-sopa-2025/16.webp",
    ],
  },

  "espetaculo-doroteia-oab-2025": {
    titulo: "Reapresentação 'Doroteia' — Seminário OAB Diamantina",
    slug: "espetaculo-doroteia-oab-2025",
    ano: 2025,
    data: "13 de agosto de 2025",
    local: "Teatro Santa Izabel, Diamantina",
    tipo: "Espetáculo",
    descricao:
      "Reapresentação do espetáculo 'Doroteia' no Teatro Santa Izabel, pelo Seminário 'Vozes, Direitos e Recomeços — Diamantina de Mãos Dadas no Combate à Violência contra a Mulher'. Realização: Comissão de Enfrentamento à Violência contra a Mulher da OAB Diamantina — 12.ª Subseção.",
    parceiros: ["OAB Diamantina — 12.ª Subseção"],
    selos: ["Redes"],
    imagensCount: 0,
    imagens: [

    ],
  },

  "espetaculo-trem-bao-museu-diamante-2025": {
    titulo: "Espetáculo 'Trem Bão é Coisa Boa' — Museu do Diamante",
    slug: "espetaculo-trem-bao-museu-diamante-2025",
    ano: 2025,
    data: "16 de agosto de 2025",
    local: "Museu do Diamante / Casa de Chica da Silva, Diamantina",
    tipo: "Espetáculo",
    gratuito: true,
    publico: "Crianças e adolescentes de escolas públicas",
    descricao:
      "Espetáculo teatral 'Trem Bão é Coisa Boa' com a Cia. Pé Vermêi, realização do Circuito Cultural Banco do Nordeste em parceria com o CBARTES, no Museu do Diamante/Casa de Chica da Silva.",
    participantes: "Cia. Pé Vermêi",
    parceiros: ["Circuito Cultural Banco do Nordeste"],
    selos: ["Redes"],
    imagensCount: 0,
    imagens: [

    ],
  },

  "oficina-identidade-visual-afroplay-2025": {
    titulo: "Oficina 'Identidade Visual para Vestir' — AFROPLAY",
    slug: "oficina-identidade-visual-afroplay-2025",
    ano: 2025,
    data: "15 de agosto de 2025",
    local: "Comunidade de São João da Chapada, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    publico: "Crianças e adolescentes de escolas públicas",
    descricao:
      "Oficina 'Identidade Visual para Vestir' realizada pelo Circuito Cultural Banco do Nordeste em parceria com o CBARTES, na Comunidade de São João da Chapada — AFROPLAY.",
    parceiros: ["Circuito Cultural Banco do Nordeste"],
    selos: ["Redes"],
    imagensCount: 5,
    imagens: [
      "/images/redes/oficina-identidade-visual-afroplay-2025/1.webp",
      "/images/redes/oficina-identidade-visual-afroplay-2025/2.webp",
      "/images/redes/oficina-identidade-visual-afroplay-2025/3.webp",
      "/images/redes/oficina-identidade-visual-afroplay-2025/3.webp",
      "/images/redes/oficina-identidade-visual-afroplay-2025/3.webp",
    ],
  },

  "espetaculo-doroteia-festival-inverno-2025": {
    titulo: "Reapresentação 'Doroteia' — Festival de Inverno de Diamantina",
    slug: "espetaculo-doroteia-festival-inverno-2025",
    ano: 2025,
    data: "23 e 24 de agosto de 2025",
    local: "Teatro Santa Izabel, Diamantina",
    tipo: "Espetáculo",
    descricao:
      "Reapresentação do espetáculo teatral 'Doroteia' no Festival de Inverno de Diamantina, no Teatro Santa Izabel.",
    selos: ["Redes"],
    imagensCount: 15,
    imagens: [
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/1.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/2.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/3.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/4.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/5.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/6.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/7.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/8.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/9.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/10.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/11.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/12.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/13.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/14.webp",
      "/images/redes/espetaculo-doroteia-festival-inverno-2025/15.webp",
    ],
  },

  "forum-mineiro-danca-2025": {
    titulo: "Fórum Mineiro de Dança",
    slug: "forum-mineiro-danca-2025",
    ano: 2025,
    data: "2025",
    local: "Minas Gerais",
    tipo: "Encontro",
    descricao: "Participação do CBARTES no Fórum Mineiro de Dança.",
    selos: ["Redes", "Arte é Política"],
    imagensCount: 1,
    imagens: [
      "/images/redes/forum-mineiro-danca-2025/1.webp",

    ],
  },

  "oficina-tracando-verbos-2025": {
    titulo: "Oficina 'Traçando Verbos no Espaço'",
    slug: "oficina-tracando-verbos-2025",
    ano: 2025,
    data: "4 de outubro de 2025",
    local: "UFVJM, Diamantina",
    tipo: "Oficina",
    descricao:
      "Oficina 'Traçando Verbos no Espaço' ministrada pelo professor Ditto Leite. Realização: Há Braços Poético — Grupo de Pesquisa e Extensão da PROEX/UFVJM, com apoio do CBARTES.",
    participantes: "Ditto Leite (professor)",
    parceiros: ["Há Braços Poético / PROEX UFVJM"],
    selos: ["Redes"],
    imagensCount: 1,
    imagens: [
      "/images/redes/oficina-tracando-verbos-2025/1.webp",

    ],
  },

  "show-j-veloso-2025": {
    titulo: "Show J. Veloso — Teatro Santa Izabel",
    slug: "show-j-veloso-2025",
    ano: 2025,
    data: "31 de outubro de 2025",
    local: "Teatro Santa Izabel, Diamantina",
    tipo: "Show",
    descricao:
      "Show de J. Veloso (BA), realização da Música Medicina da Alma com apoio do CBARTES.",
    participantes: "J. Veloso (Bahia)",
    parceiros: ["Música Medicina da Alma"],
    selos: ["Redes"],
    imagensCount: 11,
    imagens: [
      "/images/redes/show-j-veloso-2025/1.webp",
      "/images/redes/show-j-veloso-2025/2.webp",
      "/images/redes/show-j-veloso-2025/3.webp",
      "/images/redes/show-j-veloso-2025/4.webp",
      "/images/redes/show-j-veloso-2025/5.webp",
      "/images/redes/show-j-veloso-2025/6.webp",
      "/images/redes/show-j-veloso-2025/7.webp",
      "/images/redes/show-j-veloso-2025/8.webp",
      "/images/redes/show-j-veloso-2025/9.webp",
      "/images/redes/show-j-veloso-2025/10.webp",
      "/images/redes/show-j-veloso-2025/11.webp",
    ],
  },

  "documentario-brincantes-2025": {
    titulo: "Documentário — Espetáculo Brincantes / Mostra Telas Amigáveis",
    slug: "documentario-brincantes-2025",
    ano: 2025,
    data: "3 a 6 de dezembro de 2025",
    local: "Cine Ritz, Cordeiro Mall, Diamantina",
    tipo: "Documentário",
    descricao:
      "Documentário sobre o espetáculo infanto-juvenil 'Brincantes' do CBARTES, realizado em parceria com o Instituto Mundo e exibido durante a Mostra de Cinema Telas Amigáveis, no Cine Ritz (Cordeiro Mall).",
    parceiros: ["Instituto Mundo"],
    selos: ["Redes"],
    imagensCount: 0,
    imagens: [
 
    ],
  },

  "projeto-reescrevendo-historias-2025": {
    titulo: "Projeto 'Reescrevendo Histórias com as Mãos'",
    slug: "projeto-reescrevendo-historias-2025",
    ano: 2025,
    data: "11 de dezembro de 2025",
    local: "Diamantina",
    tipo: "Projeto",
    descricao:
      "Projeto 'Reescrevendo Histórias com as Mãos — Cultura, Arte e Educação Ecológica na Transformação de Territórios Verdes', coordenado por Janaína Fernandes Gonçalves de Laia. Contemplado pelo PROCART/UFVJM — Edital 02/2026 da PROEX UFVJM, em parceria com o CBARTES e a Associação Cultural Amigos do CBARTES.",
    participantes: "Janaína Fernandes Gonçalves de Laia (coordenação)",
    parceiros: ["PROEX UFVJM", "Associação Cultural Amigos do CBARTES"],
    selos: ["Redes"],
    imagensCount: 0,
    imagens: [

    ],
  },
};


// ─── Helpers ─────────────────────────────────────────────────────────────────

export const getRedesPorAno = () => {
  const porAno: Record<number, EventoRede[]> = {};

  Object.values(articulacaoRedes).forEach(evento => {
    if (!porAno[evento.ano]) {
      porAno[evento.ano] = [];
    }
    porAno[evento.ano].push(evento);
  });

  return porAno;
};

export const getRedesParaTimeline = () => {
  const porAno = getRedesPorAno();

  return Object.entries(porAno)
    .sort(([anoA], [anoB]) => parseInt(anoA) - parseInt(anoB))
    .map(([ano, eventos]) => ({
      ano: parseInt(ano),
      eventos: eventos.map(e => ({
        titulo: e.titulo,
        slug: e.slug,
        local: e.local,
        data: e.data,
        selos: e.selos,
      })),
    }));
};