// src/types.ts
export interface Project {
  title: string;
  category: 'Web' | 'Logiciel' | 'Système' | 'École';
  description: string;
  tags: string[];
  githubUrl?: string;
}

export const MY_PROJECTS: Project[] = [
  {
    title: "Dépannage JCV",
    category: "Web",
    description: "Refonte complète du site vitrine JCV Dépannage avec GeneratePress et optimisation SEO.",
    tags: ["WordPress", "SEO", "Performances"],
    githubUrl: "https://depannage.jeancharles-vente.fr"
  },
  {
    title: "Projet École Télécom",
    category: "École",
    description: "Développement d'un algorithme de gestion de réseaux de capteurs (en cours).",
    tags: ["C++", "Algorithmique", "Réseau"],
  }
];
