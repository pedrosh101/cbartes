export interface Cursos {
  id: number;
  categoria: string;
  professor: string;
  turmas: string[];
  popup: PopupInfo;
}

export interface PopupInfo {
  descricao: string;
  metodologia: string;
  turmas: TurmaInfo[];
  investimento: string;
  vagas: string;
}

export interface TurmaInfo {
  nome: string;
  horario: string;
}

export const cursos: Cursos[] = [
  {
    id: 1,
    categoria: "Dança",
    professor: "Ditto Leite",
    turmas: ["Metodologia", "Diferencial", "Turmas e horários"],
    popup: {
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo purus, euismod nec est nec, porttitor tristique metus.",
      metodologia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo purus, euismod nec est nec, porttitor tristique metus. Sed imperdiet turpis quis eros pellentesque, eu rutrum quam consequat.",
      turmas: [
        {
          nome: "Infantil (6–10 anos)",
          horario: "Terças e Quintas, 14h–15h30",
        },
        {
          nome: "Juvenil (11–17 anos)",
          horario: "Terças e Quintas, 15h30–17h",
        },
        { nome: "Adulto", horario: "Segundas e Quartas, 19h–20h30" },
      ],
      investimento: "Mensalidade a consultar. Bolsas integrais via PIÁrte.",
      vagas: "Turmas com vagas limitadas",
    },
  },
  {
    id: 2,
    categoria: "Teatro",
    professor: "Jean Gimenes",
    turmas: ["Metodologia", "Diferencial", "Turmas e horários"],

    popup: {
       descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo purus, euismod nec est nec, porttitor tristique metus.",
      metodologia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo purus, euismod nec est nec, porttitor tristique metus. Sed imperdiet turpis quis eros pellentesque, eu rutrum quam consequat.",
      turmas: [
        { nome: "Infantil (7–12 anos)", horario: "Sábados, 9h–11h" },
        { nome: "Juvenil (13–17 anos)", horario: "Sábados, 11h–13h" },
        { nome: "Adulto", horario: "Sextas, 19h–21h" },
      ],
      investimento: "Mensalidade a consultar. Bolsas integrais via PIÁrte.",
      vagas: "Turmas com vagas limitadas",
    },
  },
  {
    id: 3,
    categoria: "Alongamento",
    professor: "?",
    turmas: ["Metodologia", "Diferencial", "Turmas e horários"],

    popup: {
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo purus, euismod nec est nec, porttitor tristique metus.",
      metodologia:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo purus, euismod nec est nec, porttitor tristique metus. Sed imperdiet turpis quis eros pellentesque, eu rutrum quam consequat.",
      turmas: [
        { nome: "Adulto e Melhor Idade", horario: "Terças e Quintas, 8h–9h" },
      ],
      investimento: "Gratuito via Associação Cultural Amigos do CBARTES.",
      vagas: "Vagas disponíveis",
    },
  },
];