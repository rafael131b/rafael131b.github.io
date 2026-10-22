import type { Framework } from "./data/profile";

export const snippets: Record<Framework, { file: string; code: string }> = {
  react: {
    file: "Rafael.tsx",
    code: `import { useState } from "react";

export function Rafael() {
  const [stack] = useState([
    "React", "Next.js", "TypeScript",
  ]);

  return (
    <Dev
      role="Full Stack"
      since={2021}
      stack={stack}
    />
  );
}`,
  },
  angular: {
    file: "rafael.component.ts",
    code: `import { Component, signal } from "@angular/core";

@Component({
  selector: "app-rafael",
  imports: [DevComponent],
  template: \`
    <app-dev
      role="Full Stack"
      [since]="2022"
      [stack]="stack()" />
  \`,
})
export class RafaelComponent {
  stack = signal(["Angular", "TypeScript", "Sass"]);
}`,
  },
};

export const rendered: Record<Framework, { since: string; stack: string[] }> = {
  react: { since: "React desde 2021", stack: ["React", "Next.js", "TypeScript"] },
  angular: { since: "Angular desde 2022", stack: ["Angular", "TypeScript", "Sass"] },
};

export type Token = { text: string; kind: string };

const rules: [RegExp, string][] = [
  [/^\/\/[^\n]*/, "comment"],
  [/^"[^"\n]*"/, "string"],
  [/^`/, "punct"],
  [/^@\w+/, "decorator"],
  [/^<\/?[A-Za-z][\w-]*/, "tag"],
  [/^\/?>/, "tag"],
  [/^\b(import|from|export|function|const|return|class|new)\b/, "keyword"],
  [/^\b\d+\b/, "number"],
  [/^\[?[a-zA-Z]+\]?(?==)/, "attr"],
  [/^[A-Z]\w*/, "type"],
  [/^[a-z_$][\w$]*(?=\()/, "fn"],
  [/^[a-z_$][\w$-]*/, "ident"],
  [/^\s+/, "space"],
  [/^[{}()[\],;:.=]/, "punct"],
  [/^./, "ident"],
];

export function tokenize(src: string): Token[] {
  const out: Token[] = [];
  let rest = src;
  while (rest.length) {
    for (const [re, kind] of rules) {
      const m = rest.match(re);
      if (m) {
        out.push({ text: m[0], kind });
        rest = rest.slice(m[0].length);
        break;
      }
    }
  }
  return out;
}
