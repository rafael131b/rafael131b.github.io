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
    "Há mais de 5 anos crio e evoluo aplicações web e portais corporativos. Meu foco é o front-end com React e Angular, com back-end em Node.js e Spring Boot quando o projeto pede.",
};

export const about = [
  "Comecei em 2021 com React e Next.js, construindo interfaces para clientes de uma agência. Desde então trabalho em portais corporativos, onde o que importa é uma interface consistente, que aguente crescer e que outro desenvolvedor consiga manter.",
  "Hoje atuo na GX2 do front ao back: componentes React integrados ao Liferay, APIs REST em Node.js e Spring Boot, e o acompanhamento das entregas no Azure DevOps. Também uso IA generativa no dia a dia, com assistentes de código, automações e fluxos com múltiplos agentes.",
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
    lead: "Onde passo a maior parte do tempo. Construo de módulos isolados a portais inteiros.",
    points: [
      "Aplicações e portais corporativos com React, Next.js e TypeScript",
      "Módulos React integrados a portais Liferay e a serviços de back-end",
      "Bibliotecas de componentes reutilizáveis com Material UI e Tailwind CSS",
      "Manutenção evolutiva e ganhos de performance com Clean Code",
    ],
    tools: ["React", "Next.js", "TypeScript", "Material UI", "Tailwind CSS", "Liferay"],
  },
  angular: {
    title: "Angular",
    since: "Desde 2022",
    lead: "Componentes tipados, organizados para durar em produtos corporativos.",
    points: [
      "Componentes reutilizáveis com Angular e TypeScript",
      "Interfaces responsivas com foco em performance e manutenção",
      "Entregas do setup à publicação em produção, em squads ágeis",
      "Versionamento com Git e revisão de código no fluxo do time",
    ],
    tools: ["Angular", "TypeScript", "HTML5", "Sass", "Git"],
  },
};

export const toolkit = [
  {
    title: "Back-end",
    text: "APIs REST e integrações que alimentam as interfaces que construo.",
    items: ["Node.js", "Express", "NestJS", "Fastify", "Sequelize", "Java", "Spring Boot"],
  },
  {
    title: "IA aplicada",
    text: "IA generativa como parte do processo de desenvolvimento, não só como curiosidade.",
    items: ["Assistentes de código", "Automação de tarefas", "Fluxos com múltiplos agentes"],
  },
  {
    title: "Entrega",
    text: "O que mantém o código saudável depois que ele vai para produção.",
    items: ["Git", "Azure DevOps", "Testes", "Clean Code", "Scrum", "Kanban"],
  },
];

export const experience = [
  {
    company: "GX2",
    role: "Desenvolvedor Full Stack",
    period: "mar 2023 – atual",
    start: "2023",
    points: [
      "Desenvolvo e evoluo aplicações e portais corporativos com React, Next.js, TypeScript, Material UI, Tailwind CSS e Liferay.",
      "Construo e integro APIs REST com Node.js, Express, NestJS, Fastify e Java com Spring Boot, com persistência via Sequelize.",
      "Crio componentes reutilizáveis com atenção à consistência visual, escalabilidade e manutenção.",
      "Analiso problemas e melhoro performance em times multidisciplinares, organizando as demandas com Git e Azure DevOps.",
    ],
    tags: ["React", "Next.js", "Liferay", "Node.js", "NestJS", "Spring Boot"],
  },
  {
    company: "Almaviva",
    role: "Desenvolvedor Front-End",
    period: "mar 2022 – mar 2023",
    start: "2022",
    points: [
      "Desenvolvi módulos em React integrados a portais corporativos, da configuração do ambiente à integração com o back-end.",
      "Criei componentes reutilizáveis com TypeScript e Angular, focando em responsividade, performance e manutenção.",
      "Participei de squads ágeis do setup à publicação em produção, com versionamento em Git e revisão de código.",
    ],
    tags: ["React", "Angular", "TypeScript", "Git"],
  },
  {
    company: "Water Park Studios",
    role: "Desenvolvedor Front-End",
    period: "abr 2021 – dez 2021",
    start: "2021",
    points: [
      "Desenvolvi e mantive aplicações web com React, Next.js, JavaScript, HTML5, CSS3 e Sass.",
      "Implementei funcionalidades e melhorias de usabilidade e responsividade junto ao time técnico e aos requisitos do cliente.",
    ],
    tags: ["React", "Next.js", "JavaScript", "Sass"],
  },
];
