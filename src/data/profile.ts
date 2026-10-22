export type Framework = "react" | "angular";

export const profile = {
  name: ["Rafael", "Timoteo", "Carneiro"],
  role: "Desenvolvedor full stack",
  location: "Caieiras, SP",
  email: "rafa.timoteo.c@gmail.com",
  phone: "(11) 97596-8110",
  phoneHref: "tel:+5511975968110",
  whatsapp: "https://wa.me/5511975968110",
  summary:
    "Há mais de 5 anos construo aplicações web e portais corporativos. Meu forte é o front-end com React e Angular, e no back-end já desenvolvi várias APIs com Spring Boot e Node.js.",
};

export const about = [
  "Comecei em 2021 numa agência, fazendo sites e aplicações com React e Next.js para clientes. De lá fui para o mundo dos portais corporativos, onde a interface precisa ser consistente e fácil de manter por qualquer pessoa do time.",
  "Na GX2, onde fiquei até abril de 2026, trabalhei do front ao back: componentes React dentro do Liferay, APIs com Spring Boot e Node.js e o dia a dia do time no Azure DevOps. No caminho, a IA generativa virou parte do meu fluxo de trabalho, com assistentes de código, automações e fluxos com vários agentes.",
];

export const facts = [
  { label: "Experiência", value: "5+ anos" },
  { label: "Formação", value: "Análise de Sistemas, Universidade São Judas" },
  { label: "Inglês", value: "Intermediário" },
  { label: "Local", value: "Caieiras, SP" },
];

export const focus: Record<
  Framework,
  { title: string; since: string; lead: string; points: string[]; tools: string[] }
> = {
  react: {
    title: "React",
    since: "Desde 2021",
    lead: "Foi com React que comecei, e é onde passei a maior parte da carreira. Já fiz de landing pages a portais inteiros.",
    points: [
      "Portais e aplicações com Next.js, muitas vezes rodando dentro do Liferay",
      "Estado global com Zustand, sem a burocracia de uma store gigante",
      "Validação de formulários e de respostas da API com Zod",
      "Bibliotecas de componentes com Material UI e Tailwind CSS",
    ],
    tools: ["React", "Next.js", "TypeScript", "Zustand", "Zod", "Material UI", "Tailwind CSS", "Liferay"],
  },
  angular: {
    title: "Angular",
    since: "Desde 2022",
    lead: "No Angular eu construía as telas: interfaces completas, do layout ao estado que mantém tudo funcionando junto.",
    points: [
      "Interfaces responsivas montadas com componentes reutilizáveis",
      "Gerenciamento de estado para manter dados e telas sincronizados",
      "Telas conectadas aos serviços de back-end, com tudo tipado em TypeScript",
      "Trabalho em squad, com revisão de código e entregas até produção",
    ],
    tools: ["Angular", "TypeScript", "Gerenciamento de estado", "HTML5", "Sass"],
  },
};

export const toolkit = [
  {
    title: "Back-end",
    text: "Já desenvolvi várias APIs REST com Spring Boot, incluindo autenticação com JWT. No Node.js trabalho com Express, NestJS e Fastify.",
    items: ["Java", "Spring Boot", "JWT", "Autenticação", "Node.js", "NestJS", "Express", "Fastify", "Sequelize"],
  },
  {
    title: "IA aplicada",
    text: "Uso IA no dia a dia para escrever e revisar código, automatizar tarefas repetitivas e montar fluxos com vários agentes.",
    items: ["Assistentes de código", "Automação de tarefas", "Fluxos com múltiplos agentes"],
  },
  {
    title: "Entrega",
    text: "O que mantém o projeto saudável depois do deploy: versionamento, testes e um processo claro com o time.",
    items: ["Git", "Azure DevOps", "Testes", "Clean Code", "Scrum", "Kanban"],
  },
];

export const experience = [
  {
    company: "GX2",
    role: "Desenvolvedor Full Stack",
    period: "mar 2023 – abr 2026",
    start: "2023",
    points: [
      "Desenvolvi e evoluí portais corporativos com React, Next.js e TypeScript integrados ao Liferay, usando Material UI e Tailwind CSS.",
      "Criei várias APIs REST com Java e Spring Boot, incluindo autenticação com JWT, além de serviços em Node.js com Express, NestJS e Fastify.",
      "Usei Zustand para o estado global das aplicações e Zod para validar formulários e dados vindos da API.",
      "Trabalhei com times multidisciplinares, organizando as entregas no Azure DevOps.",
    ],
    tags: ["React", "Next.js", "Zustand", "Liferay", "Spring Boot", "JWT", "Node.js"],
  },
  {
    company: "Almaviva",
    role: "Desenvolvedor Front-End",
    period: "mar 2022 – mar 2023",
    start: "2022",
    points: [
      "Desenvolvi módulos em React para portais corporativos, da configuração do ambiente até a integração com o back-end.",
      "Construí interfaces em Angular com TypeScript, cuidando do gerenciamento de estado e da responsividade das telas.",
      "Fiz parte de squads ágeis, com revisão de código e entregas até produção.",
    ],
    tags: ["React", "Angular", "TypeScript", "Git"],
  },
  {
    company: "Water Park Studios",
    role: "Desenvolvedor Front-End",
    period: "abr 2021 – dez 2021",
    start: "2021",
    points: [
      "Desenvolvi e mantive sites e aplicações web com React, Next.js, JavaScript e Sass.",
      "Implementei funcionalidades e melhorias de usabilidade conversando direto com o time técnico e com os pedidos do cliente.",
    ],
    tags: ["React", "Next.js", "JavaScript", "Sass"],
  },
];
