import type { Framework } from "./data/profile";

export const snippets: Record<Framework, { file: string; code: string }> = {
  react: {
    file: "Rafael.tsx",
    code: `import { create } from "zustand";
import { z } from "zod";

const Dev = z.object({
  role: z.string(),
  stack: z.array(z.string()),
});

const useDev = create(() => Dev.parse({
  role: "Full Stack",
  stack: ["React", "Zustand", "Zod"],
}));

export function Rafael() {
  const dev = useDev();
  return <DevCard {...dev} />;
}`,
  },
  angular: {
    file: "rafael.component.ts",
    code: `@Injectable({ providedIn: "root" })
export class DevState {
  readonly stack = signal(["Angular", "TypeScript"]);
  add(tech: string) {
    this.stack.update((s) => [...s, tech]);
  }
}

@Component({
  selector: "app-rafael",
  template: \`<app-dev-card [stack]="state.stack()" />\`,
})
export class RafaelComponent {
  state = inject(DevState);
}`,
  },
};

export const rendered: Record<Framework, { since: string; stack: string[] }> = {
  react: { since: "React desde 2021", stack: ["React", "Zustand", "Zod"] },
  angular: { since: "Angular desde 2022", stack: ["Angular", "TypeScript"] },
};

export type Token = { text: string; kind: string };

const rules: [RegExp, string][] = [
  [/^\/\/[^\n]*/, "comment"],
  [/^"[^"\n]*"/, "string"],
  [/^`/, "punct"],
  [/^@\w+/, "decorator"],
  [/^=>/, "punct"],
  [/^<\/?[A-Za-z][\w-]*/, "tag"],
  [/^\/?>/, "tag"],
  [/^\b(import|from|export|function|const|return|class|new|readonly|this)\b/, "keyword"],
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
