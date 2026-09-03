export interface ProjectLink {
  label: string;
  url: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Challenge {
  title: string;
  text: string;
}

export interface Project {
  /** Часть URL страницы кейса: /projects/<slug>/ */
  slug: string;
  title: string;
  category?: 'web' | 'mods' | 'tools';
  /** Короткий подзаголовок — что это за продукт */
  kind: string;
  year: string;
  /** 1–2 предложения для карточки на главной */
  lede: string;
  /** Буллеты-хайлайты: на карточке видны первые 4, на странице кейса — все */
  highlights: string[];
  /** 2–3 честные цифры о проекте */
  metrics: Metric[];
  /** Короткий список главных технологий для карточки (6–8) */
  tech: string[];
  /** true = проект ещё в разработке (покажется бейдж) */
  wip: boolean;
  /** Ссылки: Live demo, GitHub и т.д. */
  links: ProjectLink[];
  /**
   * Скриншот: положи файл в public/projects/ и укажи путь,
   * например 'projects/zoovix.png'. Без него — стильная заглушка.
   */
  image?: string;
  /** Контент отдельной страницы кейса */
  details: {
    intro: string[];
    challenges: Challenge[];
    stack: SkillGroup[];
  };
}

export interface MiniProject {
  title: string;
  description: string;
  tech: string[];
  url?: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  place: string;
  description: string;
}

export interface Social {
  name: string;
  handle: string;
  url: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
  };
  hero: {
    badge: string;
    intro: string;
    name: string;
    /** Часть заголовка, которая выделяется серифным курсивом */
    roleAccent: string;
    roleRest: string;
    tagline: string;
    ctaProjects: string;
    ctaContact: string;
    scroll: string;
  };
  marquee: string[];
  about: {
    label: string;
    heading: string;
    headingAccent: string;
    paragraphs: string[];
    facts: Metric[];
  };
  projects: {
    label: string;
    heading: string;
    headingAccent: string;
    wipBadge: string;
    caseLink: string;
    caseAbout: string;
    caseFeatures: string;
    caseChallenges: string;
    caseStack: string;
    caseBack: string;
    caseNext: string;
    categories?: {
      all: string;
      web: string;
      mods: string;
      tools: string;
    };
    items: Project[];
  };
  mini: {
    label: string;
    heading: string;
    headingAccent: string;
    items: MiniProject[];
  };
  skills: {
    label: string;
    heading: string;
    headingAccent: string;
    groups: SkillGroup[];
  };
  experience: {
    label: string;
    heading: string;
    headingAccent: string;
    items: ExperienceItem[];
  };
  contact: {
    label: string;
    heading: string;
    headingAccent: string;
    text: string;
    email: string;
    cv: string;
    socials: Social[];
  };
  footer: {
    rights: string;
    top: string;
  };
}
