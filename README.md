# Joseph Counter

Extensão de navegador que mostra contagem de tokens, timer de cache, barras de uso e **155 dicas de dev** no [claude.ai](https://claude.ai).

Fork personalizado do [Claude Counter](https://github.com/she-llac/claude-counter) (MIT).

## Funcionalidades

- **Contagem de tokens** — Contagem aproximada de tokens da conversa atual, com mini barra de progresso
- **Timer de cache** — Countdown mostrando quanto tempo a conversa permanece em cache
- **Barras de uso** — Sessão (5h) e semanal (7 dias) com barras de progresso e countdown de reset
- **155 dicas rotativas** — Dicas personalizadas que rotacionam a cada 30s (clique para trocar)
- **Interface em Português** — Todos os textos e tooltips em PT-BR

## Categorias de Dicas

| Categoria | Qtd | Temas |
|-----------|-----|-------|
| Prompt Engineering | 20 | Chain-of-thought, few-shot, structured output, XML tags |
| Claude Code CLI | 20 | Slash commands, hooks, worktrees, subagentes, MCP |
| Linux & Terminal | 20 | ripgrep, tmux, systemd, rsync, ssh-agent |
| TypeScript & React | 20 | Zod, TanStack Query, Zustand, shadcn, Tailwind v4 |
| Supabase & PostgreSQL | 20 | RLS, pgvector, Drizzle, Custom JWT, Edge Functions |
| Docker & DevOps | 15 | Multi-stage builds, PM2, Nginx, GitHub Actions |
| n8n & Automação | 10 | Webhooks, Error Workflow, Split In Batches |
| AI & Mastra | 10 | RAG, Voyage embeddings, tool use, Batch API |
| Git & Workflow | 10 | Worktrees, rebase interativo, conventional commits |
| Performance & UX | 10 | Lighthouse, Web Vitals, bundle analyzer, lazy loading |

## Instalação

### Chrome / Edge / Chromium

1. Clone ou baixe este repositório
2. Acesse `chrome://extensions` e ative o **Modo do desenvolvedor**
3. Clique em **Carregar sem compactação** e selecione a pasta do projeto

## Privacidade

- Todos os dados ficam locais — sem servidores externos, sem rastreamento
- Faz requisições apenas para `claude.ai`

## Créditos

- Fork de [Claude Counter](https://github.com/she-llac/claude-counter) por she-llac (MIT)
- Contagem de tokens via [gpt-tokenizer](https://github.com/niieani/gpt-tokenizer) (MIT)

## Licença

MIT — veja [LICENSE](./LICENSE)
