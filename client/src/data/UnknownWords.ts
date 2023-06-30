import { v4 as uuidv4 } from "uuid";

interface UnknownWord {
  id: number;
  word: string;
  definition: string;
  translation?: string;
}

export const UnknownWords: UnknownWord[][] = [
  [
    {
      id: 0,
      word: " premier",
      definition: "ci, interdit, qui n’est pas permis.",
      translation: "აკრძალვა",
    },
    {
      id: 1,
      word: "Défendre",
      definition: "ci, interdit, qui n’est pas permis.",
      translation: "აკრძალვა",
    },
    {
      id: 2,
      word: "Une Hotellerie",
      definition: "maison où on loue des chambres.",
      translation: "სახლი სადაც ოთახებს აქირავებენ, სასტუმრო",
    },
    {
      id: 3,
      word: "Pendre",
      definition: "ici, descendre.",
    },
    {
      id: 4,
      word: "La chance",
      definition: "quelque chose de bien qui nous arrive.",
    },
    {
      id: 5,
      word: "Les difficultés",
      definition: "les choses difficiles, les problèmes.",
    },
    {
      id: 6,
      word: "Donner un conseil",
      definition: "dire à quelqu'un ce qu'on pense qu'il doit faire.",
    },
    {
      id: 7,
      word: "Un médicament",
      definition: "ça sert à guérir quand on est malade ou blessé.",
    },
    {
      id: 8,
      word: "Nour",
      definition: "Nour definition goes here.",
    },
    {
      id: 9,
      word: "Guérir",
      definition: "rendre la santé.",
    },
  ],
  [
    {
      id: 10,
      word: "Insulter (quelqu'un)",
      definition: "lui dire des choses désagréables, des injures.",
    },
    {
      id: 11,
      word: "Écouter avec attention",
      definition: "écouter en essayant de bien retenir.",
    },
    { id: 12, word: "Se tromper", definition: "ici, croire une chose fausse." },
    { id: 13, word: "Fort", definition: "ici, gros." },
    {
      id: 14,
      word: "Faire une remarque",
      definition: "ici, dire quelque chose de désagréable.",
    },
    {
      id: 15,
      word: "La colère monte en lui",
      definition: "il devient de plus en plus fâché.",
    },
    { id: 16, word: "Une parole", definition: "un mot." },
    {
      id: 17,
      word: "Sortir l'épée du fourreau",
      definition: "sortir l'épée de son étui.",
    },
    {
      id: 18,
      word: "Faire semblant",
      definition: "essayer de faire croire quelque chose de faux.",
    },
    {
      id: 19,
      word: "Un bouton d'or",
      definition:
        "une petite fleur jaune qui pousse dans les prairies de France.",
    },
    {
      id: 20,
      word: "Tenir à",
      definition: "vouloir vraiment faire cette chose.",
    },
    { id: 21, word: "Se moquer de quelqu'un", definition: "rire de lui." },
    { id: 22, word: "À mi-voix", definition: "à voix basse." },
    {
      id: 23,
      word: "Saluer",
      definition: "avant de se battre, les nobles se saluent.",
    },
    {
      id: 24,
      word: "Se mettre en garde",
      definition: "placer l'épée devant soi pour se préparer à se battre.",
    },
    { id: 25, word: "L'hôtelier", definition: "le patron de l'hôtellerie." },
    {
      id: 26,
      word: "Une pelle",
      definition: "un objet qui sert à faire des trous dans le sol.",
    },
    {
      id: 27,
      word: "Un ennemi",
      definition:
        "quelqu'un qui se bat contre quelqu'un d’autre et qui lui veut du mal.",
    },
    {
      id: 28,
      word: "Il ne sait pas à qui il a affaire",
      definition: "il ne sait pas quel genre d'homme est en face de lui.",
    },
  ],
  [
    { id: 29, word: "Nommer", definition: "dire le nom" },
    { id: 30, word: "L'hôte", definition: "ici, l'hôtelier" },
    { id: 31, word: "Gêner", definition: "déranger" },
    { id: 32, word: "Sans doute", definition: "ici, oui, sûrement" },
    {
      id: 33,
      word: "Faites mon compte",
      definition: "dites-moi combien je dois vous payer",
    },
    {
      id: 34,
      word: "Un coup d'œil",
      definition: "un regard rapide mais qui veut dire beaucoup de choses",
    },
    { id: 35, word: "Chasser", definition: "ici, faire partir" },
    { id: 36, word: "Arrêter quelqu'un", definition: "le mettre en prison" },
    {
      id: 37,
      word: "Il le pousse à",
      definition: "il lui fait sentir qu’il doit faire quelque chose",
    },
    { id: 38, word: "Aveugle", definition: "qui ne peut pas voir" },
    { id: 39, word: "Du linge", definition: "du tissu" },
    { id: 40, word: "La portière", definition: "la porte de la voiture" },
    {
      id: 41,
      word: "Prévenir",
      definition: "dire à quelqu'un une chose avant qu'elle n'arrive",
    },
    { id: 42, word: "Misérable", definition: "méchant homme" },
  ],
  [
    {
      id: 43,
      word: "L'hôtelier",
      definition:
        "maladie : l’hôtelier pense que d’Artagnan sera malade pendant onze jours et qu'il lui fera payer une pièce d’or par jour.",
    },
    {
      id: 44,
      word: "Des produits",
      definition: "ici, des choses qui vont lui servir à faire le médicament",
    },
    {
      id: 45,
      word: "Elles manquent se rouvrir",
      definition: "elles vont presque s'ouvrir à nouveau",
    },
    {
      id: 46,
      word: "Plaindre",
      definition: "dire à quelqu'un qu'on n’est pas content",
    },
    { id: 47, word: "Bon marché", definition: "pas cher du tout" },
    {
      id: 48,
      word: "Coudre",
      definition: "arranger avec du fil et une aiguille",
    },
    { id: 49, word: "Déchirés", definition: "en morceaux" },
  ],
  [
    {
      id: 50,
      word: "Avoir de l'esprit",
      definition: "savoir faire rire de façon intelligente",
    },
    {
      id: 51,
      word: "Une maison de jeu",
      definition:
        "un endroit où on joue aux cartes et à d'autres jeux pour de l'argent",
    },
    {
      id: 52,
      word: "Font sonner leurs épées",
      definition:
        "montrent qu'ils sont toujours prêts à se battre avec leurs épées",
    },
    {
      id: 53,
      word: "Il est aimé comme un dieu",
      definition: "il est très aimé",
    },
  ],
  [
    { id: 54, word: "Une idée", definition: "une pensée, un concept" },
    { id: 55, word: "Le comte", definition: "un titre de noblesse" },
    { id: 56, word: "Blesser", definition: "causer une blessure, faire mal" },
    {
      id: 57,
      word: "L'argent",
      definition:
        "la monnaie, les pièces et les billets utilisés pour acheter des choses",
    },
    {
      id: 58,
      word: "Le cheval",
      definition: "un animal utilisé pour le transport ou l'agriculture",
    },
    {
      id: 59,
      word: "Le voleur",
      definition:
        "une personne qui vole, qui prend les biens des autres sans permission",
    },
    {
      id: 60,
      word: "La forêt",
      definition: "un grand espace rempli d'arbres et de végétation",
    },
    {
      id: 61,
      word: "Le secret",
      definition:
        "quelque chose que l'on ne doit pas révéler ou partager avec d'autres",
    },
    {
      id: 62,
      word: "Le mystère",
      definition:
        "quelque chose d'inexpliqué, qui suscite de l'intérêt et de la curiosité",
    },
    {
      id: 63,
      word: "La trahison",
      definition:
        "agir contre quelqu'un en ne respectant pas la confiance ou la loyauté",
    },
    {
      id: 64,
      word: "Le danger",
      definition: "une situation potentiellement nuisible ou risquée",
    },
    {
      id: 65,
      word: "Le combat",
      definition: "une lutte physique entre deux personnes ou groupes",
    },
    {
      id: 66,
      word: "La victoire",
      definition: "le résultat positif d'une compétition ou d'un conflit",
    },
    {
      id: 67,
      word: "La défaite",
      definition: "le résultat négatif d'une compétition ou d'un conflit",
    },
    {
      id: 68,
      word: "La fuite",
      definition:
        "quitter rapidement un lieu pour échapper à un danger ou à une situation désagréable",
    },
    {
      id: 69,
      word: "Le trésor",
      definition:
        "une collection de biens précieux, souvent cachés ou gardés en sécurité",
    },
    {
      id: 70,
      word: "La magie",
      definition:
        "l'utilisation de forces surnaturelles pour produire des effets mystérieux",
    },
  ],

  // Additional arrays representing words and definitions for other chapters
];
