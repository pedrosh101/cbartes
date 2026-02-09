export interface Depoimentos {
  texto: string;
  autor: string;
  curso: string;
}

export const depoimentos: Depoimentos[] = [
  {
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nisi fringilla, bibendum lorem quis, convallis mi. ",
    autor: "Maria Silva",
    curso: "Dança Contemporânea",
  },
  {
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nisi fringilla, bibendum lorem quis, convallis.",
    autor: "João Santos",
    curso: "Pai de aluno - Teatro Infantil",
  },
  {
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nisi fringilla, bibendum lorem quis, convallis mi.",
    autor: "Ana Paula",
    curso: "Teatro Adulto",
  },
];
