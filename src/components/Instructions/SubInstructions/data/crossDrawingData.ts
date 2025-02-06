import { SubInstructionsEntity } from '../types';

export const crossDrawingData: SubInstructionsEntity[] = [
  {
    label: 'Carte 1 : La Situation Actuelle (ou le Pour)',
    description: `Cette carte symbolise
              l'état actuel de la situation ou la personne qui pose la question.
              Elle peut également indiquer les forces qui soutiennent la
              personne.`,
  },
  {
    label: 'Carte 2 : Les Obstacles (ou le Contre) ',
    description: ` Cette carte montre ce qui
              bloque ou ce qui pourrait poser des problèmes. Elle peut révéler
              des peurs, des doutes ou des influences extérieures négatives.`,
  },
  {
    label: "Carte 3 : Les Ressources et le Conseils (ou l'inconscient)",
    description: `Cette
              carte représente ce qui est à la base de la situation. Cela peut
              inclure des ressources cachées, des conseils utiles, ou des choses
              dont la personne n'est pas encore consciente.`,
  },
  {
    label: 'Carte 4 : Les Influences Futures (ou le résultat à court terme)',
    description: `Ici, tu découvres ce qui est à venir dans la situation. Cela peut
    être une action à entreprendre ou une énergie qui va entrer en jeu
    très bientôt.`,
  },
  {
    label: 'Carte 5 : La Synthès (ou le Résultat final)',
    description: `C'est LA carte qui
              donne le résultat global du tirage. Elle résume l'ensemble de la
              situation et offre une direction finale ou un résultat probable.`,
  },
];
