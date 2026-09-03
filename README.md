# Портфолио

Личный сайт-портфолио: [Astro](https://astro.build), две языковые версии (EN `/`, RU `/ru/`),
светлая/тёмная тема, прелоадер, анимации при скролле. Собирается в полностью статический сайт —
идеально для GitHub Pages.

## Команды

| Команда           | Что делает                                    |
| ----------------- | --------------------------------------------- |
| `npm install`     | установить зависимости                        |
| `npm run dev`     | dev-сервер на `http://localhost:4321/Portfolio/` |
| `npm run build`   | production-сборка в папку `dist/`             |
| `npm run preview` | посмотреть собранный сайт локально            |

## Где заполнять свои данные

Весь контент лежит в **двух файлах** (структура у них одинаковая):

- `src/i18n/en.ts` — английская версия
- `src/i18n/ru.ts` — русская версия

Ищи в них пометки `TODO:` — там нужно вписать:

1. **Имя** — `meta.title`, `hero.name`
2. **Ссылки на GitHub-репозитории проектов** — `projects.items[].links`
3. **Соцсети** — `contact.socials` (GitHub, Telegram, LinkedIn)

### Скриншоты проектов

Положи картинку в `public/projects/` (например `public/projects/zoovix.png`)
и раскомментируй строку `image: 'projects/zoovix.png'` у нужного проекта —
заглушка автоматически заменится на скриншот.

## Деплой на GitHub Pages

1. **Настрой адрес** в `astro.config.mjs`:
   ```js
   site: 'https://ТВОЙ_ЛОГИН.github.io',
   base: '/Portfolio',   // = имя репозитория
   ```
   (если назовёшь репозиторий иначе — поменяй `base` на его имя; если репозиторий
   называется `ТВОЙ_ЛОГИН.github.io` — строку `base` удали совсем)

2. **Создай репозиторий** на GitHub (например `Portfolio`) и запушь код:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/ТВОЙ_ЛОГИН/Portfolio.git
   git push -u origin main
   ```

3. **Включи Pages**: на GitHub открой репозиторий → `Settings` → `Pages` →
   в поле *Source* выбери **GitHub Actions**.

4. Готово. Workflow `.github/workflows/deploy.yml` собирает и публикует сайт
   при каждом пуше в `main`. Адрес: `https://ТВОЙ_ЛОГИН.github.io/Portfolio/`

## Структура

```
src/
├── i18n/            ← ВЕСЬ ТЕКСТ САЙТА (en.ts, ru.ts)
├── components/      ← секции: Hero, About, Projects, Skills, …
├── layouts/         ← базовый HTML-каркас
├── pages/           ← маршруты: / (EN) и /ru/ (RU)
└── styles/          ← дизайн-токены и глобальные стили
```
