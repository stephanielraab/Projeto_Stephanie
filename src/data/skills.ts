import {
  Braces,
  Code2,
  Atom,
  Layout,
  Wind,
  GitBranch,
  BookOpen,
  Smartphone,
  Server,
  Coffee,
  FileCode2,
} from "lucide-react";


export const skills = [
  {
    name: "JavaScript",
    icon: Braces,
    category: "Frontend",
    description: "ES6+, manipulação do DOM",
    color: "from-yellow-400 via-yellow-300 to-orange-400",
  },
  {
    name: "TypeScript",
    icon: Code2,
    category: "Frontend",
    description: "Tipagem, segurança e escalabilidade",
    color: "from-blue-500 via-blue-400 to-cyan-400",
  },
  {
    name: "React",
    icon: Atom,
    category: "Frontend",
    description: "Componentes, hooks e estado",
    color: "from-cyan-500 via-sky-400 to-blue-500",
  },
  {
    name: "Next.js",
    icon: Layout,
    category: "Frontend",
    description: "SSR, App Router e SEO",
    color: "from-zinc-500 via-zinc-400 to-zinc-600",
  },
  {
    name: "Tailwind CSS",
    icon: Wind,
    category: "Styling",
    description: "Design system utility-first",
    color: "from-sky-400 via-teal-400 to-cyan-400",
  },
  {
    name: "Git",
    icon: GitBranch,
    category: "Tools",
    description: "Versionamento e fluxo Git",
    color: "from-red-500 via-orange-400 to-yellow-400",
  },
  {
  name: "React Native",
  icon: Smartphone, 
  category: "Mobile",
  description: "Desenvolvimento de apps mobile com React Native",
  color: "from-blue-500 via-cyan-400 to-green-400",
  },

  {
    name: "Node.js",
    icon: Server,
    category: "Backend",
    description: "APIs REST, runtime e ecossistema npm",
    color: "from-green-500 via-green-400 to-emerald-500",
  },

  {
    name: "Java",
    icon: Coffee,
    category: "Backend",
    description: "POO, lógica de programação e back-end",
    color: "from-orange-500 via-red-500 to-red-600",
  },

  {
    name: "Python",
    icon: FileCode2,
    category: "Backend",
    description: "Scripts, automação e back-end",
    color: "from-blue-500 via-yellow-400 to-yellow-300",
  },

  {
    name: "Em aprendizado em novas tecnologias",
    icon: BookOpen,
    category: "Studying",
    description: "Estudando novas tecnologias e aprimorando boas práticas no desenvolvimento front-end.",
    color: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
    status: "studying",
  },
];