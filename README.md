# Portfólio de Rafael Timoteo

Portfólio pessoal de desenvolvedor full stack com foco em React e Angular.

O seletor **React / Angular** (no menu ou nas abas do editor de código do topo) troca o site inteiro: cor de destaque, ilustração de fundo, componente digitado e a largura da tipografia do nome.

## Stack

- React 19 + TypeScript
- Vite
- [Motion](https://motion.dev) para as animações
- Fonte Archivo (eixo de largura variável) e JetBrains Mono

## Rodando

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # serve o build localmente
```

## Editando o conteúdo

Todo o texto (resumo, experiências, competências, contato) fica em `src/data/profile.ts`.
Os trechos de código do topo ficam em `src/code.ts`.

## Publicação

O site é publicado no GitHub Pages em https://rafael131b.github.io a cada push na branch `main` (veja `.github/workflows/deploy.yml`).
