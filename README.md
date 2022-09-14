# Сайт NIVEA

## Подготовил - Литовченко Иван

## Адрес на gh-pages:

- https://ivan-dp.github.io/test_work__webpack/

### Технологии:

- PUG
- SCSS
- Webpack

## Быстрый старт

#### `npm i --legacy-peer-deps` – установить зависимости проекта

#### `npm run start` – запуск devServer на http://localhost:8080/

## Скрипты

#### `npm run dev` – development сборка проекта

#### `npm run build` – production сборка проекта

#### `npm run watch` – development сборка проекта с отслеживанием

#### `npm run start` – запуск devServer на http://localhost:8080/

### Структура проекта

```
├── dist/                                         # Готовая сборка
├── src/                                          # Исходники
│   ├── blocks/                                   # Папка с блоками проекта
│   ├── fonts/                                    # Шрифты используемые в проекте
│   ├── img/                                      # Изображения используемые в проекте
│   ├── pages/                                    # Папка страниц проекта
│   ├── pug/                                      # Папка с шаблонами и миксинами используемыми в проекте
│   │   └── styles/                               # Стили
│   │       ├── layouts/                          # Папка с шаблонами проекта
│   │       └── mixins/                           # Папка с миксинами проекта
│   │           ├── mixin-advantages.pug          # Миксин
│   │           ├── mixin-buy-card.pug            # Миксин
│   │           ├── mixin-card-horizontal.pug     # Миксин
│   │           └── mixin-card-info.pug           # Миксин
│   ├── scss/                                     # Папка с миксинами и миксами проекта
├── package.json                                  # Список модулей и прочей информации
├── webpack.config.js                             # Конфигурация Webpack.js
└── README.md                                     # Документация проекта
```
