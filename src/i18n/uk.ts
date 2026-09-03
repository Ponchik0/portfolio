import type { Dictionary } from './types';

export const uk: Dictionary = {
  meta: {
    title: 'Богдан (Ponchik) — Frontend & Game Mod Developer',
    description:
      'Портфоліо розробника: флагманський веб-продукт Zoovix, масштабні Unity C# моди (WeatherExpansion, SuperCreatures) та корисні інструменти.',
  },

  nav: {
    about: 'Про мене',
    projects: 'Проєкти',
    skills: 'Навички',
    experience: 'Досвід',
    contact: 'Контакти',
  },

  hero: {
    badge: 'Відкритий до цікавих проєктів та співпраці',
    intro: 'Привіт, я',
    name: 'Богдан (Ponchik)',
    roleAccent: 'розробник продуктів та ігрових модів,',
    roleRest: 'що створює масштабні веб-сервіси та моди на Unity C#',
    tagline:
      'Творець флагманського кіно-каталогу Zoovix із синхронним переглядом та лінійки популярних Unity-модів із 18,500+ завантажень на Thunderstore.',
    ctaProjects: 'Дивитися проєкти',
    ctaContact: 'Зв’язатися',
    scroll: 'гортай',
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
    label: 'Про мене',
    heading: 'Код — це ремесло,',
    headingAccent: 'а не просто робота',
    paragraphs: [
      'Я розробник і творець модів із Києва. Фокусуюся на створенні повноцінних продуктів: від веб-сервісів зі складною real-time логікою до комплексних ігрових модифікацій на Unity C# із синхронізацією через мережу.',
      'Мій флагманський проєкт — Zoovix: веб-каталог фільмів, серіалів та аніме з гейміфікацією та кімнатами спільного перегляду в реальному часі. Паралельно я створив лінійку модів для How to Fish (SuperCreatures, WeatherExpansion, BaitIndex, ScoreAlways), які сумарно набрали понад 18,500 завантажень на Thunderstore.',
      'Люблю доводити кожну деталь: від надійності архітектури до мікроанімацій в інтерфейсі.',
    ],
    facts: [
      { value: '2025', label: 'рік початку шляху' },
      { value: '6+', label: 'основних проєктів і модів' },
      { value: '18.5k+', label: 'завантажень на Thunderstore' },
    ],
  },

  projects: {
    label: 'Проєкти',
    heading: 'Вибрані',
    headingAccent: 'проєкти та моди',
    wipBadge: 'У розробці',
    caseLink: 'Детальніше',
    caseAbout: 'Про проєкт',
    caseFeatures: 'Ключові можливості',
    caseChallenges: 'Цікаві виклики',
    caseStack: 'Стек',
    caseBack: 'Усі проєкти',
    caseNext: 'Наступний проєкт',
    categories: {
      all: 'Усі роботи',
      web: 'Веб-проєкти',
      mods: 'Моди для ігор',
      tools: 'Боти & Плагіни',
    },
    items: [
      // ── 1. ZOOVIX (ФЛАГМАНСЬКИЙ ПРОЄКТ) ───────────────────
      {
        slug: 'zoovix',
        title: 'Zoovix',
        category: 'web',
        kind: 'Флагманський веб-каталог кіно, серіалів та аніме з watch-party',
        year: '2026',
        lede: 'Масштабний каталог фільмів, серіалів та аніме з гейміфікацією та спільним переглядом у реальному часі — темна естетика «modern classic cinema» та надійна real-time синхронізація.',
        highlights: [
          'Watch-party: синхронний перегляд відео у спільних кімнатах у реальному часі',
          'Гейміфікація: квести, стріки, інвентар та внутрішній магазин нагород',
          'Глибока локалізація на 5 мов із локалізованими URL для SEO',
          'Кастомна автентифікація на власних сесійних cookie',
          'PWA: встановлюється на смартфон і ПК як нативний застосунок',
          'Агрегація даних із TMDB, MyAnimeList, IMDb, Кінопошуку та YouTube',
        ],
        metrics: [
          { value: '5', label: 'мов інтерфейсу' },
          { value: '5', label: 'джерел даних' },
          { value: '100%', label: 'real-time sync' },
        ],
        tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'TanStack Query', 'Supabase', 'Upstash Redis', 'PWA'],
        wip: true,
        links: [
          { label: 'GitHub', url: 'https://github.com/Ponchik0/Zoovix' },
        ],
        image: 'projects/zoovix.jpg',
        details: {
          intro: [
            'Zoovix — масштабний каталог фільмів, серіалів та аніме, який я створюю самостійно: архітектура, дизайн, бекенд і деплой.',
            'Ідея проєкту — перетворити перегляд каталогу на захоплюючу гру з квестами, стріками та кімнатами спільного перегляду.',
          ],
          challenges: [
            { title: 'Watch-party в реальному часі', text: 'Відтворення відео синхронізується між учасниками кімнати через Upstash Redis та WebSocket.' },
            { title: 'Власна система безпеки', text: 'Кастомна автентифікація на сесійних cookie з повним контролем над пристроями.' },
          ],
          stack: [
            { name: 'Фронтенд', items: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'] },
            { name: 'Бекенд & БД', items: ['Supabase (PostgreSQL)', 'Upstash Redis', 'Server Actions', 'PWA Engine'] },
          ],
        },
      },

      // ── 2. POEZDATO (WEB REDESIGN CONCEPT) ───────────────
      {
        slug: 'poezdato',
        title: 'Поїздато',
        category: 'web',
        kind: 'Концепт редизайну poizdato.net із живими даними',
        year: '2026',
        lede: 'Сучасний редизайн популярного сервісу розкладів поїздів та електричок: миттєвий пошук, автокомпліт станцій, інтерактивне табло та сповіщення про зміни рейсів у реальному часі.',
        highlights: [
          'Парсинг та кешування розкладів poizdato.net у реальному часі',
          'Інтерактивне табло станцій із підсвіткою найближчого рейсу',
          'Автономна робота Node.js сервера без сторонніх залежностей',
          'Збереження обраних маршрутів та автосповіщення про зміни у графіку',
          'Двомовність (UK/RU) із прямою інтеграцією купівлі квитків УЗ',
        ],
        metrics: [
          { value: '0.2s', label: 'швидкість пошуку' },
          { value: '100%', label: 'живі дані poizdato' },
          { value: '0 dep', label: 'чистий Node.js' },
        ],
        tech: ['Node.js', 'Vanilla JS', 'Real-time Scraping', 'CSS3 Layout', 'In-Memory Cache', 'Responsive UX'],
        wip: false,
        links: [
          { label: 'GitHub', url: 'https://github.com/Ponchik0' },
        ],
        image: 'projects/poezdato.png',
        details: {
          intro: [
            '«Поїздато» — це повноцінний концепт редизайну застарілого інтерфейсу сервісу розкладів руху поїздів та приміських електричок poizdato.net.',
            'Головна мета — перетворити перевантажений рекламою та застарілий сервіс на надшвидкий, естетичний, зручний для смартфона сучасний інструмент пасажира.',
          ],
          challenges: [
            { title: 'Парсинг та кешування живих даних', text: 'Реалізовано проксі-сервер на чистому Node.js, що парсить дані зі структури poizdato.net без сторонніх бібліотек із багаторівневим кешуванням у памʼяті (від 10 хв до 24 год).' },
            { title: 'Відстеження змін рейсів', text: 'Фоновий алгоритм порівняння контрольних відбитків розкладу для збережених маршрутів з моментальним сповіщенням пасажира.' },
          ],
          stack: [
            { name: 'Клієнтська частина', items: ['Vanilla JavaScript (ES6+)', 'Modern CSS3 & Flex/Grid', 'LocalStorage Sync', 'Web Notifications API', 'Mobile-first UX'] },
            { name: 'Бекенд & Архітектура', items: ['Node.js HTTP Server (Zero Dependencies)', 'In-Memory Cache System', 'HTML Stream Parsing', 'Railway API Proxy'] },
          ],
        },
      },

      // ── 3. SUPER CREATURES (UNITY MOD) ───────────────────
      {
        slug: 'supercreatures',
        title: 'SuperCreatures',
        category: 'mods',
        kind: 'Мод на гігантських морських монстрів і рідкісних істот',
        year: '2026',
        lede: 'Додає в океан рідкісних гігантських крабів, стародавніх левіафанів та супер-істот з унікальними шансами клювання, трофеями та анімаціями.',
        highlights: [
          'Унікальні моделі та анімації глибоководних гігантів',
          'Збалансована система спавну та шансів улову',
          'Ексклюзивні трофеї та нагороди за вилов легендарних істот',
          'Повна сумісність із мультиплеєром',
        ],
        metrics: [
          { value: '10.0k+', label: 'завантажень' },
          { value: '2', label: 'лайки' },
          { value: 'Co-Op', label: 'мультиплеєр' },
        ],
        tech: ['C#', 'Unity', 'BepInEx', 'HarmonyX', 'Custom 3D Models'],
        wip: false,
        links: [
          { label: 'Thunderstore', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/SuperCreatures/' },
        ],
        image: 'projects/supercreatures.png',
        details: {
          intro: ['SuperCreatures наповнює морські глибини азартом, додаючи в гру небезпечних і рідкісних морських чудовиськ.'],
          challenges: [{ title: 'Спавн і фізика', text: 'Безшовний спавн гігантських істот без просідання FPS.' }],
          stack: [{ name: 'Технології', items: ['C#', 'HarmonyX', 'Unity Physics'] }],
        },
      },

      // ── 3. WEATHER EXPANSION (UNITY MOD) ─────────────────
      {
        slug: 'weatherexpansion',
        title: 'WeatherExpansion',
        category: 'mods',
        kind: 'Масштабний мод погоди, сну та неба для How to Fish',
        year: '2026',
        lede: 'Комплексна система динамічної погоди: зміна дня й ночі, HDR купол галактики, 1,600 процедурних зірок, сон у наметах у мультиплеєрі, шторми, блискавки та фізичні бризки.',
        highlights: [
          '6 динамічних типів погоди: Ясно, Дощ, Злива, Шторм, Туман, Сніг',
          'Co-Op Multiplayer: синхронізований сон у наметах через FishNet RPC',
          'HDR Celestial Sky Dome: галактика Чумацького Шляху та 3D-місяць',
          '400+ фізичних Raycast-бризок на секунду на човен, воду та пірси',
          'Стилізовані 6-променеві кристалічні сніжинки та велична веселка',
        ],
        metrics: [
          { value: '5.8k+', label: 'завантажень' },
          { value: '2', label: 'лайки' },
          { value: '6', label: 'типів погоди' },
        ],
        tech: ['C#', 'Unity URP', 'BepInEx', 'FishNet Networking', 'HLSL Shaders', 'Audio Synthesis'],
        wip: false,
        links: [
          { label: 'Thunderstore', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/WeatherExpansion/' },
        ],
        image: 'projects/weatherexpansion.png',
        details: {
          intro: ['WeatherExpansion повністю перетворює атмосферу гри How to Fish, додаючи реалістичну погоду та Co-Op механіки.'],
          challenges: [
            { title: 'Мультиплеєрна синхронізація сну', text: 'Синхронізація голосування за сон усіх гравців у лобі з плавним прискоренням часу.' },
            { title: 'Процедурні погодні ефекти', text: 'Синтез аудіо шуму дощу, генерація блискавок та фізичних бризок на воду.' },
          ],
          stack: [
            { name: 'Рушій і мережа', items: ['Unity 2022 (URP)', 'FishNet Multiplayer', 'BepInEx 5'] },
            { name: 'Графіка та звук', items: ['Custom Particle Shaders', 'Procedural Audio Synthesis', 'Skybox Shaders'] },
          ],
        },
      },

      // ── 4. BAIT INDEX (UNITY MOD) ────────────────────────
      {
        slug: 'baitindex',
        title: 'BaitIndex',
        category: 'mods',
        kind: 'Внутрішньоігрова інтерактивна енциклопедія наживок',
        year: '2026',
        lede: 'Зручна внутрішньоігрова енциклопедія наживок і приманок із фільтрами за типами риб, глибинами та шансами клювання.',
        highlights: [
          'Інтерактивний UI довідник прямо під час риболовлі',
          'Фільтрація та розумний пошук за видами риб і принадами',
          'Мінімалістичний дизайн у стилі нативного інтерфейсу гри',
        ],
        metrics: [
          { value: '1.7k+', label: 'завантажень' },
          { value: '2', label: 'лайки' },
          { value: '0 lag', label: 'миттєвий HUD' },
        ],
        tech: ['C#', 'Unity UGUI', 'BepInEx', 'HarmonyX'],
        wip: false,
        links: [
          { label: 'Thunderstore', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/BaitIndex/' },
        ],
        image: 'projects/baitindex.png',
        details: {
          intro: ['BaitIndex допомагає рибалкам підібрати ідеальну приманку під будь-яку здобич.'],
          challenges: [{ title: 'Інтерфейс', text: 'Кастомний OnGUI рендер із підтримкою геймпада та миші.' }],
          stack: [{ name: 'Стек', items: ['C#', 'Unity UI', 'BepInEx'] }],
        },
      },

      // ── 5. SCORE ALWAYS (UNITY MOD) ──────────────────────
      {
        slug: 'scorealways',
        title: 'ScoreAlways',
        category: 'mods',
        kind: 'Мінімалістичний AMOLED-оверлей внутрішньоігрового рахунку',
        year: '2026',
        lede: 'Елегантний і ненав’язливий оверлей поточного рахунку, рекордів і сесії в реальному часі.',
        highlights: [
          'Компактна плашка з рекордами та поточними очками',
          'Нульовий вплив на продуктивність гри',
          'Гнучке налаштування положення та гарячих клавіш',
        ],
        metrics: [
          { value: '1.1k+', label: 'завантажень' },
          { value: '1', label: 'лайк' },
          { value: '15 KB', label: 'бінарник' },
        ],
        tech: ['C#', 'Unity', 'BepInEx', 'HarmonyX'],
        wip: false,
        links: [
          { label: 'Thunderstore', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/ScoreAlways/' },
        ],
        image: 'projects/scorealways.png',
        details: {
          intro: ['ScoreAlways дозволяє завжди тримати рахунок і прогрес перед очима.'],
          challenges: [{ title: 'HUD оверлей', text: 'Легковажний HUD із миттєвим відгуком.' }],
          stack: [{ name: 'Стек', items: ['C#', 'Unity Engine'] }],
        },
      },
    ],
  },

  mini: {
    label: 'Боти, плагіни та утиліти',
    heading: 'Інші цікаві',
    headingAccent: 'розробки',
    items: [
      {
        title: 'Ponchik Community Bot',
        description: 'Багатофункціональний Discord-бот спільноти з моніторингом Thunderstore API, тимчасовими голосовими кімнатами, захистом від спаму та авто-гілками снікпіків.',
        tech: ['Python 3.12', 'discord.py', 'AsyncIO', 'Docker'],
        url: 'https://github.com/Ponchik0/botdc',
      },
      {
        title: 'FACEIT Stats Modern',
        description: 'Плагін для клієнта Steam (Millennium): вбудовує статистику FACEIT та Leetify з CS2 (ELO, K/D, вінрейт) прямо в профіль Steam в елегантному темному стилі.',
        tech: ['TypeScript', 'JavaScript', 'CSS', 'Millennium'],
        url: 'https://github.com/Ponchik0/FaceitStatsModern',
      },
      {
        title: 'Roblox GagBot',
        description: 'Утиліта автоматизації та ігровий скрипт-бот для платформи Roblox.',
        tech: ['Python', 'Lua', 'Automation'],
        url: 'https://github.com/Ponchik0',
      },
    ],
  },

  skills: {
    label: 'Навички',
    heading: 'Технології, з якими',
    headingAccent: 'я працюю',
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
        name: 'Бекенд & Бази Даних',
        items: ['Python (AsyncIO / discord.py)', 'Supabase (PostgreSQL)', 'Upstash Redis', 'REST & OAuth 2.0 APIs'],
      },
      {
        name: 'Інструменти & DevOps',
        items: ['Git & GitHub', 'Docker & Compose', 'Vite & Electron', 'Thunderstore CLI / API'],
      },
    ],
  },

  experience: {
    label: 'Мій шлях',
    heading: 'Хронологія',
    headingAccent: 'розвитку',
    items: [
      {
        period: '2026 — зараз',
        title: 'Zoovix — Флагманський кіно-каталог із Watch-party',
        place: 'Творець & Fullstack Архітектор',
        description:
          'Розробка масштабного продакшен-продукту наодинці: real-time watch-party кімнати з синхронізацією через Redis, гейміфікація, квести, стріки, кастомна сесійна безпека та PWA-архітектура.',
      },
      {
        period: '2026',
        title: 'Лінійка Unity C# Модів (18,500+ завантажень)',
        place: 'Ponchik Modding',
        description:
          'Створення SuperCreatures, WeatherExpansion, BaitIndex та ScoreAlways для How to Fish. Мультиплеєрна синхронізація сну через FishNet, фізичні Raycast-бризки, 1,600 процедурних зірок та кастомні спавнери.',
      },
      {
        period: '2025',
        title: 'Discord-боти, Steam-плагіни та старт шляху',
        place: 'Пет-проєкти & Утиліти',
        description:
          'Розробка ботів на Python (discord.py), плагінів для Steam (Millennium) зі статистикою FACEIT та глибоке занурення в сучасний TypeScript, C# і веб-технології.',
      },
    ],
  },

  contact: {
    label: 'Контакти',
    heading: 'Створимо разом',
    headingAccent: 'щось легендарне',
    text: 'Відкритий до пропозицій з розробки веб-сервісів, ігрових модів та спільних проєктів. Пиши в будь-який час!',
    email: 'regressphobia@outlook.com',
    cv: 'Завантажити CV (PDF)',
    socials: [
      { name: 'GitHub', handle: '@Ponchik0', url: 'https://github.com/Ponchik0' },
      { name: 'Thunderstore', handle: 'Ponchik', url: 'https://thunderstore.io/c/how-to-fish/p/Ponchik/' },
    ],
  },

  footer: {
    rights: 'Усі права захищені',
    top: 'Вгору',
  },
};
