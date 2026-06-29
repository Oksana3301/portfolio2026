/* ============================================================
   Atika Dewi Suryani — Portfolio 2026
   Project data + case-study / build renderer + routing.
   Scrapbook editorial style; content merged from the
   finalized Claude Design handoff.
   ============================================================ */

/* ---------- helpers ---------- */
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function hexToRgba(hex, a) {
  const n = hex.replace("#", "");
  const x = n.length === 3 ? n.split("").map((c) => c + c).join("") : n;
  const r = parseInt(x.slice(0, 2), 16), g = parseInt(x.slice(2, 4), 16), b = parseInt(x.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}
const WRAP = "max-width:1120px; margin:0 auto; padding:0 36px;";
const CARD = "background:#FCF7EB; border:1px solid #E2D6BC;";
const LEAD = "font-size:clamp(17px,2.2vw,20px); line-height:1.55; max-width:760px; color:#3A3325;";
const secOpen = `<section style="padding:54px 0; border-bottom:1px solid #E2D6BC;"><div style="${WRAP}">`;
const dashEl = (A) => `<span style="width:24px; height:2px; background:${A}; display:inline-block; flex:none;"></span>`;
const labelEl = (A, t, mt) => `<div style="display:flex; align-items:center; gap:12px; font-family:'Space Mono',monospace; font-size:12px; letter-spacing:.26em; text-transform:uppercase; color:#9C8E74; margin:${mt || "0"} 0 14px;">${dashEl(A)}${t}</div>`;
const titleEl = (t) => `<h2 style="font-family:'Playfair Display',serif; font-weight:800; font-size:clamp(32px,5vw,52px); line-height:1.04; letter-spacing:-.01em; margin:0 0 26px; color:#2B2419;">${t}</h2>`;
const heroEl = (p) => `<section style="padding:60px 0 4px;"><div style="${WRAP}">
    <div style="font-family:'Space Mono',monospace; font-size:12.5px; letter-spacing:.3em; text-transform:uppercase; color:${p.accent}; margin-bottom:14px;">${esc(p.kicker_eyebrow)}</div>
    <h1 style="font-family:'Playfair Display',serif; font-weight:800; font-size:clamp(42px,8vw,86px); line-height:.98; letter-spacing:-.01em; margin:0; color:${p.accent};">${esc(p.name)}</h1>
    <div style="margin-top:18px; display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <span style="font-family:'Playfair Display',serif; font-style:italic; font-size:14px; color:#2B2419; border:1px solid #D2C4A4; border-radius:999px; padding:4px 13px;">${esc(p.role_badge)}</span>
      ${p.draft ? `<span style="font-family:'Space Mono',monospace; font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:#8A6A1E; background:rgba(198,138,46,.18); border:1px solid rgba(198,138,46,.4); border-radius:6px; padding:4px 9px;">Draft</span>` : ""}
    </div>
    <p style="color:#5C5340; font-size:clamp(16px,2.2vw,20px); max-width:720px; margin-top:18px; line-height:1.5;">${esc(p.tagline)}</p>
  </div></section>`;
const footEl = `<footer style="padding:40px 0 70px;"><div style="${WRAP}"><div style="color:#9C8E74; font-size:12.5px;">© Atika Dewi Suryani 2026</div></div></footer>`;

/* ---------- 12 projects ---------- */
const PROJECTS = {
  /* ===== BUILDS (engineering) ===== */
  srijau: {
    kind: "build", name: "Srijau", accent: "#A8402E", repos: ["srijauv2", "SRIJAU_GROUP-7-CAPSTONE"], languages: "HTML · JavaScript · Vite", year: "2025–2026", status: "Live · v2",
    tagline: "A green-careers platform helping Indonesian women step into climate work — built and shipped solo.",
    func: "A guided path from a self-assessment quiz to matched job listings, wrapped in education and community for women exploring green jobs.",
    funcBullets: ["Solution flow — quiz → result → jobs", "Education — articles with pre/post-tests", "Community — experts + member spaces"],
    structure: ["Vite multi-page app, 10 deployable routes", "Home · Solution · Business · Content · Community · About", "Four article pages, self-hosted fonts (Instrument Serif · Inter)"],
    stack: ["Vite", "HTML", "JavaScript", "Vercel"], extra: { "Design system": "DeCarbonHub" }, kicker: "Green careers, made approachable."
  },
  kelolakos: {
    kind: "build", name: "KelolaKos", accent: "#A8402E", repos: ["KELOLAKOS-", "KelolaKos (legacy)"], languages: "TypeScript · Next.js", year: "2026", status: "Beta",
    tagline: "A property operating system for boarding houses, backed by a spreadsheet instead of infrastructure.",
    func: "One dashboard for tenants, deposits, facilities, and occupancy — without learning a database. Owners edit data right in Google Sheets.",
    funcBullets: ["License-code gated access", "Two-way sync with Google Sheets, live", "Bahasa-first UI for real operators"],
    structure: ["Next.js client → Apps Script JSON API → Google Sheets", "Sheets is the single source of truth", "Legacy v1 — Node · Express · React · SQLite"],
    stack: ["Next.js", "TypeScript", "Apps Script", "Google Sheets"], extra: { "Access": "License code (e.g. BETA-…)" }, kicker: "The dashboard you close on time."
  },
  sumateraway: {
    kind: "build", name: "SumateraWay", accent: "#1E7A8C", repos: ["sumatra-glide", "tourismwebsite"], languages: "React · Next.js", year: "2025–2026", status: "Prototype",
    tagline: "Tourism discovery for Sumatra, explored through two build approaches — one AI-assisted, one hand-built.",
    func: "Reframes travel discovery as something visual and inviting rather than a search box, comparing how each build approach ships.",
    funcBullets: ["Visual-first destination browsing", "Two routes to ship — generated vs hand-built", "Prompt-to-commit iteration loop"],
    structure: ["sumatra-glide — Lovable-generated React app", "Synced back to git for IDE editing", "tourismwebsite — clean Next.js (app router) baseline"],
    stack: ["React", "Next.js", "Lovable", "Vercel"], extra: {}, kicker: "Discovery, not a search box."
  },
  constructionops: {
    kind: "build", name: "ConstructionOps", accent: "#3A5FA0", repos: ["constructionops"], languages: "TypeScript · Next.js", year: "2026", status: "Early",
    tagline: "Operational tooling for the most under-tooled role on a job site — the supervisor with a clipboard and seven chat groups.",
    func: "A clean foundation where the value will live in the workflows layered on top — daily checklists and a single place for site status.",
    funcBullets: ["Clean baseline — Next.js + TypeScript", "Built to absorb job-site workflows", "Push-to-deploy on Vercel"],
    structure: ["Next.js app-router skeleton", "Strict TypeScript from the start", "Organized for incremental modules"],
    stack: ["Next.js", "TypeScript", "Geist", "Vercel"], extra: {}, kicker: "Value lives in the workflows."
  },
  portfolio: {
    kind: "build", name: "Portfolio", accent: "#6A4BC2", repos: ["portfolio"], languages: "HTML · CSS · JavaScript", year: "2026", status: "Live",
    tagline: "A personal site that ships a working tool, not a contact form.",
    func: "A portfolio built as a product surface — with an interactive Product Idea Generator instead of a static about page.",
    funcBullets: ["Interactive Product Idea Generator", "Modern gradient design system", "Mobile-first, hover micro-interactions"],
    structure: ["Hero → featured projects → live tool", "Component-driven layout", "Responsive from mobile up"],
    stack: ["HTML", "CSS", "JavaScript"], extra: { "Type": "Inter · Poppins" }, kicker: "A site that does something on arrival."
  },
  kitchenos: {
    kind: "build", name: "KitchenOS", accent: "#ED553B", repos: [], languages: "Figma · Web", year: "2026", status: "Concept · marketing page",
    tagline: "Operations software for quick-service restaurants — from purchase to serve to review, in one system.",
    func: "A QSR operating system designed around the SERVE principles — speed-first, error-proof, role-based, with a single source of truth and a continuous experience loop — covering the whole kitchen lifecycle.",
    funcBullets: ["SERVE — Speed first · Error-proof ops · Role-based relevance · Visibility of truth · Experience loop", "Lifecycle: Purchase → Receive → Store → Prepare → Serve → Review", "Six modules: Orders & queue · Kitchen workflow · Inventory · Purchasing · Workforce · Owner visibility"],
    structure: ["Bold editorial SaaS marketing page, desktop-first 12-column", "Growth logic: Breakeven → Profit → Investor-ready → Franchise → IPO", "Design system — Graphik, ink #1d1c1d, coral #ed553b, highlight yellow #ffdc4d"],
    stack: ["Figma", "Web", "SaaS"], extra: { "Segment": "Quick-Service Restaurants" }, kicker: "From purchase to serve to review — one system."
  },

  /* ===== CASE STUDIES (product management) ===== */
  coal: {
    kind: "case", name: "Coal Tools", kicker: "Mining ops & finance", role: "Product Manager", platform: "web", accent: "#BE9A2E",
    screenshot: "assets/coal.png", screenshotCaption: "CoalTools — dashboard, receipt, invoice, payroll",
    metricsGrid: [{ v: "−45%", l: "Invoice-to-reconciliation time" }, { v: "96%", l: "Receipts now digital, not paper" }, { v: "10h→2h", l: "Monthly payroll prep for HR" }, { v: "−30%", l: "Late vendor payments" }],
    tagline: "Digitizes invoicing, receipts, payroll, and reporting for coal-mining site operations.",
    problem: { summary: "Site offices ran finance on spreadsheets, printed receipts, and WhatsApp photo trails — causing slow reconciliation, weak audit trails, and error-prone payroll.", impact: ["Delayed invoice issuance and payment reconciliation.", "Inconsistent receipts (kwitansi) and a weak audit trail.", "Slow month-end reporting and manual consolidation across sites.", "Error-prone payroll calculations and late payroll runs.", "No real-time operational or financial metrics for managers."] },
    framing: { methods: ["Stakeholder interviews — Finance", "Site Admin / Ops", "HR / Payroll", "CFO / COO"], quotes: [{ who: "Rina — Finance Manager", txt: "Needs consolidated AR, reconciled invoices, an audit trail, and monthly cash forecasts." }, { who: "Budi — Site Admin / Ops", txt: "Needs to issue invoices and kwitansi fast, with evidence of delivered services and daily ops reports." }, { who: "Siti — HR / Payroll", txt: "Needs accurate timesheets, allowance & deduction rules, and payroll export to bank." }], insights: [] },
    evaluation: { goals: ["Cut invoice-to-payment time by 40% within 3 months of launch.", "Automate 80% of standard monthly reports within 2 months.", "Eliminate manual receipts for 95% of transactions within 1 month.", "Generate payroll drafts automatically at 98% accuracy by month 2."], hmw: ["Automate invoice issuance & reconciliation so finance stops chasing payments?", "Digitize kwitansi to give immediate proof and reduce disputes?", "Auto-generate monthly reports from site data in one click?", "Compute payroll automatically from timesheets?"], opportunities: [{ title: "Digitize documents", desc: "Auto-invoice + e-kwitansi with signatures." }, { title: "Automate payroll rules", desc: "Overtime, allowances, deductions handled by the system." }, { title: "Centralized reporting hub", desc: "Pull from site data for instant month-end." }, { title: "Leadership dashboard", desc: "Live KPIs: cash-in, AR, payroll burn, uptime." }], timeline: [] },
    solution: { approach: "As Product Manager I led discovery and stakeholder alignment, wrote the PRD, scoped the MVP, and ran UAT to launch — one tool that automates invoices, generates digital receipts, computes payroll, and produces monthly reports with live KPIs.", features: [{ name: "Invoice + Approval", desc: "Approval workflow with PDF export & email." }, { name: "Digital Kwitansi", desc: "Auto-numbering, configurable fields, signature image." }, { name: "Payroll + Reports", desc: "Payroll generator + monthly report automation." }, { name: "Role-based Access", desc: "Finance, ops, HR roles + an audit log." }], screens: [] },
    outcome: { quote: "Month-end in three days, not seven." }
  },
  dana: {
    kind: "case", name: "DANA", kicker: "Fintech wallet", role: "Product Lead", platform: "mobile", accent: "#2F6FB0",
    screenshot: "assets/dana.png", screenshotCaption: "DANA — split, recurring, bill detail, preferences",
    metricsGrid: [{ v: "15m→1.5m", l: "Time to settle a split bill" }, { v: "40→78%", l: "Gift claim rate" }, { v: "12→43%", l: "Recurring-bill enrollment" }, { v: "−42%", l: "\"Who paid what\" support tickets" }],
    tagline: "Bill-splitting, recurring bills, and money gifting inside the DANA e-wallet — household payments, made social.",
    problem: { summary: "Households juggle cash, transfers, and multiple wallets to split costs and manage recurring bills — manual, slow, impersonal, with no reward for paying on time.", impact: ["Split bills are manual and slow.", "Money gifts feel impersonal.", "Families can't see shared recurring payments in one place.", "Little reward for on-time behavior → wasted time, late fees, low stickiness."] },
    framing: { methods: ["Discovery & user research", "Personas", "Journey maps", "RICE prioritization"], quotes: [{ who: "Rizal, 29, Jakarta", txt: "We spent 20 minutes after dinner recalculating who owes what." }, { who: "Nina, 34, Bandung", txt: "I want to send money as a birthday gift, but bank transfers feel cold." }, { who: "Sari, 46, Depok", txt: "I'm not sure if my mother paid the water bill this month." }], insights: [] },
    evaluation: { goals: ["Cut time-to-settle split bills from 15 min → 2 min; reach 50% same-day settlement.", "Lift family recurring enrollment 12% → 40%.", "Increase monthly transactions per user by 20%.", "25% of active users engage with Loyalty features within 30 days."], hmw: ["Enable a group to split and settle a restaurant bill in under 2 minutes?", "Let users send a memorable money gift that's easy to claim?", "Give families a single, trustable view of recurring household bills?", "Reward on-time payments simply so users feel recognized?"], opportunities: [], timeline: [{ label: "Wk 0 — Kickoff", desc: "Stakeholder alignment, KPI definition." }, { label: "Wk 2 — Synthesis", desc: "Personas, journey maps, RICE prioritization." }, { label: "Wk 3–4 — Design", desc: "Wireframes → high-fi prototype; usability tests." }, { label: "Wk 5–6 — Build", desc: "API design, MVP flows, QA & security review." }, { label: "Wk 7–8 — Pilot", desc: "Launch to 1,000 users, monitor, analyze." }] },
    solution: { approach: "As Product Lead I ran discovery, a design sprint, prototype testing, and an 8-week pilot — a unified household experience: fast splits, one view of recurring bills, claimable gifts, safe auto-pay, and an on-time rewards layer.", features: [{ name: "Split Bill", desc: "Settle a group bill in under 2 minutes." }, { name: "Recurring + Auto-pay", desc: "Recurring bills with smart limits and reminders." }, { name: "Family Bills + Rewards", desc: "Shared tracker, quest & on-time rewards." }], screens: [] },
    outcome: { quote: "Household money, one trustable view." }
  },
  maxim: {
    kind: "case", name: "Maxim", kicker: "Mobility · ride-hailing", role: "PM, Growth & Reliability", platform: "mobile", accent: "#A8402E",
    screenshot: "assets/maxim.png", screenshotCaption: "Maxim — home, route, confirm order, payment",
    metricsGrid: [{ v: "58→72%", l: "Order conversion rate" }, { v: "90s→38s", l: "Checkout completion time" }, { v: "−56%", l: "Failed / duplicate orders" }, { v: "−45%", l: "Checkout support tickets" }],
    tagline: "A checkout & order-confirmation redesign that recovers abandoned orders in the Maxim ride-hailing app.",
    problem: { summary: "Many users started an order but dropped off at Choose Payment and Confirm Order; duplicate and failed orders added support load and lost weekly GMV.", impact: ["Fewer weekly completed orders.", "Duplicate/failed orders add ops overhead.", "More customer-support tickets around payments and confirmations."] },
    framing: { methods: ["Heatmaps & funnel analytics", "Drop-off analysis at payment + confirm", "Persona-based pain analysis"], quotes: [{ who: "Atka — Busy Worker, 28", txt: "Too many repetitive steps for frequent users → friction." }, { who: "Adi — Student, patchy internet, 20", txt: "Poor connectivity handling → duplicates & uncertainty." }, { who: "Siti — Homemaker, 35", txt: "Unclear error handling & recovery → low trust." }], insights: [] },
    evaluation: { goals: ["Increase order conversion (started → completed) from 58% → 72% within 12 weeks.", "Reduce order failure / duplicate incidents by 50% in 12 weeks.", "Decrease average checkout time from 90s → under 45s for returning users.", "Reduce payment/confirmation CS ticket volume by 40%."], hmw: ["Reduce the time it takes a returning user to complete an order?", "Prevent accidental duplicate orders during poor connectivity?", "Surface the most reliable payment method automatically?", "Drive confidence at confirmation so users don't abandon?"], opportunities: [], timeline: [{ label: "Discover (1 wk)", desc: "Funnel + heatmap analysis, persona pains." }, { label: "Define (2 days)", desc: "Frame problems, prioritize fixes." }, { label: "Design (1.5 wks)", desc: "Redesign payment + confirm flows." }, { label: "Validate (1 wk)", desc: "Prototype testing with returning users." }, { label: "Build & launch (3–4 wks)", desc: "Iterative ship with connectivity hardening." }] },
    solution: { approach: "As PM for Growth & Reliability I read the heatmaps, defined the problem, wrote the PRD, and ran experiments — a rebuilt payment and confirmation flow: less friction, graceful on poor connectivity, with clear error recovery.", features: [{ name: "Streamlined Checkout", desc: "Saved preferences and fewer steps for returning users." }, { name: "Reliable Confirmation", desc: "Clear status + error-recovery states." }, { name: "Connectivity Guardrails", desc: "Fewer duplicate & failed orders on patchy networks." }], screens: [] },
    outcome: { quote: "Faster, less confusing payment." }
  },
  supermom: {
    kind: "case", name: "SuperMom", kicker: "Maternal wellness", role: "Product Manager", platform: "mobile", accent: "#A86B9C",
    metricsGrid: [{ v: "150", l: "Beta users at launch" }, { v: "65%", l: "Activation (first entry)" }, { v: "28%", l: "Day-7 retention (target 20%)" }, { v: "34", l: "NPS among engaged users" }],
    tagline: "A private journaling, mood-tracking, and peer-support app for mothers — gentle by design.",
    problem: { summary: "New and stay-at-home moms feel isolated and can't consistently track their mood; existing journaling and social apps are either too clinical or too public.", impact: ["No private, low-effort way to log daily life.", "No easy way to spot mood patterns over time.", "No empathetic micro-community for short, actionable support.", "Existing tools feel either too clinical or too exposed."] },
    framing: { methods: ["8 user interviews (moms, 24–40)", "Diary study (7 participants, 7 days)", "Competitive scan — journals, parenting groups, mood apps"], quotes: [{ who: "Aisyah (27, stay-at-home)", txt: "By the time my baby naps I'm too tired to write a whole journal entry." }, { who: "Maria (33, working, 2 kids)", txt: "Between work and bedtime I barely have five minutes — I need something quick and private." }], insights: ["Privacy first — moms want a low-judgment space, private by default.", "70% prefer 1–3 quick daily questions over free-form writing.", "Gentle nudges — reminders must be customizable, never guilt-inducing."] },
    evaluation: { goals: ["Launch an MVP — daily snapshot + mood tracking + moderated micro-community — within 3 months.", "Reach 20% weekly active retention at 4 weeks for the onboarding cohort.", "Reach NPS ≥ 30 among active moms within 3 months."], hmw: ["Make tracking mood and daily events take under 30 seconds a day?", "Provide community support that feels safe, private, and time-efficient?", "Surface meaningful patterns from sparse logs so moms can act on them?"], opportunities: [], timeline: [{ label: "Discover (Wk 0–1)", desc: "Kickoff, competitive scan, 8 interviews, diary study." }, { label: "Define (Wk 2)", desc: "3 personas + top pains; RICE → MVP list." }, { label: "Design (Wk 3–4)", desc: "Low-fi flows + prototype; 5 usability tests." }, { label: "Build (Wk 5–10)", desc: "Encrypted entries, onboarding, mood calendar, community." }, { label: "Launch (Wk 15–20)", desc: "Soft launch via parenting groups; streaks, micro-badges." }] },
    solution: { approach: "As Product Manager I owned strategy, research, and A/B experiments, leading a 5-person team to an MVP on both stores — a 30-second daily check-in that surfaces mood patterns, plus a moderated micro-community for short, practical support.", features: [{ name: "Daily Snapshot", desc: "Quick daily journaling — 1–3 prompts." }, { name: "Mood Patterns", desc: "Mood surfaced over time, gently." }, { name: "Moderated Community", desc: "Short, practical peer support." }], screens: ["Daily Snapshot", "Mood Wheel", "Community Hub", "Prompted Journal", "Settings"] },
    outcome: { quote: "A habit, without the guilt." }
  },
  koco: {
    kind: "case", name: "KOCO", kicker: "EdTech · Learning Games", role: "Creator & Developer", platform: "mobile", accent: "#C76B3C",
    tagline: "Educational mini-games and multiplayer for preK–12 learners, tuned to each grade level.",
    problem: { summary: "Young learners from preK to grade 12 lose interest in drill-style practice, and one-size content doesn't fit very different grade levels.", impact: ["Generic content bores some kids and overwhelms others.", "Few learning games adapt to a child's actual grade level.", "Solo practice misses the motivation of playing with peers."] },
    framing: { methods: ["Designed around preK–12 grade levels", "Playtesting with kids", "Short-session, attention-aware design"], quotes: [], insights: ["Bite-size mini-games hold young attention.", "Multiplayer turns practice into something kids want to do.", "Grade-appropriate content is the core requirement, not a nice-to-have."] },
    evaluation: { goals: ["Offer mini-games matched to each grade level, preK through 12.", "Add multiplayer so kids learn and compete together.", "Keep every session short and instantly playable."], hmw: ["Match each mini-game to the right grade level?", "Make learning feel multiplayer and social, not solo drilling?", "Keep sessions short enough for young attention spans?"], opportunities: [], timeline: [] },
    solution: { approach: "A library of bite-size educational mini-games with a multiplayer mode, each tuned to the student's grade level from preK through 12 — so the content always fits the learner.", features: [{ name: "Grade-tuned mini-games", desc: "Content scales by level, preK–12." }, { name: "Multiplayer mode", desc: "Kids learn and compete together." }, { name: "Short, playable sessions", desc: "Pick-up-and-play, attention-aware." }], screens: ["Grade Picker", "Mini-game", "Multiplayer Lobby"] },
    outcome: { quote: "Learning that feels like playing — with friends." }
  },
  refrigerant: {
    kind: "case", name: "Refrigerant Emission Tracker", kicker: "Carbon Tool · Excel", role: "Carbon Analyst & Builder", platform: "web", accent: "#2E6B4C",
    tagline: "Catches the hidden, high-GWP emissions most companies forget — AC and chiller leaks.",
    problem: { summary: "Refrigerant leaks are invisible and rarely logged, yet a single kilogram can equal hundreds of kilograms of CO2e. Most GHG inventories miss them entirely.", impact: ["Fugitive refrigerant emissions are invisible and almost never recorded.", "1 kg of refrigerant can equal hundreds of kg of CO2e — a material Scope 1 source.", "Nearly all SME inventories omit AC and chiller leaks completely.", "Without a method, there's no defensible number to report or reduce."] },
    framing: { methods: ["ISO 14064-1", "IPCC fugitive method", "AR5 GWP values", "Formula-driven Excel"], quotes: [], insights: ["Two paths: top-up (mass-balance) is most accurate; screening (units × charge × leak rate) works when service data is missing.", "High-GWP gases dominate: 1 kg R-32 = 0.68 tCO2e, while 1 kg SF6 = 23.5 tCO2e.", "The hard part isn't the math — it's making sure no unit is silently left on a rough estimate."] },
    evaluation: { goals: ["Give SMEs a defensible way to quantify refrigerant leaks under ISO 14064-1.", "Support both top-up (mass-balance) and screening methods in one register.", "Embed AR5 GWP factors so users don't have to hunt them down.", "Output tCO2e per unit and a clean, auditable total."], hmw: ["Quantify an invisible Scope 1 source with whatever data a company actually has?", "Let users start with screening estimates, then upgrade to mass-balance?", "Make missing service data impossible to ignore rather than silently assumed?"], opportunities: [{ title: "Equipment register", desc: "One row per unit; choose top-up or screening method." }, { title: "Embedded AR5 GWP", desc: "R-32, R-410A, R-134a, R-404A, SF6 and more, built in." }, { title: "Data-gap flags", desc: "Auto-flags rows still on screening estimates." }, { title: "tCO2e outputs", desc: "Per-unit and total, formula-driven and auditable." }], timeline: [] },
    solution: { approach: "A formula-driven Excel register that turns sparse equipment data into a defensible refrigerant emissions number — mass-balance where service records exist, screening where they don't — with embedded AR5 GWP factors converting leaked mass into tCO2e automatically.", features: [{ name: "Two methods, one sheet", desc: "Top-up (mass-balance) and screening side by side." }, { name: "Built-in AR5 GWP", desc: "R-32, R-410A, R-134a, R-404A, SF6 — ready to use." }, { name: "Auto data-gap flags", desc: "Highlights any unit still on a screening estimate." }, { name: "Per-unit & total tCO2e", desc: "Transparent formulas you can defend in review." }], screens: ["Equipment Register", "Results Summary"] },
    outcome: { metrics: ["1 kg R-32 = 0.68 tCO2e; 1 kg SF6 = 23.5 tCO2e — the high-GWP gap made visible.", "Example register: ~17.7 kg leaked across units ≈ ~44 tCO2e.", "Catches a Scope 1 source nearly all SMEs omit entirely.", "Auditable against ISO 14064-1 and the IPCC fugitive method."], quote: "A source almost everyone forgets — now it has a number." }
  },
  risk: {
    kind: "case", name: "Risk Management Agent System", kicker: "AI Workflow · Enterprise Risk", role: "AI Workflow Designer", platform: "web", accent: "#6E7B45", draft: true,
    tagline: "A multi-agent workflow concept for intake, RCSA review, regulatory grounding, KRI, stress test, and deliverable generation.",
    problem: { summary: "Enterprise risk teams juggle intake, RCSA reviews, regulatory grounding, and reporting across disconnected tools and manual steps.", impact: ["Manual RCSA review is slow and inconsistent.", "Regulatory grounding is hard to keep current.", "DRAFT — add the specific pains you captured."] },
    framing: { methods: ["DRAFT — add your discovery method"], quotes: [], insights: ["Multi-agent split: intake, RCSA, grounding, KRI, stress test, deliverable."] },
    evaluation: { goals: ["Automate the first-pass RCSA review.", "Ground recommendations in current regulation.", "Generate audit-ready deliverables."], hmw: ["Route a risk intake to the right agent automatically?", "Keep regulatory grounding current and citable?"], opportunities: [{ title: "Intake agent", desc: "Classifies and routes incoming risk items." }, { title: "RCSA agent", desc: "First-pass control self-assessment review." }, { title: "Grounding agent", desc: "Cites current regulation for each finding." }], timeline: [] },
    solution: { approach: "DRAFT — describe the agent orchestration once finalized.", features: [{ name: "Intake → RCSA → Grounding", desc: "Chained agents for review and citation." }, { name: "KRI & Stress Test", desc: "Generates indicators and scenario stress tests." }, { name: "Deliverable Generation", desc: "Audit-ready outputs." }], screens: ["Agent Workflow", "RCSA Review", "Deliverable"] },
    outcome: { metrics: ["DRAFT — add concept validation / pilot outcomes."], quote: "" }
  }
};

/* ---------- case-study renderer ---------- */
function renderCase(p) {
  const A = p.accent;
  p.kicker_eyebrow = p.kicker; p.role_badge = p.role;
  const out = [heroEl(p)];
  if (p.draft) out.push(`<div style="${WRAP}"><div style="background:rgba(198,138,46,.1); border:1px solid rgba(198,138,46,.34); border-radius:12px; padding:15px 20px; margin:26px 0 0; font-size:14px; color:#5C5340;"><b style="color:#A8402E;">Draft. </b>Summarized from notes — check numbers, quotes, and any DRAFT fields before publishing.</div></div>`);

  // Problem
  const torn = `background:${hexToRgba(A, .22)}; color:#2B2419; padding:2px 8px; display:inline; -webkit-box-decoration-break:clone; box-decoration-break:clone; clip-path:polygon(0 8%,4% 0,12% 9%,22% 1%,34% 8%,47% 0,60% 9%,73% 1%,85% 8%,95% 0,100% 9%,100% 92%,95% 100%,85% 92%,73% 100%,60% 91%,47% 100%,34% 92%,22% 100%,12% 91%,4% 100%,0 92%);`;
  const impactList = (items) => (items && items.length) ? `<ul style="list-style:none; margin:30px 0 0; padding:0; display:grid; gap:1px; background:#E8DEC6; border-radius:12px; overflow:hidden;">${items.map((it) => `<li style="background:#FCF7EB; padding:15px 20px; display:flex; gap:14px; align-items:flex-start; font-size:15px; color:#3A3325;"><span style="flex:none; width:7px; height:7px; margin-top:8px; border-radius:50%; background:${A};"></span>${esc(it)}</li>`).join("")}</ul>` : "";
  out.push(secOpen + labelEl(A, "Problem") + titleEl("The Problem") + `<p style="${LEAD}"><span style="${torn}">${esc(p.problem.summary)}</span></p>` + impactList(p.problem.impact) + `</div></section>`);

  // Discovery
  let dk = "";
  if (p.framing.methods && p.framing.methods.length) {
    dk += `<p style="${LEAD} margin-bottom:14px;">How I got to the real problem:</p>`;
    dk += `<div style="display:flex; flex-wrap:wrap; gap:10px;">${p.framing.methods.map((m) => `<span style="font-size:13.5px; color:#3A3325; ${CARD} border-radius:999px; padding:7px 15px;">${esc(m)}</span>`).join("")}</div>`;
  }
  if (p.framing.quotes && p.framing.quotes.length) {
    const rot = ["-2.2deg", "1.8deg", "-1.2deg", "2.4deg"];
    dk += `<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); gap:22px; margin-top:26px;">${p.framing.quotes.map((q, i) => `<div class="tilt" style="${CARD} border-radius:14px; padding:22px 20px; transform:rotate(${rot[i % 4]});"><div style="font-family:'Playfair Display',serif; font-weight:700; font-size:17px; margin-bottom:8px; color:#2B2419;">${esc(q.who)}</div><div style="color:#6B6151; font-size:14px; line-height:1.5;">${esc(q.txt)}</div></div>`).join("")}</div>`;
  }
  if (p.framing.insights && p.framing.insights.length) {
    dk += `<ul style="list-style:none; margin:28px 0 0; padding:0; display:grid; gap:12px;">${p.framing.insights.map((it) => `<li style="background:#FCF7EB; border-left:3px solid ${A}; border-radius:0 12px 12px 0; padding:15px 20px; font-size:15px; line-height:1.5; color:#3A3325;">${esc(it)}</li>`).join("")}</ul>`;
  }
  if (dk) out.push(secOpen + labelEl(A, "Discovery") + titleEl("How I Framed It") + dk + `</div></section>`);

  // Evaluation
  let ek = "";
  if (p.evaluation.goals && p.evaluation.goals.length) {
    ek += labelEl(A, "Goals", "4px");
    ek += `<ul style="list-style:none; margin:0; padding:0; display:grid; gap:14px;">${p.evaluation.goals.map((g, i) => `<li style="display:flex; gap:16px; align-items:baseline; font-size:clamp(16px,2vw,18px); line-height:1.45; padding-bottom:14px; border-bottom:1px solid #E2D6BC; color:#2B2419;"><span style="font-family:'Playfair Display',serif; font-weight:700; font-size:16px; color:${A}; flex:none; width:30px;">${String(i + 1).padStart(2, "0")}</span>${esc(g)}</li>`).join("")}</ul>`;
  }
  if (p.evaluation.hmw && p.evaluation.hmw.length) {
    ek += labelEl(A, "How Might We", "42px");
    ek += `<ul style="list-style:none; margin:0; padding:0; display:grid; gap:14px;">${p.evaluation.hmw.map((hm) => `<li style="position:relative; padding-left:62px; font-size:clamp(16px,2vw,18px); line-height:1.45; color:#2B2419;"><span style="position:absolute; left:0; top:1px; font-family:'Space Mono',monospace; font-weight:700; font-size:11px; letter-spacing:.1em; color:#F3EAD8; background:${A}; padding:3px 7px; border-radius:5px;">HMW</span>${esc(hm)}</li>`).join("")}</ul>`;
  }
  if (p.evaluation.opportunities && p.evaluation.opportunities.length) {
    ek += labelEl(A, "Opportunities & Scope", "42px");
    ek += `<div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:14px;">${p.evaluation.opportunities.map((o) => `<div style="${CARD} border-radius:14px; padding:18px 20px;"><h4 style="margin:0 0 6px; font-family:'Playfair Display',serif; font-size:16px; font-weight:600; color:#2B2419;">${esc(o.title)}</h4><p style="margin:0; color:#6B6151; font-size:13.5px; line-height:1.5;">${esc(o.desc)}</p></div>`).join("")}</div>`;
  }
  if (p.evaluation.timeline && p.evaluation.timeline.length) {
    ek += labelEl(A, "Timeline", "42px");
    ek += `<div style="display:flex; gap:0; margin-top:4px; overflow-x:auto; padding-bottom:8px;">${p.evaluation.timeline.map((t, i) => `<div style="flex:1 0 165px; padding:${i === 0 ? "0 18px 0 0" : "0 18px"}; border-left:${i === 0 ? "none" : "1px solid #E2D6BC"};"><div style="font-family:'Playfair Display',serif; font-weight:700; color:${A}; font-size:14px;">0${i + 1}</div><h4 style="margin:6px 0; font-size:14.5px; color:#2B2419;">${esc(t.label)}</h4><p style="margin:0; color:#6B6151; font-size:13px; line-height:1.45;">${esc(t.desc)}</p></div>`).join("")}</div>`;
  }
  if (ek) out.push(secOpen + labelEl(A, "Evaluation") + titleEl("How I Solved It") + ek + `</div></section>`);

  // Solution (+ screenshot)
  let sk = `<p style="${LEAD} margin-bottom:28px;">${esc(p.solution.approach)}</p>`;
  if (p.solution.features && p.solution.features.length) {
    sk += `<div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:14px;">${p.solution.features.map((f) => `<div style="${CARD} border-radius:14px; padding:20px;"><div style="font-family:'Playfair Display',serif; font-weight:700; font-size:17px; margin-bottom:8px; color:#2B2419;">${esc(f.name)}</div><p style="margin:0; color:#6B6151; font-size:14px; line-height:1.5;">${esc(f.desc)}</p></div>`).join("")}</div>`;
  }
  if (p.screenshot) {
    sk += `<figure style="margin:24px 0 0;"><img src="${p.screenshot}" alt="${esc(p.screenshotCaption || p.name)}" loading="lazy" style="width:100%; max-width:720px; border-radius:14px; border:1px solid #E2D6BC; box-shadow:0 14px 34px rgba(70,48,20,.14); display:block;"/><figcaption style="font-family:'Space Mono',monospace; font-size:11px; letter-spacing:.04em; color:#9C8E74; margin-top:10px;">${esc(p.screenshotCaption || "")}</figcaption></figure>`;
  } else if (p.solution.screens && p.solution.screens.length) {
    const mob = p.platform === "mobile";
    sk += `<div style="display:flex; gap:18px; overflow-x:auto; padding:18px 2px 8px;">${p.solution.screens.map((s) => `<div style="flex:none; width:${mob ? "178px" : "320px"}; height:${mob ? "368px" : "205px"}; border-radius:16px; background:repeating-linear-gradient(45deg,#E6D9BF,#E6D9BF 9px,#EFE6CF 9px,#EFE6CF 18px); border:1px dashed #CDBE9C; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#9C8E74; text-align:center; padding:14px;"><div style="font-size:20px; opacity:.5; margin-bottom:10px;">▢</div><div style="font-family:'Space Mono',monospace; font-size:12px; color:#7A6F58;">${esc(s)}</div><div style="font-family:'Space Mono',monospace; font-size:10px; margin-top:6px; color:#A2926F; letter-spacing:.04em;">drop mockup here</div></div>`).join("")}</div>`;
  }
  out.push(secOpen + labelEl(A, "Solution") + titleEl("The Solution") + sk + `</div></section>`);

  // Outcome
  const hasGrid = p.metricsGrid && p.metricsGrid.length;
  const hasBullets = p.outcome.metrics && p.outcome.metrics.length;
  if (hasGrid || hasBullets || p.outcome.quote) {
    let body = "";
    if (hasGrid) {
      body = `<div style="display:grid; grid-template-columns:repeat(2,1fr); gap:22px 28px;">${p.metricsGrid.map((m) => `<div><div style="font-family:'Playfair Display',serif; font-weight:800; font-size:clamp(26px,3.4vw,34px); color:${A}; line-height:1;">${esc(m.v)}</div><div style="font-size:13px; color:#5C5340; margin-top:7px; line-height:1.35;">${esc(m.l)}</div></div>`).join("")}</div>`;
    } else if (hasBullets) {
      body = `<ul style="list-style:none; margin:0; padding:0; display:grid; gap:14px;">${p.outcome.metrics.map((m) => `<li style="display:flex; gap:13px; align-items:flex-start; font-size:15.5px; font-weight:600; line-height:1.4; color:#2B2419;"><span style="flex:none; width:7px; height:7px; margin-top:8px; border-radius:50%; background:#2B2419;"></span>${esc(m)}</li>`).join("")}</ul>`;
    }
    const oc = `<div style="position:relative; background:#FBF6EA; border:1px solid #E8DEC6; border-radius:6px; padding:38px 40px 34px; max-width:680px; margin-top:8px; box-shadow:0 26px 50px -28px rgba(70,48,20,.5);">
      <span style="position:absolute; width:120px; height:30px; background:rgba(110,123,69,.4); top:-13px; right:46px; transform:rotate(7deg);"></span>
      <span style="position:absolute; width:120px; height:30px; background:rgba(168,64,46,.32); bottom:-12px; left:34px; transform:rotate(-8deg);"></span>
      ${body}
      ${p.outcome.quote ? `<p style="margin:${body ? "24px" : "0"} 0 0; font-family:'Playfair Display',serif; font-style:italic; font-weight:500; font-size:18px; line-height:1.4; ${body ? "border-top:1px solid rgba(43,36,25,.18); padding-top:20px;" : ""} color:#2B2419;">&ldquo;${esc(p.outcome.quote)}&rdquo;</p>` : ""}
    </div>`;
    out.push(secOpen + labelEl(A, "Outcome") + titleEl("Outcome") + oc + `</div></section>`);
  }

  out.push(footEl);
  return out.join("");
}

/* ---------- build renderer ---------- */
function renderBuild(p) {
  const A = p.accent;
  p.kicker_eyebrow = "Engineering · " + (p.repos[0] || p.name); p.role_badge = p.status;
  const out = [heroEl(p)];

  // Function
  let fk = `<p style="${LEAD} margin-bottom:18px;">${esc(p.func)}</p>`;
  if (p.funcBullets && p.funcBullets.length) {
    fk += `<ul style="list-style:none; margin:0; padding:0; display:grid; gap:12px;">${p.funcBullets.map((b) => `<li style="background:#FCF7EB; border-left:3px solid ${A}; border-radius:0 12px 12px 0; padding:14px 18px; font-size:15px; line-height:1.5; color:#3A3325;">${esc(b)}</li>`).join("")}</ul>`;
  }
  out.push(secOpen + labelEl(A, "Function") + titleEl("What It Does") + fk + `</div></section>`);

  // Structure
  if (p.structure && p.structure.length) {
    const sk = `<ul style="list-style:none; margin:0; padding:0; display:grid; gap:14px;">${p.structure.map((s, i) => `<li style="display:flex; gap:16px; align-items:baseline; font-size:clamp(15px,2vw,17px); line-height:1.45; padding-bottom:14px; border-bottom:1px solid #E2D6BC; color:#2B2419;"><span style="font-family:'Playfair Display',serif; font-weight:700; font-size:16px; color:${A}; flex:none; width:30px;">${String(i + 1).padStart(2, "0")}</span>${esc(s)}</li>`).join("")}</ul>`;
    out.push(secOpen + labelEl(A, "Structure") + titleEl("How It's Built") + sk + `</div></section>`);
  }

  // Stack & status
  const kv = [["Languages", p.languages], ["Year", p.year], ["Status", p.status]];
  for (const k in (p.extra || {})) kv.push([k, p.extra[k]]);
  let tk = `<div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:26px;">${p.stack.map((s) => `<span style="font-family:'Space Mono',monospace; font-size:12px; color:#3A3325; ${CARD} border-radius:999px; padding:7px 14px;">${esc(s)}</span>`).join("")}</div>`;
  tk += `<dl style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:18px 26px; margin:0;">${kv.map(([k, v]) => `<div style="border-top:1px solid #E2D6BC; padding-top:12px;"><dt style="font-family:'Space Mono',monospace; font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:#9C8E74; margin-bottom:6px;">${esc(k)}</dt><dd style="margin:0; font-size:15px; color:#2B2419;">${esc(v)}</dd></div>`).join("")}</dl>`;
  if (p.repos && p.repos.length) {
    tk += `<div style="margin-top:24px; display:flex; flex-wrap:wrap; gap:10px;">${p.repos.map((r) => { const real = !/\s|legacy/i.test(r); return real ? `<a href="https://github.com/Oksana3301/${encodeURIComponent(r)}" target="_blank" rel="noopener" style="font-family:'Space Mono',monospace; font-size:12px; color:${A}; ${CARD} border-radius:8px; padding:8px 13px; text-decoration:none;">${esc(r)} ↗</a>` : `<span style="font-family:'Space Mono',monospace; font-size:12px; color:#9C8E74; ${CARD} border-radius:8px; padding:8px 13px;">${esc(r)}</span>`; }).join("")}</div>`;
  }
  out.push(secOpen + labelEl(A, "Stack & Status") + titleEl("Stack & Status") + tk + `</div></section>`);

  if (p.kicker) out.push(`<section style="padding:40px 0;"><div style="${WRAP}"><p style="font-family:'Playfair Display',serif; font-style:italic; font-size:clamp(20px,3vw,26px); color:${A}; margin:0; max-width:640px;">${esc(p.kicker)}</p></div></section>`);
  out.push(footEl);
  return out.join("");
}

function renderDetail(p) { return p.kind === "build" ? renderBuild(p) : renderCase(p); }

/* ---------- routing ---------- */
const indexEl = () => document.getElementById("index-view");
const detailEl = () => document.getElementById("detail-view");
const detailContentEl = () => document.getElementById("detail-content");

function openProject(id) {
  const p = PROJECTS[id];
  if (!p) return;
  detailContentEl().innerHTML = renderDetail(p);
  indexEl().style.display = "none";
  detailEl().style.display = "block";
  if (history.pushState) history.pushState({ id }, "", "#" + id);
  window.scrollTo({ top: 0 });
}
function goHome() {
  detailEl().style.display = "none";
  indexEl().style.display = "block";
  if (history.pushState) history.pushState({}, "", location.pathname);
  window.scrollTo({ top: 0 });
}
function togglePlay() {
  const reels = document.querySelectorAll(".reel-spin");
  const btn = document.getElementById("cassette-btn");
  const label = document.getElementById("cassette-label");
  const next = btn.getAttribute("data-playing") !== "true";
  btn.setAttribute("data-playing", String(next));
  reels.forEach((r) => { r.style.animationPlayState = next ? "running" : "paused"; });
  btn.innerHTML = next
    ? `<span style="display:flex; gap:5px;"><span style="width:5px; height:16px; background:#F3EAD8; border-radius:1px;"></span><span style="width:5px; height:16px; background:#F3EAD8; border-radius:1px;"></span></span>`
    : `<span style="width:0; height:0; border-left:15px solid #F3EAD8; border-top:9px solid transparent; border-bottom:9px solid transparent; margin-left:4px;"></span>`;
  label.textContent = next ? "▶ now playing — reels rolling" : "press play — reels spin";
  label.style.color = next ? "#2E6B4C" : "#9C8E74";
}

window.addEventListener("popstate", () => {
  const id = location.hash.replace("#", "");
  if (id && PROJECTS[id]) openProject(id); else goHome();
});
window.addEventListener("DOMContentLoaded", () => {
  const id = location.hash.replace("#", "");
  if (id && PROJECTS[id]) openProject(id);
});
