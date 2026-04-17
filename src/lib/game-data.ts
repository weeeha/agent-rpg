// Shared game data for screen mockups

export type Agent = {
  slug: string;
  name: string;
  role: string;
  level: number;
  class: string;
  credits: number;
  reputation: string;
  portrait: string;
  stats: { reasoning: number; speed: number; accuracy: number; context: number; tooluse: number };
  performance: { success: number; quality: number; autonomy: number };
  missions: number;
  skills: { name: string; tier: "EPIC" | "RARE" | "COMMON" }[];
  cyberware: { name: string; tier: number }[];
};

export const AGENTS: Agent[] = [
  {
    slug: "atlas",
    name: "ATLAS",
    role: "Architect",
    level: 22,
    class: "Architect",
    credits: 4280,
    reputation: "Trusted",
    portrait: "/portraits/atlas.png",
    stats: { reasoning: 92, speed: 64, accuracy: 78, context: 85, tooluse: 70 },
    performance: { success: 94, quality: 88, autonomy: 88 },
    missions: 47,
    skills: [
      { name: "System Design", tier: "EPIC" },
      { name: "Code Audit", tier: "EPIC" },
      { name: "Refactor", tier: "EPIC" },
      { name: "Context Recall", tier: "RARE" },
      { name: "Security Review", tier: "RARE" },
      { name: "Tool Fusion", tier: "RARE" },
    ],
    cyberware: [
      { name: "Cortex", tier: 3 },
      { name: "Neural Mesh", tier: 2 },
      { name: "Optics", tier: 3 },
      { name: "Skill Matrix", tier: 2 },
      { name: "Reflex Arc", tier: 1 },
      { name: "Firewall", tier: 3 },
    ],
  },
  {
    slug: "cipher",
    name: "CIPHER",
    role: "Decoder",
    level: 19,
    class: "Decoder",
    credits: 3150,
    reputation: "Reliable",
    portrait: "/portraits/cipher.png",
    stats: { reasoning: 88, speed: 72, accuracy: 91, context: 80, tooluse: 82 },
    performance: { success: 90, quality: 85, autonomy: 79 },
    missions: 34,
    skills: [
      { name: "Cryptanalysis", tier: "EPIC" },
      { name: "Pattern Recognition", tier: "EPIC" },
      { name: "Data Forensics", tier: "RARE" },
    ],
    cyberware: [
      { name: "Cortex", tier: 3 },
      { name: "Optics", tier: 2 },
      { name: "Skill Matrix", tier: 3 },
    ],
  },
  {
    slug: "forge",
    name: "FORGE",
    role: "Engineer",
    level: 21,
    class: "Engineer",
    credits: 3920,
    reputation: "Veteran",
    portrait: "/portraits/forge.png",
    stats: { reasoning: 74, speed: 58, accuracy: 80, context: 70, tooluse: 95 },
    performance: { success: 91, quality: 92, autonomy: 75 },
    missions: 41,
    skills: [
      { name: "Fabrication", tier: "EPIC" },
      { name: "Repair", tier: "EPIC" },
      { name: "Demolition", tier: "RARE" },
    ],
    cyberware: [
      { name: "Manipulators", tier: 3 },
      { name: "Reflex Arc", tier: 2 },
      { name: "Neural Mesh", tier: 1 },
    ],
  },
  {
    slug: "echo",
    name: "ECHO",
    role: "Signal",
    level: 17,
    class: "Signal",
    credits: 2670,
    reputation: "Promising",
    portrait: "/portraits/echo.png",
    stats: { reasoning: 79, speed: 88, accuracy: 74, context: 90, tooluse: 72 },
    performance: { success: 86, quality: 82, autonomy: 81 },
    missions: 28,
    skills: [
      { name: "Signal Boost", tier: "EPIC" },
      { name: "Indexing", tier: "RARE" },
    ],
    cyberware: [
      { name: "Vocoder", tier: 3 },
      { name: "Optics", tier: 2 },
    ],
  },
  {
    slug: "mirror",
    name: "MIRROR",
    role: "Reflection",
    level: 20,
    class: "Reflection",
    credits: 3560,
    reputation: "Enigmatic",
    portrait: "/portraits/mirror.png",
    stats: { reasoning: 86, speed: 70, accuracy: 88, context: 92, tooluse: 68 },
    performance: { success: 89, quality: 91, autonomy: 83 },
    missions: 36,
    skills: [
      { name: "Duplicate", tier: "EPIC" },
      { name: "Reflect Attack", tier: "RARE" },
    ],
    cyberware: [
      { name: "Cortex", tier: 2 },
      { name: "Optics", tier: 3 },
    ],
  },
  {
    slug: "muse",
    name: "MUSE",
    role: "Creator",
    level: 18,
    class: "Creator",
    credits: 2980,
    reputation: "Inspired",
    portrait: "/portraits/muse.png",
    stats: { reasoning: 80, speed: 76, accuracy: 70, context: 88, tooluse: 85 },
    performance: { success: 84, quality: 96, autonomy: 89 },
    missions: 31,
    skills: [
      { name: "Synthesis", tier: "EPIC" },
      { name: "Narrative", tier: "RARE" },
    ],
    cyberware: [
      { name: "Cortex", tier: 2 },
      { name: "Vocoder", tier: 2 },
    ],
  },
  {
    slug: "sentinel",
    name: "SENTINEL",
    role: "Guardian",
    level: 23,
    class: "Guardian",
    credits: 4510,
    reputation: "Stalwart",
    portrait: "/portraits/sentinel.png",
    stats: { reasoning: 72, speed: 60, accuracy: 85, context: 74, tooluse: 78 },
    performance: { success: 95, quality: 87, autonomy: 72 },
    missions: 52,
    skills: [
      { name: "Guard", tier: "EPIC" },
      { name: "Counter", tier: "EPIC" },
      { name: "Lockdown", tier: "RARE" },
    ],
    cyberware: [
      { name: "Firewall", tier: 3 },
      { name: "Reflex Arc", tier: 3 },
      { name: "Manipulators", tier: 2 },
    ],
  },
  {
    slug: "nova",
    name: "NOVA",
    role: "Explorer",
    level: 19,
    class: "Explorer",
    credits: 3340,
    reputation: "Wandering",
    portrait: "/portraits/nova.png",
    stats: { reasoning: 82, speed: 90, accuracy: 76, context: 84, tooluse: 71 },
    performance: { success: 87, quality: 85, autonomy: 93 },
    missions: 38,
    skills: [
      { name: "Pathfind", tier: "EPIC" },
      { name: "Starchart", tier: "RARE" },
    ],
    cyberware: [
      { name: "Optics", tier: 3 },
      { name: "Neural Mesh", tier: 2 },
    ],
  },
];

export type Mission = {
  slug: string;
  title: string;
  difficulty: number;
  tags: string[];
  risk: "HIGH-IMPACT" | "LOW-RISK";
  description: string;
  xp: string;
  cr: string;
  eta: string;
  objectives: string[];
  assigned: string[];
};

export const MISSIONS: Mission[] = [
  {
    slug: "migrate-auth-oauth2",
    title: "Migrate auth service to OAuth2",
    difficulty: 4,
    tags: ["Security"],
    risk: "HIGH-IMPACT",
    description:
      "Transition the existing authentication system to OAuth2 protocol for enhanced security and third-party compatibility.",
    xp: "+1500 XP",
    cr: "+2500 CR",
    eta: "~300m",
    objectives: [
      "Audit current auth flows",
      "Provision OAuth2 provider",
      "Migrate session store",
      "Dual-run and cutover",
    ],
    assigned: ["atlas", "sentinel"],
  },
  {
    slug: "write-api-docs",
    title: "Write API documentation",
    difficulty: 2,
    tags: ["Documentation"],
    risk: "LOW-RISK",
    description: "Document all public API endpoints, including request/response structures and examples.",
    xp: "+450 XP",
    cr: "+600 CR",
    eta: "~60m",
    objectives: ["Inventory endpoints", "Write per-endpoint spec", "Publish to docs site"],
    assigned: ["muse"],
  },
  {
    slug: "production-incident",
    title: "Production incident response",
    difficulty: 5,
    tags: ["Engineering"],
    risk: "HIGH-IMPACT",
    description:
      "A critical server incident has occurred. The production environment is compromised. Deploy immediately to resolve.",
    xp: "+1500 XP",
    cr: "+2500 CR",
    eta: "~180m",
    objectives: ["Identify root cause", "Contain blast radius", "Restore service", "Write postmortem"],
    assigned: ["atlas", "forge", "sentinel"],
  },
  {
    slug: "harden-firewall",
    title: "Harden firewall",
    difficulty: 3,
    tags: ["Security"],
    risk: "LOW-RISK",
    description: "Review and update firewall rules to block unauthorized traffic patterns and strengthen network defense.",
    xp: "+800 XP",
    cr: "+1200 CR",
    eta: "~120m",
    objectives: ["Audit current rules", "Baseline traffic patterns", "Apply hardening", "Validate"],
    assigned: ["sentinel", "cipher"],
  },
  {
    slug: "refactor-payment-pipeline",
    title: "Refactor payment pipeline",
    difficulty: 4,
    tags: ["Engineering"],
    risk: "HIGH-IMPACT",
    description: "Clean up legacy code and optimize the payment processing flow for performance and reliability.",
    xp: "+1100 XP",
    cr: "+1800 CR",
    eta: "~240m",
    objectives: ["Map current flow", "Extract core modules", "Add retry + idempotency", "Gradual rollout"],
    assigned: ["atlas", "forge"],
  },
  {
    slug: "write-onboarding-playbook",
    title: "Write onboarding playbook",
    difficulty: 2,
    tags: ["Documentation"],
    risk: "LOW-RISK",
    description: "Create a comprehensive guide for new agents covering initial setup, tools, and protocols.",
    xp: "+400 XP",
    cr: "+500 CR",
    eta: "~90m",
    objectives: ["Outline sections", "Draft per-tool sections", "Peer review"],
    assigned: ["muse", "echo"],
  },
];

export type Room = {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  stats: { label: string; value: string }[];
};

export const ROOMS: Room[] = [
  {
    slug: "bridge",
    name: "Bridge",
    subtitle: "Command Center",
    image: "/rooms/bridge.png",
    stats: [
      { label: "Efficiency", value: "92%" },
      { label: "Warp Charge", value: "Ready" },
      { label: "Shield", value: "100%" },
    ],
  },
  {
    slug: "memory-vault",
    name: "Memory Vault",
    subtitle: "Collective Knowledge Bank",
    image: "/rooms/memory-vault.png",
    stats: [
      { label: "Capacity", value: "247/512 TB" },
      { label: "Indexed Memories", value: "4,820" },
      { label: "Active Queries", value: "7" },
      { label: "Cross-links", value: "1,284" },
    ],
  },
  {
    slug: "medbay",
    name: "Medbay",
    subtitle: "Repair & Diagnostics",
    image: "/rooms/medbay.png",
    stats: [
      { label: "Beds", value: "3/3" },
      { label: "Avg Recovery", value: "45m" },
    ],
  },
  {
    slug: "workshop",
    name: "Workshop",
    subtitle: "Fabrication & Repair",
    image: "/rooms/workshop.png",
    stats: [
      { label: "Projects", value: "2 active" },
      { label: "Queue", value: "5" },
    ],
  },
];

export const CYBERWARE_MODULES = [
  { slug: "cortex", name: "Cortex", tier: 3, max: 3, desc: "Reasoning core" },
  { slug: "neural-mesh", name: "Neural Mesh", tier: 2, max: 4, desc: "Memory & recall" },
  { slug: "optics", name: "Optics", tier: 3, max: 6, desc: "Perception & input" },
  { slug: "vocoder", name: "Vocoder", tier: 1, max: 3, desc: "Speech & comms" },
  { slug: "manipulators", name: "Manipulators", tier: 2, max: 4, desc: "Tool use" },
  { slug: "skill-matrix", name: "Skill Matrix", tier: 2, max: 6, desc: "Skill storage" },
  { slug: "reflex-arc", name: "Reflex Arc", tier: 1, max: 3, desc: "Response latency" },
  { slug: "firewall", name: "Firewall", tier: 3, max: 3, desc: "Defensive posture" },
] as const;

export const SKILLS = [
  { slug: "code-audit", name: "Code Audit", category: "Analysis", tier: "RARE" as const, icon: "🔍", unlocked: true },
  { slug: "system-design", name: "System Design", category: "Engineering", tier: "EPIC" as const, icon: "⚙️", unlocked: true, selected: true },
  { slug: "refactor", name: "Refactor", category: "Engineering", tier: "EPIC" as const, icon: "🔧", unlocked: false },
  { slug: "security-review", name: "Security Review", category: "Security", tier: "RARE" as const, icon: "🛡️", unlocked: true },
  { slug: "lead-prompt", name: "Lead Prompt", category: "Leadership", tier: "RARE" as const, icon: "👥", unlocked: true },
  { slug: "context-recall", name: "Context Recall", category: "Memory", tier: "RARE" as const, icon: "🧠", unlocked: true },
  { slug: "tool-fusion", name: "Tool Fusion", category: "Engineering", tier: "EPIC" as const, icon: "⚔️", unlocked: false },
];
