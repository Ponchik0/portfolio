import type { Dictionary } from './types';
import { en } from './en';
import { ru } from './ru';
import { uk } from './uk';

export type Lang = 'en' | 'ru' | 'uk';

const dictionaries: Record<Lang, Dictionary> = { en, ru, uk };

export function getDict(lang: Lang): Dictionary {
  return dictionaries[lang] || dictionaries.en;
}

/** Приклеивает base-путь GitHub Pages к относительной ссылке */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}

/** Ссылка на главную страницу нужного языка */
export function homePath(lang: Lang): string {
  if (lang === 'en') return withBase('/');
  if (lang === 'ru') return withBase('/ru/');
  return withBase('/uk/');
}

/** Ссылка на страницу-кейс проекта нужного языка */
export function projectPath(lang: Lang, slug: string): string {
  if (lang === 'en') return withBase(`/projects/${slug}/`);
  if (lang === 'ru') return withBase(`/ru/projects/${slug}/`);
  return withBase(`/uk/projects/${slug}/`);
}
