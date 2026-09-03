import type { Dictionary } from './types';

export const ru: Dictionary = {
  meta: {
    title: 'Богдан (Ponchik) — Frontend & Game Mod Developer',
    description:
      'Портфолио разработчика: флагманский веб-продукт Zoovix, масштабные Unity C# моды (WeatherExpansion, SuperCreatures) и полезные инструменты.',
  },

  nav: {
    about: 'Обо мне',
    projects: 'Проекты',
    skills: 'Навыки',
    experience: 'Опыт',
    contact: 'Контакты',
  },

  hero: {
    badge: 'Открыт к интересным проектам и сотрудничеству',
    intro: 'Привет, я',
    name: 'Богдан (Ponchik)',
    roleAccent: 'разработчик продуктов и игровых модов,',
    roleRest: 'создающий масштабные веб-сервисы и моды на Unity C#',
    tagline:
      'Создатель флагманского кино-каталога Zoovix с синхронным просмотром и линейки популярных Unity-модов с 18,500+ установок на Thunderstore.',
    ctaProjects: 'Смотреть проекты',
    ctaContact: 'Связаться',
    scroll: 'листай',
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
    label: 'Обо мне',
    heading: 'Код — это ремесло,',
    headingAccent: 'а не просто работа',
    paragraphs: [
      'Я разработчик и создатель модов из Киева. Фокусируюсь на создании полноценных продуктов: от веб-сервисов со сложной real-time логикой до комплексных игровых модификаций на Unity C# с синхронизацией по сети.',
      'Мой флагманский проект — Zoovix: веб-каталог фильмов, сериалов и аниме с геймификацией и комнатами совместного просмотра в реальном времени. Параллельно я создал линейку модов для How to Fish (SuperCreatures, WeatherExpansion, BaitIndex, ScoreAlways), суммарно набравших более 18,500 загрузок на Thunderstore.',
      'Люблю доводить каждую деталь: от надежности архитектуры до микроанимаций в интерфейсе.',
    ],
    facts: [
      { value: '2025', label: 'год начала пути' },
      { value: '5+', label: 'основных проектов и модов' },
      { value: '18.5k+', label: 'скачиваний на Thunderstore' },
    ],
  },

  projects: {
    label: 'Проекты',
    heading: 'Избранные',
    headingAccent: 'проекты и моды',
    wipBadge: 'В разработке',
    caseLink: 'Подробнее',
    caseAbout: 'О проекте',
    caseFeatures: 'Ключевые возможности',
    caseChallenges: 'Интересные задачи',
    caseStack: 'Стек',
    caseBack: 'Все проекты',
    caseNext: 'Следующий проект',
    categories: {
      all: 'Все работы',
      web: 'Веб-проекты',
      mods: 'Моды для игр',
      tools: 'Боты & Плагины',
    },
    items: [
      // ── 1. ZOOVIX (ФЛАГМАНСКИЙ ПРОЕКТ) ───────────────────
      {
        slug: 'zoovix',
        title: 'Zoovix',
        category: 'web',
        kind: 'Флагманский веб-каталог кино, сериалов и аниме с watch-party',
        year: '2026',
        lede: 'Масштабный каталог фильмов, сериалов и аниме с геймификацией и совместным просмотром в реальном времени — тёмная эстетика «modern classic cinema» и надёжная real-time синхронизация.',
        highlights: [
          'Watch-party: синхронный просмотр видео в общих комнатах в реальном времени',
          'Геймификация: квесты, стрики, инвентарь и внутренний магазин наград',
          'Глубокая локализация на 5 языков с локализованными URL для SEO',
          'Кастомная аутентификация на собственных сессионных cookie',
          'PWA: устанавливается на смартфон и ПК как нативное приложение',
          'Агрегация данных из TMDB, MyAnimeList, IMDb, Кинопоиска и YouTube',
        ],
        metrics: [
          { value: '5', label: 'языков' },
          { value: '5', label: 'источников' },
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
            'Zoovix — масштабный каталог фильмов, сериалов и аниме, который я делаю в одиночку: архитектура, дизайн, бэкенд и деплой.',
            'Идея проекта — превратить просмотр каталога в интерактивную игру с квестами, стриками и комнатами совместного просмотра.',
          ],
          challenges: [
            { title: 'Watch-party в реальном времени', text: 'Воспроизведение видео синхронизируется между участниками комнаты через Upstash Redis и WebSocket.' },
            { title: 'Собственная система безопасности', text: 'Кастомная аутентификация на сессионных cookie с полным контролем над устройствами.' },
          ],
          stack: [
            { name: 'Фронтенд', items: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'] },
            { name: 'Бэкенд & БД', items: ['Supabase (PostgreSQL)', 'Upstash Redis', 'Server Actions', 'PWA Engine'] },
          ],
        },
      },

      // ── 2. SUPER CREATURES (UNITY MOD) ───────────────────
      {
        slug: 'supercreatures',
        title: 'SuperCreatures',
        category: 'mods',
        kind: 'Мод на гигантских морских монстров и редких существ',
        year: '2026',
        lede: 'Добавляет в океан редких гигантских крабов, древних левиафанов и супер-существ с уникальными шансами поклевки, трофеями и анимациями.',
        highlights: [
          'Уникальные модели и анимации глубоководных гигантов',
          'Сбалансированная система спавна и шансов поимки',
          'Эксклюзивные трофеи и награды за поимку легендарных существ',
          'Полная совместимость с мультиплеером',
        ],
        metrics: [
          { value: '10.0k+', label: 'скачиваний' },
          { value: '2', label: 'лайка' },
          { value: 'Co-Op', label: 'мультиплеер' },
        ],
        tech: ['C#', 'Unity', 'BepInEx', 'HarmonyX', 'Custom 3D Models'],
        wip: false,
        links: [
          { label: 'Thunderstore', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/SuperCreatures/' },
        ],
        image: 'projects/supercreatures.png',
        details: {
          intro: ['SuperCreatures наполняет морские глубины азартом, добавляя в игру опасных и редких морских чудовищ.'],
          challenges: [{ title: 'Спавн и физика', text: 'Бесшовный спавн гигантских существ без просадок FPS.' }],
          stack: [{ name: 'Технологии', items: ['C#', 'HarmonyX', 'Unity Physics'] }],
        },
      },

      // ── 3. WEATHER EXPANSION (UNITY MOD) ─────────────────
      {
        slug: 'weatherexpansion',
        title: 'WeatherExpansion',
        category: 'mods',
        kind: 'Масштабный мод погоды, сна и неба для How to Fish',
        year: '2026',
        lede: 'Комплексная система динамической погоды: смена дня и ночи, HDR купол галактики, 1,600 процедурных звезд, сон в палатках в мультиплеере, штормы, молнии и физические брызги.',
        highlights: [
          '6 динамических типов погоды: Ясно, Дождь, Ливень, Шторм, Туман, Снег',
          'Co-Op Multiplayer: синхронизированный сон в палатках через FishNet RPC',
          'HDR Celestial Sky Dome: вращающаяся галактика Млечного Пути и 3D-луна',
          '400+ физических Raycast-брызг в секунду на лодку, воду и пирсы',
          'Стилизованные 6-лучевые кристаллические снежинки и величественная радуга',
        ],
        metrics: [
          { value: '5.8k+', label: 'скачиваний' },
          { value: '2', label: 'лайка' },
          { value: '6', label: 'типов погоды' },
        ],
        tech: ['C#', 'Unity URP', 'BepInEx', 'FishNet Networking', 'HLSL Shaders', 'Audio Synthesis'],
        wip: false,
        links: [
          { label: 'Thunderstore', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/WeatherExpansion/' },
        ],
        image: 'projects/weatherexpansion.png',
        details: {
          intro: ['WeatherExpansion полностью преображает атмосферу игры How to Fish, добавляя реалистичную погоду и Co-Op механики.'],
          challenges: [
            { title: 'Мультиплеерная синхронизация сна', text: 'Синхронизация голосования за сон всех игроков в лобби с плавным ускорением времени.' },
            { title: 'Процедурные погодные эффекты', text: 'Синтез аудио шума дождя, генерация молний и физических брызг на воду.' },
          ],
          stack: [
            { name: 'Движок и сеть', items: ['Unity 2022 (URP)', 'FishNet Multiplayer', 'BepInEx 5'] },
            { name: 'Графика и звук', items: ['Custom Particle Shaders', 'Procedural Audio Synthesis', 'Skybox Shaders'] },
          ],
        },
      },

      // ── 4. BAIT INDEX (UNITY MOD) ────────────────────────
      {
        slug: 'baitindex',
        title: 'BaitIndex',
        category: 'mods',
        kind: 'Внутриигровая интерактивная энциклопедия наживок',
        year: '2026',
        lede: 'Удобная внутриигровая энциклопедия наживок и приманок с фильтрами по типам рыб, глубинам и шансам поимки.',
        highlights: [
          'Интерактивный UI справочник прямо во время рыбалки',
          'Фильтрация и умный поиск по видам рыб и приманкам',
          'Минималистичный дизайн в стиле нативного интерфейса игры',
        ],
        metrics: [
          { value: '1.7k+', label: 'скачиваний' },
          { value: '2', label: 'лайка' },
          { value: '0 lag', label: 'мгновенный HUD' },
        ],
        tech: ['C#', 'Unity UGUI', 'BepInEx', 'HarmonyX'],
        wip: false,
        links: [
          { label: 'Thunderstore', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/BaitIndex/' },
        ],
        image: 'projects/baitindex.png',
        details: {
          intro: ['BaitIndex помогает рыболовам подобрать идеальную приманку под любую добычу.'],
          challenges: [{ title: 'Интерфейс', text: 'Кастомный OnGUI рендер с поддержкой геймпада и мыши.' }],
          stack: [{ name: 'Стек', items: ['C#', 'Unity UI', 'BepInEx'] }],
        },
      },

      // ── 5. SCORE ALWAYS (UNITY MOD) ──────────────────────
      {
        slug: 'scorealways',
        title: 'ScoreAlways',
        category: 'mods',
        kind: 'Минималистичный AMOLED-оверлей внутриигрового счета',
        year: '2026',
        lede: 'Элегантный и ненавязчивый оверлей текущего счета, рекордов и сессии в реальном времени.',
        highlights: [
          'Компактная плашка с рекордами и текущими очками',
          'Нулевое влияние на производительность игры',
          'Гибкая настройка положения и горячих клавиш',
        ],
        metrics: [
          { value: '1.1k+', label: 'скачиваний' },
          { value: '1', label: 'лайк' },
          { value: '15 KB', label: 'бинарник' },
        ],
        tech: ['C#', 'Unity', 'BepInEx', 'HarmonyX'],
        wip: false,
        links: [
          { label: 'Thunderstore', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/ScoreAlways/' },
        ],
        image: 'projects/scorealways.png',
        details: {
          intro: ['ScoreAlways позволяет всегда держать счет и прогресс перед глазами.'],
          challenges: [{ title: 'HUD оверлей', text: 'Легковесный HUD с мгновенным откликом.' }],
          stack: [{ name: 'Стек', items: ['C#', 'Unity Engine'] }],
        },
      },
    ],
  },

  mini: {
    label: 'Боты, плагины и утилиты',
    heading: 'Другие интересные',
    headingAccent: 'разработки',
    items: [
      {
        title: 'Ponchik Community Bot',
        description: 'Многофункциональный Discord-бот сообщества с мониторингом Thunderstore API, временными голосовыми комнатами, защитой от спама и авто-ветками сникпиков.',
        tech: ['Python 3.12', 'discord.py', 'AsyncIO', 'Docker'],
        url: 'https://github.com/Ponchik0/botdc',
      },
      {
        title: 'FACEIT Stats Modern',
        description: 'Плагин для клиента Steam (Millennium): встраивает статистику FACEIT и Leetify по CS2 (ELO, K/D, винрейт) прямо в профиль Steam в элегантном тёмном стиле.',
        tech: ['TypeScript', 'JavaScript', 'CSS', 'Millennium'],
        url: 'https://github.com/Ponchik0/FaceitStatsModern',
      },
      {
        title: 'Roblox GagBot',
        description: 'Утилита автоматизации и игровой скрипт-бот для платформы Roblox.',
        tech: ['Python', 'Lua', 'Automation'],
        url: 'https://github.com/Ponchik0',
      },
    ],
  },

  skills: {
    label: 'Навыки',
    heading: 'Технологии, с которыми',
    headingAccent: 'я работаю',
    groups: [
      {
        name: 'Фронтенд & Веб',
        items: ['TypeScript', 'React 19', 'Next.js 15', 'Tailwind CSS v4', 'Astro', 'Framer Motion'],
      },
      {
        name: 'Game Development & Modding',
        items: ['C# (.NET)', 'Unity Engine (URP)', 'BepInEx', 'HarmonyX', 'FishNet Networking', 'HLSL Shaders'],
      },
      {
        name: 'Бэкенд & Базы Данных',
        items: ['Python (AsyncIO / discord.py)', 'Supabase (PostgreSQL)', 'Upstash Redis', 'REST & OAuth 2.0 APIs'],
      },
      {
        name: 'Инструменты & DevOps',
        items: ['Git & GitHub', 'Docker & Compose', 'Vite & Electron', 'Thunderstore CLI / API'],
      },
    ],
  },

  experience: {
    label: 'Мой путь',
    heading: 'Хронология',
    headingAccent: 'развития',
    items: [
      {
        period: '2026 — сейчас',
        title: 'Zoovix — Флагманский кино-каталог с Watch-party',
        place: 'Создатель & Fullstack Архитектор',
        description:
          'Разработка масштабного продакшен-продукта в одиночку: real-time watch-party комнаты с синхронизацией через Redis, геймификация, квесты, стрики, кастомная сессионная безопасность и PWA-архитектура.',
      },
      {
        period: '2026',
        title: 'Линейка Unity C# Модов (18,500+ загрузок)',
        place: 'Ponchik Modding',
        description:
          'Создание SuperCreatures, WeatherExpansion, BaitIndex и ScoreAlways для How to Fish. Мультиплеерная синхронизация сна через FishNet, физические Raycast-брызги, 1,600 процедурных звёзд и кастомные спавнеры.',
      },
      {
        period: '2025',
        title: 'Discord-боты, Steam-плагины и старт пути',
        place: 'Пет-проекты & Утилиты',
        description:
          'Разработка ботов на Python (discord.py), плагинов для Steam (Millennium) со статистикой FACEIT и глубокое погружение в современный TypeScript, C# и веб-технологии.',
      },
    ],
  },

  contact: {
    label: 'Контакты',
    heading: 'Давайте создадим',
    headingAccent: 'что-то легендарное',
    text: 'Открыт для предложений по разработке веб-сервисов, игровых модов и совместных проектов. Пиши в любое время!',
    email: 'regressphobia@outlook.com',
    cv: 'Скачать CV (PDF)',
    socials: [
      { name: 'GitHub', handle: '@Ponchik0', url: 'https://github.com/Ponchik0' },
      { name: 'Thunderstore', handle: 'Ponchik', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/' },
    ],
  },

  footer: {
    rights: 'Все права защищены',
    top: 'Наверх',
  },
};
