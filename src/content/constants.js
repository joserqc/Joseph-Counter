(() => {
	'use strict';

	const CC = (globalThis.JosephCounter = globalThis.JosephCounter || {});

	CC.DOM = Object.freeze({
		CHAT_MENU_TRIGGER: '[data-testid="chat-menu-trigger"]',
		MODEL_SELECTOR_DROPDOWN: '[data-testid="model-selector-dropdown"]',
		CHAT_PROJECT_WRAPPER: '.chat-project-wrapper',
		BRIDGE_SCRIPT_ID: 'jc-bridge-script'
	});

	CC.CONST = Object.freeze({
		CACHE_WINDOW_MS: 5 * 60 * 1000,
		CONTEXT_LIMIT_TOKENS: 200000
	});

	CC.COLORS = Object.freeze({
		PROGRESS_FILL_DARK: '#2c84db',
		PROGRESS_FILL_LIGHT: '#5aa6ff',
		PROGRESS_OUTLINE_DARK: '#787877',
		PROGRESS_OUTLINE_LIGHT: '#bfbfbf',
		PROGRESS_MARKER_DARK: '#ffffff',
		PROGRESS_MARKER_LIGHT: '#111111',
		RED_WARNING: '#ce2029',
		BOLD_LIGHT: '#141413',
		BOLD_DARK: '#faf9f5'
	});

	CC.TIPS = Object.freeze({

		// ── Prompt Engineering ────────────────────────────────────
		PROMPT: [
			{ emoji: '🧠', text: 'Use chain-of-thought: peça "pense passo a passo" para respostas mais precisas.' },
			{ emoji: '🎯', text: 'Few-shot > zero-shot: inclua 2-3 exemplos do formato que você quer na resposta.' },
			{ emoji: '📐', text: 'Structured output: peça JSON com schema definido para resultados parseáveis.' },
			{ emoji: '🔄', text: 'Self-consistency: peça 3 respostas e escolha a mais frequente para maior acurácia.' },
			{ emoji: '📝', text: 'Role prompting: "Você é um DBA PostgreSQL sênior" melhora qualidade técnica.' },
			{ emoji: '🎭', text: 'Prompts negativos funcionam: "NÃO inclua explicações, só o código" é mais direto.' },
			{ emoji: '🧩', text: 'Decomposição: quebre tarefas complexas em sub-prompts menores e sequenciais.' },
			{ emoji: '📊', text: 'Peça pros/cons: "Liste vantagens e desvantagens de X vs Y" gera análise equilibrada.' },
			{ emoji: '🔍', text: 'Peça "verifique sua resposta" no final — o Claude detecta erros próprios.' },
			{ emoji: '💡', text: 'Context window caro? Use /compact para comprimir contexto sem perder informação.' },
			{ emoji: '🏗️', text: 'System prompt > user prompt para instruções persistentes em toda a conversa.' },
			{ emoji: '📋', text: 'Markdown no prompt: use headers e listas para organizar instruções complexas.' },
			{ emoji: '🎯', text: 'Seja específico: "Gere um componente React com TypeScript" > "Faça um componente".' },
			{ emoji: '🔗', text: 'Chain prompts: use a saída de um prompt como entrada do próximo para fluxos complexos.' },
			{ emoji: '⚡', text: 'Cache de prompt: repita o mesmo prefixo para economizar tokens nas chamadas seguintes.' },
			{ emoji: '🧪', text: 'Temperature 0 para código e dados. Temperature 0.7+ para texto criativo.' },
			{ emoji: '📎', text: 'Anexe arquivos ao prompt: o Claude lê PDFs, imagens e código diretamente.' },
			{ emoji: '🗂️', text: 'Use XML tags (<context>, <task>) para separar seções do prompt — Claude adora.' },
			{ emoji: '🔄', text: 'Iteração > perfeição: refine o prompt em 2-3 rodadas ao invés de acertar de primeira.' },
			{ emoji: '📏', text: 'Especifique formato: "Responda em bullet points, máximo 5 itens" evita respostas longas.' },
		],

		// ── Claude Code CLI ──────────────────────────────────────
		CLAUDE_CODE: [
			{ emoji: '⌨️', text: '/compact comprime o contexto — use quando a conversa ficar longa.' },
			{ emoji: '🔧', text: '/init cria um CLAUDE.md com documentação automática do seu projeto.' },
			{ emoji: '📋', text: '/review faz code review do PR atual — detecta bugs antes do merge.' },
			{ emoji: '🛡️', text: '/security-review audita segurança das mudanças no branch atual.' },
			{ emoji: '🏃', text: 'Shift+Tab alterna entre modos de permissão: ask, auto-edit, yolo.' },
			{ emoji: '📁', text: 'CLAUDE.md na raiz do projeto = instruções automáticas em toda sessão.' },
			{ emoji: '🔀', text: 'Claude Code cria worktrees git isoladas — experimente sem medo.' },
			{ emoji: '⚡', text: 'Use /fast para output mais rápido quando não precisa de análise profunda.' },
			{ emoji: '🎯', text: 'Hooks em settings.json automatizam tarefas antes/depois de tool calls.' },
			{ emoji: '🔍', text: 'Ctrl+R busca no histórico de prompts anteriores.' },
			{ emoji: '🤖', text: 'Subagentes: Claude Code spawna agentes especializados para tarefas paralelas.' },
			{ emoji: '📦', text: '! na frente do comando roda direto no terminal sem sair do Claude Code.' },
			{ emoji: '🔄', text: '/loop roda um prompt repetidamente — ideal para monitorar builds ou deploys.' },
			{ emoji: '⏰', text: '/schedule cria agentes remotos que rodam em cron — automação sem supervisão.' },
			{ emoji: '🗃️', text: 'Memória persistente: Claude Code salva contexto entre sessões em ~/.claude/.' },
			{ emoji: '🧩', text: 'MCP servers conectam Claude Code a ferramentas externas: Supabase, Sentry, etc.' },
			{ emoji: '🏷️', text: 'Use Escape para cancelar uma resposta longa sem perder o contexto.' },
			{ emoji: '📊', text: 'Statusline mostra custo, git status e modelo — personalize com /statusline.' },
			{ emoji: '🔐', text: 'Permissões granulares: allowlist comandos específicos em settings.json.' },
			{ emoji: '🌿', text: 'Worktrees isolam mudanças em branches temporárias — zero risco pro main.' },
		],

		// ── Linux & Terminal ─────────────────────────────────────
		LINUX: [
			{ emoji: '🐧', text: 'Ctrl+R no terminal: busca reversa no histórico — mais rápido que seta pra cima.' },
			{ emoji: '📂', text: 'ncdu > du: navegue pelo disco interativamente e descubra o que tá ocupando espaço.' },
			{ emoji: '🔄', text: 'systemctl --user permite serviços sem sudo — ideal para bots e automações.' },
			{ emoji: '⚡', text: 'alias gs="git status" — cada segundo economizado em 1000 usos = 16 minutos.' },
			{ emoji: '🔍', text: 'ripgrep (rg) é 10x mais rápido que grep — instale com apt install ripgrep.' },
			{ emoji: '📋', text: 'xclip -selection clipboard: copie output do terminal para o clipboard.' },
			{ emoji: '🧹', text: 'docker system prune -a libera GBs de imagens/containers parados.' },
			{ emoji: '🔧', text: 'journalctl -fu nome.service: logs em tempo real de qualquer serviço systemd.' },
			{ emoji: '📊', text: 'htop > top: visualize processos com cores e atalhos interativos.' },
			{ emoji: '🌐', text: 'ss -tlnp mostra todas as portas em uso — substitui o netstat.' },
			{ emoji: '⏱️', text: 'time comando: meça quanto tempo qualquer comando leva para executar.' },
			{ emoji: '🔀', text: 'tmux: multiplexe terminais e mantenha sessões ativas mesmo desconectado.' },
			{ emoji: '📁', text: 'fd > find: busca de arquivos com sintaxe simples. fd "*.tsx" src/' },
			{ emoji: '🔗', text: 'ln -s cria symlinks: aponte configs para dotfiles versionados no git.' },
			{ emoji: '🛡️', text: 'chmod 600 ~/.ssh/*: permissões corretas em chaves SSH evitam erros silenciosos.' },
			{ emoji: '📝', text: 'tail -f /var/log/syslog | grep erro: monitore logs filtrando em tempo real.' },
			{ emoji: '🔄', text: 'rsync -avz > cp -r: cópia incremental, resume de onde parou, mostra progresso.' },
			{ emoji: '💾', text: 'Ctrl+Z suspende processo, bg retoma em background, fg traz de volta.' },
			{ emoji: '🧮', text: 'awk e sed: processamento de texto no terminal sem precisar de Python.' },
			{ emoji: '🔒', text: 'ssh-agent: carregue chaves uma vez, use em todas as conexões da sessão.' },
		],

		// ── TypeScript & React ───────────────────────────────────
		TYPESCRIPT: [
			{ emoji: '🏷️', text: 'Zod + Drizzle inferType: valide na borda, confie no meio — zero any.' },
			{ emoji: '⚡', text: 'as const satisfies Type: inferência exata + validação de tipo ao mesmo tempo.' },
			{ emoji: '🔄', text: 'TanStack Query: staleTime e gcTime controlam cache — evite refetch desnecessário.' },
			{ emoji: '🧩', text: 'Custom hooks (useLeads, useAuth): encapsule lógica de API em hooks reutilizáveis.' },
			{ emoji: '📦', text: 'Barrel exports (index.ts) simplificam imports mas pioram tree-shaking — use com cuidado.' },
			{ emoji: '🔍', text: 'Optional chaining ?. + nullish coalescing ??: defesa contra null em dados do banco.' },
			{ emoji: '🎯', text: 'Discriminated unions: type Result = {ok: true, data: T} | {ok: false, error: E}.' },
			{ emoji: '🏗️', text: 'React.lazy + Suspense: code splitting automático para rotas pesadas.' },
			{ emoji: '📋', text: 'React Hook Form + Zod resolver: validação tipada com zero re-renders.' },
			{ emoji: '🔐', text: 'Nunca exponha server-side env no client: use NEXT_PUBLIC_ só para variáveis públicas.' },
			{ emoji: '🧹', text: 'Biome > ESLint + Prettier: linter e formatter 10x mais rápido, uma config só.' },
			{ emoji: '💡', text: 'Zustand para state client, TanStack Query para state server — não misture.' },
			{ emoji: '🔄', text: 'useCallback e useMemo: só use quando o Profiler mostrar re-renders reais.' },
			{ emoji: '📐', text: 'Compound components: <Select><Select.Option/></Select> para APIs de UI flexíveis.' },
			{ emoji: '🏷️', text: 'PascalCase para componentes/types, camelCase para funções, UPPER_SNAKE para constantes.' },
			{ emoji: '🧪', text: 'Vitest + Playwright: unit tests rápidos + E2E confiável — melhor combo para React.' },
			{ emoji: '⚡', text: 'Server Components no Next.js: menos JS no client, dados direto no server.' },
			{ emoji: '🎨', text: 'Tailwind v4: @theme substitui tailwind.config — CSS nativo, mais rápido.' },
			{ emoji: '📊', text: 'shadcn/ui: copie componentes pro seu projeto — sem dependência de lib externa.' },
			{ emoji: '🔀', text: 'Turbo em monorepo: pnpm workspaces + turbo = builds paralelos e cache compartilhado.' },
		],

		// ── Supabase & PostgreSQL ────────────────────────────────
		SUPABASE: [
			{ emoji: '🔐', text: 'RLS: sempre teste com papel admin E regular antes de deploy — gaps são invisíveis.' },
			{ emoji: '🐍', text: 'snake_case no banco, camelCase no app: Drizzle mapeia automaticamente.' },
			{ emoji: '⚡', text: 'Índices em FKs e colunas de filtro: sem índice, Supabase faz full table scan.' },
			{ emoji: '🔄', text: 'Realtime: subscribe em tabelas para updates em tempo real — ideal para chat/kanban.' },
			{ emoji: '🧮', text: 'pgvector: embeddings 1024d com Voyage-4-large para RAG de alta qualidade.' },
			{ emoji: '🛡️', text: 'Cuidado com recursão em RLS: policies que consultam a própria tabela = loop infinito.' },
			{ emoji: '📋', text: 'Drizzle Kit: npx drizzle-kit push para migrations sem SQL manual.' },
			{ emoji: '🔍', text: 'EXPLAIN ANALYZE: veja o plano de execução real antes de otimizar consultas.' },
			{ emoji: '💾', text: 'Supabase Storage: upload direto do client com RLS — sem precisar de backend.' },
			{ emoji: '⏰', text: 'pg_cron: agende jobs SQL direto no Postgres — limpeza, agregações, manutenção.' },
			{ emoji: '🔗', text: 'Custom JWT Hook (D-020): claims personalizadas no token para RLS multi-tenant.' },
			{ emoji: '📊', text: 'getUser() > getSession(): getUser valida no servidor, getSession só lê o JWT local.' },
			{ emoji: '🧩', text: '@supabase/ssr: auth com cookies para SSR no Next.js — sem flickering de sessão.' },
			{ emoji: '🔄', text: 'Drizzle transactions: db.transaction(async (tx) => {...}) para operações atômicas.' },
			{ emoji: '📦', text: 'Supabase Edge Functions: TypeScript serverless com Deno — deploy em segundos.' },
			{ emoji: '🗄️', text: 'Partial indexes: CREATE INDEX ... WHERE deleted = false economiza espaço e acelera.' },
			{ emoji: '🔐', text: 'RLS dual-path: policy para admin (bypass via claim) + policy para user (via auth.uid).' },
			{ emoji: '⚡', text: 'Connection pooling: use Supavisor (porta 6543) para aplicações com muitas conexões.' },
			{ emoji: '📝', text: 'Migrations: sempre gere via drizzle-kit generate, nunca edite SQL gerado à mão.' },
			{ emoji: '🧪', text: 'Teste RLS no SQL Editor: SET ROLE authenticated; SET request.jwt.claims TO \'...\';' },
		],

		// ── Docker & DevOps ──────────────────────────────────────
		DEVOPS: [
			{ emoji: '🐳', text: 'docker compose up --build -d: rebuild e restarta em background com um comando.' },
			{ emoji: '📊', text: 'docker stats: monitore CPU, RAM e rede de cada container em tempo real.' },
			{ emoji: '🧹', text: 'docker system prune --volumes: libere disco removendo tudo que não está em uso.' },
			{ emoji: '🔍', text: 'docker compose logs -f --tail=100 service: últimas 100 linhas + follow.' },
			{ emoji: '📦', text: 'Multi-stage build: FROM node AS build + FROM node:slim — imagem final 3x menor.' },
			{ emoji: '🔄', text: 'Healthcheck no Dockerfile: HEALTHCHECK CMD curl -f http://localhost:3000/health.' },
			{ emoji: '🛡️', text: 'Nunca use :latest em produção: fixe a versão da imagem para deploys reproduzíveis.' },
			{ emoji: '⚡', text: 'PM2 ecosystem.config.js: cluster mode aproveita todos os cores da CPU.' },
			{ emoji: '🔗', text: 'Nginx proxy_pass: reverse proxy com SSL e rate limiting na frente do Node.' },
			{ emoji: '📋', text: 'systemd timer > cron: logs integrados, dependências, restart automático.' },
			{ emoji: '🔐', text: '.env nunca no git: use .env.example como template, .env.local para valores reais.' },
			{ emoji: '💾', text: 'Backup antes de deploy: pg_dump ou snapshot do Supabase — sempre.' },
			{ emoji: '🔄', text: 'GitHub Actions: CI/CD que testa e deploya automaticamente a cada push.' },
			{ emoji: '📊', text: 'Uptime monitoring: healthz endpoint + watchdog = alerta antes do cliente perceber.' },
			{ emoji: '🌐', text: 'Cloudflare DNS-only para subdomínios de VPS: n8n.zexia.tech, honda.zexia.tech.' },
		],

		// ── n8n & Automação ──────────────────────────────────────
		N8N: [
			{ emoji: '🔗', text: 'Webhook + Respond to Webhook: crie APIs inteiras sem backend — bom para MVPs.' },
			{ emoji: '⚡', text: 'Execute Workflow: reutilize fluxos como funções — DRY para automações.' },
			{ emoji: '🔄', text: 'Error Workflow: configure um fluxo global de erro que notifica no Telegram.' },
			{ emoji: '📊', text: 'Expressions: {{ $json.field }} acessa dados, {{ $now }} para timestamps.' },
			{ emoji: '🧩', text: 'Split In Batches: processe listas grandes sem estourar memória do n8n.' },
			{ emoji: '🔍', text: 'Sticky Notes: documente cada fluxo — seu eu futuro agradece.' },
			{ emoji: '🛡️', text: 'Credentials: nunca hardcode tokens — use o sistema de credenciais do n8n.' },
			{ emoji: '📋', text: 'Merge node: combine dados de APIs diferentes antes de processar.' },
			{ emoji: '⏰', text: 'Schedule Trigger: cron nativo do n8n — mais fácil que systemd timers.' },
			{ emoji: '🔄', text: 'Versioning: exporte workflows como JSON e versione no git antes de alterar.' },
		],

		// ── AI & Mastra ──────────────────────────────────────────
		AI: [
			{ emoji: '🤖', text: 'Mastra agents com tools: defina ferramentas como funções TS — type-safe e testável.' },
			{ emoji: '🧠', text: 'RAG: chunk + embed + rerank (Cohere) = respostas precisas sobre seus documentos.' },
			{ emoji: '📊', text: 'Voyage-4-large para embeddings: 1024d, melhor custo-benefício para português.' },
			{ emoji: '🔄', text: 'Streaming: passe stream: true para respostas progressivas — melhor UX.' },
			{ emoji: '💰', text: 'Prompt caching na API Claude: repita prefixo para economizar até 90% em tokens.' },
			{ emoji: '🧪', text: 'OpenRouter: roteie entre provedores por custo — Haiku para triagem, Opus para análise.' },
			{ emoji: '📦', text: 'LlamaParse v2: extraia texto de PDFs complexos com tabelas e imagens para RAG.' },
			{ emoji: '🔗', text: 'Tool use no Claude: defina funções que o modelo chama — bridges para APIs reais.' },
			{ emoji: '⚡', text: 'Batch API: envie 100+ prompts de uma vez com 50% de desconto — ideal para ETL.' },
			{ emoji: '🎙️', text: 'ElevenLabs Voice ID: clone de voz para assistentes — personalize seus agentes.' },
		],

		// ── Git & Workflow ───────────────────────────────────────
		GIT: [
			{ emoji: '🌿', text: 'git stash -u: salve mudanças incluindo arquivos novos — switch rápido de branch.' },
			{ emoji: '🔍', text: 'git log --oneline --graph: visualize branches e merges no terminal.' },
			{ emoji: '📋', text: 'git diff --cached: veja exatamente o que vai no próximo commit.' },
			{ emoji: '🔄', text: 'git rebase -i HEAD~3: reescreva os últimos 3 commits antes de push.' },
			{ emoji: '🏷️', text: 'Conventional commits: feat:, fix:, chore: — changelogs automáticos.' },
			{ emoji: '⚡', text: 'git worktree: trabalhe em 2 branches ao mesmo tempo sem stash.' },
			{ emoji: '🔗', text: 'gh pr create --fill: crie PR direto do terminal com título do commit.' },
			{ emoji: '🛡️', text: 'git push --force-with-lease: force push seguro que não sobrescreve work dos outros.' },
			{ emoji: '📊', text: 'git blame -L 10,20 file: descubra quem mudou linhas específicas e por quê.' },
			{ emoji: '🧹', text: 'git clean -fd: remova arquivos não rastreados — útil depois de build com artefatos.' },
		],

		// ── Performance & UX ─────────────────────────────────────
		PERF: [
			{ emoji: '⚡', text: 'Lighthouse no DevTools: audite performance, a11y e SEO com um clique.' },
			{ emoji: '🖼️', text: 'next/image: otimização automática, lazy loading e formatos modernos (WebP/AVIF).' },
			{ emoji: '📦', text: 'Bundle analyzer: npx next build --analyze mostra o que engorda seu JS.' },
			{ emoji: '🔄', text: 'Debounce em search inputs: 300ms evita requisições a cada keystroke.' },
			{ emoji: '📊', text: 'Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1 — métricas que importam.' },
			{ emoji: '💾', text: 'Cache-Control headers: stale-while-revalidate para dados que mudam pouco.' },
			{ emoji: '🧩', text: 'Intersection Observer: lazy load de componentes quando entram na viewport.' },
			{ emoji: '📱', text: 'Mobile first: min-width media queries, touch targets >= 44px.' },
			{ emoji: '🔐', text: 'CORS: configure origin específico, nunca * em produção com credentials.' },
			{ emoji: '⏱️', text: 'React Profiler: identifique re-renders desnecessários antes de otimizar.' },
		],
	});

	CC.TIP_CATEGORIES = Object.freeze([
		'PROMPT', 'CLAUDE_CODE', 'LINUX', 'TYPESCRIPT',
		'SUPABASE', 'DEVOPS', 'N8N', 'AI', 'GIT', 'PERF'
	]);
})();
