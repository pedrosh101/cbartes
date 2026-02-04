export interface Depoimentos {
  texto: string;
  autor: string;
  curso: string;
}

export const depoimentos: Depoimentos[] = [
  {
    texto:
      "O CBARTES transformou minha vida. Aqui aprendi não só a dançar, mas a me expressar e ter confiança. A bolsa PIÁrte me deu oportunidade que nunca imaginei ter.",
    autor: "Maria Silva",
    curso: "Dança Contemporânea",
  },
  {
    texto:
      "Meu filho era muito tímido. Depois que entrou no teatro do CBARTES, ele se desenvolveu completamente. Hoje é uma criança comunicativa e segura.",
    autor: "João Santos",
    curso: "Pai de aluno - Teatro Infantil",
  },
  {
    texto:
      "A qualidade do ensino é excepcional. Os professores são dedicados e o espaço é acolhedor. Recomendo de olhos fechados!",
    autor: "Ana Paula",
    curso: "Teatro Adulto",
  },
];
