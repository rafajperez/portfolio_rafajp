export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  deployUrl?: string; // Opcional, caso o projeto não esteja rodando
  imageUrl?: string;
}
