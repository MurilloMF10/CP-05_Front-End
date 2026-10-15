# Registro de prompts — Landing page de performance para esports

Este documento registra o processo da atividade. A ideia e a direção foram definidas pelo usuário em conversa com o Gemini; depois, o prompt técnico que o Gemini elaborou foi enviado para implementação comigo. As respostas do Gemini estão resumidas, conforme o registro fornecido pelo usuário.

## Processo em uma linha

**Explorar ideias com Gemini → escolher o produto → definir paleta e arquitetura → elaborar com Gemini o prompt de código → implementar a página → revisar e ajustar comigo.**

## Fase 1 — Definindo a ideia do produto

### 👤 Prompt do usuário para o Gemini

> Gostaria de sugestões de conceitos de produtos digitais alinhados ao meu perfil técnico e interesses, adequados para um projeto acadêmico ou portfólio. Priorize projetos com foco em desenvolvimento web/mobile, analytics ou integração de sistemas.

### 🤖 Resposta do Gemini — resumo

Apresentou cinco conceitos: Matcher de Componentes e Hardware; Tracker de Estatísticas e Rotina E-sports; Sistema IoT de Monitoramento em Tempo Real; Assistente de Estudos e Gestão Acadêmica; Hub Integrado de Mídia e Recomendações.

## Fase 2 — Refinando o escopo da landing page

### 👤 Prompt do usuário para o Gemini

> Para fins de validação rápida em uma landing page teste — com foco em alta conversão, proposta de valor clara e captação de leads —, quais desses conceitos possuem a menor complexidade de estrutura e maior apelo visual?

### 🤖 Resposta do Gemini — resumo

Comparou cinco caminhos: landing page para periférico/hardware exclusivo; monitor de status de setup e performance (SaaS); plataforma/app de treino e rotina E-sports; consultoria/mentoria de carreira tech; e-book/kit de templates para devs.

**Decisão:** seguir com o app de treino e rotina E-sports, por combinar escopo visual demonstrável com painéis, métricas e uma jornada fácil de apresentar.

## Fase 3 — Primeira definição da paleta

### 👤 Prompt do usuário para o Gemini

> Vamos seguir com o aplicativo de rotina para e-sports. Crie uma paleta visual composta por cinco cores: uma cor escura base, uma cor vibrante de destaque e uma cor neutra de suporte, além das cores de texto necessárias.

### 🤖 Resposta do Gemini — resumo

Propôs “Foco Competitivo & Energia”: base `#0D1117`, accent inicial `#0AFFBB`, cards `#21262D`, texto principal `#F0F6FC` e texto secundário `#8B949E`.

## Fase 4 — Ajuste fino da identidade visual

### 👤 Prompt do usuário para o Gemini

> [Upload de imagem de paleta de cores] Aprovado o conceito, mas faremos uma alteração na cor de destaque. Seguiremos com a seguinte paleta final configurada: `#0D1117` (Fundo), `#21262D` (Containers/Cards), `#8B949E` (Bordas/Secundários), `#B40000` (Accent/CTA em Vermelho Carmim) e `#F0F6FC` (Tipografia).

### 🤖 Resposta do Gemini — resumo

Mapeou o vermelho carmim `#B40000` para botões e chamadas à ação e ofereceu estruturar as seções da página.

### Paleta implementada

| Variável CSS | Cor | Papel |
|---|---|---|
| `--bg` | `#0D1117` | Fundo principal |
| `--surface` | `#21262D` | Containers, cards e painéis |
| `--line` | `#8B949E` | Bordas e elementos secundários |
| `--accent` | `#B40000` | Destaque e CTA |
| `--text` | `#F0F6FC` | Tipografia principal |

## Fase 5 — Arquitetura das seções

### 👤 Prompt do usuário para o Gemini

> Apresente cinco propostas distintas de arquitetura e fluxo de seções para a landing page, explorando diferentes abordagens estratégicas de UX e conversão.

### 🤖 Resposta do Gemini — resumo

Apresentou cinco abordagens: Fluxo Clássico de Conversão (SaaS Standard); Jornada do Jogador (Storytelling & Performance); Minimalista (Captação de Leads/Pré-lançamento); Planos e Monetização (Freemium/Pro); e Gaming Landing (interativa e visualmente agressiva).

**Decisão:** adotar a estrutura da Jornada do Jogador para conduzir a pessoa por preparação, treino, análise, evidências de produto e conversão.

## Fase 6 — Jornada e copywriting

### 👤 Prompt do usuário para o Gemini

> Adotaremos a Estrutura 2 (Jornada do Jogador). Detalhe o roteiro completo de copy, hierarquia visual e distribuição de conteúdo para cada uma das seções.

### 🤖 Resposta do Gemini — resumo

Detalhou seis blocos: Hero (headline e CTA), Ciclo de Alta Performance (Preparação, Treino, Análise), Showcase do Dashboard, Comparativo (com/sem app), Prova Social/Depoimentos, FAQ e CTA final.

## Fase 7 — Meta-prompt técnico para geração do código

### 👤 Prompt do usuário para o Gemini

> Elabore um prompt completo de engenharia de software para ser enviado a um LLM gerador de código. Instrua-o a criar a landing page em HTML5, CSS3 e JavaScript, aplicar a paleta final, documentar os caminhos das mídias, criar navbar sticky e Hero com overlay e imagem estática, e implementar hovers, transições e FAQ accordion.

### 🤖 Resposta do Gemini — resumo

Forneceu o prompt técnico final, organizado por diretrizes, design system, interatividade e comportamento do DOM. Esse foi o prompt que o usuário trouxe para orientar a implementação comigo.

## Fase 8 — Prompt inicial enviado para implementação

### 👤 Prompt inicial do usuário

> Atue como desenvolvedor Front-End especialista em HTML5 e CSS3 moderno. Crie uma landing page responsiva e interativa para um aplicativo de alta performance e rotina para esports, seguindo a paleta final. Inclua navbar fixa/interativa; Hero com overlay, imagem de fundo e mockup; três fases da jornada; dashboard; comparativo; depoimentos; FAQ; e footer. Use caminhos de mídia `ASSETS/...` comentados, ícones, hovers, transições, scroll suave, JavaScript leve e arquivos organizados.

### 🤖 Minha primeira resposta — resumo

Implementei uma primeira versão da landing page em `vibecode/`, com HTML, CSS, JavaScript e um registro inicial. Em seguida, o usuário explicou que a ideia, as cores, a estrutura e o meta-prompt tinham sido definidos anteriormente com o Gemini e pediu que o diário refletisse essa sequência e incluísse as referências usadas.

## Fase 9 — Implementação adaptada ao contexto

### 👤 Prompt de implementação

> Implemente em `vibecode/` uma landing page independente para LEVEL UP, aplicativo de rotina competitiva. Preserve a paleta e o fluxo da Jornada do Jogador. Use uma direção dark de esports, tipografia condensada, acento vermelho, interface de produto legível e versões desktop e mobile. Inclua as seções e interações do briefing, caminhos de mídia comentados e registre as decisões no processo. Evite prometer subida garantida de rank.

### Resultado implementado

- Navbar com efeito de vidro ao rolar, que esconde ao descer e reaparece ao subir; menu móvel expansível.
- Hero com fundo indicado no caminho solicitado e mockup de produto composto em HTML/CSS.
- Três fases de preparação, treino e análise; dashboard demonstrativo construído como interface HTML/CSS.
- Comparativo, depoimentos navegáveis, FAQ accordion, CTA final e footer.
- Layout responsivo, landmarks semânticos, controles rotulados e suporte a `prefers-reduced-motion`.

## Fase 10 — Revisão e correção de caminho

### 👤 Prompt de revisão

> Revise a entrega contra o briefing: confira se as seções e âncoras existem, se a paleta está em variáveis, se os caminhos de mídia e comentários estão presentes, se o mockup funciona sem arquivos externos e se menu, controles e FAQ são utilizáveis. Corrija discrepâncias e registre as decisões.

### Revisão realizada

1. A pasta `vibecode/` foi usada para manter a página separada dos outros exercícios existentes no projeto.
2. O mockup do Hero e o dashboard são interfaces HTML/CSS, então permanecem visíveis sem imagens externas. O HTML mantém os caminhos de mídia solicitados e seus comentários.
3. A navegação, os destinos de seção e os seletores usados nas interações foram conferidos estaticamente.
4. A copy fala de rotina e acompanhamento sem prometer subida de rank. Métricas e depoimentos da demonstração são fictícios, dentro do protótipo.
5. Não rodei testes automatizados nem validação visual em navegador nesta revisão.

## Referências visuais e funcionais

### ExitLag — referência visual

O usuário indicou o site da [ExitLag](https://www.exitlag.com/) como referência do universo gamer. A inspiração foi a atmosfera voltada a jogos competitivos, a comunicação direta e o uso de contraste e chamadas de ação evidentes. A página LEVEL UP não reproduz layout, textos ou marca da ExitLag. O site oficial descreve a ExitLag como serviço de otimização de conexão/rota para jogos; essa categoria contextualiza a referência, sem ser atribuída ao produto LEVEL UP.

### Tracker.gg — referência funcional

O usuário indicou o [Valorant Tracker, do Tracker.gg](https://tracker.gg/valorant), como referência familiar para consultar estatísticas, histórico de partidas e rankings. Essa referência ajudou a orientar o showcase para indicadores e evolução legíveis. LEVEL UP amplia o foco conceitual para preparação, rotina e treino; a página não sugere integração ou parceria com Tracker.gg.

### Pesquisa web para contextualização das referências

Consultei as páginas oficiais da [ExitLag](https://www.exitlag.com/) e do [Valorant Tracker](https://tracker.gg/valorant) para confirmar a descrição geral de cada serviço. A pesquisa contextualiza as referências visuais e funcionais; não foi usada para copiar componentes ou afirmar dados de mercado.

## Direção de identidade visual

- **Paleta:** base quase preta e azulada; cinza azulado em contornos e suporte; carmim para ações e estados de destaque; texto claro para contraste.
- **Tipografia:** Barlow Condensed nas manchetes e labels; DM Sans na interface e nos parágrafos.
- **Forma e textura:** painéis geométricos, divisórias técnicas, grids discretos e gráficos simples evocam telemetria e HUDs de jogos competitivos.
- **Hierarquia:** headline e CTA → painel do app → método em três fases → comparação e depoimentos → dúvidas → CTA final.
- **Tom:** competitivo, objetivo e encorajador; incentiva consistência sem garantir vitórias ou subida de rank.
