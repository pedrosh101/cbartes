// data/oficinas.ts

export interface Oficina {
  titulo: string;
  slug: string;
  ano: number;
  data: string;
  local: string;
  tipo: "Oficina" | "Aula Aberta" | "Palestra" | "Mini-curso";
  descricao: string;
  gratuito?: boolean;
  publico?: string;
  participantes?: string;
  parceiros?: string[];
  programacao?: string[];
  selos?: ("Produção Cultural")[];
  imagensCount: number;
  imagens?: string[];
}

export const oficinas: Record<string, Oficina> = {
  // ─── 2022 ──────────────────────────────────────────────────────────────────

  "game-cenico-thiago-alixandre-2022": {
    titulo: "Oficina Game Cênico — Thiago Alixandre",
    slug: "game-cenico-thiago-alixandre-2022",
    ano: 2022,
    data: "2 de junho de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    descricao:
      "Oficina de Game Cênico mediada pelo bailarino e cantor Thiago Alixandre (Votorantim/SP), durante a semana inaugural do CBARTES.",
    participantes: "Thiago Alixandre (bailarino e cantor — Votorantim/SP)",
    selos: ["Produção Cultural"],
    imagensCount: 4,
    imagens: [
      "/images/oficinas/game-cenico-thiago-alixandre-2022/1.webp",
      "/images/oficinas/game-cenico-thiago-alixandre-2022/2.webp",
      "/images/oficinas/game-cenico-thiago-alixandre-2022/3.webp",
      "/images/oficinas/game-cenico-thiago-alixandre-2022/4.webp",
    ],
  },

  "corpo-disponivel-bianca-2022": {
    titulo: "Oficina 'Corpo Disponível para Mover e Ser Movido'",
    slug: "corpo-disponivel-bianca-2022",
    ano: 2022,
    data: "2 de junho de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    descricao:
      "Oficina 'Corpo Disponível para Mover e Ser Movido', mediada pela bailarina e performer Bianca Andreóli (Rio de Janeiro/RJ), durante a semana inaugural do CBARTES.",
    participantes: "Bianca Andreóli (bailarina e performer — Rio de Janeiro/RJ)",
    selos: ["Produção Cultural"],
    imagensCount: 5,
    imagens: [
      "/images/oficinas/corpo-disponivel-bianca-2022/1.webp",
      "/images/oficinas/corpo-disponivel-bianca-2022/2.webp",
      "/images/oficinas/corpo-disponivel-bianca-2022/3.webp",
      "/images/oficinas/corpo-disponivel-bianca-2022/4.webp",
      "/images/oficinas/corpo-disponivel-bianca-2022/5.webp",
    ],
  },

  "aula-bale-baby-claudio-2022": {
    titulo: "Aula Aberta de Balé Baby — Claudio Henrique",
    slug: "aula-bale-baby-claudio-2022",
    ano: 2022,
    data: "4 de junho de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Aula Aberta",
    gratuito: true,
    descricao:
      "Aula aberta de Balé Baby ministrada pelo professor de dança Claudio Henrique (Sete Lagoas/MG), durante a semana inaugural do CBARTES.",
    participantes: "Claudio Henrique (professor de dança — Sete Lagoas/MG)",
    selos: ["Produção Cultural"],
    imagensCount: 1,
    imagens: [
      "/images/oficinas/aula-bale-baby-claudio-2022/1.webp",
 
    ],
  },

  "palestra-alegria-festa-2022": {
    titulo: "Palestra 'A Alegria e a Festa como Potências Políticas'",
    slug: "palestra-alegria-festa-2022",
    ano: 2022,
    data: "4 de junho de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Palestra",
    gratuito: true,
    descricao:
      "Palestra filosófica 'A Alegria e a Festa como Potências Políticas' com o doutor em Filosofia Thiago Alixandre (Votorantim/SP), durante a semana inaugural do CBARTES.",
    participantes: "Thiago Alixandre (doutor em Filosofia — Votorantim/SP)",
    selos: ["Produção Cultural"],
    imagensCount: 3,
    imagens: [
      "/images/oficinas/palestra-alegria-festa-2022/1.webp",
      "/images/oficinas/palestra-alegria-festa-2022/2.webp",
      "/images/oficinas/palestra-alegria-festa-2022/3.webp",
    ],
  },

  "oficina-oratoria-jean-2022": {
    titulo: "Oficina de Oratória — Jean Gimenes",
    slug: "oficina-oratoria-jean-2022",
    ano: 2022,
    data: "20 e 21 de agosto de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    descricao:
      "Oficina de oratória ministrada pelo ator e professor Jean Gimenes.",
    participantes: "Jean Gimenes (ator e professor)",
    selos: ["Produção Cultural"],
    imagensCount: 2,
    imagens: [
      "/images/oficinas/oficina-oratoria-jean-2022/1.webp",
      "/images/oficinas/oficina-oratoria-jean-2022/2.webp",

    ],
  },

  "teatro-oprimido-jean-2022": {
    titulo: "Oficina de Teatro do Oprimido — Jean Gimenes",
    slug: "teatro-oprimido-jean-2022",
    ano: 2022,
    data: "7 de setembro de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    descricao:
      "Oficina de Teatro do Oprimido ministrada pelo professor Jean Gimenes, baseada na metodologia de Augusto Boal.",
    participantes: "Jean Gimenes (professor)",
    selos: ["Produção Cultural"],
    imagensCount: 3,
    imagens: [
      "/images/oficinas/teatro-oprimido-jean-2022/1.webp",
      "/images/oficinas/teatro-oprimido-jean-2022/2.webp",
      "/images/oficinas/teatro-oprimido-jean-2022/3.webp",
    ],
  },

  "oficina-danca-tribo-corpo-raiz-2022": {
    titulo: "Oficina de Dança — Tribo Corpo Raiz",
    slug: "oficina-danca-tribo-corpo-raiz-2022",
    ano: 2022,
    data: "8 de outubro de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    descricao:
      "Oficina de dança ministrada pelo grupo Tribo Corpo Raiz, de Diamantina.",
    participantes: "Tribo Corpo Raiz (Diamantina)",
    selos: ["Produção Cultural"],
    imagensCount: 5,
    imagens: [
      "/images/oficinas/oficina-danca-tribo-corpo-raiz-2022/1.webp",
      "/images/oficinas/oficina-danca-tribo-corpo-raiz-2022/2.webp",
      "/images/oficinas/oficina-danca-tribo-corpo-raiz-2022/3.webp",
      "/images/oficinas/oficina-danca-tribo-corpo-raiz-2022/4.webp",
      "/images/oficinas/oficina-danca-tribo-corpo-raiz-2022/5.webp",
    ],
  },

  "oficina-vem-mover-renata-stein-2022": {
    titulo: "Oficina de Dança 'Vem Mover' — Renata Stein",
    slug: "oficina-vem-mover-renata-stein-2022",
    ano: 2022,
    data: "29 de outubro de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    descricao:
      "Oficina de dança 'Vem Mover' com a bailarina Renata Stein (Rio Grande do Sul).",
    participantes: "Renata Stein (bailarina — Rio Grande do Sul)",
    selos: ["Produção Cultural"],
    imagensCount: 4,
    imagens: [
      "/images/oficinas/oficina-vem-mover-renata-stein-2022/1.webp",
      "/images/oficinas/oficina-vem-mover-renata-stein-2022/2.webp",
      "/images/oficinas/oficina-vem-mover-renata-stein-2022/3.webp",
      "/images/oficinas/oficina-vem-mover-renata-stein-2022/4.webp",

    ],
  },

  // ─── 2023 ──────────────────────────────────────────────────────────────────

  "para-mover-ditto-bianca-2023": {
    titulo: "Oficina 'Para Mover e Ser Movido' — Ditto Leite e Bianca Andreóli",
    slug: "para-mover-ditto-bianca-2023",
    ano: 2023,
    data: "17 de janeiro de 2023",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    descricao:
      "Oficina 'Para Mover e Ser Movido' ministrada por Ditto Leite e Bianca Andreóli (RJ).",
    participantes: "Ditto Leite, Bianca Andreóli (Rio de Janeiro/RJ)",
    selos: ["Produção Cultural"],
    imagensCount: 6,
    imagens: [
      "/images/oficinas/para-mover-ditto-bianca-2023/1.webp",
      "/images/oficinas/para-mover-ditto-bianca-2023/2.webp",
      "/images/oficinas/para-mover-ditto-bianca-2023/3.webp",
      "/images/oficinas/para-mover-ditto-bianca-2023/4.webp",
      "/images/oficinas/para-mover-ditto-bianca-2023/5.webp",
      "/images/oficinas/para-mover-ditto-bianca-2023/6.webp",

    ],
  },

  "corpo-articulado-christine-2023": {
    titulo: "Oficina 'Um Corpo Articulado é um Corpo Criativo' — Christine Ceconello",
    slug: "corpo-articulado-christine-2023",
    ano: 2023,
    data: "21 de janeiro de 2023",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    descricao:
      "Oficina 'Um Corpo Articulado é um Corpo Criativo' com Christine Ceconello (Alemanha).",
    participantes: "Christine Ceconello (Alemanha)",
    selos: ["Produção Cultural"],
    imagensCount: 4,
    imagens: [
      "/images/oficinas/corpo-articulado-christine-2023/1.webp",
      "/images/oficinas/corpo-articulado-christine-2023/2.webp",
      "/images/oficinas/corpo-articulado-christine-2023/3.webp",
      "/images/oficinas/corpo-articulado-christine-2023/3.webp",
    ],
  },

  // ─── 2024 ──────────────────────────────────────────────────────────────────

  "corpo-movideo-cib-maia-2024": {
    titulo: "Oficina 'Corpo.Movideo' — Cib Maia",
    slug: "corpo-movideo-cib-maia-2024",
    ano: 2024,
    data: "25 e 26 de maio (online) e 30 e 31 de maio de 2024 (presencial)",
    local: "Online e CBARTES, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    descricao:
      "Oficina 'Corpo.Movideo — Dança, Arquitetura e Audiovisual', ministrada pela bailarina e arquiteta Cib Maia (BH), através da LPG — SECULT/MG. Com módulo online nos dias 25 e 26/05 e módulo presencial nos dias 30 e 31/05.",
    participantes: "Cib Maia (bailarina e arquiteta — Belo Horizonte/MG)",
    parceiros: ["LPG — SECULT/MG"],
    selos: ["Produção Cultural"],
    imagensCount: 9,
    imagens: [
      "/images/oficinas/corpo-movideo-cib-maia-2024/1.webp",
      "/images/oficinas/corpo-movideo-cib-maia-2024/2.webp",
      "/images/oficinas/corpo-movideo-cib-maia-2024/3.webp",
      "/images/oficinas/corpo-movideo-cib-maia-2024/4.webp",
      "/images/oficinas/corpo-movideo-cib-maia-2024/5.webp",
      "/images/oficinas/corpo-movideo-cib-maia-2024/6.webp",
      "/images/oficinas/corpo-movideo-cib-maia-2024/7.webp",
      "/images/oficinas/corpo-movideo-cib-maia-2024/8.webp",
      "/images/oficinas/corpo-movideo-cib-maia-2024/9.webp",
    ],
  },

  "circonhecendo-allan-barros-2024": {
    titulo: "Oficina de Palhaçaria 'Circonhecendo' — Allan Barros",
    slug: "circonhecendo-allan-barros-2024",
    ano: 2024,
    data: "25 de agosto de 2024",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    descricao:
      "Oficina de palhaçaria 'Circonhecendo' com o artista mambembe Allan Barros (Paraíba).",
    participantes: "Allan Barros (artista mambembe — Paraíba)",
    selos: ["Produção Cultural"],
    imagensCount: 9,
    imagens: [
      "/images/oficinas/circonhecendo-allan-barros-2024/1.webp",
      "/images/oficinas/circonhecendo-allan-barros-2024/2.webp",
      "/images/oficinas/circonhecendo-allan-barros-2024/3.webp",
      "/images/oficinas/circonhecendo-allan-barros-2024/4.webp",
      "/images/oficinas/circonhecendo-allan-barros-2024/5.webp",
      "/images/oficinas/circonhecendo-allan-barros-2024/6.webp",
      "/images/oficinas/circonhecendo-allan-barros-2024/7.webp",
      "/images/oficinas/circonhecendo-allan-barros-2024/8.webp",
      "/images/oficinas/circonhecendo-allan-barros-2024/9.webp",
    ],
  },

  // ─── 2025 ──────────────────────────────────────────────────────────────────

  "corpo-presente-edney-2025": {
    titulo: "Oficina de Dança 'Corpo Presente' — Edney D'Conti",
    slug: "corpo-presente-edney-2025",
    ano: 2025,
    data: "10 de maio de 2025",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    descricao:
      "Oficina de dança 'Corpo Presente' ministrada pelo bailarino Edney D'Conti (Rio de Janeiro/RJ).",
    participantes: "Edney D'Conti (bailarino — Rio de Janeiro/RJ)",
    selos: ["Produção Cultural"],
    imagensCount: 7,
    imagens: [
      "/images/oficinas/corpo-presente-edney-2025/1.webp",
      "/images/oficinas/corpo-presente-edney-2025/2.webp",
      "/images/oficinas/corpo-presente-edney-2025/3.webp",
      "/images/oficinas/corpo-presente-edney-2025/4.webp",
      "/images/oficinas/corpo-presente-edney-2025/5.webp",
      "/images/oficinas/corpo-presente-edney-2025/6.webp",
      "/images/oficinas/corpo-presente-edney-2025/7.webp",
    ],
  },

  "musica-movimento-madureira-2025": {
    titulo: "Mini-curso 'Música e Movimento: despertando a rítmica corporal'",
    slug: "musica-movimento-madureira-2025",
    ano: 2025,
    data: "16, 17 e 18 de maio de 2025",
    local: "CBARTES, Diamantina",
    tipo: "Mini-curso",
    descricao:
      "Mini-curso 'Música e Movimento: despertando a rítmica corporal', ministrado pelo PhD José Rafael Madureira, através da Associação Cultural Amigos do CBARTES.",
    participantes: "José Rafael Madureira (PhD)",
    parceiros: ["Associação Cultural Amigos do CBARTES"],
    selos: ["Produção Cultural"],
    imagensCount: 7,
    imagens: [
      "/images/oficinas/musica-movimento-madureira-2025/1.webp",
      "/images/oficinas/musica-movimento-madureira-2025/2.webp",
      "/images/oficinas/musica-movimento-madureira-2025/3.webp",
      "/images/oficinas/musica-movimento-madureira-2025/4.webp",
      "/images/oficinas/musica-movimento-madureira-2025/5.webp",
      "/images/oficinas/musica-movimento-madureira-2025/6.webp",
      "/images/oficinas/musica-movimento-madureira-2025/7.webp",
    ],
  },

  "danca-salao-thais-paulo-2025": {
    titulo: "Oficina de Dança de Salão — Thais Clemente e Paulo Fonseca",
    slug: "danca-salao-thais-paulo-2025",
    ano: 2025,
    data: "7 de junho de 2025",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    descricao:
      "Oficina de Dança de Salão — Forró, Soltinho e Gafieira — com Thais Clemente e Paulo Fonseca (São Paulo/SP).",
    participantes: "Thais Clemente e Paulo Fonseca (São Paulo/SP)",
    selos: ["Produção Cultural"],
    imagensCount: 16,
    imagens: [
      "/images/oficinas/danca-salao-thais-paulo-2025/1.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/2.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/3.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/4.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/5.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/6.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/7.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/8.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/9.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/10.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/11.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/12.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/13.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/14.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/15.webp",
      "/images/oficinas/danca-salao-thais-paulo-2025/16.webp",
    ],
  },

  "oratoria-amigos-cbartes-2025": {
    titulo: "Oficina de Oratória — Associação Cultural Amigos do CBARTES",
    slug: "oratoria-amigos-cbartes-2025",
    ano: 2025,
    data: "A partir de 29 de agosto de 2025 (10 encontros)",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    descricao:
      "Oficina de oratória articulada pela Associação Cultural Amigos do CBARTES, com 10 encontros e inclusão de 4 bolsistas das universidades UFVJM e UEMG.",
    parceiros: ["Associação Cultural Amigos do CBARTES", "UFVJM", "UEMG"],
    selos: ["Produção Cultural"],
    imagensCount: 0,
    imagens: [

    ],
  },

  "danca-africana-zango-2025": {
    titulo: "Oficina de Dança Tradicional Africana — Bela Zango e Matchume Zango",
    slug: "danca-africana-zango-2025",
    ano: 2025,
    data: "5 de dezembro de 2025",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    descricao:
      "Oficina de Dança Tradicional Africana com música ao vivo e ensinamentos sobre instrumentos musicais tradicionais moçambicanos, ministrada pelos artistas Bela Zango e Matchume Zango (Moçambique/África). Oficina mediada pelo Instituto Mundos em parceria com o CBARTES.",
    participantes: "Bela Zango e Matchume Zango (Moçambique/África)",
    parceiros: ["Instituto Mundos"],
    selos: ["Produção Cultural"],
    imagensCount: 16,
    imagens: [
      "/images/oficinas/danca-africana-zango-2025/1.webp",
      "/images/oficinas/danca-africana-zango-2025/2.webp",
      "/images/oficinas/danca-africana-zango-2025/3.webp",
      "/images/oficinas/danca-africana-zango-2025/4.webp",
      "/images/oficinas/danca-africana-zango-2025/5.webp",
      "/images/oficinas/danca-africana-zango-2025/6.webp",
      "/images/oficinas/danca-africana-zango-2025/7.webp",
      "/images/oficinas/danca-africana-zango-2025/8.webp",
      "/images/oficinas/danca-africana-zango-2025/9.webp",
      "/images/oficinas/danca-africana-zango-2025/10.webp",
      "/images/oficinas/danca-africana-zango-2025/11.webp",
      "/images/oficinas/danca-africana-zango-2025/12.webp",
      "/images/oficinas/danca-africana-zango-2025/13.webp",
      "/images/oficinas/danca-africana-zango-2025/14.webp",
      "/images/oficinas/danca-africana-zango-2025/15.webp",
      "/images/oficinas/danca-africana-zango-2025/16.webp",
    ],
  },

  "tracando-verbos-habracos-2025": {
    titulo: "Oficina 'Traçando Verbos no Espaço 2' — Há Braços Poético",
    slug: "tracando-verbos-habracos-2025",
    ano: 2025,
    data: "9 a 12 de dezembro de 2025",
    local: "CBARTES, Diamantina",
    tipo: "Oficina",
    gratuito: true,
    descricao:
      "O CBARTES recebeu o Há Braços Poético — projeto de extensão da PROEXC/UFVJM — para a realização da oficina 'Traçando Verbos no Espaço 2'.",
    parceiros: ["Há Braços Poético / PROEXC UFVJM"],
    selos: ["Produção Cultural"],
    imagensCount: 0,
    imagens: [

    ],
  },
};


// ─── Helpers ─────────────────────────────────────────────────────────────────

export const getOficinasPorAno = () => {
  const porAno: Record<number, Oficina[]> = {};

  Object.values(oficinas).forEach(oficina => {
    if (!porAno[oficina.ano]) {
      porAno[oficina.ano] = [];
    }
    porAno[oficina.ano].push(oficina);
  });

  return porAno;
};

export const getOficinasParaTimeline = () => {
  const porAno = getOficinasPorAno();

  return Object.entries(porAno)
    .sort(([anoA], [anoB]) => parseInt(anoA) - parseInt(anoB))
    .map(([ano, itens]) => ({
      ano: parseInt(ano),
      oficinas: itens.map(o => ({
        titulo: o.titulo,
        slug: o.slug,
        local: o.local,
        data: o.data,
      })),
    }));
};