// data/espetaculos.ts

export interface Espetaculo {
  titulo: string;
  slug: string;
  ano: number;
  data: string;
  tipo: "Dança" | "Teatro" | "Dança-Teatro";
  turma: string;
  diretor: string;
  elenco: string;
  local: string;
  sessoes: number;
  sinopse: string;
  fichaTecnica?: string;
  imagensCount: number; // Quantidade de imagens disponíveis
  destaque?: boolean;
}

export const espetaculos: Record<string, Espetaculo> = {
  // 2022
  "pecado": {
    titulo: "PECADO",
    slug: "pecado",
    ano: 2022,
    data: "20/12/2022",
    tipo: "Teatro",
    turma: "Turma Adulta de Teatro",
    diretor: "Jean Gimenes",
    elenco: "Alunos da turma adulta de teatro do CBARTES 2022",
    local: "Teatro Santa Izabel",
    sessoes: 1,
    sinopse: "Adaptação da obra 'O Beijo no Asfalto' de Nelson Rodrigues. Uma reflexão profunda sobre moralidade, preconceito e a fragilidade das relações humanas na sociedade contemporânea.",
    fichaTecnica: "Direção e adaptação: Jean Gimenes",
    imagensCount: 4,
  },

  // 2023
  "a-casa-dos-misterios": {
    titulo: "A CASA DOS MISTÉRIOS",
    slug: "a-casa-dos-misterios",
    ano: 2023,
    data: "06/07/2023",
    tipo: "Teatro",
    turma: "Turma Infantil de Teatro",
    diretor: "Jean Gimenes",
    elenco: "Alunos da turma infantil de teatro do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 2,
    sinopse: "Texto e direção de Jean Gimenes. Uma aventura teatral que mergulha no universo do mistério e da imaginação infantil, estimulando a criatividade e o trabalho em equipe.",
    fichaTecnica: "Texto e direção: Jean Gimenes",
    imagensCount: 4,
    destaque: true,
  },

  "espaco-sagrado": {
    titulo: "ESPAÇO SAGRADO",
    slug: "espaco-sagrado",
    ano: 2023,
    data: "01 e 02/12/2023",
    tipo: "Dança",
    turma: "Turmas de Dança",
    diretor: "Ditto Leite",
    elenco: "Alunos das turmas de dança do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 3,
    sinopse: "Direção e concepção de Ditto Leite. Uma investigação coreográfica sobre os espaços que habitamos, físicos e emocionais, e sua relação com o sagrado do movimento.",
    fichaTecnica: "Direção e concepção: Ditto Leite",
    imagensCount: 0,
  },

  "caminhos": {
    titulo: "CAMINHOS",
    slug: "caminhos",
    ano: 2023,
    data: "11/12/2023",
    tipo: "Teatro",
    turma: "Turma Juvenil de Teatro",
    diretor: "Jean Gimenes",
    elenco: "Alunos da turma juvenil de teatro do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 2,
    sinopse: "Texto e direção de Jean Gimenes. Uma jornada pelos diversos caminhos que a juventude enfrenta, explorando escolhas, sonhos e a busca por identidade.",
    fichaTecnica: "Texto e direção: Jean Gimenes",
    imagensCount: 3,
  },

  "a-greve-do-sexo": {
    titulo: "A GREVE DO SEXO",
    slug: "a-greve-do-sexo",
    ano: 2023,
    data: "12/12/2023",
    tipo: "Teatro",
    turma: "Turma Adulta de Teatro",
    diretor: "Jean Gimenes",
    elenco: "Alunos da turma adulta de teatro do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 2,
    sinopse: "Adaptação da obra do dramaturgo grego Aristófanes. Uma comédia atemporal sobre poder, gênero e política, adaptada e dirigida por Jean Gimenes.",
    fichaTecnica: "Adaptação e direção: Jean Gimenes",
    imagensCount: 6,
  },

  // 2024
  "a-bruxinha-que-era-boa": {
    titulo: "A BRUXINHA QUE ERA BOA",
    slug: "a-bruxinha-que-era-boa",
    ano: 2024,
    data: "02/07/2024",
    tipo: "Teatro",
    turma: "Turma Infantil de Teatro",
    diretor: "Jean Gimenes",
    elenco: "Alunos da turma infantil de teatro do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 1,
    sinopse: "Adaptação da obra de Maria Clara Machado. Uma história encantadora sobre bondade, aceitação e a quebra de preconceitos, adaptada e dirigida por Jean Gimenes.",
    fichaTecnica: "Adaptação e direção: Jean Gimenes",
    imagensCount: 0,
  },

  "com-amor-shakespeare": {
    titulo: "COM AMOR SHAKESPEARE",
    slug: "com-amor-shakespeare",
    ano: 2024,
    data: "10/07/2024",
    tipo: "Teatro",
    turma: "Turma Juvenil de Teatro",
    diretor: "Jean Gimenes",
    elenco: "Alunos da turma juvenil de teatro do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 1,
    sinopse: "Texto e direção de Jean Gimenes. Uma homenagem ao bardo inglês através de cenas icônicas e releituras contemporâneas de suas obras mais conhecidas.",
    fichaTecnica: "Texto e direção: Jean Gimenes",
    imagensCount: 0,
  },

  "roxas": {
    titulo: "ROXAS",
    slug: "roxas",
    ano: 2024,
    data: "12/07/2024",
    tipo: "Teatro",
    turma: "Turma Adulta de Teatro",
    diretor: "Jean Gimenes",
    elenco: "Alunos da turma adulta de teatro do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 1,
    sinopse: "Adaptação do texto 'A Mancha Roxa' de Plínio Marcos. Uma obra visceral que aborda temas sociais urgentes com a intensidade característica do autor.",
    fichaTecnica: "Adaptação e direção: Jean Gimenes",
    imagensCount: 0,
  },

  "subvercirco": {
    titulo: "SUBVERCIRCO",
    slug: "subvercirco",
    ano: 2024,
    data: "29 e 30/11/2024",
    tipo: "Dança",
    turma: "Turmas Infantis e Infantojuvenis de Dança",
    diretor: "Ditto Leite",
    elenco: "Alunos das turmas infantis e infantojuvenis de dança do CBARTES, incluindo bolsistas do PIÁrte",
    local: "Teatro Santa Izabel",
    sessoes: 3,
    sinopse: "Concepção e direção de Ditto Leite. Uma fusão entre dança contemporânea e elementos circenses, explorando a subversão dos códigos tradicionais do circo através do movimento.",
    fichaTecnica: "Concepção e direção: Ditto Leite | Direção de produção: Associação Cultural Amigos do CBARTES",
    imagensCount: 0,
    destaque: true,
  },

  "pulso-invisivel": {
    titulo: "PULSO INVISÍVEL",
    slug: "pulso-invisivel",
    ano: 2024,
    data: "06 e 07/12/2024",
    tipo: "Dança",
    turma: "Turmas Adultas de Dança",
    diretor: "Ditto Leite",
    elenco: "Alunos das turmas adultas de dança do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 3,
    sinopse: "Concepção e direção de Ditto Leite. Uma investigação sobre os ritmos internos que regem nossos corpos e existências, tornando visível o pulso que nos move.",
    fichaTecnica: "Concepção e direção: Ditto Leite | Direção de produção: Associação Cultural Amigos do CBARTES",
    imagensCount: 0,
  },

  "ruptura-do-silencio": {
    titulo: "RUPTURA DO SILÊNCIO",
    slug: "ruptura-do-silencio",
    ano: 2024,
    data: "12/12/2024",
    tipo: "Teatro",
    turma: "Oficina",
    diretor: "Jean Gimenes",
    elenco: "Participantes da oficina",
    local: "Espaço Ágora da UFVJM",
    sessoes: 1,
    sinopse: "Dinâmica teatral baseada no Teatro do Oprimido de Augusto Boal. Uma experiência participativa que promove a reflexão crítica sobre opressões cotidianas.",
    fichaTecnica: "Baseado no Teatro do Oprimido de Augusto Boal",
    imagensCount: 0,
  },

  // 2025
  "a-droga-da-obediencia": {
    titulo: "A DROGA DA OBEDIÊNCIA",
    slug: "a-droga-da-obediencia",
    ano: 2025,
    data: "13 e 14/06/2025",
    tipo: "Teatro",
    turma: "Turma Infantojuvenil de Teatro",
    diretor: "Jean Gimenes",
    elenco: "Alunos da turma infantojuvenil do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 3,
    sinopse: "Adaptação e direção de Jean Gimenes. Baseado na obra homônima, uma aventura que questiona a obediência cega e estimula o pensamento crítico nos jovens.",
    fichaTecnica: "Adaptação e direção: Jean Gimenes",
    imagensCount: 0,
  },

  "o-auto-da-compadecida": {
    titulo: "O AUTO DA COMPADECIDA",
    slug: "o-auto-da-compadecida",
    ano: 2025,
    data: "27 e 28/06/2025",
    tipo: "Teatro",
    turma: "Turma Adolescente de Teatro",
    diretor: "Jean Gimenes",
    elenco: "Alunos da turma adolescente do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 3,
    sinopse: "Adaptação e direção de Jean Gimenes. O clássico de Ariano Suassuna ganha vida com a energia e criatividade dos jovens atores do CBARTES.",
    fichaTecnica: "Adaptação e direção: Jean Gimenes",
    imagensCount: 5,
    destaque: true,
  },

  "doroteia": {
    titulo: "DOROTÉIA",
    slug: "doroteia",
    ano: 2025,
    data: "04 e 05/07/2025",
    tipo: "Teatro",
    turma: "Turma Adulta de Teatro",
    diretor: "Jean Gimenes",
    elenco: "Alunos da turma adulta de teatro do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 5,
    sinopse: "Texto de Nelson Rodrigues, adaptação e direção de Jean Gimenes. Uma obra provocativa que explora as complexidades da sexualidade e da moral na sociedade brasileira.",
    fichaTecnica: "Adaptação e direção: Jean Gimenes",
    imagensCount: 0,
  },

  "brincantes": {
    titulo: "BRINCANTES",
    slug: "brincantes",
    ano: 2025,
    data: "21 e 22/11/2025",
    tipo: "Dança",
    turma: "Turmas Infantis e Infantojuvenis de Dança",
    diretor: "Ditto Leite",
    elenco: "Alunos das turmas infantis e infantojuvenis do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 3,
    sinopse: "Concepção e direção de Ditto Leite. Celebração do brincar como forma de arte e expressão, transformado em documentário que registra o processo criativo.",
    fichaTecnica: "Concepção e direção: Ditto Leite | Virou documentário",
    imagensCount: 0,
  },

  "circunsdancas-da-vida": {
    titulo: "CIRCUNSDANÇAS DA VIDA",
    slug: "circunsdancas-da-vida",
    ano: 2025,
    data: "29/11 e 05/12/2025",
    tipo: "Dança-Teatro",
    turma: "Turmas Adultas de Dança e Teatro",
    diretor: "Ditto Leite",
    elenco: "Alunos das turmas adultas de dança e teatro do CBARTES",
    local: "Teatro Santa Izabel",
    sessoes: 3,
    sinopse: "Concepção e direção de Ditto Leite. Uma obra híbrida que transita entre dança e teatro, explorando as circunstâncias e danças que compõem nossa existência.",
    fichaTecnica: "Concepção e direção: Ditto Leite",
    imagensCount: 0,
  },
};

// Helper para pegar espetáculos por ano
export const getEspetaculosPorAno = () => {
  const porAno: Record<number, Espetaculo[]> = {};
  
  Object.values(espetaculos).forEach(esp => {
    if (!porAno[esp.ano]) {
      porAno[esp.ano] = [];
    }
    porAno[esp.ano].push(esp);
  });

  return porAno;
};

// Helper para formatar lista para página da escola
export const getEspetaculosParaTimeline = () => {
  const porAno = getEspetaculosPorAno();
  
  return Object.entries(porAno)
    .sort(([anoA], [anoB]) => parseInt(anoA) - parseInt(anoB))
    .map(([ano, espetaculos]) => ({
      ano: parseInt(ano),
      espetaculos: espetaculos.map(e => ({
        titulo: e.titulo,
        espetaculo: e.slug
      }))
    }));
};