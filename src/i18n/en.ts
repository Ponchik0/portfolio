import type { Dictionary } from './types';

export const en: Dictionary = {
  meta: {
    title: 'Bogdan (Ponchik) — Frontend & Game Mod Developer',
    description:
      'Developer portfolio: Flagship web platform Zoovix, massive Unity C# game modifications (WeatherExpansion, SuperCreatures) and interactive tools.',
  },

  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    experience: 'Journey',
    contact: 'Contact',
  },

  hero: {
    badge: 'Available for innovative projects & collaborations',
    intro: 'Hi, I am',
    name: 'Bogdan (Ponchik)',
    roleAccent: 'Product & Game Mod Developer,',
    roleRest: 'building fullstack web platforms and Unity C# game mods',
    tagline:
      'Creator of the flagship watch-party cinema catalog Zoovix and a popular series of Unity mods with over 18,500 downloads on Thunderstore.',
    ctaProjects: 'View Projects',
    ctaContact: 'Get in Touch',
    scroll: 'scroll',
  },

  marquee: [
    'Next.js 15 & React 19',
    'Unity C# & BepInEx',
    'TypeScript',
    'Real-time Watch-Party',
    'Tailwind CSS v4',
    'Supabase & Redis',
    'Multiplayer FishNet',
  ],

  about: {
    label: 'About Me',
    heading: 'Code is craftsmanship and',
    headingAccent: 'product engineering',
    paragraphs: [
      'I am a developer and mod creator based in Kyiv. My primary focus is building end-to-end products: from fullstack real-time web platforms to complex Unity game modifications with network multiplayer synchronization.',
      'My flagship project is Zoovix — a movie and anime catalog with gamification and synchronized real-time watch-party rooms. In parallel, I developed a series of mods for How to Fish (SuperCreatures, WeatherExpansion, BaitIndex, ScoreAlways) with 18,500+ total downloads on Thunderstore.',
      'I place high emphasis on performance, clean architecture, smooth micro-interactions, and visual fidelity.',
    ],
    facts: [
      { value: '2025', label: 'year started' },
      { value: '5+', label: 'core projects & mods' },
      { value: '18.5k+', label: 'Thunderstore downloads' },
    ],
  },

  projects: {
    label: 'Projects',
    heading: 'Featured',
    headingAccent: 'Projects & Mods',
    wipBadge: 'In Development',
    caseLink: 'Read Case',
    caseAbout: 'About the Project',
    caseFeatures: 'Key Features',
    caseChallenges: 'Challenges & Solutions',
    caseStack: 'Tech Stack',
    caseBack: 'All Projects',
    caseNext: 'Next Project',
    categories: {
      all: 'All Works',
      web: 'Web Projects',
      mods: 'Game Mods',
      tools: 'Bots & Tools',
    },
    items: [
      // ── 1. ZOOVIX (FLAGSHIP PROJECT) ─────────────────────
      {
        slug: 'zoovix',
        title: 'Zoovix',
        category: 'web',
        kind: 'Flagship Cinema & Anime Catalog with Watch-Party Rooms',
        year: '2026',
        lede: 'Massive movie, TV show and anime platform with gamification and synchronized watch-party rooms — modern dark cinema aesthetic with low-latency real-time state sync.',
        highlights: [
          'Watch-party: synchronized video playback in shared rooms in real time',
          'Gamification: daily quests, streaks, inventory and internal reward shop',
          'Deep localization in 5 languages with localized SEO URLs',
          'Custom session-cookie authentication engine',
          'PWA: installable on desktop and mobile as a native app',
          'Data aggregation from TMDB, MyAnimeList, IMDb and YouTube',
        ],
        metrics: [
          { value: '5', label: 'languages' },
          { value: '5', label: 'sources' },
          { value: '100%', label: 'real-time sync' },
        ],
        tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'TanStack Query', 'Supabase', 'Upstash Redis', 'PWA'],
        wip: true,
        links: [
          { label: 'Live Demo', url: 'https://www.zoovix.live' },
          { label: 'GitHub', url: 'https://github.com/Ponchik0/Zoovix' },
        ],
        image: 'projects/zoovix.jpg',
        details: {
          intro: [
            'Zoovix is a next-generation cinema catalog with gamification and watch-parties, crafted end-to-end by me.',
            'The platform is built as a PWA with full 5-language localization and production SEO.',
          ],
          challenges: [
            { title: 'Real-time synchronization', text: 'Low-latency video sync using Upstash Redis and WebSocket presence.' },
            { title: 'Custom Auth System', text: 'Cookie-based session security with granular multi-device controls.' },
          ],
          stack: [
            { name: 'Frontend', items: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'] },
            { name: 'Backend & DB', items: ['Supabase (PostgreSQL)', 'Upstash Redis', 'Server Actions', 'PWA Engine'] },
          ],
        },
      },

      // ── 2. SUPER CREATURES (UNITY MOD) ───────────────────
      {
        slug: 'supercreatures',
        title: 'SuperCreatures',
        category: 'mods',
        kind: 'Giant Sea Monsters & Leviathans Mod for How to Fish',
        year: '2026',
        lede: 'Introduces ancient deep-sea leviathans, colossal crabs and rare super-creatures with custom bite chances, trophies and catch animations.',
        highlights: [
          'Custom 3D models and animations for deep-sea titans',
          'Balanced spawn rates and legendary catch rewards',
          'Full multiplayer co-op synchronization',
        ],
        metrics: [
          { value: '10.0k+', label: 'downloads' },
          { value: '2', label: 'likes' },
          { value: 'Co-Op', label: 'multiplayer' },
        ],
        tech: ['C#', 'Unity', 'BepInEx', 'HarmonyX', 'Custom 3D Models'],
        wip: false,
        links: [
          { label: 'Thunderstore', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/SuperCreatures/' },
        ],
        image: 'projects/supercreatures.png',
        details: {
          intro: ['SuperCreatures adds thrilling high-stakes fishing encounters with colossal monsters.'],
          challenges: [{ title: 'Spawn optimization', text: 'Zero FPS drops when spawning large rigged mesh entities.' }],
          stack: [{ name: 'Tech Stack', items: ['C#', 'HarmonyX', 'Unity Physics'] }],
        },
      },

      // ── 3. WEATHER EXPANSION (UNITY MOD) ─────────────────
      {
        slug: 'weatherexpansion',
        title: 'WeatherExpansion',
        category: 'mods',
        kind: 'Complete Dynamic Weather & Celestial Sky Mod for How to Fish',
        year: '2026',
        lede: 'Comprehensive dynamic weather system: realistic day/night cycle, HDR celestial galaxy dome, 1,600 procedural stars, synchronized multiplayer tent sleep, storms, lightning and physical water ripples.',
        highlights: [
          '6 dynamic weather types: Clear, Rain, Heavy Rain, Storm, Fog, Snow',
          'Co-Op Multiplayer: synchronized tent sleep voting via FishNet RPC',
          'HDR Celestial Sky Dome with Milky Way galaxy and glowing 3D moon',
          '400+ physical Raycast ground splashes per second onto boats and docks',
          'Stylized 6-pointed ice crystal snowflakes and majestic rainbow',
        ],
        metrics: [
          { value: '5.8k+', label: 'downloads' },
          { value: '2', label: 'likes' },
          { value: '6', label: 'weather states' },
        ],
        tech: ['C#', 'Unity URP', 'BepInEx', 'FishNet Networking', 'HLSL Shaders', 'Audio Synthesis'],
        wip: false,
        links: [
          { label: 'Thunderstore', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/WeatherExpansion/' },
        ],
        image: 'projects/weatherexpansion.png',
        details: {
          intro: ['WeatherExpansion transforms How to Fish into an immersive atmospheric experience with full multiplayer support.'],
          challenges: [
            { title: 'Multiplayer sleep synchronization', text: 'Smooth time acceleration and consensus voting across all clients.' },
            { title: 'Physical atmospheric simulation', text: 'Real-time raycast ground splash ripples and synthetic storm audio.' },
          ],
          stack: [
            { name: 'Engine & Netcode', items: ['Unity URP', 'FishNet Networking', 'BepInEx 5'] },
            { name: 'Graphics & Audio', items: ['Custom Particle Shaders', 'Procedural Audio Synthesis'] },
          ],
        },
      },

      // ── 4. BAIT INDEX (UNITY MOD) ────────────────────────
      {
        slug: 'baitindex',
        title: 'BaitIndex',
        category: 'mods',
        kind: 'In-Game Interactive Bait & Lure Encyclopedia',
        year: '2026',
        lede: 'Interactive in-game bait and lure encyclopedia with instant filtering by fish species, depths, and bite probabilities.',
        highlights: [
          'Instant in-game HUD encyclopedia accessible during fishing',
          'Smart filtering by fish type, rarity and lure requirements',
          'Zero performance overhead with native game aesthetics',
        ],
        metrics: [
          { value: '1.7k+', label: 'downloads' },
          { value: '2', label: 'likes' },
          { value: '0 lag', label: 'instant HUD' },
        ],
        tech: ['C#', 'Unity UGUI', 'BepInEx', 'HarmonyX'],
        wip: false,
        links: [
          { label: 'Thunderstore', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/BaitIndex/' },
        ],
        image: 'projects/baitindex.png',
        details: {
          intro: ['BaitIndex assists players in choosing optimal bait setups for every target catch.'],
          challenges: [{ title: 'In-game UI', text: 'Custom OnGUI overlay with controller and mouse support.' }],
          stack: [{ name: 'Tech', items: ['C#', 'Unity UI', 'BepInEx'] }],
        },
      },

      // ── 5. SCORE ALWAYS (UNITY MOD) ──────────────────────
      {
        slug: 'scorealways',
        title: 'ScoreAlways',
        category: 'mods',
        kind: 'Minimalist AMOLED Score & Personal Record Overlay',
        year: '2026',
        lede: 'Sleek AMOLED HUD displaying real-time session scores, personal bests and multiplier statistics.',
        highlights: [
          'Ultra-compact HUD badge displaying current score and records',
          'Zero performance impact (under 15 KB binary)',
          'Customizable hotkeys and screen placement',
        ],
        metrics: [
          { value: '1.1k+', label: 'downloads' },
          { value: '1', label: 'like' },
          { value: '15 KB', label: 'binary size' },
        ],
        tech: ['C#', 'Unity', 'BepInEx', 'HarmonyX'],
        wip: false,
        links: [
          { label: 'Thunderstore', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/ScoreAlways/' },
        ],
        image: 'projects/scorealways.png',
        details: {
          intro: ['ScoreAlways keeps your score progression in view at all times.'],
          challenges: [{ title: 'HUD Overlay', text: 'Ultra-lightweight real-time score tracker.' }],
          stack: [{ name: 'Tech', items: ['C#', 'Unity Engine'] }],
        },
      },
    ],
  },

  mini: {
    label: 'Bots, Plugins & Utilities',
    heading: 'Other Notable',
    headingAccent: 'Creations',
    items: [
      {
        title: 'Ponchik Community Bot',
        description: 'Full-featured Discord community bot: Thunderstore release monitoring, temporary voice rooms, anti-spam protection and sneakpeek discussion threads.',
        tech: ['Python 3.12', 'discord.py', 'AsyncIO', 'Docker'],
        url: 'https://github.com/Ponchik0/botdc',
      },
      {
        title: 'FACEIT Stats Modern',
        description: 'Steam Client (Millennium) Plugin: integrates live FACEIT & Leetify CS2 match stats directly into the Steam profile with a modern dark theme.',
        tech: ['TypeScript', 'CSS', 'Millennium'],
        url: 'https://github.com/Ponchik0/FaceitStatsModern',
      },
      {
        title: 'Roblox GagBot',
        description: 'Automation utility and gaming script bot for the Roblox platform.',
        tech: ['Python', 'Lua', 'Automation'],
        url: 'https://github.com/Ponchik0',
      },
    ],
  },

  skills: {
    label: 'Skills',
    heading: 'Technologies',
    headingAccent: 'I work with',
    groups: [
      {
        name: 'Frontend & Web',
        items: ['TypeScript', 'React 19', 'Next.js 15', 'Tailwind CSS v4', 'Astro', 'Framer Motion'],
      },
      {
        name: 'Game Development & Modding',
        items: ['C# (.NET)', 'Unity Engine (URP)', 'BepInEx', 'HarmonyX', 'FishNet Networking', 'HLSL Shaders'],
      },
      {
        name: 'Backend & Databases',
        items: ['Python (AsyncIO / discord.py)', 'Supabase (PostgreSQL)', 'Upstash Redis', 'REST & OAuth 2.0 APIs'],
      },
      {
        name: 'DevOps & Tooling',
        items: ['Git & GitHub', 'Docker & Compose', 'Vite & Electron', 'Thunderstore CLI / API'],
      },
    ],
  },

  experience: {
    label: 'My Path',
    heading: 'Developer',
    headingAccent: 'Journey',
    items: [
      {
        period: '2026 — Present',
        title: 'Zoovix — Flagship Cinema Catalog with Watch-Party',
        place: 'Creator & Fullstack Architect',
        description:
          'Engineering a massive production web product end-to-end: real-time watch-party rooms synced via Redis, gamification, quests, streaks, custom cookie session security and PWA architecture.',
      },
      {
        period: '2026',
        title: 'Series of Unity C# Game Mods (18,500+ Downloads)',
        place: 'Ponchik Modding',
        description:
          'Developing SuperCreatures, WeatherExpansion, BaitIndex and ScoreAlways for How to Fish. Multiplayer tent sleep consensus via FishNet, physical raycast water splashes, 1,600 procedural stars and custom entity spawners.',
      },
      {
        period: '2025',
        title: 'Discord Bots, Steam Plugins & Beginning of Journey',
        place: 'Pet Projects & Tools',
        description:
          'Building Discord automation bots with Python (discord.py), Steam plugins (Millennium) with live CS2 stats, and mastering modern TypeScript, C# and web engineering.',
      },
    ],
  },

  contact: {
    label: 'Contact',
    heading: 'Let’s Build',
    headingAccent: 'Something Great',
    text: 'Open to web product development, Unity game modding, and exciting collaborations. Reach out anytime!',
    email: 'regressphobia@outlook.com',
    cv: 'Download CV (PDF)',
    socials: [
      { name: 'GitHub', handle: '@Ponchik0', url: 'https://github.com/Ponchik0' },
      { name: 'Thunderstore', handle: 'Ponchik', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/' },
    ],
  },

  footer: {
    rights: 'All rights reserved',
    top: 'To Top',
  },
};
