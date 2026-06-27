/* ============================================================
   Atika Dewi Suryani — Portfolio 2026
   Project data + case-study renderer + routing.
   Ported from the Claude Design "Homepage v2" component
   (no proprietary runtime — plain ES, string-built DOM).
   ============================================================ */

/* ---------- 9 projects: all case-study content as data ---------- */
const PROJECTS = {
  srijau: {
    name: "Srijau", kicker: "Platform", role: "Founder & Product Lead", platform: "web", accent: "#A8402E", draft: true,
    tagline: "A green-career platform for Indonesian women, with a B2B carbon-accounting arm (DeCarbonHub).",
    problem: { summary: "Indonesian women lack accessible pathways into the green economy, while companies need carbon accounting but lack affordable tooling and ready talent.", impact: ["Few structured on-ramps for women into green careers.", "Companies struggle to source affordable carbon-accounting capability.", "Willingness-to-pay (WTP) remains the critical unvalidated gap."] },
    framing: { methods: ["Pre-pilot survey (25 respondents)", "Beta testing (72 unique evaluators)", "GWiCE Fellowship Group 7 capstone origin"], quotes: [], insights: ["Strong positive sentiment across 72 beta evaluators.", "WTP is the make-or-break gap — anchoring-bias risk if researched after a polished product tour."] },
    evaluation: { goals: ["Validate willingness-to-pay before scaling.", "Stand up a two-sided flywheel: B2C fellowship membership + B2B corporate retainer.", "Land a first sponsor — PDAM Padang recommended over larger BUMNs for warm local access."], hmw: ["Validate WTP without polishing the product first and biasing the answer?", "Connect women into green careers while serving corporate carbon needs?"], opportunities: [{ title: "Fellowship membership", desc: "B2C green-career fellowship with EcoSisters mentorship." }, { title: "DeCarbonHub", desc: "B2B carbon accounting (ISO 14064-1 GHG inventory)." }, { title: "Sponsor pipeline", desc: "PDAM Padang first, then BUMNs." }], timeline: [] },
    solution: { approach: "DRAFT — describe the built fellowship + DeCarbonHub experience here once finalized.", features: [{ name: "Fellowship + EcoSisters", desc: "Four-tier mentorship hierarchy for green careers." }, { name: "DeCarbonHub", desc: "Carbon accounting tooling for the B2B side." }], screens: ["Fellowship Home", "Mentorship", "Carbon Dashboard"] },
    outcome: { metrics: ["DRAFT — add validated WTP figures and pilot results once available.", "Beta: 72 evaluators, strong positive sentiment."], quote: "" }
  },
  kelolakos: {
    name: "KelolaKos", kicker: "Property SaaS", role: "Founder & Builder", platform: "web", accent: "#C68A2E", draft: true,
    tagline: "Property management for boarding houses & short-stays — booking, finance, receipts, and reports in one place.",
    problem: { summary: "A family boarding-house and short-stay portfolio (Top Hills) was managed manually — bookings, finance, receipts, and reports scattered across tools.", impact: ["Manual booking and finance tracking across spreadsheets and chat.", "Receipts and reports produced by hand.", "DRAFT — add the operational pains you felt running the portfolio."] },
    framing: { methods: ["Operator-as-user (running the real portfolio)", "DRAFT — add any tenant/owner research"], quotes: [], insights: ["DRAFT — add the key insights that shaped the build."] },
    evaluation: { goals: ["Replace the manual chain with a single management platform.", "Support booking, finance, reports, receipts, and cancel/refund workflows."], hmw: ["Run the whole portfolio from one place instead of scattered tools?", "Keep finance and receipts consistent and exportable?"], opportunities: [], timeline: [] },
    solution: { approach: "Migrated from Google Apps Script to a Next.js 15 / Vercel frontend with a Google Sheets backend, across eight development batches.", features: [{ name: "Booking & Finance", desc: "Bookings, finance tracking, and reports in one platform." }, { name: "Receipts", desc: "Receipt generation with consistent records." }, { name: "Cancel / Refund", desc: "Workflows for cancellations and refunds." }, { name: "Performance", desc: "React Query optimizations for a responsive UI." }], screens: ["Dashboard", "Bookings", "Finance", "Reports", "Receipts"] },
    outcome: { metrics: ["Deployed and managing the real Top Hills portfolio.", "DRAFT — add concrete time-saved / accuracy metrics once measured."], quote: "" }
  },
  koco: {
    name: "KOCO", kicker: "Casual Game", role: "Creator & Developer", platform: "mobile", accent: "#C76B3C", draft: true,
    tagline: "A casual mobile game I created — simple, fun, and made with a lot of heart.",
    problem: { summary: "I wanted to build something purely playful — a small, warm casual game made for joy, not engagement metrics.", impact: ["Most casual games lean on ads and dark patterns.", "Few small games feel personal or handmade.", "DRAFT — add what sparked KOCO and who it's for."] },
    framing: { methods: ["Solo build", "Playtesting with friends & family", "DRAFT — add playtest notes"], quotes: [], insights: ["Keep it simple: one core loop, instantly understandable.", "Charm over complexity — the heart is the feature."] },
    evaluation: { goals: ["Ship a complete, polished casual loop.", "Make it pick-up-and-play in under 10 seconds.", "Keep it gentle and ad-free."], hmw: ["Make a game that's instantly fun with zero tutorial?", "Keep it small but full of character?"], opportunities: [], timeline: [] },
    solution: { approach: "A tight, charming core loop with hand-made art and a calm, friendly tone.", features: [{ name: "One-tap core loop", desc: "Simple, satisfying, instantly understood." }, { name: "Hand-made characters", desc: "Warm, original art with personality." }, { name: "Calm & ad-free", desc: "No dark patterns — just play." }], screens: ["Home", "Gameplay", "Win Screen"] },
    outcome: { metrics: ["Built end-to-end solo as a creative project.", "DRAFT — add downloads / playtest feedback once measured."], quote: "Made simply for the joy of making it." }
  },
  coal: {
    name: "Coal Tools", kicker: "Web App · Finance & Ops", role: "Product Owner", platform: "web", accent: "#BE9A2E",
    tagline: "From spreadsheets and paper kwitansi to one finance & ops cockpit for coal sites.",
    problem: { summary: "Coal site offices and regional admin teams run on spreadsheets, printed kwitansi, WhatsApp photo trails, and manual consolidation.", impact: ["Delayed invoice issuance and payment reconciliation.", "Inconsistent receipts (kwitansi) and a weak audit trail.", "Slow month-end reporting and manual consolidation across sites.", "Error-prone payroll calculations and late payroll runs.", "No real-time operational or financial metrics for managers.", "Net effect: cashflow lag, higher admin headcount, more disputes, poor executive visibility."] },
    framing: { methods: ["Stakeholder interviews — Finance", "Site Admin / Ops", "HR / Payroll", "CFO / COO"], quotes: [{ who: "Rina — Finance Manager", txt: "Needs consolidated AR, reconciled invoices, an audit trail, and monthly cash forecasts." }, { who: "Budi — Site Admin / Ops", txt: "Needs to issue invoices and kwitansi fast, with evidence of delivered services and daily ops reports." }, { who: "Siti — HR / Payroll", txt: "Needs accurate timesheets, allowance & deduction rules, and payroll export to bank." }, { who: "CFO / COO", txt: "Needs dashboards and alerts for KPI deviations." }], insights: [] },
    evaluation: { goals: ["Cut invoice-to-payment time by 40% within 3 months of launch.", "Automate 80% of standard monthly reports (financial, ops, payroll) within 2 months.", "Eliminate manual receipts for 95% of transactions (digital kwitansi) within 1 month.", "Generate payroll drafts automatically at 98% accuracy by month 2.", "Provide live KPIs for revenue, OPEX, payroll burn, and equipment uptime."], hmw: ["Automate invoice issuance & reconciliation so finance stops chasing payments?", "Digitize kwitansi to give immediate proof and reduce disputes?", "Auto-generate monthly operational & financial reports from site data in one click?", "Compute payroll — allowances, deductions, overtime — automatically from timesheets?", "Surface real-time metrics to field managers and the CFO with anomaly alerts?"], opportunities: [{ title: "Digitize documents", desc: "Auto-invoice + e-kwitansi with signatures." }, { title: "Automate payroll rules", desc: "Overtime, allowances, deductions handled by the system." }, { title: "Centralized reporting hub", desc: "Pull from site data for instant month-end." }, { title: "Leadership dashboard", desc: "Live KPIs: cash-in, AR, payroll burn, uptime." }], timeline: [] },
    solution: { approach: "Scoped an MVP around RBAC, document automation, a reporting hub, and a metrics dashboard — replacing the spreadsheet-and-paper chain end to end.", features: [{ name: "Reports Generator", desc: "Monthly P&L summary, cash ledger export, and ops summary in a click." }, { name: "Metrics Dashboard", desc: "AR outstanding, DSO, payroll burn, and equipment uptime, live." }, { name: "Digital Kwitansi", desc: "Configurable fields, auto numbering, PDF + signature image." }, { name: "Invoice + Approval", desc: "Template, line items, approval workflow, PDF export & email." }, { name: "Payroll Drafts", desc: "Auto-generated payslips from timesheet & allowance rules, CSV/PDF export." }], screens: ["Reports", "Dashboard", "Generate Receipt", "New Invoice", "Payroll Drafts"] },
    outcome: { metrics: ["Average invoice-to-reconciliation time down 45% within 2 months (pilot sites).", "Paper kwitansi handling eliminated for 96% of transactions; disputes cut from days to hours.", "Payroll generation dropped from 10 hours/month to 2 hours/month for HR.", "30% fewer late payments via automated reminders and a cleaner audit trail."], quote: "We can finally close month-end in three days instead of seven." }
  },
  supermom: {
    name: "SuperMom", kicker: "Mobile App · Wellbeing", role: "Product Lead", platform: "mobile", accent: "#A86B9C",
    tagline: "A private, low-effort space for moms to log daily life, spot mood patterns, and find an empathetic micro-community.",
    problem: { summary: "Many mothers — especially new and stay-at-home moms — feel isolated and stressed, and can't consistently track mood or mental health. Existing journaling and social apps are too clinical, too time-consuming, or too public.", impact: ["No private, low-effort way to log daily life.", "No easy way to spot mood patterns over time.", "No empathetic micro-community for short, actionable support.", "Existing tools feel either too clinical or too exposed."] },
    framing: { methods: ["8 user interviews (moms, 24–40)", "Diary study (7 participants, 7 days)", "Competitive scan — journals, parenting groups, mood apps"], quotes: [{ who: "Aisyah (27, stay-at-home)", txt: "By the time my baby naps I'm too tired to write a whole journal entry — I want a simple way to note how I feel." }, { who: "Maria (33, working, 2 kids)", txt: "Between work and bedtime I barely have five minutes. I need something quick and private — not another noisy group chat." }, { who: "Dewi (30, first-time mom)", txt: "I keep wondering if other moms feel the same. I'd like to share, but in a space that feels safe." }], insights: ["Moms want privacy first — fear of judgment.", "70% prefer a 1–3 question daily check-in over free-form journaling.", "Community value is short personal stories and practical tips, not long debates.", "Notifications must be gentle and customizable."] },
    evaluation: { goals: ["Launch an MVP — daily snapshot journaling + mood tracking + a moderated micro-community — within 3 months.", "Reach 20% weekly active retention at 4 weeks for the onboarding cohort.", "Reach NPS ≥ 30 among active moms within 3 months.", "Reduce self-reported isolation by 25% for engaged users by week 8."], hmw: ["Make tracking mood and daily events take under 30 seconds a day?", "Provide community support that feels safe, private, and time-efficient?", "Surface meaningful patterns from sparse logs so moms can act on them?", "Encourage a journaling habit without guilt or long friction?"], opportunities: [], timeline: [{ label: "Discover (Wk 0–1)", desc: "Kickoff, success metrics, competitive scan, 8 interviews, 7-day diary study." }, { label: "Define (Wk 2)", desc: "3 personas + top pains; product principles; RICE/ICE → MVP list." }, { label: "Design (Wk 3–4)", desc: "Low-fi flows + Figma prototype; 5 usability tests." }, { label: "Build (Wk 5–10)", desc: "Encrypted entries, onboarding, mood calendar, community threads, moderation." }, { label: "Launch (Wk 15–20)", desc: "Soft launch via parenting groups & local influencers; streaks, micro-badges." }] },
    solution: { approach: "An MVP built on a 30-second daily check-in, gentle reminders, and a moderated, privacy-first micro-community — habit without guilt.", features: [{ name: "Daily Snapshot", desc: "A 1–3 question check-in that takes under 30 seconds." }, { name: "Mood Wheel", desc: "Tap to log mood; patterns surface over time." }, { name: "Micro-community Hub", desc: "Short stories and tips with volunteer moderation + report flow." }, { name: "Guided Prompted Journal", desc: "Optional prompts for moms who want to write more." }, { name: "Privacy & Reminders", desc: "Encrypted entries; gentle, customizable notifications." }], screens: ["Daily Snapshot", "Mood Wheel", "Community Hub", "Prompted Journal", "Settings"] },
    outcome: { metrics: ["MVP launched to 150 beta users → 65% activation (completed first entry).", "Day-7 retention for the onboarding cohort: 28% (beat the 20% target).", "Avg 3 entries/week per active user; 120 community threads in month one.", "NPS 34; reported isolation down 30% for users with ≥ 8 entries; 4.6/5 in closed beta."], quote: "It's the first space that doesn't feel like one more thing I'm failing at." }
  },
  refrigerant: {
    name: "Refrigerant Emission Tracker", kicker: "Carbon Tool · Excel", role: "Carbon Analyst & Builder", platform: "web", accent: "#2E6B4C",
    tagline: "Catches the hidden, high-GWP emissions most companies forget — AC and chiller leaks.",
    problem: { summary: "Refrigerant leaks are invisible and rarely logged, yet a single kilogram can equal hundreds of kilograms of CO2e. Most GHG inventories miss them entirely.", impact: ["Fugitive refrigerant emissions are invisible and almost never recorded.", "1 kg of refrigerant can equal hundreds of kg of CO2e — a material Scope 1 source.", "Nearly all SME inventories omit AC and chiller leaks completely.", "Without a method, there's no defensible number to report or reduce."] },
    framing: { methods: ["ISO 14064-1", "IPCC fugitive method", "AR5 GWP values", "Formula-driven Excel"], quotes: [], insights: ["Two estimation paths exist: top-up (mass-balance) is most accurate; screening (units × charge × leak rate) works when service data is missing.", "High-GWP gases dominate the result: 1 kg R-32 = 0.68 tCO2e, while 1 kg SF6 = 23.5 tCO2e.", "The hard part isn't the math — it's making sure no unit is silently left on a rough estimate."] },
    evaluation: { goals: ["Give SMEs a defensible way to quantify refrigerant leaks under ISO 14064-1.", "Support both top-up (mass-balance) and screening methods in one register.", "Embed AR5 GWP factors so users don't have to hunt them down.", "Auto-flag any unit still relying on a screening estimate so data gaps stay visible.", "Output tCO2e per unit and a clean, auditable total."], hmw: ["Quantify an invisible Scope 1 source with whatever data a company actually has?", "Let users start with rough screening estimates, then upgrade to mass-balance as service data arrives?", "Make missing service data impossible to ignore rather than silently assumed?", "Remove the friction of looking up GWP factors for every refrigerant?"], opportunities: [{ title: "Equipment register", desc: "One row per unit; choose top-up (mass-balance) or screening method." }, { title: "Embedded AR5 GWP", desc: "R-32, R-410A, R-134a, R-404A, SF6 and more, built in." }, { title: "Data-gap flags", desc: "Auto-flags rows still on screening estimates (missing service data)." }, { title: "tCO2e outputs", desc: "Per-unit and total, formula-driven and auditable." }], timeline: [] },
    solution: { approach: "A formula-driven Excel register that turns sparse equipment data into a defensible refrigerant emissions number. Each unit is logged with a method — mass-balance top-up where service records exist, screening (units × charge × leak rate) where they don't — and embedded AR5 GWP factors convert leaked mass into tCO2e automatically.", features: [{ name: "Two methods, one sheet", desc: "Top-up (mass-balance, most accurate) and screening (units × charge × leak rate) side by side." }, { name: "Built-in AR5 GWP", desc: "Common refrigerants — R-32, R-410A, R-134a, R-404A, SF6 — ready to use." }, { name: "Auto data-gap flags", desc: "Highlights any unit still relying on a screening estimate, so nothing is silently assumed." }, { name: "Per-unit & total tCO2e", desc: "Transparent formulas produce a number you can defend in a verification review." }], screens: ["Equipment Register", "Results Summary"] },
    outcome: { metrics: ["1 kg R-32 = 0.68 tCO2e; 1 kg SF6 = 23.5 tCO2e — the high-GWP gap made visible.", "Example register: ~17.7 kg leaked across units ≈ ~44 tCO2e.", "Catches a Scope 1 source nearly all SMEs omit entirely.", "Outputs are formula-driven and auditable against ISO 14064-1 and the IPCC fugitive method."], quote: "A source almost everyone forgets — now it has a number." }
  },
  dana: {
    name: "DANA", kicker: "Feature · Bill Payment", role: "Product Lead", platform: "mobile", accent: "#2F6FB0",
    tagline: "Turning solo e-wallet payments into a social, household experience — split bills, gifts, and shared recurring bills in one place.",
    problem: { summary: "Indonesian households and friend groups split costs, send gifts, and manage recurring bills across mixed channels — cash, transfers, multiple e-wallets. DANA's flows lack a cohesive social/household experience.", impact: ["Split bills are manual and slow.", "Money gifts feel impersonal.", "Families can't see shared recurring payments in one place.", "Little reward for on-time behavior → wasted time, duplicate payments, late fees, low stickiness."] },
    framing: { methods: ["Discovery & user research", "Personas", "Journey maps", "RICE prioritization"], quotes: [{ who: "Rizal, 29, Jakarta", txt: "We spent 20 minutes after dinner recalculating who owes what." }, { who: "Nina, 34, Bandung", txt: "I want to send money as a birthday gift, but bank transfers feel cold." }, { who: "Sari, 46, Depok", txt: "I'm not sure if my mother paid the water bill this month." }], insights: [] },
    evaluation: { goals: ["Product UX — cut time-to-settle split bills from 15 min → 2 min; lift family recurring enrollment 12% → 40%; reach 50% same-day settlement.", "Business — increase monthly transactions per user by 20%; drive 8% new signups via gift referrals; improve family-account 30-day retention by 18%.", "Engagement — 25% of active users engage with Loyalty features within 30 days of launch."], hmw: ["Enable a group to split and settle a restaurant bill in under 2 minutes?", "Let users send a memorable money gift that's easy to claim?", "Give families a single, trustable view of recurring household bills?", "Reward on-time payments simply so users feel recognized?", "Allow safe auto-pay for recurring bills while keeping granular control?"], opportunities: [], timeline: [{ label: "Wk 0 — Kickoff", desc: "Stakeholder alignment, KPI definition." }, { label: "Wk 2 — Synthesis", desc: "Personas, journey maps, RICE prioritization." }, { label: "Wk 3–4 — Design", desc: "Wireframes → high-fi prototype; run usability tests." }, { label: "Wk 5–6 — Build", desc: "API design, MVP flows, QA & security review." }, { label: "Wk 7–8 — Pilot", desc: "Launch to 1,000 users, monitor, analyze, recommend changes." }] },
    solution: { approach: "A household layer on top of DANA: fast split-bills, claimable gifts, a shared family bill view, and light gamified loyalty for on-time payments.", features: [{ name: "Split Bill", desc: "Pick a bill, select contacts, set contributions by % or amount." }, { name: "Recurring Bills", desc: "Add recurring bills with auto-pay, reminders, and billing cycle." }, { name: "Payment Preferences", desc: "Auto-pay, smart limits, max bill amount, multi-channel notifications." }, { name: "Family Bills View", desc: "Shared calendar + tracker with family financial health score." }, { name: "Family Bills Quest", desc: "Gamified leaderboard and quests that reward on-time payments." }], screens: ["Split Bill", "Add Recurring Bill", "Bill Detail", "Payment Preferences", "Family Bills"] },
    outcome: { metrics: ["Time-to-settle (split): 15m → 1:55. Same-day settlement: 22% → 68%.", "Gift acceptance (claim) rate: 40% → 78%. Recurring family enrollment: 12% → 43%.", "Family dashboard 30-day retention uplift: +18%. Loyalty engagement: 27% of active payers used a reward.", "Support tickets for 'who paid what': −62%."], quote: "Splitting and tracking household bills finally feels like one app, not five chats." }
  },
  maxim: {
    name: "Maxim", kicker: "Redesign · Checkout", role: "Product Lead", platform: "mobile", accent: "#A8402E",
    tagline: "Cutting checkout friction so more started orders actually get completed — fewer drop-offs, fewer duplicates.",
    problem: { summary: "Many users start an order in Maxim's app but don't complete it. Heatmaps and analytics show high drop-offs at 'Choose Payment' and 'Confirm Order', with occasional duplicate/failed orders creating ops overhead.", impact: ["Fewer weekly completed orders.", "Duplicate/failed orders add ops overhead.", "More customer-support tickets around payments and confirmations."] },
    framing: { methods: ["Heatmaps & funnel analytics", "Drop-off analysis at payment + confirm", "Persona-based pain analysis"], quotes: [{ who: "Atka — Busy Worker, 28", txt: "Too many repetitive steps for frequent users → friction." }, { who: "Adi — Student, patchy internet, 20", txt: "Poor connectivity handling → duplicates & uncertainty." }, { who: "Siti — Homemaker, 35", txt: "Unclear error handling & recovery → low trust." }], insights: [] },
    evaluation: { goals: ["Increase order conversion (started → completed) from 58% → 72% within 12 weeks.", "Reduce order failure / duplicate incidents by 50% in 12 weeks.", "Decrease average checkout time from 90s → under 45s for returning users.", "Reduce payment/confirmation CS ticket volume by 40% within 12 weeks.", "Improve NPS for the ordering experience by +6 points."], hmw: ["Reduce the time it takes a returning user to complete an order?", "Prevent accidental duplicate orders during poor connectivity?", "Surface the most reliable payment method automatically?", "Drive confidence at confirmation so users don't abandon?", "Recover users who drop off during payment with a seamless flow?"], opportunities: [], timeline: [{ label: "Discover (1 wk)", desc: "Funnel + heatmap analysis, persona pains." }, { label: "Define (2 days)", desc: "Frame problems, prioritize fixes." }, { label: "Ideate & design (1.5 wks)", desc: "Redesign payment + confirm flows." }, { label: "Validate (1 wk)", desc: "Prototype testing with returning users." }, { label: "Build & launch (3–4 wks)", desc: "Iterative ship with connectivity hardening." }, { label: "Measure & iterate", desc: "Track conversion, failures, CS tickets." }] },
    solution: { approach: "Redesigned the payment and confirmation steps for returning users — fewer steps, a reliable default payment method, and hardened connectivity/duplicate handling.", features: [{ name: "Streamlined Order", desc: "Saved preferences and fewer repetitive steps for frequent users." }, { name: "Reliable Payment Default", desc: "Surfaces the most dependable payment method automatically." }, { name: "Confident Confirmation", desc: "Clear driver/order status so users don't second-guess and abandon." }, { name: "Connectivity Guardrails", desc: "Duplicate prevention and graceful error recovery on patchy networks." }, { name: "Faster Search", desc: "Improved destination search for quicker reorders." }], screens: ["Order Home", "Driver Found", "Live Tracking", "Confirm Order", "Search"] },
    outcome: { metrics: ["Order conversion: +14 pp (58% → 72%).", "Checkout time: median 90s → 38s for returning users.", "Order failure / duplicate incidents: −56% in ops logs; checkout CS tickets −45%.", "Estimated +8% weekly completed GMV from reduced abandonment; order-flow NPS +5."], quote: "Faster, less confusing payment." }
  },
  risk: {
    name: "Risk Management Agent System", kicker: "AI Workflow · Enterprise Risk", role: "AI Workflow Designer", platform: "web", accent: "#6E7B45", draft: true,
    tagline: "A multi-agent workflow concept for intake, RCSA review, regulatory grounding, KRI, stress test, and deliverable generation.",
    problem: { summary: "Enterprise risk teams juggle intake, RCSA reviews, regulatory grounding, and reporting across disconnected tools and manual steps.", impact: ["Manual RCSA review is slow and inconsistent.", "Regulatory grounding is hard to keep current.", "DRAFT — add the specific pains you captured."] },
    framing: { methods: ["DRAFT — add your discovery method"], quotes: [], insights: ["Multi-agent split: intake, RCSA, grounding, KRI, stress test, deliverable."] },
    evaluation: { goals: ["Automate the first-pass RCSA review.", "Ground recommendations in current regulation.", "Generate audit-ready deliverables."], hmw: ["Route a risk intake to the right agent automatically?", "Keep regulatory grounding current and citable?"], opportunities: [{ title: "Intake agent", desc: "Classifies and routes incoming risk items." }, { title: "RCSA agent", desc: "First-pass control self-assessment review." }, { title: "Grounding agent", desc: "Cites current regulation for each finding." }], timeline: [] },
    solution: { approach: "DRAFT — describe the agent orchestration once finalized.", features: [{ name: "Intake → RCSA → Grounding", desc: "Chained agents for review and citation." }, { name: "KRI & Stress Test", desc: "Generates indicators and scenario stress tests." }, { name: "Deliverable Generation", desc: "Audit-ready outputs." }], screens: ["Agent Workflow", "RCSA Review", "Deliverable"] },
    outcome: { metrics: ["DRAFT — add concept validation / pilot outcomes."], quote: "" }
  }
};

/* ---------- helpers ---------- */
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function hexToRgba(hex, a) {
  const n = hex.replace("#", "");
  const x = n.length === 3 ? n.split("").map((c) => c + c).join("") : n;
  const r = parseInt(x.slice(0, 2), 16), g = parseInt(x.slice(2, 4), 16), b = parseInt(x.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ---------- case-study renderer (returns HTML string) ---------- */
function renderDetail(p) {
  const A = p.accent;
  const wrap = "max-width:1120px; margin:0 auto; padding:0 36px;";
  const secOpen = `<section style="padding:54px 0; border-bottom:1px solid #E2D6BC;"><div style="${wrap}">`;
  const dash = `<span style="width:24px; height:2px; background:${A}; display:inline-block; flex:none;"></span>`;
  const secLabel = (t) => `<div style="display:flex; align-items:center; gap:12px; font-family:'Space Mono',monospace; font-size:12px; letter-spacing:.26em; text-transform:uppercase; color:#9C8E74; margin-bottom:14px;">${dash}${t}</div>`;
  const secTitle = (t) => `<h2 style="font-family:'Playfair Display',serif; font-weight:800; font-size:clamp(32px,5vw,52px); line-height:1.04; letter-spacing:-.01em; margin:0 0 26px; color:#2B2419;">${t}</h2>`;
  const leadS = "font-size:clamp(17px,2.2vw,20px); line-height:1.55; max-width:760px; color:#3A3325;";
  const cardS = "background:#FCF7EB; border:1px solid #E2D6BC;";
  const out = [];

  // hero
  out.push(`<section style="padding:60px 0 4px;"><div style="${wrap}">
    <div style="font-family:'Space Mono',monospace; font-size:12.5px; letter-spacing:.3em; text-transform:uppercase; color:${A}; margin-bottom:14px;">${esc(p.kicker)}</div>
    <h1 style="font-family:'Playfair Display',serif; font-weight:800; font-size:clamp(42px,8vw,86px); line-height:.98; letter-spacing:-.01em; margin:0; color:${A};">${esc(p.name)}</h1>
    <div style="margin-top:18px; display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <span style="font-family:'Playfair Display',serif; font-style:italic; font-size:14px; color:#2B2419; border:1px solid #D2C4A4; border-radius:999px; padding:4px 13px;">${esc(p.role)}</span>
      ${p.draft ? `<span style="font-family:'Space Mono',monospace; font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:#8A6A1E; background:rgba(198,138,46,.18); border:1px solid rgba(198,138,46,.4); border-radius:6px; padding:4px 9px;">Draft</span>` : ""}
    </div>
    <p style="color:#5C5340; font-size:clamp(16px,2.2vw,20px); max-width:720px; margin-top:18px; line-height:1.5;">${esc(p.tagline)}</p>
  </div></section>`);

  if (p.draft) out.push(`<div style="${wrap}"><div style="background:rgba(198,138,46,.1); border:1px solid rgba(198,138,46,.34); border-radius:12px; padding:15px 20px; margin:26px 0 0; font-size:14px; color:#5C5340;"><b style="color:#A8402E;">Draft. </b>Summarized from notes — check numbers, quotes, and any DRAFT fields before publishing.</div></div>`);

  // Problem
  const torn = `background:${hexToRgba(A, .22)}; color:#2B2419; padding:2px 8px; display:inline; -webkit-box-decoration-break:clone; box-decoration-break:clone; clip-path:polygon(0 8%,4% 0,12% 9%,22% 1%,34% 8%,47% 0,60% 9%,73% 1%,85% 8%,95% 0,100% 9%,100% 92%,95% 100%,85% 92%,73% 100%,60% 91%,47% 100%,34% 92%,22% 100%,12% 91%,4% 100%,0 92%);`;
  const impactList = (items) => (items && items.length) ? `<ul style="list-style:none; margin:30px 0 0; padding:0; display:grid; gap:1px; background:#E8DEC6; border-radius:12px; overflow:hidden;">${items.map((it) => `<li style="background:#FCF7EB; padding:15px 20px; display:flex; gap:14px; align-items:flex-start; font-size:15px; color:#3A3325;"><span style="flex:none; width:7px; height:7px; margin-top:8px; border-radius:50%; background:${A};"></span>${esc(it)}</li>`).join("")}</ul>` : "";
  out.push(secOpen + secLabel("Problem") + secTitle("The Problem") + `<p style="${leadS}"><span style="${torn}">${esc(p.problem.summary)}</span></p>` + impactList(p.problem.impact) + `</div></section>`);

  // Discovery
  let dk = "";
  if (p.framing.methods && p.framing.methods.length) {
    dk += `<p style="${leadS} margin-bottom:14px;">How I got to the real problem:</p>`;
    dk += `<div style="display:flex; flex-wrap:wrap; gap:10px;">${p.framing.methods.map((m) => `<span style="font-size:13.5px; color:#3A3325; ${cardS} border-radius:999px; padding:7px 15px;">${esc(m)}</span>`).join("")}</div>`;
  }
  if (p.framing.quotes && p.framing.quotes.length) {
    const rot = ["-2.2deg", "1.8deg", "-1.2deg", "2.4deg"];
    dk += `<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); gap:22px; margin-top:26px;">${p.framing.quotes.map((q, i) => `<div class="tilt" style="${cardS} border-radius:14px; padding:22px 20px; transform:rotate(${rot[i % 4]});"><div style="font-family:'Playfair Display',serif; font-weight:700; font-size:17px; margin-bottom:8px; color:#2B2419;">${esc(q.who)}</div><div style="color:#6B6151; font-size:14px; line-height:1.5;">${esc(q.txt)}</div></div>`).join("")}</div>`;
  }
  if (p.framing.insights && p.framing.insights.length) {
    dk += `<ul style="list-style:none; margin:28px 0 0; padding:0; display:grid; gap:12px;">${p.framing.insights.map((it) => `<li style="background:#FCF7EB; border-left:3px solid ${A}; border-radius:0 12px 12px 0; padding:15px 20px; font-size:15px; line-height:1.5; color:#3A3325;">${esc(it)}</li>`).join("")}</ul>`;
  }
  if (dk) out.push(secOpen + secLabel("Discovery") + secTitle("How I Framed It") + dk + `</div></section>`);

  // Evaluation
  let ek = "";
  const subLabel = (t, mt) => `<div style="display:flex; align-items:center; gap:12px; font-family:'Space Mono',monospace; font-size:12px; letter-spacing:.26em; text-transform:uppercase; color:#9C8E74; margin:${mt} 0 14px;">${dash}${t}</div>`;
  if (p.evaluation.goals && p.evaluation.goals.length) {
    ek += subLabel("Goals", "4px");
    ek += `<ul style="list-style:none; margin:0; padding:0; display:grid; gap:14px;">${p.evaluation.goals.map((g, i) => `<li style="display:flex; gap:16px; align-items:baseline; font-size:clamp(16px,2vw,18px); line-height:1.45; padding-bottom:14px; border-bottom:1px solid #E2D6BC; color:#2B2419;"><span style="font-family:'Playfair Display',serif; font-weight:700; font-size:16px; color:${A}; flex:none; width:30px;">${String(i + 1).padStart(2, "0")}</span>${esc(g)}</li>`).join("")}</ul>`;
  }
  if (p.evaluation.hmw && p.evaluation.hmw.length) {
    ek += subLabel("How Might We", "42px");
    ek += `<ul style="list-style:none; margin:0; padding:0; display:grid; gap:14px;">${p.evaluation.hmw.map((hm) => `<li style="position:relative; padding-left:62px; font-size:clamp(16px,2vw,18px); line-height:1.45; color:#2B2419;"><span style="position:absolute; left:0; top:1px; font-family:'Space Mono',monospace; font-weight:700; font-size:11px; letter-spacing:.1em; color:#F3EAD8; background:${A}; padding:3px 7px; border-radius:5px;">HMW</span>${esc(hm)}</li>`).join("")}</ul>`;
  }
  if (p.evaluation.opportunities && p.evaluation.opportunities.length) {
    ek += subLabel("Opportunities & Scope", "42px");
    ek += `<div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:14px;">${p.evaluation.opportunities.map((o) => `<div style="${cardS} border-radius:14px; padding:18px 20px;"><h4 style="margin:0 0 6px; font-family:'Playfair Display',serif; font-size:16px; font-weight:600; color:#2B2419;">${esc(o.title)}</h4><p style="margin:0; color:#6B6151; font-size:13.5px; line-height:1.5;">${esc(o.desc)}</p></div>`).join("")}</div>`;
  }
  if (p.evaluation.timeline && p.evaluation.timeline.length) {
    ek += subLabel("Timeline", "42px");
    ek += `<div style="display:flex; gap:0; margin-top:4px; overflow-x:auto; padding-bottom:8px;">${p.evaluation.timeline.map((t, i) => `<div style="flex:1 0 165px; padding:${i === 0 ? "0 18px 0 0" : "0 18px"}; border-left:${i === 0 ? "none" : "1px solid #E2D6BC"};"><div style="font-family:'Playfair Display',serif; font-weight:700; color:${A}; font-size:14px;">0${i + 1}</div><h4 style="margin:6px 0; font-size:14.5px; color:#2B2419;">${esc(t.label)}</h4><p style="margin:0; color:#6B6151; font-size:13px; line-height:1.45;">${esc(t.desc)}</p></div>`).join("")}</div>`;
  }
  if (ek) out.push(secOpen + secLabel("Evaluation") + secTitle("How I Solved It") + ek + `</div></section>`);

  // Solution
  let sk = `<p style="${leadS} margin-bottom:28px;">${esc(p.solution.approach)}</p>`;
  if (p.solution.features && p.solution.features.length) {
    sk += `<div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:14px;">${p.solution.features.map((f) => `<div style="${cardS} border-radius:14px; padding:20px;"><div style="font-family:'Playfair Display',serif; font-weight:700; font-size:17px; margin-bottom:8px; color:#2B2419;">${esc(f.name)}</div><p style="margin:0; color:#6B6151; font-size:14px; line-height:1.5;">${esc(f.desc)}</p></div>`).join("")}</div>`;
  }
  if (p.solution.screens && p.solution.screens.length) {
    const mob = p.platform === "mobile";
    sk += `<div style="display:flex; gap:18px; overflow-x:auto; padding:18px 2px 8px;">${p.solution.screens.map((s) => `<div style="flex:none; width:${mob ? "178px" : "320px"}; height:${mob ? "368px" : "205px"}; border-radius:16px; background:repeating-linear-gradient(45deg,#E6D9BF,#E6D9BF 9px,#EFE6CF 9px,#EFE6CF 18px); border:1px dashed #CDBE9C; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#9C8E74; text-align:center; padding:14px;"><div style="font-size:20px; opacity:.5; margin-bottom:10px;">▢</div><div style="font-family:'Space Mono',monospace; font-size:12px; color:#7A6F58;">${esc(s)}</div><div style="font-family:'Space Mono',monospace; font-size:10px; margin-top:6px; color:#A2926F; letter-spacing:.04em;">drop mockup here</div></div>`).join("")}</div>`;
  }
  out.push(secOpen + secLabel("Solution") + secTitle("The Solution") + sk + `</div></section>`);

  // Outcome
  if (p.outcome.metrics && p.outcome.metrics.length) {
    const oc = `<div style="position:relative; background:#FBF6EA; border:1px solid #E8DEC6; border-radius:6px; padding:38px 40px 34px; max-width:680px; margin-top:8px; box-shadow:0 26px 50px -28px rgba(70,48,20,.5);">
      <span style="position:absolute; width:120px; height:30px; background:rgba(110,123,69,.4); top:-13px; right:46px; transform:rotate(7deg);"></span>
      <span style="position:absolute; width:120px; height:30px; background:rgba(168,64,46,.32); bottom:-12px; left:34px; transform:rotate(-8deg);"></span>
      <ul style="list-style:none; margin:0; padding:0; display:grid; gap:14px;">${p.outcome.metrics.map((m) => `<li style="display:flex; gap:13px; align-items:flex-start; font-size:15.5px; font-weight:600; line-height:1.4; color:#2B2419;"><span style="flex:none; width:7px; height:7px; margin-top:8px; border-radius:50%; background:#2B2419;"></span>${esc(m)}</li>`).join("")}</ul>
      ${p.outcome.quote ? `<p style="margin:24px 0 0; font-family:'Playfair Display',serif; font-style:italic; font-weight:500; font-size:18px; line-height:1.4; border-top:1px solid rgba(43,36,25,.18); padding-top:20px; color:#2B2419;">&ldquo;${esc(p.outcome.quote)}&rdquo;</p>` : ""}
    </div>`;
    out.push(secOpen + secLabel("Outcome") + secTitle("Outcome") + oc + `</div></section>`);
  }

  out.push(`<footer style="padding:40px 0 70px;"><div style="${wrap}"><div style="color:#9C8E74; font-size:12.5px;">© Atika Dewi Suryani 2025</div></div></footer>`);
  return out.join("");
}

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
  const playing = btn.getAttribute("data-playing") === "true";
  const next = !playing;
  btn.setAttribute("data-playing", String(next));
  reels.forEach((r) => { r.style.animationPlayState = next ? "running" : "paused"; });
  btn.innerHTML = next
    ? `<span style="display:flex; gap:5px;"><span style="width:5px; height:16px; background:#F3EAD8; border-radius:1px;"></span><span style="width:5px; height:16px; background:#F3EAD8; border-radius:1px;"></span></span>`
    : `<span style="width:0; height:0; border-left:15px solid #F3EAD8; border-top:9px solid transparent; border-bottom:9px solid transparent; margin-left:4px;"></span>`;
  label.textContent = next ? "▶ now playing — reels rolling" : "press play — reels spin";
  label.style.color = next ? "#2E6B4C" : "#9C8E74";
}

/* deep-link + back/forward support */
window.addEventListener("popstate", () => {
  const id = location.hash.replace("#", "");
  if (id && PROJECTS[id]) openProject(id);
  else goHome();
});
window.addEventListener("DOMContentLoaded", () => {
  const id = location.hash.replace("#", "");
  if (id && PROJECTS[id]) openProject(id);
});
