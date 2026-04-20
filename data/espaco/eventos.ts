
export interface Evento {
  titulo: string;
  slug: string;
  ano: number;
  data: string;
  local: string;
  tipo: "Show" | "Festival" | "Apresentação" | "Workshop" | "Sessão" | "Encontro" | "Bate-papo";
  descricao: string;
  participantes?: string;
  programacao?: string[];
  imagensCount: number;
  imagens?: string[];
}
 
export const eventos: Record<string, Evento> = {
    "portas-abertas-cortejo": {
    titulo: "CBARTES de Portas Abertas — Cortejo Boas-vindas",
    slug: "portas-abertas-cortejo",
    ano: 2022,
    data: "1 de junho de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Apresentação",
    descricao:
      "Cortejo de abertura do CBARTES, conduzido pelo artista visual e professor Marcelo Brant, com apresentação do grupo de Folia de Reis \"Unidos do Vale\", do bairro Cidade Nova, Diamantina/MG. O evento marcou a inauguração do espaço cultural, celebrado com a exposição 'Boas-vindas' do próprio Marcelo Brant.",
    participantes:
      "Marcelo Brant (artista visual e professor), Grupo Folia de Reis 'Unidos do Vale' Bairro Cidade Nova, Diamantina",
    programacao: [
      "Cortejo 'Boas-vindas' pelo centro histórico",
      "Exposição 'Boas-vindas' — Marcelo Brant",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/1/1.webp",
      "/images/eventos/1/2.webp",
      "/images/eventos/1/3.webp",
    ],
  },
    "portas-abertas-show-musical": {
    titulo: "CBARTES de Portas Abertas — Show Musical",
    slug: "portas-abertas-show-musical",
    ano: 2022,
    data: "1 de junho de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Show",

    descricao:
      "Show musical coletivo como parte da programação de inauguração do CBARTES, reunindo artistas da cena musical de Diamantina e região.",
    participantes:
      "Heloisa Almeida, Joyce Santos, Henrie Ann, Malu Costa, Gabriel Botelho, Samuel Alex, Beto Moreno, Ditto Leite e Mãe Dalva",
    imagensCount: 3,
    imagens: [
      "/images/eventos/2/1.webp",
      "/images/eventos/2/2.webp",
      "/images/eventos/2/3.webp",
    ],
  },
 
  "portas-abertas-pilulas-poeticas": {
    titulo: "CBARTES de Portas Abertas — Pílulas Poéticas",
    slug: "portas-abertas-pilulas-poeticas",
    ano: 2022,
    data: "1 de junho de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Apresentação",

    descricao:
      "Série de performances e cenas teatrais curtas apresentadas durante a inauguração do CBARTES, com artistas de Diamantina e Rio de Janeiro.",
    participantes:
      "Bianca Andreóli (RJ), Daniel Prata, Stheffany Hellen, Daniel Alberti (Teatro Labirinto – Dtna), Ditto Leite, Jean Gimenes, Tribo Corpo Raiz (Dtna)",
    programacao: [
      "Performance 'Grávida-de-gestos' — Bianca Andreóli (RJ)",
      "Cenas teatrais — Daniel Prata, Stheffany Hellen e Daniel Alberti (Teatro Labirinto)",
      "Cenas teatrais — Ditto Leite e Jean Gimenes",
      "Trecho coreográfico — Tribo Corpo Raiz",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/3/1.webp",
      "/images/eventos/3/2.webp",
      "/images/eventos/3/3.webp",
    ],
  },
 
  "portas-abertas-intropicos": {
    titulo: "CBARTES de Portas Abertas — Conferência Dançada Intrópicos",
    slug: "portas-abertas-intropicos",
    ano: 2022,
    data: "3 de junho de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Apresentação",

    descricao:
      "Segundo dia da programação de inauguração do CBARTES, com conferência dançada e show de choro instrumental.",
    participantes:
      "Thiago Alixandre (cantor e bailarino), Ateliê do Choro: Evandro Arcanjo, Edson Couto, Rafael Oliveira e Jairo Thiersch",
    programacao: [
      '"Conferência Dançada — Intrópicos" — Thiago Alixandre',
      "Show musical instrumental — Ateliê do Choro",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/4/1.webp",
      "/images/eventos/4/2.webp",
      "/images/eventos/4/3.webp",
    ],
  },
 
  "portas-abertas-extraordinaria-festa": {
    titulo: "CBARTES de Portas Abertas — Extraordinária a Festa",
    slug: "portas-abertas-extraordinaria-festa",
    ano: 2022,
    data: "4 de junho de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Show",
     
    descricao:
      "Festa de encerramento da semana inaugural do CBARTES, com apresentações musicais ao vivo e clima festivo para toda a comunidade.",
    participantes:
      "Gabriel Botelho, Malu Costa, Douglas Maranduba e Renan Veloso",
    imagensCount: 3,
    imagens: [
      "/images/eventos/5/1.webp",
      "/images/eventos/5/2.webp",
      "/images/eventos/5/3.webp",
    ],
  },
 
  "sararau-1": {
    titulo: "Sararau 1",
    slug: "sararau-1",
    ano: 2022,
    data: "17 de setembro de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Show",

    descricao:
      "Primeira edição do Sararau, encontro multidisciplinar que reúne música, poesia e artes visuais no espaço do CBARTES.",
    participantes:
      "Malter Ramos, Leo Lages, Victor Dias, Raphaella Oliveira (shows); Herivelton Silva, Beth Guedes, Alex Machado, Poeta Incensurável (poetas); Graciola Rodrigues (artista plástica)",
    programacao: [
      "Shows: Malter Ramos, Leo Lages, Victor Dias e Raphaella Oliveira",
      "Poesia: Herivelton Silva, Beth Guedes, Alex Machado e Poeta Incensurável",
      "Exposição de artes visuais — Graciola Rodrigues",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/6/1.webp",
      "/images/eventos/6/2.webp",
      "/images/eventos/6/3.webp",
    ],
  },
 
  "sararau-2": {
    titulo: "Sararau 2",
    slug: "sararau-2",
    ano: 2022,
    data: "7 de outubro de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Show",

    descricao:
      "Segunda edição do Sararau, com shows, poesia, dança e lançamento do livro \"O Que Pode Esta Língua\" da escritora Luisa Godoy.",
    participantes:
      "Léo Lages, Pedro Godoy, Wemerson Petterson, Zé Leonardo (shows); Cris Vieira, Marli Froes, Luisa Godoy (poetas/escritora); Adriana Reis (artista plástica); Ditto Leite (bailarino)",
    programacao: [
      "Shows: Léo Lages, Pedro Godoy, Wemerson Petterson e Zé Leonardo",
      "Poesia: Cris Vieira e Marli Froes",
      "Lançamento do livro 'O Que Pode Esta Língua' — Luisa Godoy",
      "Exposição — Adriana Reis",
      "Dança — Ditto Leite",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/7/1.webp",
      "/images/eventos/7/2.webp",
      "/images/eventos/7/3.webp",
    ],
  },
 
  "sararau-3": {
    titulo: "Sararau 3",
    slug: "sararau-3",
    ano: 2022,
    data: "5 de novembro de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Show",
     
    descricao:
      "Terceira edição do Sararau, com show de Pedro Murta, poesia e dança.",
    participantes:
      "Pedro Murta (show); Ana Ribeiro e Herivelton Silva (poetas); Gabriel Gael e Mariana Emiliano (dançarinos); Herivelton Silva (artista plástico)",
    programacao: [
      "Show: Pedro Murta",
      "Poesia: Ana Ribeiro e Herivelton Silva",
      "Dança: Gabriel Gael e Mariana Emiliano",
      "Exposição de artes visuais — Herivelton Silva",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/8/1.webp",
      "/images/eventos/8/2.webp",
      "/images/eventos/8/3.webp",
    ],
  },
 
  "aula-aberta-teatro-2022": {
    titulo: "Aula Aberta de Teatro — Turma Infantil",
    slug: "aula-aberta-teatro-2022",
    ano: 2022,
    data: "15 de dezembro de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Apresentação",
     
    descricao:
      "Apresentação aberta ao público com os alunos da turma infantil de teatro do CBARTES.",
    participantes: "Alunos da turma infantil de teatro do CBARTES",
    imagensCount: 3,
    imagens: [
      "/images/eventos/9/1.webp",
      "/images/eventos/9/2.webp",
      "/images/eventos/9/3.webp",
    ],
  },
 
  "aula-show-jazz-2022": {
    titulo: "Aula Show — Jazz Contemporâneo",
    slug: "aula-show-jazz-2022",
    ano: 2022,
    data: "17 de dezembro de 2022",
    local: "CBARTES, Diamantina",
    tipo: "Show",
     
    descricao:
      "Aula-show de encerramento do ano com os alunos da turma adulta de Jazz Contemporâneo do CBARTES.",
    participantes: "Alunos da turma adulta de Jazz Contemporâneo do CBARTES",
    imagensCount: 3,
    imagens: [
      "/images/eventos/10/1.webp",
      "/images/eventos/10/2.webp",
      "/images/eventos/10/3.webp",
    ],
  },
 
  // ─── 2023 ────────────────────────────────────────────────────────────────────
 
  "sararau-4": {
    titulo: "Sararau 4",
    slug: "sararau-4",
    ano: 2023,
    data: "4 de março de 2023",
    local: "CBARTES, Diamantina",
    tipo: "Show",
     
    descricao:
      "Quarta edição do Sararau, com show de Pablo Aquiles, poesia, dança, exposição de artes visuais, pintura facial e discotecagem.",
    participantes:
      "Pablo Aquiles (show); Hadassa Horta, Nino Arcanjo (poetas); Flora Martins, Bia Fonseca e Helena Niquine (bailarinas); Herê Fonseca (artista plástico); Chrystel Boue (pintura facial); Ditto Leite e Thais Gaiad (discotecagem)",
    programacao: [
      "Show: Pablo Aquiles",
      "Poesia: Hadassa Horta e Nino Arcanjo",
      "Dança: Flora Martins, Bia Fonseca e Helena Niquine",
      "Exposição — Herê Fonseca",
      "Pintura facial — Chrystel Boue",
      "Pista de dança: Ditto Leite e Thais Gaiad",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/11/1.webp",
      "/images/eventos/11/2.webp",
      "/images/eventos/11/3.webp",
    ],
  },
 
  "sararau-5": {
    titulo: "Sararau 5",
    slug: "sararau-5",
    ano: 2023,
    data: "15 de abril de 2023",
    local: "CBARTES, Diamantina",
    tipo: "Show",
     
    descricao:
      "Quinta edição do Sararau, com show de Gabriel Botelho, cenas teatrais dos alunos do CBARTES e exposição 'Aliatórias'.",
    participantes:
      "Gabriel Botelho (show); Alunos das turmas de teatro adulto e infantil do CBARTES; Ofélia Ortega e Ricardo Keferaus (artistas plásticos)",
    programacao: [
      "Show: Gabriel Botelho",
      "Cenas teatrais — alunos das turmas de teatro adulto e infantil do CBARTES",
      "Exposição 'Aliatórias' — Ofélia Ortega e Ricardo Keferaus",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/12/1.webp",
      "/images/eventos/12/2.webp",
      "/images/eventos/12/3.webp",
    ],
  },
 
  "show-musical-maio-2023": {
    titulo: "Show Musical — Jorge Melo, Léo Lages e Malter Ramos",
    slug: "show-musical-maio-2023",
    ano: 2023,
    data: "5 de maio de 2023",
    local: "CBARTES, Diamantina",
    tipo: "Show",
    descricao:
      "Show musical com artistas do Piauí e de Diamantina, celebrando a diversidade da música brasileira.",
    participantes: "Jorge Melo (Piauí), Léo Lages e Malter Ramos (Diamantina)",
    imagensCount: 3,
    imagens: [
      "/images/eventos/13/1.webp",
      "/images/eventos/13/2.webp",
      "/images/eventos/13/3.webp",
    ],
  },
 
  "sararau-6": {
    titulo: "Sararau 6",
    slug: "sararau-6",
    ano: 2023,
    data: "17 de junho de 2023",
    local: "CBARTES, Diamantina",
    tipo: "Show",
     
    descricao:
      "Sexta edição do Sararau, com shows, poesia, teatro, exposição fotográfica e pista de dança.",
    participantes:
      "Jéssica Gaspar, Ditto Leite, Ateliê do Choro: Evandro Arcanjo e Clóvis Vieira (shows); Advaldo Cardoso Filho, Marcela Fassy e Vitor Hugo (poetas); Evani Leite, Euro e Márcia (atrizes); Cristiane Queiroz / concepção: Viviane Queiroz (exposição fotográfica); Thais Gaiad (pista de dança)",
    programacao: [
      "Shows: Jéssica Gaspar, Ditto Leite e Ateliê do Choro (Evandro Arcanjo e Clóvis Vieira)",
      "Poesia: Advaldo Cardoso Filho, Marcela Fassy e Vitor Hugo",
      "Teatro: Evani Leite, Euro e Márcia",
      "Exposição fotográfica 'O Que Nos Constitui' — Cristiane Queiroz",
      "Pista de dança — Thais Gaiad",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/14/1.webp",
      "/images/eventos/14/2.webp",
      "/images/eventos/14/3.webp",
    ],
  },
 
  "aula-show-danca-2023": {
    titulo: "Aula Show — Turmas de Dança",
    slug: "aula-show-danca-2023",
    ano: 2023,
    data: "8 de julho de 2023",
    local: "CBARTES, Diamantina",
    tipo: "Apresentação",
     
    descricao:
      "Apresentação aberta ao público com os alunos das turmas de dança Baby, Infantil e Adulta do CBARTES.",
    participantes: "Alunos das turmas de dança Baby, Infantil e Adulta do CBARTES",
    imagensCount: 3,
    imagens: [
      "/images/eventos/15/1.webp",
      "/images/eventos/15/2.webp",
      "/images/eventos/15/3.webp",
    ],
  },
 
  "leitura-encenada-senhora-afogados": {
    titulo: "Leitura Encenada — Senhora dos Afogados",
    slug: "leitura-encenada-senhora-afogados",
    ano: 2023,
    data: "13 de julho de 2023",
    local: "CBARTES, Diamantina",
    tipo: "Apresentação",
     
    descricao:
      "Leitura encenada do texto de Nelson Rodrigues 'Senhora dos Afogados', com os alunos da turma adulta de teatro do CBARTES.",
    participantes: "Alunos da turma adulta de teatro do CBARTES",
    programacao: [
      "Leitura encenada de 'Senhora dos Afogados' — Nelson Rodrigues",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/16/1.webp",
      "/images/eventos/16/2.webp",
      "/images/eventos/16/3.webp",
    ],
  },
 
  "sararau-7": {
    titulo: "Sararau 7",
    slug: "sararau-7",
    ano: 2023,
    data: "12 de agosto de 2023",
    local: "CBARTES, Diamantina",
    tipo: "Show",
     
    descricao:
      "Sétima edição do Sararau, com bate-papo sobre cultura africana, show, performance teatral e exposição.",
    participantes:
      "Kuta Ndumbu (bate-papo e exposição – África); David Abreu (show – Sete Lagoas/MG); Alunos do 3.º ano do curso técnico de Teatro da IFNMG, dir. Flávio Rabelo (performance teatral); Bruno Fernandes (set list)",
    programacao: [
      "Bate-papo sobre a cultura africana — Kuta Ndumbu",
      "Show: David Abreu (Sete Lagoas/MG)",
      "Performance teatral 'O Que Te Faz Cair na Toca do Coelho' — alunos do 3.º ano do curso técnico de Teatro da IFNMG, direção: Flávio Rabelo",
      "Exposição 'A Pintura e a Palavra' — Kuta Ndumbu",
      "Set list — Bruno Fernandes",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/17/1.webp",
      "/images/eventos/17/2.webp",
      "/images/eventos/17/3.webp",
    ],
  },
 
  "festival-alecrim": {
    titulo: "Festival Alecrim",
    slug: "festival-alecrim",
    ano: 2023,
    data: "7 de outubro de 2023",
    local: "CBARTES, Diamantina",
    tipo: "Festival",
    descricao:
      "Grande festival multidisciplinar do CBARTES, reunindo shows, teatro, poesia e exposição de artes visuais.",
    participantes:
      "Samora Délcio (exposição – BH); Cia. Reconto e Euro Pereira (performance teatral – Dtna); Carlos Serra Negra (Gouveia), Acsa Marques (BH), Ed Nasque (BH), Saldanha Rolim (Dtna), João Bernardo (BH), Jéssica Gaspar (Dtna), Alex Sander e Banda Bala (shows); Beth Guedes, Hadassa Horta, Sônia Vasconcelos, Fabi Xavier, Marli Froes e Nuno Arcanjo (poetas)",
    programacao: [
      "Exposição — Samora Délcio (Belo Horizonte)",
      "Performance teatral 'O Menino' — Cia. Reconto e Euro Pereira",
      "Shows: Carlos Serra Negra, Acsa Marques, Ed Nasque, Saldanha Rolim, João Bernardo, Jéssica Gaspar, Alex Sander e Banda Bala",
      "Poesia: Beth Guedes, Hadassa Horta, Sônia Vasconcelos, Fabi Xavier, Marli Froes e Nuno Arcanjo",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/18/1.webp",
      "/images/eventos/18/2.webp",
      "/images/eventos/18/3.webp",
    ],
  },
 
  "sararau-8": {
    titulo: "Sararau 8",
    slug: "sararau-8",
    ano: 2023,
    data: "11 de novembro de 2023",
    local: "CBARTES, Diamantina",
    tipo: "Show",
     
    descricao:
      "Oitava edição do Sararau, com show de Estevam Rupestre, poesia e exposição.",
    participantes:
      "Estevam Rupestre (show – Distrito de Tabuleiro); Parísina Ribeiro (poetisa); Luciano Ribeiro (exposição – Sete Lagoas/MG); Márcus Santos (set list pista de dança)",
    programacao: [
      "Show: Estevam Rupestre (Distrito de Tabuleiro)",
      "Poesia: Parísina Ribeiro",
      "Exposição 'Espaço da Cor' — Luciano Ribeiro (Sete Lagoas/MG)",
      "Pista de dança — Márcus Santos",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/19/1.webp",
      "/images/eventos/19/2.webp",
      "/images/eventos/19/3.webp",
    ],
  },
 
  // ─── 2024 ────────────────────────────────────────────────────────────────────
 
  "dialogos-sobre-danca": {
    titulo: "Diálogos sobre Dança",
    slug: "dialogos-sobre-danca",
    ano: 2024,
    data: "1 de junho de 2024",
    local: "CBARTES, Diamantina",
    tipo: "Apresentação",
     
    descricao:
      "Encontro de dança contemporânea com performances, intervenções coreográficas e roda de conversa com artistas convidados de Belo Horizonte.",
    participantes:
      "Cib Maia (performer – BH), Uyan Vilela (bailarino – BH), Cati Clannes e Helena Niquini (CBARTES), Grupo Bantos do Baú (Dtna), Grupo de Pesquisa Há Braços Poético / PROEXC UFVJM (Dtna)",
    programacao: [
      "Performance 'Bestiário' — Cib Maia (BH)",
      "Intervenção 'Inaudível' — Uyan Vilela (BH)",
      "Dança 'Corpos Celestes' — Cati Clannes e Helena Niquini (CBARTES)",
      "Dança afro — Grupo Bantos do Baú",
      "Dança 'Corporio' — Grupo de Pesquisa Há Braços Poético / PROEXC UFVJM",
      "Roda de conversa com Cib Maia e Uyan Vilela",
    ],
    imagensCount: 3,
    imagens: [
      "/images/eventos/20/1.webp",
      "/images/eventos/20/2.webp",
      "/images/eventos/20/3.webp",
    ],
  },
 
  "entrelaces-1": {
    titulo: "Entrelaços — 1.º Encontro de Mulheres",
    slug: "entrelaces-1",
    ano: 2024,
    data: "3 de agosto de 2024",
    local: "CBARTES, Diamantina",
    tipo: "Encontro",
     
    descricao:
      "Primeiro encontro da série Entrelaços, um espaço de articulação em redes para mulheres, mediado por psicólogas.",
    participantes: "Mediação: Andreza Rocha e Riane Lopes (psicólogas)",
    programacao: ["Roda de conversa mediada por Andreza Rocha e Riane Lopes"],
    imagensCount: 3,
    imagens: [
      "/images/eventos/21/1.webp",
      "/images/eventos/21/2.webp",
      "/images/eventos/21/3.webp",
    ],
  },
 
  "entrelaces-2": {
    titulo: "Entrelaços — 2.º Encontro de Mulheres",
    slug: "entrelaces-2",
    ano: 2024,
    data: "31 de agosto de 2024",
    local: "CBARTES, Diamantina",
    tipo: "Encontro",
     
    descricao:
      "Segunda edição do Entrelaços, encontro de articulação em redes para mulheres.",
    participantes: "Mediação: Andreza Rocha e Riane Lopes (psicólogas)",
    programacao: ["Roda de conversa mediada por Andreza Rocha e Riane Lopes"],
    imagensCount: 3,
    imagens: [
      "/images/eventos/22/1.webp",
      "/images/eventos/22/2.webp",
      "/images/eventos/22/3.webp",
    ],
  },
 
  "entrelaces-3": {
    titulo: "Entrelaços — 3.º Encontro de Mulheres",
    slug: "entrelaces-3",
    ano: 2024,
    data: "28 de setembro de 2024",
    local: "CBARTES, Diamantina",
    tipo: "Encontro",
     
    descricao:
      "Terceira edição do Entrelaços, encontro de articulação em redes para mulheres.",
    participantes: "Mediação: Andreza Rocha e Riane Lopes (psicólogas)",
    programacao: ["Roda de conversa mediada por Andreza Rocha e Riane Lopes"],
    imagensCount: 3,
    imagens: [
      "/images/eventos/23/1.webp",
      "/images/eventos/23/2.webp",
      "/images/eventos/23/3.webp",
    ],
  },
 
  "entrelaces-4": {
    titulo: "Entrelaços — 4.º Encontro de Mulheres",
    slug: "entrelaces-4",
    ano: 2024,
    data: "26 de outubro de 2024",
    local: "CBARTES, Diamantina",
    tipo: "Encontro",
     
    descricao:
      "Quarta edição do Entrelaços, encontro de articulação em redes para mulheres.",
    participantes: "Mediação: Andreza Rocha e Riane Lopes (psicólogas)",
    programacao: ["Roda de conversa mediada por Andreza Rocha e Riane Lopes"],
    imagensCount: 3,
    imagens: [
      "/images/eventos/24/1.webp",
      "/images/eventos/24/2.webp",
      "/images/eventos/24/3.webp",
    ],
  },
 
  "entrelaces-5": {
    titulo: "Entrelaços — 5.º Encontro de Mulheres",
    slug: "entrelaces-5",
    ano: 2024,
    data: "30 de novembro de 2024",
    local: "CBARTES, Diamantina",
    tipo: "Encontro",
     
    descricao:
      "Quinta edição do Entrelaços, encontro de articulação em redes para mulheres.",
    participantes: "Mediação: Andreza Rocha e Riane Lopes (psicólogas)",
    programacao: ["Roda de conversa mediada por Andreza Rocha e Riane Lopes"],
    imagensCount: 3,
    imagens: [
      "/images/eventos/25/1.webp",
      "/images/eventos/25/2.webp",
      "/images/eventos/25/3.webp",
    ],
  },
 
  "entrelaces-6": {
    titulo: "Entrelaços — 6.º Encontro de Mulheres",
    slug: "entrelaces-6",
    ano: 2024,
    data: "14 de dezembro de 2024",
    local: "CBARTES, Diamantina",
    tipo: "Encontro",
     
    descricao:
      "Sexta e última edição do Entrelaços em 2024, encontro de articulação em redes para mulheres.",
    participantes: "Mediação: Andreza Rocha e Riane Lopes (psicólogas)",
    programacao: ["Roda de conversa mediada por Andreza Rocha e Riane Lopes"],
    imagensCount: 3,
    imagens: [
      "/images/eventos/26/1.webp",
      "/images/eventos/26/2.webp",
      "/images/eventos/26/3.webp",
    ],
  },
 
  // ─── 2025 ────────────────────────────────────────────────────────────────────
 
  "aniversario-3-anos": {
    titulo: "Aniversário de 3 Anos do CBARTES",
    slug: "aniversario-3-anos",
    ano: 2025,
    data: "7 de junho de 2025",
    local: "CBARTES, Diamantina",
    tipo: "Show",
     
    descricao:
      "Festa de aniversário de três anos do CBARTES, com baile dançante, show ao vivo e apresentação de dança estilo gafieira.",
    participantes:
      "Léo Lages (show); Thais Clemente e Paulo Fonseca (dança gafieira – SP)",
    programacao: [
      "Baile dançante",
      "Show: Léo Lages e Música Medicina da Alma",
      "Apresentação de dança gafieira — Thais Clemente e Paulo Fonseca (SP)",
    ],
    imagensCount: 12,
    imagens: [
      "/images/eventos/aniversario-3-anos/1.webp",
      "/images/eventos/aniversario-3-anos/2.webp",
      "/images/eventos/aniversario-3-anos/3.webp",
      "/images/eventos/aniversario-3-anos/4.webp",
      "/images/eventos/aniversario-3-anos/5.webp",
      "/images/eventos/aniversario-3-anos/6.webp",
      "/images/eventos/aniversario-3-anos/7.webp",
      "/images/eventos/aniversario-3-anos/8.webp",
      "/images/eventos/aniversario-3-anos/9.webp",
      "/images/eventos/aniversario-3-anos/10.webp",
      "/images/eventos/aniversario-3-anos/11.webp",
      "/images/eventos/aniversario-3-anos/12.webp",
    ],
  },
 
  "bate-papo-grupo-galpao": {
    titulo: "Bate-papo com o Grupo Galpão",
    slug: "bate-papo-grupo-galpao",
    ano: 2025,
    data: "15 de julho de 2025",
    local: "CBARTES, Diamantina",
    tipo: "Bate-papo",
     
    descricao:
      "Encontro aberto ao público com integrantes do renomado Grupo Galpão, referência do teatro brasileiro, para conversa sobre processos criativos e trajetória artística.",
    participantes: "Integrantes do Grupo Galpão",
    imagensCount: 5,
    imagens: [
      "/images/eventos/bate-papo-grupo-galpao/1.webp",
      "/images/eventos/bate-papo-grupo-galpao/2.webp",
      "/images/eventos/bate-papo-grupo-galpao/3.webp",
      "/images/eventos/bate-papo-grupo-galpao/4.webp",
      "/images/eventos/bate-papo-grupo-galpao/5.webp",
    ],
  },
};
 
 
// ─── Helpers ─────────────────────────────────────────────────────────────────
 
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
    .map(([ano, eventosDoAno]) => ({
      ano: parseInt(ano),
      eventos: eventosDoAno.map(e => ({
        titulo: e.titulo,
        slug: e.slug,
        local: e.local,
        data: e.data,
      })),
    }));
};