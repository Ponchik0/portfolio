# Портфолио

Личный сайт-портфолио: [Astro](https://astro.build), три языковые версии (EN `/`, RU `/ru/`, UA `/uk/`),
светлая/тёмная тема, короткая заставка с именем, анимации при скролле. Собирается в полностью статический сайт —
идеально для GitHub Pages.

## Команды

| Команда           | Что делает                                    |
| ----------------- | --------------------------------------------- |
| `npm install`     | установить зависимости                        |
| `npm run dev`     | dev-сервер на `http://localhost:4321/portfolio/` |
| `npm run build`   | production-сборка в папку `dist/`             |
| `npm run preview` | посмотреть собранный сайт локально            |

## Где заполнять свои данные

Контент лежит в трёх файлах с одинаковой структурой:

- `src/i18n/en.ts` — английская версия
- `src/i18n/ru.ts` — русская версия
- `src/i18n/uk.ts` — украинская версия

Основные поля для обновления:

1. **Имя** — `meta.title`, `hero.name`
2. **Ссылки на GitHub-репозитории проектов** — `projects.items[].links`
3. **Соцсети** — `contact.socials` (GitHub, Telegram, LinkedIn)

### Скриншоты проектов

Положи картинку в `public/projects/` (например `public/projects/zoovix.png`)
и раскомментируй строку `image: 'projects/zoovix.png'` у нужного проекта —
заглушка автоматически заменится на скриншот.

### Примеры для бизнеса

В существующие фильтры проектов добавлена категория `business`: «For Business» / «Для бизнеса» / «Для бізнесу».
Первый пример — пилотный концепт «Максим кафе». У него есть карточка и страницы кейса на трёх языках.
Для концепта без публичного сайта поле `previewLabel` показывает честную подпись в рамке браузера.
Галерея и оформление используют существующие компоненты портфолио.

Прямая ссылка на украинскую вкладку: [Для бізнесу](https://ponchik0.github.io/portfolio/uk/?category=business#projects).
Без параметра `category` по умолчанию показываются веб-проекты.

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
├── i18n/            ← ВЕСЬ ТЕКСТ САЙТА (en.ts, ru.ts, uk.ts)
├── components/      ← секции: Hero, About, Projects, Skills, …
├── layouts/         ← базовый HTML-каркас
├── pages/           ← маршруты: / (EN), /ru/ (RU), /uk/ (UA)
└── styles/          ← дизайн-токены и глобальные стили
```
